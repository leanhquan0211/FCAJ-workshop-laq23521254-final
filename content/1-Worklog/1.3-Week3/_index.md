---
title: "Week 3: Registration Flow Integration and Event Administration"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.3. </b> "
---

### Week 3 Objectives:

* Complete a consistent interface and the attendee journey from finding an event to viewing a registration result.
* Connect the Frontend to the Backend and local database, with seat reservation and duplicate prevention.
* Add event administration, authentication, authorization, and supporting usage and testing documentation.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 2 | - Refine the functional direction and establish a consistent interface design.<br>&emsp; + Standardize layouts, shared components, and presentation across screen sizes.<br>- Build the event listing screen.<br>&emsp; + Add accent-insensitive search, category and status filters, filter reset, and registration status indicators. | 12/10/2026 | 12/10/2026 | [React: rendering and filtering lists](https://react.dev/learn/rendering-lists) |
| 3 | - Complete the attendee journey with mock data.<br>&emsp; + Build event details, the registration form, and the result page; validate input and prevent repeated submissions.<br>- Review local operation and interface states.<br>&emsp; + Handle loading, missing content, and registration errors while preserving form input; update Frontend documentation. | 13/10/2026 | 13/10/2026 | [React: form inputs](https://react.dev/reference/react-dom/components/input); [MDN: local storage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage) |
| 5 | - Align the Frontend and Backend API contract and data model.<br>&emsp; + Define event and registration information, statuses, and error responses.<br>- Build the application's local Backend and database environment.<br>&emsp; + Prepare sample events without overwriting existing records; implement database-backed event listing and detail APIs. | 15/10/2026 | 15/10/2026 | [AWS: DynamoDB Local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.DownloadingAndRunning.html); [AWS SAM: local APIs](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/using-sam-cli-local-start-api.html) |
| 6 | - Complete registration and result retrieval.<br>&emsp; + Combine seat reservation, duplicate email prevention within an event, and capacity checks in a database transaction.<br>- Integrate the Frontend and Backend and add event administration.<br>&emsp; + Support creating, editing, deleting, and opening/closing registration while preserving occupied seats.<br>- Add administrator login, session handling, and Backend authorization.<br>- Review configuration, error cases, testing records, and local operation documentation. | 16/10/2026 | 16/10/2026 | [AWS: DynamoDB transactions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transactions.html); [OWASP: authorization](https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html) |

### Week 3 Achievements:

* **Interface and listing:** The event listing follows a consistent design and supports accent-insensitive search, combined filters, and event status indicators. Shared interface components and layouts accommodate small screens.
* **Attendee journey:** Event details → registration form → result are available with mock data. The form validates input, preserves it on errors, and blocks events that no longer accept registration; Frontend documentation explains local operation and the main interface states.
* **Backend and data:** The API contract, data model, sample events, and database-backed listing and detail APIs are in place. Sample data initialization preserves existing records; storage configuration and Backend local operation instructions are available.
* **Integration and administration:** The local registration flow connects both sides and saves and retrieves results from the database. A transaction combines seat reservation, duplicate prevention, and capacity checks. Administrators can log in and manage events; the Backend enforces authorization, prevents capacity falling below occupied seats, and blocks deletion of events with occupied seats.
* **Testing and review:** Records from earlier implementation rounds report successful Backend, seat contention/duplicate prevention, API, browser, and responsive interface checks. This review compared source code, configuration, and documentation; integration tests were not rerun because Docker could not be reached.
* **Completion scope:** The local application covers attendee and administrator journeys. AWS deployment, confirmation emails, and attendee authentication for result access are not yet implemented.
