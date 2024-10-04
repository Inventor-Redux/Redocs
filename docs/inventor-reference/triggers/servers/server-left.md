---
title: Server Left Documentation
sidebar_label: Server Left
sidebar_position: 3
hide_title: true
keywords: [inventor.gg, redocs, documentation, Server Left, servers]
description: Triggers whenever your bot leaves a server.
---
# Server Left
Triggers whenever your bot leaves a server.

## Inputs
There are no inputs for this trigger.

## Outputs

- [Server ID](#server-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Server ID {#server-id-output}
The ID of the server the bot left, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`