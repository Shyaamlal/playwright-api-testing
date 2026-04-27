# Playwright API Testing

API tests written with Playwright's `request` fixture against [Restful Booker](https://restful-booker.herokuapp.com) — a public REST API for hotel booking.

---

## What's Covered

Full CRUD coverage across the Restful Booker API:

| Test | Method | Endpoint | Auth | Assertion |
|---|---|---|---|---|
| GET all bookings returns non-empty array of valid booking IDs | GET | `/booking` | No | 200 status, array non-empty, each item has numeric `bookingid` |
| GET booking by ID returns details | GET | `/booking/:id` | No | Response includes `firstname` |
| POST new booking returns 200 and correct total price | POST | `/booking` | No | 200 status, `bookingid` is number, `totalprice` matches request |
| PUT booking replaces full resource and returns updated firstname | PUT | `/booking/:id` | Token (Cookie) | 200 status, `firstname` updated |
| DELETE booking returns 201 | DELETE | `/booking/:id` | Token (Cookie) | 201 status |
| PATCH booking partially updates firstname | PATCH | `/booking/:id` | Token (Cookie) | 200 status, `firstname` updated |

Authenticated tests obtain a token via `POST /auth` and pass it as a `Cookie` header.

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
