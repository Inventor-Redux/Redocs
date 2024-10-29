---
title: Is User Collaborator Documentation
sidebar_label: Is User Collaborator
sidebar_position: 5
hide_title: true
keywords: [inventor.gg, redocs, documentation, if, if statement, if user is collaborator, is collaborator]
description: Only runs the code inside the block if the user is a collaborator. Very similar to [If Statement](/inventor-reference/blocks/flow-control/if-statement), but with pre-set values.
finished: true
---
# Is User Collaborator
Only runs the code inside the block if the user is a collaborator. Very similar to [If Statement](/inventor-reference/blocks/flow-control/if-statement), but with pre-set values.

## Inputs

- [User ID](#user-id-input)

### User ID {#user-id-input}
The ID of the user to check the collaborator status of, inputted as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`

## Outputs

- [Error](#error-output)

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`