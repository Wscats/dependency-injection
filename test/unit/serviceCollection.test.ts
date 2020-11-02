/* eslint-disable @typescript-eslint/no-extraneous-class */
import { ServiceCollection } from '../../src/serviceCollection';
import { createDecorator } from '../../src/instantiation';
import { SyncDescriptor } from '../../src/descriptors';

describe('unit: serviceCollection', () => {
  test('ServiceCollection', () => {
    class A {}

    class B {}

    const serviceA = createDecorator('A');
    const serviceB = createDecorator('B');
    const serviceC = createDecorator('C');
    const syncDescriptorA = new SyncDescriptor(A);
    const bInstance = new B();

    const serviceCollection = new ServiceCollection();
    serviceCollection.set(serviceA, syncDescriptorA);
    serviceCollection.set(serviceB, bInstance);

    expect(serviceCollection.get(serviceA)).toEqual(syncDescriptorA);
    expect(serviceCollection.get(serviceB)).toEqual(bInstance);
    expect(serviceCollection.has(serviceA)).toBeTruthy();
    expect(serviceCollection.has(serviceB)).toBeTruthy();
    expect(serviceCollection.has(serviceC)).toBeFalsy();
    serviceCollection.forEach((id, instanceOrDescriptor) => {
      if (id === serviceA) {
        expect(instanceOrDescriptor).toEqual(syncDescriptorA);
      }
    });
  });
});
