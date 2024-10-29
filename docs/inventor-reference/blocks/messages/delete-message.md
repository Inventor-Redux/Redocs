---
title: Delete Message Documentation
sidebar_label: Delete Message
sidebar_position: 10
hide_title: true
keywords: [inventor.gg, redocs, documentation, delete message, messages]
description: Deletes a Discord message.
finished: true
---
# Delete Message
Deletes a Discord message.

## Inputs
- [Message ID](#message-id-input)
- [Channel ID](#channel-id-input)

### Message ID {#message-id-input}
The ID of the message to delete, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1289318931282264105`
### Channel ID {#channel-id-input}
The ID of the channel that the message is in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`

## Outputs
- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`