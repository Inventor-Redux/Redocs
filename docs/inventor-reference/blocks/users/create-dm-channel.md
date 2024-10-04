---
title: Create DM Channel Documentation
sidebar_label: Create DM Channel
sidebar_position: 2
hide_title: true
keywords: [inventor.gg, redocs, documentation, dm, dm user, dm channel, create dm channel, initiate dm]
description: Creates a DM channel with a user, in which you can send messages.
---
# Create DM Channel
Creates a DM channel with a user, in which you can send messages.

## Inputs

- [User ID](#user-id-input)

### User ID {#user-id-input}
The ID of the user you would like to create a DM channel with, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`

## Outputs

- [Channel ID](#channel-id-output)
- [Error](#error-output)

### Channel ID {#channel-id-output}
The ID of the created channel, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`
:::note
If you run the block several times with the same user ID inputted, it will always return the same channel. If a user initiates a DM with the bot, it will also have the same Channel ID.  
:::
:::warning
Do not send too many DMs in a short amount of time. This could be seen as DM spam, and Discord may terminate your bot's API key.
:::
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`