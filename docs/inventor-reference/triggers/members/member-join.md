---
title: Member Join Documentation
sidebar_label: Member Join
sidebar_position: 1
hide_title: true
keywords: [inventor.gg, redocs, documentation, Members, member join]
description: Triggers whenever a member joins a server.
finished: true
---
# Member Join
Triggers whenever a member joins a server.

## Inputs
There are no inputs for this trigger.


## Outputs

- [User ID](#user-id-output)
- [Server ID](#server-id-output)
- [User Mention](#user-mention-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### User ID {#user-id-output}
The ID of the user who joined, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Server ID {#server-id-output}
The ID of the server that was joined, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### User Mention {#user-mention-output}
The mention of the user who joined, expressed as a [mention](/inventor-reference/types/string/mention). E.g. `<@1281288318591697119>`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`