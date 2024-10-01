---
title: Every Week Documentation
sidebar_label: Every Week
sidebar_position: 6
hide_title: true
keywords: [inventor.gg, redocs, documentation, cron, weekly]
description: Runs every week.
---
# Every Week
## Summary
Flows with this trigger will run every week.
:::warning
    Cron triggers like this may be up to a minute early or a minute late.
:::

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix-output)
- [Current Week of Year](#current-week-of-year-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)
___
### Current Time (Unix) {#current-time-unix-output}
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Week of Year {#current-week-of-year-output}
The current week of the year expressed as a [number](/inventor-reference/types/number). E.g. `7`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`