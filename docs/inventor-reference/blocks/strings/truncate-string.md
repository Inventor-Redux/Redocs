---
title: Truncate String Documentation
sidebar_label: Truncate String
sidebar_position: 13
hide_title: true
keywords: [inventor.gg, redocs, documentation, strings, truncated, truncate string, split string]
description: Truncates a string to a specified length. This is helpful for setting maximum character counts or for ensuring a message isn't too long to send.
---
# Truncate String
Truncates a string to a specified length. This is helpful for setting maximum character counts or for ensuring a message isn't too long to send.

## Inputs

- [String](#string-input)
- [Length](#length-input)

### String {#string-input}
The string to truncate, inputted as a [string](/inventor-reference/types/string). E.g. `Hello world!`.
### Length {#length-input}
The max length of the output string, inputted as a [number](/inventor-reference/types/number). E.g. `5`

## Outputs
- [String](#string-output)
- [Error](#error-output)

### String {#string-output}
The truncated text, expressed as a [string](/inventor-reference/types/string). E.g. `Hello`
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`