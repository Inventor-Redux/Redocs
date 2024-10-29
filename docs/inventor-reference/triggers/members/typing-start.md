---
title: Typing Start Documentation
sidebar_label: Typing Start
sidebar_position: 6
hide_title: true
keywords: [inventor.gg, redocs, documentation, typing start]
description: Triggers when a user starts typing in a channel.
finished: true
---
# Typing Start
Triggers when a user starts typing in a channel.

## Inputs
There are no inputs for this trigger.


## Outputs

- [User ID](#user-id-output)
- [Channel ID](#channel-id-output)
- [Server ID](#server-id-output)
- [Timestamp (Unix)](#timestamp-unix-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### User ID {#user-id-output}
The ID of the user who started typing, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Channel ID {#channel-id-output}
The ID of the channel the user started typing in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Server ID {#server-id-output}
The ID of the server the user started typing in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Timestamp (Unix) {#timestamp-unix-output}
The time the user started typing at, expressed as a [Unix](/inventor-reference/types/number/unix) value. E.g. `1234567890`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`