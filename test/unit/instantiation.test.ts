/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-useless-constructor */
import { createDecorator, _util } from '../../src/instantiation';

describe('unit: instantiation', () => {
  test('decorator', () => {
    const decoratorA = createDecorator('decoratorA');
    expect(_util.serviceIds.get('decoratorA')).toEqual(decoratorA);
    // eslint-disable-next-line @typescript-eslint/no-extraneous-class
    class B {
      constructor(@decoratorA a: any) {}
    }

    expect(_util.getServiceDependencies(B)[0].id.toString()).toBe('decoratorA');
    expect((B as any)[_util.DI_TARGET]).toBe(B);
    expect((B as any)[_util.DI_DEPENDENCIES]).toBe(_util.getServiceDependencies(B));
  });
});
