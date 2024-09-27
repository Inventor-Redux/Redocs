# Mention

## Summary
A mention is a Discord [snowflake](inventor-reference/types/string/snowflake/) formatted as a [mention](inventor-reference/formatting/mention)

## Usage
Many different blocks and triggers use this such as the [User Mention](/inventor-reference/blocks/users/get-server-member/#user-mention) output of the [Get Server Member](/inventor-reference/blocks/users/get-server-member/) block

## Example
The [User Mention](/inventor-reference/blocks/users/get-server-member/#user-mention) output of the [Get Server Member](/inventor-reference/blocks/users/get-server-member/) block contains the formatted [mention](inventor-reference/formatting/mention) of the member. For example if the member's [snowflake](inventor-reference/types/string/snowflake/) was `1281288318591697119` then the output would have the value of `<@1281288318591697119>`