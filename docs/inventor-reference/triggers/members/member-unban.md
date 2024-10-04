---
title: Member Unban Documentation
sidebar_label: Member Unban
sidebar_position: 5
hide_title: true
keywords: [inventor.gg, redocs, documentation, Members, member unban]
description: Triggers whenever a member is unbanned from a server.
---
# Member Unban
Triggers whenever a member is unbanned from a server.

## Inputs
There are no inputs for this trigger.


## Outputs

- [User ID](#user-id-output)
- [Server ID](#server-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### User ID {#user-id-output}
The ID of the user who was unbanned, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Server ID {#server-id-output}
The ID of the server that the user was unbanned in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`