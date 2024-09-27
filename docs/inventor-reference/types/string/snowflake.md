# Snowflake

## Summary
A snowflake is a unique identifier used by Discord, for more info visit [https://discord.com/developers/docs/reference#snowflakes](https://discord.com/developers/docs/reference#snowflakes)

## Usage
Many different blocks and triggers use this such as the [Message ID](/inventor-reference/triggers/messages/message-sent/#message-id) output of the [Message Sent](/inventor-reference/triggers/messages/message-sent/) trigger

## Example
The [Message ID](/inventor-reference/triggers/messages/message-sent/#message-id) output of the [Message Sent](/inventor-reference/triggers/messages/message-sent/) trigger contains the unique snowflake of the message that triggered it. If for example the unique snowflake was `1289318931282264105` then the output will have the value of `1289318931282264105`