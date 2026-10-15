# Homework 3 - Resilient Event Hub

## Task Decomposition

| Task | Description | Acceptance Criteria | Commit |
|---|---|---|---|
| T1 | Countdown UI Contract | Build event countdown markup and event metadata structure | Countdown elements exist with clear semantic labels | `feat(html): define event countdown structure` |
| T2 | Drift-Free Countdown Engine | Calculate remaining time from a fixed UTC ISO 8601 target timestamp | Countdown remains accurate without accumulating interval drift | `feat(js): implement drift-free countdown` |
| T3 | State-Machine Form | Implement Idle -> Submitting -> Success/Error states | Form state changes are explicit and predictable | `feat(js): implement form state machine` |
| T4 | Double-Submit Prevention | Disable repeated form submissions while request is pending | User cannot submit the same form twice simultaneously | `fix(form): prevent double submission` |
| T5 | Input Sanitization | Safely display user input without unescaped innerHTML | Zero XSS exposure from user-entered values | `security: sanitize user input` |
| T6 | AI Failure Audit | Document 3 AI-induced defects and their fixes | Each defect includes description, diagnostic method, and refactored solution | `docs: add AI failure audit` |

## Engineering Rules

- Complete and test one task before moving to the next.
- Use UTC ISO 8601 timestamps for countdown calculations.
- Do not decrement the countdown by assuming setInterval fires exactly on time.
- Use explicit form states: idle, submitting, success, error.
- Prevent repeated submissions while submitting.
- Never render untrusted user input with innerHTML.
- Keep each Git commit atomic.