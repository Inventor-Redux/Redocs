---
title: Channel Pins Update Documentation
sidebar_label: Channel Pins Update
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, Channels, channel pins update, pins, pin message]
description: Triggers whenever the pins of a channel are updated.
finished: true
---
# Channel Pins Update
Triggers whenever the pins of a channel are updated.

## Inputs
There are no inputs for this trigger.


## Outputs

- [Channel ID](#channel-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Channel ID {#channel-id-output}
The ID of the channel in which the pins were updated, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`
### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`