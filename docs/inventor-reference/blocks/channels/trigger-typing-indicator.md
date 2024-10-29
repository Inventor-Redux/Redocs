---
title: Trigger Typing Indicator Documentation
sidebar_label: Trigger Typing Indicator
sidebar_position: 8
hide_title: true
keywords: [inventor.gg, redocs, documentation, typing, trigger typing indicator, channels]
description: Trigger a typing indicator as the bot in a specific channel.
finished: true
---
# Trigger Typing Indicator
Trigger a typing indicator as the bot in a specific channel.

## Inputs

- [Channel ID](#channel-id-input)

### Channel ID {#channel-id-input}
The ID of the channel to trigger the typing indicator in, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279419956571672577`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`