# Every Day
## Summary
Flows with this trigger will run every 24 hours. It runs are 0:00 UTC. 
!!! warning
    Cron triggers like this may be up to a minute early or a minute late.

## Inputs
There are no inputs for this trigger.
___
## Outputs
- [Current Time (Unix)](#current-time-unix)
- [Current Day of Week](#current-day-of-week)
- [Current Day Name](#current-day-name)
- [Current Day Number](#current-day-number)
- [Current Month Name](#current-month-name)
- [Current Month Number](#current-month-number)
- [Current Year](#current-year)
___
### Current Time (Unix)
The current time, expressed as a [Unix](/inventor-reference/types/number/unix/) value. E.g. `1234567890`

### Current Day of Week
The current day of the week expressed as a [number](/inventor-reference/types/number). E.g. `6`

### Current Day Name
The current day name expressed as a [string](/inventor-reference/types/string). E.g. `Friday`

### Current Day Number
The current day number expressed as a [number](/inventor-reference/types/number). E.g. `13`

### Current Month Name
The current month name expressed as a [string](/inventor-reference/types/string). E.g. `February`

### Current Month Number
The current month number expressed as a [number](/inventor-reference/types/number). E.g. `2`

### Current Year
The current year expressed as a [number](/inventor-reference/types/number). E.g. `2009`