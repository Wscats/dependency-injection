/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
import { createDecorator, _util } from '../../src/instantiation';
import { InstantiationService } from '../../src/instantiationService';
import { ServiceCollection } from '../../src/serviceCollection';
import { SyncDescriptor } from '../../src/descriptors';

describe('instantiationService', () => {
  test('createInstance with static arguments and static service instance', () => {
    class A {
      echo() {
        return 'A';
      }
    }

    class B {
      echo() {
        return 'B';
      }
    }

    const serviceA = createDecorator('A');
    const serviceB = createDecorator('B');
    class C {
      private leftText: string;
      private rightText: string;
      constructor(@serviceA private a: A, @serviceB private b: B, leftText = '', rightText = '') {
        this.leftText = leftText;
        this.rightText = rightText;
      }

      echo() {
        return `${this.a.echo()}${this.b.echo()}${this.leftText}${this.rightText}`;
      }
    }

    const aInstance = new A();
    const bInstance = new B();
    const svrsCollection = new ServiceCollection();
    svrsCollection.set(serviceA, aInstance);
    svrsCollection.set(serviceB, bInstance);
    const instantiationService = new InstantiationService(svrsCollection);
    const cInstance = instantiationService.createInstance(C, 'L', 'R') as C;
    expect(cInstance instanceof C).toBeTruthy();
    const echoText = cInstance.echo();
    expect(echoText).toBe('ABLR');
  });

  test('createInstance with static arguments and dynamic service', () => {
    class A {
      echo() {
        return 'A';
      }
    }

    const serviceA = createDecorator('A');

    class B {
      constructor(@serviceA private a: A) {}
      echo() {
        return `${this.a.echo()}B`;
      }
    }

    const serviceB = createDecorator('B');

    class C {
      private leftText: string;
      private rightText: string;
      constructor(@serviceB public b: B, leftText = '', rightText = '') {
        this.leftText = leftText;
        this.rightText = rightText;
      }

      echo() {
        return `${this.b.echo()}${this.leftText}${this.rightText}`;
      }
    }

    const aInstance = new SyncDescriptor(A);
    const bInstance = new SyncDescriptor(B, [], true);
    const svrsCollection = new ServiceCollection();
    svrsCollection.set(serviceA, aInstance);
    svrsCollection.set(serviceB, bInstance);
    const instantiationService = new InstantiationService(svrsCollection);
    const cInstance = instantiationService.createInstance(C, 'L', 'R') as C;
    expect(cInstance instanceof C).toBeTruthy();
    // 验证实例b是延迟初始化的
    expect(Object.getOwnPropertyNames(cInstance.b).length).toBe(0);
    const echoText = cInstance.echo();
    expect(Object.getOwnPropertyNames(cInstance.b).length).toBe(1);
    expect(echoText).toBe('ABLR');
  });

  test('get service by invokeFunction', () => {
    class A {
      echo() {
        return 'A';
      }
    }

    const serviceA = createDecorator('A');

    class B {
      echo() {
        return 'B';
      }
    }

    const serviceB = createDecorator('B');


    const aInstance = new A();
    const bInstance = new B();
    const svrsCollection = new ServiceCollection();
    svrsCollection.set(serviceA, aInstance);
    svrsCollection.set(serviceB, bInstance);
    const instantiationService = new InstantiationService(svrsCollection);

    instantiationService.invokeFunction((accessor) => {
      expect(accessor.get(serviceA)).toBe(aInstance);
      expect(accessor.get(serviceB)).toBe(bInstance);
    });
  });
});
