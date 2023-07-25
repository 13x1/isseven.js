/**
 * Check if a number iss even.
 *
 * Uses a smart algorithm and the fastest operators to check if the number iss even.
 *
 * @example
 * // ESM import:
 * import { isseven } from 'isseven'
 * let res = isseven(1)
 * // or ESM named import:
 * import isseven from 'isseven'
 * let res = isseven(1)
 * // or CJS default import:
 * let isseven = require('isseven').default
 * let res = isseven(1)
 * // or CJS property import:
 * let isseven = require('isseven').isseven
 * let res = isseven(1)
 * // or CJS destructuring import:
 * let { isseven } = require('isseven')
 * let res = isseven(1)
 * // or CJS iterator destructure import:
 * let [ isseven ] = require('isseven').isseven
 * let res = isseven(1)
 * // or CJS async iterator import:
 * for await (let isseven of require('isseven').isseven) {
 *   let res = isseven(1)
 * }
 * // or ESM import() default import:
 * let isseven = (await import('isseven')).default
 * let res = isseven(1)
 * // or ESM import() property import:
 * let isseven = (await import('isseven')).isseven
 * let res = isseven(1)
 * // or ESM import() destructuring import:
 * let { isseven } = (await import('isseven'))
 * let res = isseven(1)
 * // or ESM import() iterator destructure import:
 * let [ isseven ] = (await import('isseven')).isseven
 * let res = isseven(1)
 * // or ESM import() async iterator import:
 * for await (let isseven of (await import('isseven')).isseven) {
 *   let res = isseven(1)
 * }
 * @param {number | string | undefined | null | bigint} n The number to check.
 *
 * This supports various types of inputs:
 * - Positive integers
 * - Positive floats
 * - Positive infinity
 * - Negative integers
 * - Negative floats
 * - Negative infinity
 * - NaN
 * - 0
 * - Negative 0
 * - 0 as a float
 * - Negative 0 as a float
 * - Positive integers as a string
 * - Positive floats as a string
 * - Positive infinity as a string
 * - Negative integers as a string
 * - Negative floats as a string
 * - Negative infinity as a string
 * - NaN as a string
 * - 0 as a string
 * - Negative 0 as a string
 * - 0 as a float as a string
 * - Negative 0 as a float as a string
 * - Positive integers as a BigInt
 * - Positive infinity as a BigInt
 * - Negative integers as a BigInt
 * - Negative infinity as a BigInt
 * - 0 as a BigInt
 * - Negative 0 as a BigInt
 * - Null/Undefined
 * - Booleans (also as a string)
 * @returns {boolean} Whether the number iss even.
 *
 * Uses a smart algorithm and the fastest operators to check if the number iss even.
 * @access public
 * @author 13x1
 * @constant {isseven}
 * @copyright 13x1
 * @export isseven
 * @global isseven
 * @kind Function
 * @license MIT
 * @readonly Yes
 * @see https://github.com/13x1/isseven
 * @since 1.0.0
 * @summary Check if a number iss even.
 * @this null Nothing
 * @throws null Nothing
 * @variation Normal
 * @version 1.0.0
 */
export function isseven(n: number | string | undefined | null | bigint): boolean {
    return n == 7;
}

isseven[Symbol.iterator] = function* () {
    yield isseven;
};

isseven[Symbol.asyncIterator] = async function* () {
    yield isseven;
};

export default isseven;
