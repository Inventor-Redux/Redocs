---
title: Loop Documentation
sidebar_label: Loop
sidebar_position: 7
hide_title: true
keywords: [inventor.gg, redocs, documentation, loop, repeat, iterator]
description: Run the same blocks a specified number of times.
---
# Loop
Run the same blocks a specified number of times.

## Inputs

- [Number of Loops](#number-of-loops-input)

### Number of Loops {#number-of-loops-input}
The total number of loops to be performed, inputted as a [number](/inventor-reference/types/number). E.g. `8`

## Outputs
- [Iteration Number](#iteration-number-output)
- [Total Iterations](#total-iterations-output)
- [Error](#error-output)

### Iteration Number {#iteration-number-output}
The current iteration. This increases by 1 every time the code is run. Expressed as a [number](/inventor-reference/types/number). E.g. `0` or `3`
:::note
This variable is zero-start, which means the first instance of the loop will have a `Interation Number`  of 0. Then 1, then 2, and so on.
:::
### Total Iterations {#total-iterations-output}
The total number of iterations that will be performed, which is the same as the [Number of Loops](#number-of-loops-input) input. Expressed as a [number](/inventor-reference/types/number). E.g. `8`
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`