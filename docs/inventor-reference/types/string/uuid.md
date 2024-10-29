---
finished: true
---
# UUID

## Summary
A UUID (short for Universally Unique Identifier) is a 36 character [string](/inventor-reference/types/string/) that is guaranteed to be unique

## Usage
Many different blocks and triggers use this such as the [Row ID](/inventor-reference/blocks/databases/create-row/#row-id) output of the [Create Row](/inventor-reference/blocks/databases/create-row/)

## Example
The [Message ID](/inventor-reference/triggers/messages/message-sent/#message-id) output of the [Message Sent](/inventor-reference/triggers/messages/message-sent/) trigger contains the unique snowflake of the message that triggered it. If for example the unique snowflake was `1289318931282264105` then the output will have the value of `1289318931282264105`