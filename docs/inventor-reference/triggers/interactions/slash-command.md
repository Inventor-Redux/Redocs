---
title: Slash Command Documentation
sidebar_label: Slash Command
sidebar_position: 1
hide_title: true
keywords: [inventor.gg, redocs, slash command, documentation]
description: Slash command trigger.
---
# Slash Command
Blocks with this trigger act as slash commands. You can set permissions required to use any give command, or you can manually blacklist/allow channels, roles, or users by following [this guide](https://discord.com/blog/slash-commands-permissions-discord-apps-bots).

## Inputs
- [Command Name](#command-name-input)
- [Subcommand Name](#subcommand-name-input)
- [Description](#description-input)
- [Permissions](#permissions-input)
- [Age Restricted](#age-restricted-input)
- [Collaborator Only](#collaborator-only-input)
- [Command Availability](#command-availability-input)
- [Integration Type](#integration-type-input)
- [Command Options](#command-options-input)

### Command Name {#command-name-input}
The command name. This is what the user will type into the chat bar to run the command. This is inputted as a [string](/inventor-reference/types/string). E.g. `slash-command`

:::warning
This needs to be unique across the whole bot. Duplicate names without a different [Subcommand Name](#subcommand-name-input) will cause your bot to break.
:::

### Subcommand Name {#subcommand-name-input}
The second part of a commands name. If you do not want to use a `-` to separate words in your command name, or if you want to group commands together, you can use the Subcommand Name to add a suffix to the command name. This is inputted as a [string](/inventor-reference/types/string). E.g. `slash-command run` ("`slash-command`" is the [Command Name](#command-name-input), and "`run`" is the Subcommand Name.)

### Description {#description-input}
The description of the command. This is displayed to the user when they have the name of the command typed into the chat bar. This is inputted as a [string](/inventor-reference/types/string) and will only show the first 100 characters. E.g. `This is a command description.`

![The Anatomy of a Slash Command](/docs/triggers/interactions/slash-command.png)

### Permissions {#permissions-input}
The permissions of a command allow you to choose what permissions are needed if this command is run in a server. The command will not show up for people without these permissions. Choose permissions from the dropdown, or hit the "X" to remove them. If you would like to choose specific roles, channels, or members, [this guide](https://discord.com/blog/slash-commands-permissions-discord-apps-bots) mentions how to.

### Age Restricted {#age-restricted-input}
This box **should always be checked if the slash command contains or retrieves NSFW content**. This will hide the command in any channels/servers that are not marked as NSFW.

### Collaborator Only {#collaborator-only-input}
When this box is checked, only users who are collaborators on the bot in Inventor are allowed to use the command. This is useful for debugging, administration, or unreleased features.

:::warning
Do not use this to make commands "Staff Only," or for some other restricted group. This is better done through the integrations tab ([learn how!](https://discord.com/blog/slash-commands-permissions-discord-apps-bots)), as granting too many people access to your bot is risky, as they can do anything with the bot. 
:::

### Command Availability {#command-availability-input}
Use these checkboxes to pick where the command can be used.
- Servers
- Direct Messages
- Group DMs

### Integration Type {#integration-type-input}
Choose whether this command is usable by users with it installed, servers with it installed, or both.

### Command Options {#command-options-input}
Command options are added on the Inventor dashboard and allow for custom inputs. There are multiple different input types, each with its own outputs.

#### Text  {#text-input}
Allows the user to input a [string](/inventor-reference/types/string). E.g. `Hello`

#### Number {#number-input}
Allows the user to input a [number](/inventor-reference/types/number). E.g. `35`

#### Boolean {#boolean-input}
Allows the user to input a [boolean](/inventor-reference/types/string/boolean). E.g. `true`

#### User {#user-input}
Allows the user running the command to input another user. E.g. <dfn>@Zammer</dfn>

#### Channel {#channel-input}
Allows the user running the command to input a channel. E.g. <dfn>#general</dfn>

#### Role {#role-input}
Allows the user running the command to input a role. E.g. <dfn class="role">@Redux Staff</dfn>

#### User or Role (also known as Mentionable) {#mentionable-input}
Allows the user running the command to input a user OR role. E.g. <dfn>@Zammer</dfn> OR <dfn class="role">@Redux Staff</dfn>



## Outputs
- [Interaction ID](#interaction-id-output)
- [Interaction Token](#interaction-token-output)
- [Server ID](#server-id-output)
- [Channel ID](#channel-id-output)
- [Executing User ID](#executing-user-id-output)
- [Command Options](#command-options-output)
- [Debug Event ID](#debug-event-id-output)
- [Error](#error-output)

### Interaction ID {#interaction-id-output}
The unique identifier of the interaction, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1289363591824146598`

### Interaction Token {#interaction-token-output}
The unique token of the interaction, expressed as a [string](/inventor-reference/types/string). E.g. `aW50ZXJhY3Rpb246MTI4OTM2MzU5MTgyNDE0NjU5ODphRWtyamgyYUxkMTFkcVVVU2xJb3Y3cURKbUZQYlFBNXJRTDZHcUlmazJOejNITU1adU00c3AyeXB0ZFJXWHJPbTJYcU10dWZqZGlLcDF0UUFsb2tFS2pVb0ZZNE9VV2M3UU42YkVsSkYyaXJ0Nkc2cTNIaDJFMGhtVndSMWd1Qw`

### Server ID {#server-id-output}
The ID of the server that the slash command was triggered in, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1279387460551311482`

### Channel ID {#channel-id-output}
The ID of the channel that the slash command was used in, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1279419956571672577`
:::note
    This output is different from the [Channel](#channel-output) [Command Option](#command-options-output), which returns the channel that the user has input.
:::

### Executing User ID {#executing-user-id-output}
The ID of the user who triggered the slash command, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1281288318591697119`
:::note
    This output is different from the [User](#user-output) [Command Option](#command-options-output), which returns the user that the executing user has input.
:::

### Command Options {#command-options-output}
:::warning
    If a command option is not set as required, the user is not forced to enter it when running the slash command. If the user leaves the field blank, the outputs associated with that input will not have a value and will instead be blank. Make sure to account for this when using this trigger.
:::
#### Text {#text-output}
This returns the value that the executing user input when running the slash command. It will be a [string](/inventor-reference/types/string). E.g. `Hello`

#### Number {#number-output}
This returns the value that the executing user input when running the slash command. It will be a [number](/inventor-reference/types/number). E.g. `32`

#### Boolean {#boolean-output}
This returns the value that the executing user input when running the slash command. It will be a [boolean](/inventor-reference/types/boolean). E.g. `true`

#### User {#user-output}
This returns information on the user that the executing user input when running the slash command. It includes the user's Username (A [string](/inventor-reference/types/string), e.g. `Zammer8`), the user's User ID (A [snowflake](/inventor-reference/types/number/snowflake), e.g. `1281288318591697119`), the user's Avatar URL (A [string](/inventor-reference/types/string), e.g. `https://cdn.discordapp.com/avatars/1281288318591697119/5bc07d07dce2088f499d8ff4ffa9f62f`), and the user's Mention (A [mention](/inventor-reference/types/numbers/mention), e.g. `<@1281288318591697119>`).
:::note
    This output is not the same as [Executing User ID](#executing-user-id-output), which outputs who ran the command.
:::

#### Channel {#channel-output}
This returns information on the user that the executing user input when running the slash command. It includes the user's Username (A [string](/inventor-reference/types/string), e.g. `Zammer8`), the user's User ID (A [snowflake](/inventor-reference/types/number/snowflake), e.g. `1281288318591697119`), the user's Avatar URL (A [string](/inventor-reference/types/string), e.g. `https://cdn.discordapp.com/avatars/1281288318591697119/5bc07d07dce2088f499d8ff4ffa9f62f`), and the user's Mention (A [mention](/inventor-reference/types/numbers/mention), e.g. `<@1281288318591697119>`).
:::note
     This output is not the same as [Channel ID](#channel-id-output), which outputs the channel that the command was run in.
:::

#### Role {#role-output}
This returns information on the user that the executing user input when running the slash command. It includes the role's Name (A [string](/inventor-reference/types/string), e.g. `Redux Staff`), the role's Role ID (A [snowflake](/inventor-reference/types/number/snowflake), e.g. `1281283492109484165`), and the role's Mention (A [mention](/inventor-reference/types/numbers/mention), e.g. `<@1281283492109484165>`).

#### User or Role (a.k.a Mentionable) {#mentionable-output}
This returns information on the user/role that the executing user input when running the slash command. It includes the user/role's ID (A [snowflake](/inventor-reference/types/number/snowflake), e.g. `1281288318591697119` or `1281283492109484165`), the role's Name (A [string](/inventor-reference/types/string), e.g. `Redux Staff` or BLANK for users), the user/role's Mention (A [mention](/inventor-reference/types/numbers/mention), e.g. `<@1281288318591697119>` or `<@1281283492109484165>`). the user's Avatar URL (A [string](/inventor-reference/types/string), e.g. `https://cdn.discordapp.com/avatars/1281288318591697119/5bc07d07dce2088f499d8ff4ffa9f62f` or BLANK for roles), and the mentionable type (A [string](/inventor-reference/types/string), e.g. `user` or `role`).

#### Autocomplete {#autocomplete-output}
This returns the value that the executing user input when running the slash command. It will be a [string](/inventor-reference/types/string). E.g. `Hello`
:::note
    This is virtually identical in terms of output as the [text](#text-output) option. The main difference is that you can choose certain values that are suggested to a user. Also note that users running the command are not required to choose an option from your suggested values, and may enter anything they choose.
:::

:::warning
    For this to work properly, you will need to provide output options using the [autocomplete](/inventor-reference/triggers/interactions/slash-command-autocomplete) trigger and its corresponding blocks.
:::


### Debug Event ID {#debug-event-id-output}
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`