---
slug: javascript-type-coercion
title: Understanding Type Coercion in JavaScript
authors: rich
tags: [javascript]
---

# Type Coercion

JavaScript lets you mix and match types quite happily. And for most cases the result might be exactly what you expect:

```javascript
> 'Total : ' + 100
'Total : 100'
> '12' * 3
36
```

However you might not get what you naturally expect, especially in more complicated expressions:

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

:::info Info
Remember `==` here is the equality operator which attempts to convert and compare operands, whereas `===` strict equality does not do any conversions.
:::

## How and why Type Coercion occurs

This automatic conversion of types from one type to another is the result of Type Coercion. And it happens when you use operator on some operand(s) of a different type. In JavaScript there are two main type groups, primitive types and Objects.

### Primitive Types

The primitive types are quite straightforward:

* string
* number
* bigint
* boolean
* symbol
* null
* undefined

And when using operators such as `+`, you might have to lookup the [spec](https://es5.github.io/#x11.6.1) and see that if either argument is a string, the other argument will also be converted to a string and then concatenated, otherwise numerical addition is performed. So String concatenation takes precedence, and for the subtraction operator `-`, subtracting strings isn't well defined so each operand is converted to a number.

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

So then the question is, if the addition operator is well defined for `string` and `number` primitives, what happens when you pass in Object types such as `[]` and `{}`?

An Object may have more than one primitive representation, consider the Date Object as an example:

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

Such that when an object needs to be converted to a string, JavaScript converts the object to a primitive value and then converts that primitive to a String if necessary. And the Object to number conversion works similarly, the Object gets converted to a primitive and then a number if necessary.

Now the `+` operator works for both `string` and `number` types, and the no-preference rule will be used. `==` also uses the no-preference algorithm.

Now Objects will have both `valueOf` and `toString` methods. If the prefer-string algorithm is needed, `toString` will be called, or if it doesn't exist or returns an Object, `valueOf` will be called and if that is a primitive will use that value otherwise you'll encounter a TypeError.

The prefer-number algorithm will work in a similar way, but will prefer `valueOf` over `toString`.

And the no-preference algorithm for built in JavaScript types will use `valueOf` over `toString` apart from the `Date` class.

So what will happen if you do `now + 1` which is a `Date + number`? The no-preference rule will be used and in this case, the Date will be converted to a string and concatenated with 1.

```javascript
> now + 1
'Sun Oct 03 2021 15:57:16 GMT+0100 (British Summer Time)1'
```

And if you do `now - 1`, the prefer-number algorithm will be used, converted the Date to a number and subtracting 1 from that:

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

And the reason why this is false, is because when using `==`, if either value is `true` it is converted to `1` and the comparison is made again:

```javascript
> [0] == true
false
> [1] == true
true
> [2] == true
false
```

:::tip Tip
It can be useful to checkout the documentation for the [abstract equality algoirthm](https://es5.github.io/#x11.9.3). For example is shows that `NaN == NaN` equals `false`.
:::

### Summary

In summary, hopefully this clarifies some of the mysteries behind JavaScript type coercion and highlights the importance of checking the ECMAScript specification. And when you do begin to understand type coercion, some of JavaScript's little mysteries start to make sense.

## Bonus Question

If I use `console.log` on a `Date`, in `Node` I get neither it's `toString` nor it's `valueOf` result but instead something else:

```javascript
> now
2021-10-03T14:57:16.802Z
> now.toString()
'Sun Oct 03 2021 15:57:16 GMT+0100 (British Summer Time)'
> now.valueOf()
1633273036802
```

So what is going on here? Now if we have a look at the [node documentation](https://nodejs.org/api/console.html#console_console_log_data_args), we see that any argument is passed into [util.format](https://nodejs.org/api/util.html#util_util_format_format_args), and since no format specifier is given, non strings are formatted using [util.inspect](https://nodejs.org/api/util.html#util_util_inspect_object_options) which returns a string
representation of an object that is intended for debugging. And now since you can browse the node source on Github, we can see what exactly `util.inspect` is doing [here](https://github.com/nodejs/node/blob/master/lib/internal/util/inspect.js). And if you trace it through some more you see the call to `function formatRaw(ctx, value, recurseTimes, typedArray)`.

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

So we can see that the Date get's formatted by it's `toISOString` call and we can check that by calling `now.toISOString()`:

```javascript
> console.log(now)
2021-10-03T14:57:16.802Z
undefined
> now.toISOString()
'2021-10-03T14:57:16.802Z'
```
