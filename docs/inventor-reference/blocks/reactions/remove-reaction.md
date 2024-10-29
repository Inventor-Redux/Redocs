---
title: Remove Reaction Documentation
sidebar_label: Remove Reaction
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, emoji, emojis, reaction remove, remove reaction, react, reactions]
description: Adds an emoji reaction to a specified message.
finished: true
---
# Remove Reaction
Removes a specified reaction that the bot added from a specified message. To remove a reaction that a specific user added, refer to [Remove User Reaction](/inventor-reference/blocks/reactions/remove-user-reaction)

## Inputs

- [Message ID](#message-id-input)
- [Channel ID](#channel-id-input)
- [Emoji ID](#emoji-id-input)

### Message ID {#message-id-input}
The ID of the message you would like to remove a reaction from, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1289318931282264105`
### Channel ID {#channel-id-input}
The ID of the channel that the target message is in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`
### Emoji ID {#emoji-id-input}
The emoji that you would like to remove the reaction of, inputted as an [emoji](/inventor-reference/types/string/emoji). E.g. `:BeanCool:`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`