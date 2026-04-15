# Playwright API Testing

API tests written with Playwright's `request` fixture against [Restful Booker](https://restful-booker.herokuapp.com) — a public REST API for hotel booking.

---

## What's Covered

| Test | Method | Endpoint | Assertion |
|---|---|---|---|
| GET all bookings returns non-empty array of valid booking IDs | GET | `/booking` | 200 status, array non-empty, each item has numeric `bookingid` |
| GET booking by ID returns details | GET | `/booking/:id` | Response includes `firstname` |
| POST new booking returns 200 and correct total price | POST | `/booking` | 200 status, `bookingid` is number, `totalprice` matches request |

---

## Running the Tests

```bash
npm install
npx playwright install
npx playwright test
```

---

## Tech Stack

- **Playwright** — API testing via `request` fixture
- **TypeScript**
- **Restful Booker** — public REST API

---

## Context

This project is the API testing layer of a broader AI-assisted test automation portfolio. The E2E layer lives in [playwright-ai-assisted-testing](https://github.com/Shyaamlal/playwright-ai-assisted-testing).
