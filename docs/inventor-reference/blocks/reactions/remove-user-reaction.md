---
title: Remove User Reaction Documentation
sidebar_label: Remove User Reaction
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, emoji, emojis, reaction user remove, remove user reaction, react, reactions]
description: Adds an emoji reaction to a specified message.
---
# Remove USer Reaction
Removes a specified user's reaction from a specified message. To remove a reaction the bot added, refer to [Remove Reaction](/inventor-reference/blocks/reactions/remove-reaction)

## Inputs

- [Message ID](#message-id-input)
- [Channel ID](#channel-id-input)
- [Emoji ID](#emoji-id-input)
- [User ID](#user-id-input)

### Message ID {#message-id-input}
The ID of the message you would like to remove a reaction from, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1289318931282264105`
### Channel ID {#channel-id-input}
The ID of the channel that the target message is in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`
### Emoji ID {#emoji-id-input}
The emoji that you would like to remove the reaction of, inputted as an [emoji](/inventor-reference/types/string/emoji). E.g. `:BeanCool:`
### User ID {#user-id-input}
The ID of the user who you want to remove the reaction of, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`