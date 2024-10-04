---
title: Role Delete Documentation
sidebar_label: Role Delete
sidebar_position: 3
hide_title: true
keywords: [inventor.gg, redocs, documentation, roles, role deleted, delete role]
description: Triggers whenever a role is deleted.
---
# Role Delete
Triggers whenever a role is deleted.

## Inputs
There are no inputs for this trigger.


## Outputs

- [Role ID](#role-id-output)
- [Role Mention](#role-mention-output)
- [Server ID](#server-id-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Role ID {#role-id-output}
The ID of the role that was deleted, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281283492109484165`
### Role Mention {#role-mention-output}
The mention of the role that was deleted, expressed as a [mention](/inventor-reference/types/string/mention). E.g. `<@1281283492109484165>`
### Server ID {#server-id-output}
The ID of the server that the role was deleted in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`