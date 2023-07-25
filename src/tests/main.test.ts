/* eslint-disable @typescript-eslint/no-var-requires,@typescript-eslint/ban-ts-comment */
import { describe, it, expect } from 'vitest';
import { isseven as isseven_prop } from '@/main.js';
import isseven from '@/main.js';

describe('imports to work', () => {
    it('should work as an ESM import', () => {
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as an ESM named import', () => {
        expect(isseven_prop).toBeTypeOf('function');
    });

    it('should work as a CJS default import', () => {
        const isseven = require('../../dist/main.js').default;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as a CJS property import', () => {
        const isseven = require('../../dist/main.js').isseven;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as a CJS destructuring import', () => {
        const { isseven } = require('../../dist/main.js');
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as a CJS iterator destructure import', () => {
        const [isseven] = require('../../dist/main.js').isseven;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as a CJS async iterator import', async () => {
        for await (const isseven of require('../../dist/main.js').isseven) {
            expect(isseven).toBeTypeOf('function');
        }
    });

    it('should work as an ESM import() default import', async () => {
        const isseven = (await import('../../dist/main.js')).default;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as an ESM import() property import', async () => {
        const isseven = (await import('../../dist/main.js')).isseven;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as an ESM import() destructuring import', async () => {
        const { isseven } = await import('../../dist/main.js');
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as an ESM import() iterator destructure import', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const [isseven] = (await import('../../dist/main.js')).isseven;
        expect(isseven).toBeTypeOf('function');
    });

    it('should work as an ESM import() async iterator import', async () => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        for await (const isseven of (await import('../../dist/main.js')).isseven) {
            expect(isseven).toBeTypeOf('function');
        }
    });

    // extra test for coverage, no clue why v8 doesn't cover this
    it('should let both iterators run exactly once', async () => {
        for await (const item of isseven) {
            expect(item).toBeTypeOf('function');
        }
        for (const item of isseven) {
            expect(item).toBeTypeOf('function');
        }
    });
});

describe('isseven to behave properly', () => {
    it('should work with positive integers', () => {
        expect(isseven(1)).toBe(false);
        expect(isseven(7)).toBe(true);
    });

    it('should work with positive floats', () => {
        expect(isseven(1.0)).toBe(false);
        expect(isseven(7.0)).toBe(true);
        expect(isseven(3.141592653589793)).toBe(false);
    });

    it('should work with positive infinity', () => {
        expect(isseven(Infinity)).toBe(false);
    });

    it('should work with negative integers', () => {
        expect(isseven(-1)).toBe(false);
        expect(isseven(-7)).toBe(false);
    });

    it('should work with negative floats', () => {
        expect(isseven(-1.0)).toBe(false);
        expect(isseven(-7.0)).toBe(false);
        expect(isseven(-3.141592653589793)).toBe(false);
    });

    it('should work with negative infinity', () => {
        expect(isseven(-Infinity)).toBe(false);
    });

    it('should work with NaN', () => {
        expect(isseven(NaN)).toBe(false);
    });

    it('should work with 0', () => {
        expect(isseven(0)).toBe(false);
    });

    it('should work with negative 0', () => {
        expect(isseven(-0)).toBe(false);
    });

    it('should work with 0 as a float', () => {
        expect(isseven(0.0)).toBe(false);
    });

    it('should work with negative 0 as a float', () => {
        expect(isseven(-0.0)).toBe(false);
    });

    it('should work with positive integers as a string', () => {
        expect(isseven('1')).toBe(false);
        expect(isseven('7')).toBe(true);
    });

    it('should work with positive floats as a string', () => {
        expect(isseven('1.0')).toBe(false);
        expect(isseven('7.0')).toBe(true);
        expect(isseven('3.141592653589793')).toBe(false);
    });

    it('should work with positive infinity as a string', () => {
        expect(isseven('Infinity')).toBe(false);
    });

    it('should work with negative integers as a string', () => {
        expect(isseven('-1')).toBe(false);
        expect(isseven('-7')).toBe(false);
    });

    it('should work with negative floats as a string', () => {
        expect(isseven('-1.0')).toBe(false);
        expect(isseven('-7.0')).toBe(false);
        expect(isseven('-3.141592653589793')).toBe(false);
    });

    it('should work with negative infinity as a string', () => {
        expect(isseven('-Infinity')).toBe(false);
    });

    it('should work with NaN as a string', () => {
        expect(isseven('NaN')).toBe(false);
    });

    it('should work with 0 as a string', () => {
        expect(isseven('0')).toBe(false);
    });

    it('should work with negative 0 as a string', () => {
        expect(isseven('-0')).toBe(false);
    });

    it('should work with 0 as a float as a string', () => {
        expect(isseven('0.0')).toBe(false);
    });

    it('should work with negative 0 as a float as a string', () => {
        expect(isseven('-0.0')).toBe(false);
    });

    it('should work with positive integers as a BigInt', () => {
        expect(isseven(1n)).toBe(false);
        expect(isseven(7n)).toBe(true);
    });

    it('should work with positive infinity as a BigInt', () => {
        expect(isseven(Infinity)).toBe(false);
    });

    it('should work with negative integers as a BigInt', () => {
        expect(isseven(-1n)).toBe(false);
        expect(isseven(-7n)).toBe(false);
    });

    it('should work with negative infinity as a BigInt', () => {
        expect(isseven(-Infinity)).toBe(false);
    });

    it('should work with 0 as a BigInt', () => {
        expect(isseven(0n)).toBe(false);
    });

    it('should work with negative 0 as a BigInt', () => {
        expect(isseven(-0n)).toBe(false);
    });

    it('should work with null', () => {
        expect(isseven(null)).toBe(false);
    });

    it('should work with undefined', () => {
        expect(isseven(undefined)).toBe(false);
    });
});

describe('throwing on invalid input', () => {
    it('should not throw', () => {
        expect(() => isseven(7)).not.toThrow();
        expect(() => isseven(1)).not.toThrow();
    });
});

describe('casting types', () => {
    it('should work with strings', () => {
        expect(isseven('7')).toBe(true);
        expect(isseven('7.0')).toBe(true);
        expect(isseven('1')).toBe(false);
    });

    it('should work with arrays', () => {
        // @ts-ignore
        expect(isseven([7])).toBe(true);
        // @ts-ignore
        expect(isseven([1])).toBe(false);
    });

    it('should work with objects', () => {
        // @ts-ignore
        expect(
            isseven({
                valueOf() {
                    return 7;
                }
            })
        ).toBe(true);
        // @ts-ignore
        expect(
            isseven({
                valueOf() {
                    return 1;
                }
            })
        ).toBe(false);
    });

    it('should work with booleans', () => {
        // @ts-ignore
        expect(isseven(true)).toBe(false);
        // @ts-ignore
        expect(isseven(false)).toBe(false);
    });

    it('should work with booleans as strings', () => {
        expect(isseven('true')).toBe(false);
        expect(isseven('false')).toBe(false);
    });

    it('should work with functions', () => {
        function fn7() {}
        fn7.valueOf = () => 7;
        function fn1() {}
        fn1.valueOf = () => 1;
        // @ts-ignore
        expect(isseven(fn7)).toBe(true);
        // @ts-ignore
        expect(isseven(fn1)).toBe(false);
    });
});

describe('side effects', () => {
    it('should do nothing when called', () => {
        // @ts-ignore
        isseven(7);
        // @ts-ignore
        expect().toBe();
    });
    it('should do nothing when not called', () => {
        // @ts-ignore
        expect().toBe();
    });
});
