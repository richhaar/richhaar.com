---
slug: javascript-type-coercion
title: Understanding Type Coercion in JavaScript
authors: rich
tags: [JavaScript]
---

# Type Coercion

JavaScript lets you mix and match types quite happily, and in most cases the result might be exactly what you expect:

```javascript
> 'Total : ' + 100
'Total : 100'
> '12' * 3
36
```

However you might not get what you expect:

```javascript
> '15' + 1
'151'
> '15' - 1
14
```

```javascript
> if([]) {
... console.log('hello')
... }
hello
undefined
> [] == true
false
```

<!--truncate-->

:::info Info
Remember `==` here is the equality operator which attempts to convert and compare operands, whereas `===` is strict equality and does not do any conversions.
:::

## How and why Type Coercion occurs

This automatic conversion of types from one type to another is the result of Type Coercion. And it happens when you use operator on some operand(s) which expect a different type than the one(s) you've given. In JavaScript there are two main groups of types: primitive types and Objects.

### Primitive Types

The primitive types are quite straightforward:

* string
* number
* bigint
* boolean
* symbol
* null
* undefined

If we look at the addition operator `+` [spec](https://es5.github.io/#x11.6.1), you can see that if either argument is a string, the other argument will also be converted to a string and then concatenated, otherwise numerical addition is performed. So String concatenation takes precedence, and for the subtraction operator `-`, subtracting strings isn't well defined so each operand is converted to a number.

```javascript
> undefined + 0
NaN
> null + 0
0
> true + 0
1
> false + 0
0
> '' + 0
'0'
```

:::info Info
You can explicitly convert types to test the conversion between primitive types, e.g. `Number(true)` is `1`.
:::

### Object types

So then the question is, if the addition operator is well defined for `string` and `number` primitives, what happens when you pass in Object types such as `[]` and `{}`? Well the operator works on primitive types, so the Object has to be converted to a primitive. And an Object may have more than one primitive representation, consider the Date Object as an example:

```javascript
> const now = new Date();
undefined
> now.toString()
'Sun Oct 03 2021 15:57:16 GMT+0100 (British Summer Time)'
> now.valueOf()
1633273036802
```

There are three fundamental algorithms for converting objects to primitive values:

* prefer-string (Return a primitive, string if possible)
* prefer-number (Return a primitive, number if possible)
* no-preference (JavaScript built-in types all implement this as prefer-number except Date which uses prefer-string).

Objects will have both `valueOf` and `toString` methods. If the prefer-string algorithm is needed, `toString` will be called. If the result is a primitive which is a non-string, it will be converted to a string. Now if `toString` doesn't exist or if `toString` returns an object then `valueOf` will be called instead. And if that returns an object you'll encounter a TypeError otherwise the primitive returned is converted to a string.

The prefer-number algorithm will work in a similar way, but will try `valueOf` over `toString` to begin wtih.

And the no-preference algorithm for built in JavaScript types will use `valueOf` over `toString` apart from the `Date` class.

Now the addition `+` operator works for both `string` and `number` types, and the no-preference rule will be used. `==` also uses the no-preference algorithm.

So what will happen if you do `now + 1` which is a `Date + number`? The no-preference rule will be used and in this case, the Date will be converted to a string and concatenated with 1.

```javascript
> now + 1
'Sun Oct 03 2021 15:57:16 GMT+0100 (British Summer Time)1'
```

And if you do `now - 1`, the prefer-number algorithm will be used, converting the Date to a number and subtracting 1 from that:

```javascript
> now - 1
1633273036801
```

And now if I gave you the following information:

```javascript
> [1,2,3]
[ 1, 2, 3 ]
> [1,2,3].valueOf()
[ 1, 2, 3 ]
> [1,2,3].toString()
'1,2,3'
```

Could you guess what `[1,2,3] + 1` would give? If you guessed `'1,2,31'` you'd have been correct, seeing as `[1,2,3]` is not a primitive, `'1,2,3'` would be the primitive for `[1,2,3]` and adding that to 1 would be string concatenation.

```javascript
> {}.valueOf()
{}
> {}.toString()
'[object Object]'
> [].valueOf()
[]
> [].toString()
''
```

And what if we add `0` to `{}` and `[]`? We get string concatenation.

```javascript
> {} + 0
'[object Object]0'
> [] + 0
'0'
```

Again the `+` operator is using the no-preference rule, but if we use the prefer-number rule such as with subtraction, you might see how an empty array equals zero, and an empty object is `NaN`:

```javascript
> 5 - []
5
> Number('')
0
> 5 - {}
NaN
> Number('[object Object]')
NaN
```

So far we have dealt with numbers and strings, how does Object to priitive conversion work for other primitive types?

### Object-To-Boolean

All Objects convert to `true` e.g. `!!{}` equals `true`. However the rules for the `==` equality with type conversions can be tricky, for example:

```javascript
> [] == true
false
```

And the reason why this is false, is because when using `==`, if either value is the primitive `true` it is converted to `1` and the comparison is made again:

```javascript
> [0] == true
false
> [1] == true
true
> [2] == true
false
```

:::tip Tip
It can be useful to checkout the documentation for the [abstract equality algorithm](https://es5.github.io/#x11.9.3). For example is shows that `NaN == NaN` equals `false`.
:::

### Summary

In summary, hopefully this clarifies some of the mysteries behind JavaScript type coercion and highlights the importance of checking the ECMAScript specification. And when you do begin to understand type coercion, some of JavaScript's little mysteries start to make sense.

For an additional resource see:

* JavaScript the Definitive Guide - David Flanagan

## Bonus Question

If I use `console.log` on a `Date`, in `Node` I get neither it's `toString` nor it's `valueOf` result but instead something else. So what is going on here?

```javascript
> console.log(now)
2021-10-03T14:57:16.802Z
undefined
> now.toString()
'Sun Oct 03 2021 15:57:16 GMT+0100 (British Summer Time)'
> now.valueOf()
1633273036802
```

Now if we have a look at the [node documentation](https://nodejs.org/api/console.html#console_console_log_data_args), we see that any argument to `console.log` is passed into [util.format](https://nodejs.org/api/util.html#util_util_format_format_args), and since no format specifier is given, non strings are formatted using [util.inspect](https://nodejs.org/api/util.html#util_util_inspect_object_options). And `util.inspect` returns a string
representation of an object that is intended for debugging. And now since you can browse the Node source on Github, we can see what exactly `util.inspect` is doing [here](https://github.com/nodejs/node/blob/master/lib/internal/util/inspect.js). And if you trace it through some more you see the call to `function formatRaw(ctx, value, recurseTimes, typedArray)`.

And in that function you have:

```javascript
//...
    } else if (isDate(value)) {
      // Make dates with properties first say the date
      base = NumberIsNaN(DatePrototypeGetTime(value)) ?
        DatePrototypeToString(value) :
        DatePrototypeToISOString(value);
//...
```

So we can see that the `Date` get's formatted by it's `toISOString` method and we can check that by calling `now.toISOString()`:

```javascript
> console.log(now)
2021-10-03T14:57:16.802Z
undefined
> now.toISOString()
'2021-10-03T14:57:16.802Z'
```
