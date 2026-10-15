# AI Failure Audit

## Defect 1 - Countdown Drift

### Defect Description
A naive AI-generated countdown may reduce the displayed time by one second on every `setInterval` callback.

This approach assumes that `setInterval(..., 1000)` always executes exactly every second. Browser throttling, inactive tabs, or temporary performance delays can make the countdown gradually become inaccurate.

### Diagnostic Method
The countdown logic was reviewed and tested by switching to another browser tab for several seconds.

A countdown that only decrements its previous value could fall behind the actual system clock.

### Refactored Solution
The countdown was refactored to calculate the remaining time from a fixed UTC ISO 8601 target timestamp on every update.

```js
const now = new Date();
const remainingTime = targetTime.getTime() - now.getTime();