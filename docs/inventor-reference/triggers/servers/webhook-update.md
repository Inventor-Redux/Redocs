---
title: Webhook Update Documentation
sidebar_label: Webhook Update
sidebar_position: 4
hide_title: true
keywords: [inventor.gg, redocs, documentation, Channels, channel update, webhooks, webhook update]
description: Triggers whenever a webhook is updated
finished: true
---
# Webhook Update
Triggers whenever a webhook is updated

## Inputs
There are no inputs for this trigger.


## Outputs

- [Server ID](#server-id-output)
- [Channel ID](#channel-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Server ID {#server-id-output}
The ID of the server in which the webhook was updated, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### Channel ID {#channel-id-output}
The ID of the channel in which the webhook was updated, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`