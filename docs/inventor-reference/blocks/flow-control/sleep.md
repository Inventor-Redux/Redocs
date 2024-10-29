---
title: Sleep Documentation
sidebar_label: Sleep
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, sleep, wait, pause, delay]
description: Makes Inventor pause for a specified amount of time.
finished: true
---
# Sleep
Makes Inventor pause for a specified amount of time.

## Inputs
- [Duration (Seconds)](#duration-seconds-input)

### Duration (Seconds) {#duration-seconds-input}
The duration of the pause, inputted in seconds as a [number](/inventor-reference/types/number). E.g. `35`
:::note
 You cannot sleep for more than 10 seconds at a time. Make sure to stay within your flow execution limit, which depends on what Inventor plan you are subscribed to. Current limits: Basic (Free) - 10 seconds, Premium - 30 seconds, Ultimate - 45 seconds
:::

## Outputs
- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`