---
title: Every Minute Documentation
sidebar_label: Every Minute
sidebar_position: 1
hide_title: true
keywords: [inventor.gg, redocs, documentation, cron, minutely]
description: Runs every minute.
---
# Every Minute
## Summary
Flows with this trigger will run every 60 seconds.
:::warning
    Cron triggers like this may be up to a minute early or a minute late.
:::

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix-output)
- [Current Minute of Hour](#current-minute-of-hour-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)
___
### Current Time (Unix) {#current-time-unix-output}
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Minute of Hour {#current-minute-of-hour-output}
The current minute of the hour expressed as a [number](/inventor-reference/types/number). E.g. `31`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`