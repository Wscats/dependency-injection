/**
 * Copyright © 1998 - 2021 Tencent. All Rights Reserved.
 * @author enoyao
 */

import { createDecorator, _util } from './instantiation';
import { InstantiationService } from './instantiationService';
import { ServiceCollection } from './serviceCollection';
import { SyncDescriptor } from './descriptors';

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

class C {
    echo() {
        return 'C';
    }
}

// 装饰器
const serviceA = createDecorator('A');
const serviceB = createDecorator('B');
const serviceC = createDecorator('C');

class D {
    private leftText: string;
    private rightText: string;
    constructor(@serviceA private a: A, @serviceB private b: B, @serviceC private c: C, leftText = '', rightText = '') {
        this.leftText = leftText;
        this.rightText = rightText;
    }

    echo() {
        return `${this.a.echo()}${this.b.echo()}${this.c.echo()}${this.leftText}${this.rightText}`;
    }
}

const aInstance = new A();
const bInstance = new B();
const svrsCollection = new ServiceCollection();
svrsCollection.set(serviceA, aInstance);
svrsCollection.set(serviceB, bInstance);
svrsCollection.set(serviceC, new SyncDescriptor(C));

const instantiationService = new InstantiationService(svrsCollection);
const dInstance = instantiationService.createInstance(D, 'L', 'R') as D;
console.log(instantiationService);
console.log(dInstance);
const echoText = dInstance.echo();
console.log(echoText);

instantiationService.invokeFunction((accessor) => {
    console.log(accessor);
    const bInstance2 = accessor.get(serviceA);
});