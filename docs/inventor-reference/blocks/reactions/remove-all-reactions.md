---
title: Remove All Reactions Documentation
sidebar_label: Remove All Reactions
sidebar_position: 5
hide_title: true
keywords: [inventor.gg, redocs, documentation, react, reactions, clear reactions, remove reactions, remove all reactions]
description: Remove all reactions from a message.
finished: true
---
# Remove All Reactions
Remove all reactions from a message.

## Inputs

- [Message ID](#message-id-input)
- [Channel ID](#channel-id-input)

### Message ID {#message-id-input}
The ID of the message you would like to remove all reactions from, inputted as a 
[snowflake](/inventor-reference/types/string/snowflake). E.g. `1289318931282264105`
### Channel ID {#channel-id-input}
The ID of the channel the target message is in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`