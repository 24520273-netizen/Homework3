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
This prevents accumulated interval drift because each update recalculates the remaining time from the real current time.
Defect 2 - Double Form Submission
Defect Description
An AI-generated form handler may allow the user to click the submit button multiple times while a previous submission is still processing.
This can create duplicate requests or duplicate registrations.
Diagnostic Method
The Register button was clicked repeatedly while the form state was submitting.
Without protection, multiple submit events could be triggered before the previous operation completed.
Refactored Solution
The form state machine disables the submit button while the form is submitting.
if (state === 'submitting') {
    formStatus.textContent = 'Submitting registration...';
    submitButton.disabled = true;
}

The submit button is enabled again when the form reaches either the success or error state.
Defect 3 - XSS Risk from User Input
Defect Description
AI-generated code may use innerHTML to display data entered by the user.
If untrusted input is inserted using innerHTML, malicious HTML or JavaScript can potentially be executed in the page.
Diagnostic Method
The Name field was tested using the following input:
<img src=x onerror=alert('XSS')>

The secure expected behavior is to display this value as plain text without executing the onerror handler.
Refactored Solution
User input is displayed using textContent instead of innerHTML.
registrationMessage.textContent = `Thank you, ${name}!`;

This causes the browser to treat user input as text rather than executable HTML.
Final Verification
- Countdown uses a fixed UTC ISO 8601 target timestamp.
- Remaining time is recalculated from the real system clock.
- Form states follow idle -> submitting -> success/error.
- Repeated submission is prevented while the form is submitting.
- User input is rendered using textContent.
- No untrusted user input is inserted using innerHTML.
Result: PASS