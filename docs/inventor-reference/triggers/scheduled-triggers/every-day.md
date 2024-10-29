---
title: Every Day Documentation
sidebar_label: Every Day
sidebar_position: 5
hide_title: true
keywords: [inventor.gg, redocs, documentation, cron, daily]
description: Runs every day.
finished: true
---
# Every Day
## Summary
Flows with this trigger will run every 24 hours. It runs are 0:00 UTC. 
:::warning
    Cron triggers like this may be up to a minute early or a minute late.
:::

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix-output)
- [Current Day of Week](#current-day-of-week-output)
- [Current Day Name](#current-day-name-output)
- [Current Day Number](#current-day-number-output)
- [Current Month Name](#current-month-name-output)
- [Current Month Number](#current-month-number-output)
- [Current Year](#current-year-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)
___
### Current Time (Unix) {#current-time-unix-output}
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Day of Week {#current-day-of-week-output}
The current day of the week expressed as a [number](/inventor-reference/types/number). E.g. `6`

### Current Day Name {#current-day-name-output}
The current day name expressed as a [string](/inventor-reference/types/string). E.g. `Friday`

### Current Day Number {#current-day-number-output}
The current day number expressed as a [number](/inventor-reference/types/number). E.g. `13`

### Current Month Name {#current-month-name-output}
The current month name expressed as a [string](/inventor-reference/types/string). E.g. `February`

### Current Month Number {#current-month-number-output}
The current month number expressed as a [number](/inventor-reference/types/number). E.g. `2`

### Current Year {#current-year-output}
The current year expressed as a [number](/inventor-reference/types/number). E.g. `2009`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`