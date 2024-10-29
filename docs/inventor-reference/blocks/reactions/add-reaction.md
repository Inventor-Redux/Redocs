---
title: Add Reaction Documentation
sidebar_label: Add Reaction
sidebar_position: 3
hide_title: true
keywords: [inventor.gg, redocs, documentation, emoji, emojis, reaction add, add reaction, react, reactions]
description: Adds an emoji reaction to a specified message.
finished: true
---
# Add Reaction
Adds an emoji reaction to a specified message.

## Inputs

- [Message ID](#message-id-input)
- [Channel ID](#channel-id-input)
- [Emoji ID](#emoji-id-input)

### Message ID {#message-id-input}
The ID of the message you would like to add a reaction to, inputted as a 
[snowflake](/inventor-reference/types/string/snowflake). E.g. `1289318931282264105`
### Channel ID {#channel-id-input}
The ID of the channel that the target message is in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`
### Emoji ID {#emoji-id-input}
The emoji that you would like to react to the message with, inputted as an [emoji](/inventor-reference/types/string/emoji). E.g. `:BeanCool:`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`