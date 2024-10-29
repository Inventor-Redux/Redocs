---
title: Invite Created Documentation
sidebar_label: Invite Created
sidebar_position: 1
hide_title: true
keywords: [inventor.gg, redocs, documentation, invites, invite created]
description: Triggers whenever an invite is created in a server.
finished: true
---
# Invite Created
Triggers whenever an invite is created in a server.

## Inputs
There are no inputs for this trigger.


## Outputs

- [Invite Code](#invite-code-output)
- [Server ID](#server-id-output)
- [Invite Creator User ID](#invite-creator-user-id-output)
- [Invite Creator Username](#invite-creator-username-output)
- [Invite Uses](#invite-uses-output)
- [Invite Max Uses](#invite-max-uses-output)
- [Invite Temporary](#invite-temporary-output)
- [Expires at (Unix)](#expires-at-unix-output)
- [Invite Created At (Unix)](#invite-created-at-unix-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Invite Code {#invite-code-output}
The code of the invite that was created, expressed as a [string](/inventor-reference/types/string). E.g. `vnPZeuGGu7`
### Server ID {#server-id-output}
The ID of the server that the invite was created in, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1279387460551311482`
### Invite Creator User ID {#invite-creator-user-id-output}
The ID of the user who created the invite, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281288318591697119`
### Invite Creator Username {#invite-creator-username-output}
The username of the user who created the invite, expressed as a [string](/inventor-reference/types/string). E.g. `Zammer8`
### Invite Uses {#invite-uses-output}
The current use count of the invite. As it is a brand new invite, this is always blank. If it wasn't blank it would be expressed as a [number](/inventor-reference/types/number). E.g. `35`
### Invite Max Uses {#invite-max-uses-output}
The maximum amount of uses this invite can handle, expressed as a [number](/inventor-reference/types/number). E.g. `35` or `0` for unlimited uses.
### Invite Temporary {#invite-temporary-output}
Whether or not the invite is temporary, expressed as a [boolean](/inventor-reference/types/string/boolean). E.g. `true`
### Expires at (Unix) {#expires-at-unix-output}
The time when the invite will expire, expressed as a [Unix](/inventor-reference/types/number/unix) value. E.g. `1234567890` If the invite doesn't expire the value will be blank.
### Invite Created At (Unix) {#invite-created-at-unix-output}
The time when the invite was created, expressed as a [Unix](/inventor-reference/types/number/unix) value. E.g. `1234567890`

### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`