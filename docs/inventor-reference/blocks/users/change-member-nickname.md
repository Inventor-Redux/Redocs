---
title: Change Member Nickname Documentation
sidebar_label: Change Member Nickname
sidebar_position: 13
hide_title: true
keywords: [inventor.gg, redocs, documentation, change member nickname, nickname]
description: Change a member's server-specific nickname.
---
# Change Member Nickname
Change a member's server-specific nickname.

## Inputs

- [Server ID](#server-id-input)
- [User ID](#user-id-input)
- [Nickname](#nickname-input)

### Server ID {#server-id-input}
The server ID you would like to change a user's nickname in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### User ID {#user-id-input}
The ID of the user to change the nickname of, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Nickname {#nickname-input}
The new nickname you would like to assign to the user, inputted as a [string](/inventor-reference/types/string). E.g. `Hello`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`