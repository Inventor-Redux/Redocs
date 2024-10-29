---
finished: true
---
# JSON

## Summary
JSON is a way of storing data in key-value pairs, what this means is that for every value there is a corresponding key that can be used to access it. This is somewhat simmilar to how a lock works

## Usage
Many different blocks and triggers use this such as the [JSON String](/inventor-reference/blocks/network/parse-json/#json-string) input of the [Parse JSON](/inventor-reference/blocks/network/parse-json/) block

## Example

The [JSON String](/inventor-reference/blocks/network/parse-json/#json-string) input of the [Parse JSON](/inventor-reference/blocks/network/parse-json/) block will have the value of whatever JSON is passed into it. This could be for example

``` json title="Example JSON String"
{
  "name": "John",
  "age": 30,
  "address": {
    "street": "123 Main St",
    "city": "Anytown"
  }
}
```

This JSON string says that John is 30 years old, and his address is 123 Main St in Anytown.