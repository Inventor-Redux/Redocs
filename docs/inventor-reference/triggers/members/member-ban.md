---
title: Member Ban Documentation
sidebar_label: Member Ban
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, Members, member banned]
description: Triggers whenever a user is banned from a server.
---
# Member Ban
Triggers whenever a user is banned from a server.

## Inputs
There are no inputs for this trigger.


## Outputs

- [User ID](#user-id-output)
- [Server ID](#server-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### User ID {#user-id-output}
The ID of the user who was banned, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Server ID {#server-id-output}
The ID of the server the user was banned in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`