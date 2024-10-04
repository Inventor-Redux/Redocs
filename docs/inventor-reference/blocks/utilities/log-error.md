---
title: Log Error Documentation
sidebar_label: Log Error
sidebar_position: 2
hide_title: true
keywords: [inventor.gg, redocs, documentation, error, log errors, errors, utilities]
description: Log an error to the Errors page of Inventor.
---
# Log Error
Log an error to the Errors page of Inventor.

## Inputs

- [Error Type](#error-type-input)
- [Error Title](#error-title-input)
- [Error Message](#error-message-input)
- [Send Notification](#send-notification-input)

### Error Type {#error-type-input}
The type of error, either `Info`, `Warning`, or `Error`. This is chosen with a dropdown.
### Error Title {#error-title-input}
The title of the error, inputted as a [string](/inventor-reference/types/string). E.g. `Hello`
### Error Message {#error-message-input}
The message of the error, inputted as a [string](/inventor-reference/types/string). E.g. `Hello`
### Send Notification {#send-notification-input}
Whether or not to send a notification, inputted as a [boolean](/inventor-reference/types/string/boolean). E.g. `true` via a dropdown.
:::note
This feature is a remnant of webhook notifications, which are deprecated. It has been left on the block for when it is re-implemented.
:::

## Outputs

- [Error ID](#error-id-output)
- [Error](#error-output)

### Error ID {#error-id-output}
The ID of the error that was created, expressed with an Error ID. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`
:::note
This is different from just `Error`, which is for errors with the block itself.
:::
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`