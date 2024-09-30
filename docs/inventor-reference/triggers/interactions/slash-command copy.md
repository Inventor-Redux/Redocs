# Slash Command
**Triggers when a slash command is used**

This trigger is used to create a slash command and offers a variety of outputs related to the environment they were used in such as server id and much more.
___
!!! note "Command options"

    Because command options are non-standard outputs and added by the user they are covered at the `other` section found [here](./#other).
### Outputs
- [Interaction ID](./#interaction-id)
- [Interaction Token](./#interaction-token)
- [Server ID](./#server-id)
- [Channel ID](./#channel-id)
- [Executing User ID](./#executing-user-id)
- [Debug Event ID](./#debug-event-id)
- [Error](./#error)

### Interaction ID

This is the ID of the interaction that the slash command was triggered by

#### Possible Values
This output only has one possible value which is the id of the interaction the slash command was triggered by.
#### Format
This output is in the format of a string of numbers, it is a discord [snowflake](https://discord.com/developers/docs/reference#snowflakes).
#### Examples
=== "Valid"

    ```
    1276960123763560448
    ```
    
### Interaction Token

This is the Token of the interaction that the slash command was triggered by.

#### Possible Values
This output only has one possible value which is the Token of the interaction the slash command was triggered by.
#### Format
This output is in the format of a string of letters and numbers.
#### Examples
=== "Valid"

    ```
    aW50ZXJhY3Rpb246MTI3Njk2MDEyMzc2MzU2MDQ0ODpSbWhHZEtLd250b3FpUTl5SDJJVlVMZTdmQWJRR3cwcHd6SlhPd0tJeXJWUVFlN3FhdExRcFo1aTl0M0NkN1BnbFhiTVY0d3E0eGYycGgwR0xQWDJEd25Dczd4S1RNQVJ1d1psbE1xN2trbkRhNjhnd29EOVRxbkdKMUtmRVhsQw
    ```
### Server Id

This is the Id of the server that the slash command was used in.

#### Possible Values
This output only has two possible values depending on whether it was used in a server or a dm.
#### Format
This output is in the format of a string of numbers, it is a discord [snowflake](https://discord.com/developers/docs/reference#snowflakes).
#### Examples
=== "Server"

    ```
    1252181830430359592
    ```
=== "DM"
    !!! note

        The output is blank because when the slash command is triggered in a DM there is no server making the output empty.
### Channel Id

This is the Id of the channel that the slash command was used in.

#### Possible Values
This output only has one possible value which is the id of the channel the slash command was used in.
#### Format
This output is in the format of a string of numbers, it is a discord [snowflake](https://discord.com/developers/docs/reference#snowflakes).
#### Examples
=== "Valid"

    ```
    1252183491336994857
    ```
### Executing User Id

This is the Id of the user that used the slash command.

#### Possible Values
This output only has one possible value which is the id of the user that used the slash command.
#### Format
This output is in the format of a string of numbers, it is a discord [snowflake](https://discord.com/developers/docs/reference#snowflakes).
#### Examples
=== "Valid"

    ```
    1272681088938147951
    ```
### Debug Event ID

The use of this output is currently unknown, if you are aware of its use please make a pull request or create a feature request.

#### Possible Values
This output only has one possible value however its use is currently unknown.
#### Format
This output is in the format of a string of text.
#### Examples
=== "Valid"

    ```
    b40c232bcd4d
    ```
### Error

This is the output indicating if the trigger has encountered an error.

#### Possible Values
This output has two values depending on whether the trigger has encountered an error or not.
#### Format
This output is in the format of a boolean.
#### Examples
=== "Error"

    ```
    true
    ```
=== "No Error"
    !!! note 
        The output is blank because if there is no error then there is no value for this output.
## Other

### Command Options
!!! warning

    If a command option is not set as required and the user omits it then the output will not have a value and be blank

Command options are added by the user and allows for custom inputs to be created, as of right now 6 different types of command options are provided.

- [Text](./#text)
- [Number](./#number)
- [Boolean](./#boolean)
- [User](./#user)
- [Channel](./#channel)
- [Role](./#role)

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