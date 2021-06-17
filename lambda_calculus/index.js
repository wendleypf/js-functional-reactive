/**
 * @author wendleypf <wendleypf@gmail.com>
 */

let r
const I = a => a
r = I(3)
console.log(r)
r = I(I)
console.log(r)

const SELF = f => f(f)
r = SELF(I)
console.log(r)

const PRI = a => _ => a
r = PRI(7)(11)
console.log(r)

const ULT = _ => b => b
r = ULT(7)(11)
console.log(r)

const FLIP = fn => a => b => fn(b)(a)

r = FLIP(ULT)(7)(11)
console.log(r)

r = FLIP(PRI)(6)(12)
console.log(r)

const ULT2 = a => b => FLIP(PRI)(a)(b)
r = ULT2(13)(20)
console.log(r)

/***
 * boolean TRUE and FALSE
 * TRUE ? <PRI> : ULT
 * FALSE ? PRI : <ULT>
 */

const T = PRI
const F = ULT

// NOT
const NOT = a => a(F)(T)
r = NOT(F)
console.log(r)
r = NOT(T)
console.log(r)


// AND
const AND = a => b => a(b)(F)
r = AND(T)(T)
console.log(r)
r = AND(F)(F)
console.log(r)

// OR
const OR = a => b => a(T)(b)
r = OR(F)(F)
console.log(r)

// EQ
const EQ = a => b => a(b)(NOT(b))
r = EQ(T)(T)
console.log(r)
r = EQ(T)(F)
console.log(r)
r = EQ(F)(T)
console.log(r)
r = EQ(F)(F)
console.log(r)

// XOR
const XOR = a => b => NOT(EQ(a)(b))
r = XOR(F)(T)
console.log(r)
