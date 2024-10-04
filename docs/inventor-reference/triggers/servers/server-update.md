---
title: Server Update Documentation
sidebar_label: Server Update
sidebar_position: 2
hide_title: true
keywords: [inventor.gg, redocs, documentation, Servers, server update]
description: Triggers whenever a server the bot is in is updated.
---
# Server Update
Triggers whenever a server the bot is in is updated.

## Inputs
There are no inputs for this trigger.
## Outputs

- [Server ID](#server-id-output)
- [Server Name](#server-name-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Server ID {#server-id-output}
The ID of the server that was updated, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### Server Name {#server-name-output}
The name of the server that was updated, expressed as a [string](/inventor-reference/types/string). E.g. `Redux`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`