# Slash Command
Blocks with this trigger act as slash commands. You can set permissions required to use any give command, or you can manually blacklist/allow channels, roles, or users by following [this guide].

## Inputs
Command options are added on the Inventor dashboard and allow for custom inputs. There are multiple different input types, each with its own outputs.
- [Text](#text)
- [Number](#number)
- [Boolean](#boolean)
- [User](#user)
- [Channel](#channel)
- [Role](#role)
- [Mentionable](#mentionable)


## Outputs
- [Interaction ID](#interaction-id)
- [Interaction Token](#interaction-token)
- [Server ID](#server-id)
- [Channel ID](#channel-id)
- [Executing User ID](#executing-user-id)
- [Option-specific Outputs](#option-specific-outputs)
- [Debug Event ID](#debug-event-id)
- [Error ID](#error-id)
### Interaction ID
The unique identifier of the interaction, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1289363591824146598`

### Interaction Token
The unique token of the interaction, expressed as a [string](/inventor-reference/types/number/snowflake). E.g. `aW50ZXJhY3Rpb246MTI4OTM2MzU5MTgyNDE0NjU5ODphRWtyamgyYUxkMTFkcVVVU2xJb3Y3cURKbUZQYlFBNXJRTDZHcUlmazJOejNITU1adU00c3AyeXB0ZFJXWHJPbTJYcU10dWZqZGlLcDF0UUFsb2tFS2pVb0ZZNE9VV2M3UU42YkVsSkYyaXJ0Nkc2cTNIaDJFMGhtVndSMWd1Qw`

### Server ID
The ID of the server that the slash command was triggered in, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1279387460551311482`

### Channel ID
The ID of the channel that the slash command was used in, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1279419956571672577`

### Executing User ID
The ID of the user who triggered the slash command, expressed as a [snowflake](/inventor-reference/types/number/snowflake). E.g. `1281288318591697119`

### Debug Event ID
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error ID
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`

### Command Options
!!! warning
    If a command option is not set as required, the user is not forced to enter it when running the slash command. If the user leaves the field blank, the output will not have a value and will instead be blank.

#### Text

This is allows the input of text during the usage of a slash command, as such it outputs a string of text which has the value of whatever the user inputted.

#### Number

This is allows the input of a number during the usage of a slash command, as such it outputs a number which has the value of whatever the user inputted.

#### Boolean

This is allows the input of a boolean during the usage of a slash command, as such it outputs a boolean which has the value of either true or false, depending on whatever the user picked

#### User

This is allows the input of a user during the usage of a slash command, as such it outputs the chosen user's name, user id, avatar url and mention. You can find example of these below
=== "Name"
    ```
    _itsastro_
    ```
=== "User ID"
    ```
    1272681088938147951
    ```
=== "Avatar URL"
    ```
    https://cdn.discordapp.com/avatars/1272681088938147951/899966d4b5d1ff4c9371760a6aff236e.png
    ```
=== "Mention"
    ```
    <@1272681088938147951>
    ```
#### Channel

This is allows the input of a channel during the usage of a slash command, as such it outputs the chosen channels's name, channel id and mention. You can find example of these below
=== "Name"
    ```
    General
    ```
=== "Channel ID"
    ```
    1252183491336994857
    ```
=== "Mention"
    ```
    <#1272681088938147951>
    ```
#### Role

This is allows the input of a role during the usage of a slash command, as such it outputs the chosen role's name, role id and mention. You can find example of these below
=== "Name"
    ```
    Admin
    ```
=== "Role ID"
    ```
    1252182151550472304
    ```
=== "Mention"
    ```
    <@&1252182151550472304>
    ```

#### Mentionable
asdfasdfasdfa