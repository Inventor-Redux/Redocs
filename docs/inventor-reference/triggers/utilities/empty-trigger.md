# Empty Trigger
## Summary
Empty triggers are not run as a result of a particular action, and are instead run from the Inventor dashboard.
=======

## Inputs
- [Value (1-5)](#input-values)
___
### Input Values
When this flow is manually triggered from the dashboard, there are five optional values you can enter. These are directly passed to the corresponding outputs.
___
## Outputs
- [Value (1-5)](#output-values)
- [Debug Event ID](#debug-event-id)
- [Error ID](#error-id)
___
### Output Values
This is whatever value was passed from the corresponding [input](#input-values). Output type varies based on user input.

### Debug Event ID
The Debug Event ID corresponds with an event in the Analytics tab of Inventor. Expressed as a [string](/inventor-reference/types/string). E.g. `b265bfca8f11`

### Error ID
The Error ID of an error. You can lookup an error by its ID with the [Get Error Details](/inventor-reference/blocks/get-error-details) block. E.g. `DoVpjqYs`