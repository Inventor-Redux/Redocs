---
title: Every 15 Minutes Documentation
sidebar_label: Every 15 Minutes
sidebar_position: 2
hide_title: true
keywords: [inventor.gg, redocs, documentation, cron]
description: Runs every 15 minutes.
---
# Every 15 Minutes
## Summary
Flows with this trigger will run every 15 minutes.

:::warning
    Cron triggers like this may be up to a minute early or a minute late.
:::

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix-output)
- [Current Minute of Hour](#current-minute-of-hour-output)
- [Current Hour of Day](#current-hour-of-day-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)
___
### Current Time (Unix) {#current-time-unix-output}
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Minute of Hour {#current-minute-of-hour-output}
The current minute of the hour expressed as a [number](/inventor-reference/types/number). E.g. `31`

### Current Hour of Day {#current-hour-of-day-output}
The current hour of the day expressed as a [number](/inventor-reference/types/number). This uses the 24 hour format and uses the UTC timezone. E.g. `23`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`