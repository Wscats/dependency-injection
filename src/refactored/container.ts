/**
 * Dependency Injection Container - TypeScript refactored version
 * Based on wscats-projects-refactor-spec.md
 */

type Constructor<T = unknown> = new (...args: unknown[]) => T;
type Token<T = unknown> = Constructor<T> | string | symbol;
type Scope = 'singleton' | 'transient' | 'request';

export interface ProviderConfig<T> {
  token: Token<T>;
  useClass?: Constructor<T>;
  useValue?: T;
  useFactory?: (...deps: unknown[]) => T;
  deps?: Token[];
  scope?: Scope;
}

export class Container {
  private providers = new Map<Token, ProviderConfig<unknown>>();
  private singletons = new Map<Token, unknown>();
  private resolving = new Set<Token>();

  register<T>(config: ProviderConfig<T>): this {
    this.providers.set(config.token, config as ProviderConfig<unknown>);
    return this;
  }

  resolve<T>(token: Token<T>): T {
    if (this.resolving.has(token)) {
      throw new Error(`Circular dependency detected for: ${String(token)}`);
    }

    const provider = this.providers.get(token);
    if (!provider) {
      throw new Error(`No provider for: ${String(token)}`);
    }

    const scope = provider.scope || 'singleton';
    if (scope === 'singleton' && this.singletons.has(token)) {
      return this.singletons.get(token) as T;
    }

    this.resolving.add(token);
    try {
      const instance = this.createInstance<T>(provider as ProviderConfig<T>);
      if (scope === 'singleton') {
        this.singletons.set(token, instance);
      }
      return instance;
    } finally {
      this.resolving.delete(token);
    }
  }

  private createInstance<T>(provider: ProviderConfig<T>): T {
    if (provider.useValue !== undefined) return provider.useValue;
    if (provider.useFactory) {
      const deps = (provider.deps || []).map(dep => this.resolve(dep));
      return provider.useFactory(...deps);
    }
    if (provider.useClass) {
      const deps = (provider.deps || []).map(dep => this.resolve(dep));
      return new provider.useClass(...deps);
    }
    throw new Error('Invalid provider configuration');
  }

  createChild(): Container {
    const child = new Container();
    child.providers = new Map(this.providers);
    child.singletons = new Map(this.singletons);
    return child;
  }

  has(token: Token): boolean {
    return this.providers.has(token);
  }

  clear(): void {
    this.singletons.clear();
  }
}
