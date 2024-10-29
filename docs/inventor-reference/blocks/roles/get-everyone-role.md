---
title: "Get @everyone Role Documentation"
sidebar_label: "Get @everyone Role"
sidebar_position: 6
hide_title: true
keywords: [inventor.gg, redocs, documentation, everyone, role, mention, everyone]
description: "Gets the @everyone role for a server."
finished: true
---
# Get @everyone Role {#get-everyone-role}
Gets the <dfn class="role">@everyone</dfn> role for a server.

## Inputs

- [Server ID](#server-id-input)

### Server ID {#server-id-input}
The ID of the server to retrieve the <dfn class="role">@everyone</dfn> role for.

## Outputs

- [Role ID](#role-id-output)
- [Role Name](#role-name-output)
- [Role Color](#role-color-output)
- [Role Hoist](#role-hoist-output)
- [Role Position](#role-position-output)
- [Role Permissions](#role-permissions-output)
- [Role Managed](#role-managed-output)
- [Role Mentionable](#role-mentionable-output)
- [Role Mention](#role-mention-output)
- [Error](#error-output)

### Role ID {#role-id-output}
The ID of <dfn class="role">@everyone</dfn> role, expressed as a [snowflake](/inventor-reference/types/string/snowflake). E.g. `1281283492109484165`
### Role Name {#role-name-output}
The name of the <dfn class="role">@everyone</dfn> role, expressed as a [string](/inventor-reference/types/string). The value is always equal to `@everyone`
### Role Color {#role-color-output}
The color of the <dfn class="role">@everyone</dfn> role, expressed as a hex color code [string](/inventor-reference/types/string). The value is always equal to `#000000`
### Role Hoist {#role-hoist-output}
The hoist status of the <dfn class="role">@everyone</dfn> role, expressed as a [boolean](/inventor-reference/types/string/boolean). The value is always equal to `true`
### Role Position {#role-position-output}
The position of the <dfn class="role">@everyone</dfn> role, expressed as a [number](/inventor-reference/types/number). The value is always equal to `0`
### Role Permissions {#role-permissions-output}
The [permissions integer](https://discord.com/developers/docs/topics/permissions) of the <dfn class="role">@everyone</dfn> role, expressed as a [number](/inventor-reference/types/number). E.g. `3382938482994745`
### Role Managed {#role-managed-output}
The managed status of the <dfn class="role">@everyone</dfn> role, expressed as a [boolean](/inventor-reference/types/string/boolean). The value is always equal to `false`
### Role Mentionable {#role-mentionable-output}
The mentionable status of the <dfn class="role">@everyone</dfn> role, expressed as a [boolean](/inventor-reference/types/string/boolean). The value is always equal to `false`
### Role Mention {#role-mention-output}
The mention of the <dfn class="role">@everyone</dfn> role, expressed as an irregular [mention](/inventor-reference/types/string/mention). The value is always equal to `@everyone`
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`