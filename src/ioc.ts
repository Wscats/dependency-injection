import { Container, injectable, ContainerModule } from "inversify";
export interface IProvider<T> {
  getName(): T;
}

@injectable()
export class NameProvider implements IProvider<string> {
  getName() {
    return "World";
  }
}

const container = new Container();
container.bind<IProvider<string>>("nameProvider").to(NameProvider);

export interface Warrior {
  fight(): string;
  sneak(): string;
}

export interface Weapon {
  hit(): string;
}

export interface ThrowableWeapon {
  throw(): string;
}

export interface IconTheme<T> {
  canHandle(): number;
  getIcon(): string;
}

@injectable()
export class NoneIconTheme implements IconTheme<string> {
  readonly id = "none";
  readonly label = "None";
  readonly description = "Disable file icons";
  readonly hasFileIcons = true;
  readonly hasFolderIcons = true;

  canHandle(): number {
    return Number.MAX_SAFE_INTEGER;
  }

  getIcon(): string {
    return "";
  }
}

const frontendApplicationModule = new ContainerModule(
  (bind, unbind, isBound, rebind) => {
    bind(NoneIconTheme).toSelf().inSingletonScope();
  }
);

container.load(frontendApplicationModule);

export { container, frontendApplicationModule };
