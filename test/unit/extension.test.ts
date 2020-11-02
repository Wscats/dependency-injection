import {
  registerSingleton,
  getSingletonServiceDescriptors,
} from '../../src/extension';
import { createDecorator } from '../../src/instantiation';
import { SyncDescriptor } from '../../src/descriptors';

describe('unit: extension', () => {
  test('registerSingleton/getSingletonServiceDescriptors', () => {
    class A {
      echo() {
        return 'A';
      }
    }

    let singletons = getSingletonServiceDescriptors();
    expect(singletons.length).toBe(0);

    const serviceA = createDecorator('A');
    registerSingleton(serviceA, A);

    singletons = getSingletonServiceDescriptors();
    expect(singletons.length).toBe(1);
    const [id, descriptors] = singletons[0];
    expect(id).toBe(serviceA);
    expect(descriptors instanceof SyncDescriptor).toBeTruthy();
    expect(descriptors.ctor).toBe(A);
  });
});
