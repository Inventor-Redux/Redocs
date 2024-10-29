---
title: Delete Role Documentation
sidebar_label: Delete Role
sidebar_position: 5
hide_title: true
keywords: [inventor.gg, redocs, documentation, delete role, roles]
description: Delete a role in a specified server.
finished: true
---
# Delete Role
Delete a role in a specified server.

## Inputs

- [Server ID](#server-id-input)
- [Role ID](#role-id-input)

### Server ID {#server-id-input}
The ID of the server you want to delete the role from, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### Role ID {#role-id-input}
The ID of the role you would like to delete, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281283492109484165`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`