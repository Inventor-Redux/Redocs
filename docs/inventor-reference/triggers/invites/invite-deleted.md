---
title: Invite Deleted Documentation
sidebar_label: Invite Deleted
sidebar_position: 2
hide_title: true
keywords: [inventor.gg, redocs, documentation, Invite deleted, invites]
description: Triggers any time an invite is deleted.
---
# Invite Deleted
Triggers any time an invite is deleted.

## Inputs
There are no inputs for this trigger.


## Outputs

- [Server ID](#server-id-output)
- [Code](#code-output)
- [Channel ID](#channel-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Server ID {#server-id-output}
The ID of the server the invite was deleted from, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### Code {#code-output}
The code of the invite that was deleted, expressed as a [string](/inventor-reference/types/string). E.g. `Hello`
### Channel ID {#channel-id-output}
The ID of the channel that the invite went to, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`