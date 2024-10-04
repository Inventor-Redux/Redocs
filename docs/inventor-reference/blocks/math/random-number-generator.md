---
title: Random Number Generator Documentation
sidebar_label: Random Number Generator
sidebar_position: 11
hide_title: true
keywords: [inventor.gg, redocs, documentation, number, random, random number generator, math]
description: Generate a random number between two defined values.
---
# Random Number Generator
Generate a random number between two defined values.
:::warning
It is currently not possible to input or output a [float](/inventor-reference/types/float), doing so will cause an error.
:::

## Inputs

- [Minimum](#minimum-input)
- [Maximum](#maximum-input)

### Minimum {#minimum-input}
The minimum value the number can be, inputted as a [number](/inventor-reference/types/number). E.g. `1`
### Maximum {#maximum-input}
The maximum value the number can be, inputted as a [number](/inventor-reference/types/number). E.g. `40`
:::note
Minimum and maximum values are inclusive. This means that if the minimum is `1` and the maximum is `3`, it is possible for the random number to be `1`, `2`, or `3`.
:::

## Outputs

- [Random](#random-output)
- [Error](#error-output)

### Random {#random-output}
The randomly generated value, expressed as a [number](/inventor-reference/types/number). E.g. `35`
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`