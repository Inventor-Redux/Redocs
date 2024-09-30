---
keywords: 
    - cron
    - monthly
---
# Every Month
## Summary
Flows with this trigger will run every month.
!!! warning
    Cron triggers like this may be up to a minute early or a minute late.

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix)
- [Current Month of Year](#current-hour-of-day)
- [Debug Event ID](#debug-event-id)
- [Error ID](#error-id)
___
### Current Time (Unix)
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Month of Year
The current month of the year expressed as a [number](/inventor-reference/types/number). E.g. `23`

### Debug Event ID
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error ID
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`