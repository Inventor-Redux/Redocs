---
title: Get Token Documentation
sidebar_label: Get Token
sidebar_position: 10
hide_title: true
keywords: [inventor.gg, redocs, documentation, bot token, get token]
description: Gets your Discord bot token.
---
# Get Token
Gets your Discord bot token.

## Inputs
There are no inputs for this block.


## Outputs

- [Token](#token-output)
- [Error](#error-output)

### Token {#token-output}
The Discord bot token. Mostly useful for Discord API requests.
:::warning
Do NOT share this token with anyone or publicize it. They will have full access to control your bot. This is extremely sensitive information. Always use proper caution and use the [Redact Secrets](/inventor-reference/blocks/utilities/redact-secrets) block.
:::
### Error {#error-output}
The Inventor Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/utilities/get-error-details) block. E.g. `DoVpjqYs`