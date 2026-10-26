---
title: "Week 4: Test Lab Development and Buyer Flow Integration"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.4. </b> "
---

### Week 4 Objectives:

* Agree on the buyer journey, testing scope, and project outcomes to demonstrate.
* Coordinate parallel application development and testing with a teammate.
* Build a local test suite with a monitoring interface and data consistency checks.
* Integrate the test suite with the application and verify small-scale ticket booking scenarios.
* Merge the code and standardize handover documentation.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 3 | - Review the goals for traffic spikes, scalability, and concurrent registration.<br>- Discuss public event browsing, login before booking, and account-based ticket retrieval with the teammate.<br>- Define three test groups: hot events, increasing/decreasing load, and contention for limited tickets.<br>&emsp; + Divide application and testing responsibilities; agree on APIs, test data, and handover outputs. | 20/10/2026 | 20/10/2026 | [AWS FCAJ Workshop](https://hcm-rules.awsfcaj.com/3-project/); [Git worktree](https://git-scm.com/docs/git-worktree) |
| 4 | - Set up a separate working environment for testing.<br>- Build tools for test data preparation, separate account sessions, and bounded load scenarios.<br>&emsp; + Build a runner to coordinate preparation, execution, and result storage.<br>- Build a dashboard for run configuration, charts, status, and history.<br>&emsp; + Add metric summaries, data consistency checks, and initial checks against available APIs. | 21/10/2026 | 21/10/2026 | [Grafana k6: per-user scenarios](https://grafana.com/docs/k6/latest/using-k6/scenarios/executors/per-vu-iterations/); [Grafana k6: JSON measurement output](https://grafana.com/docs/k6/latest/results-output/real-time/json/) |
| 6 | - Receive the application with buyer accounts from the teammate and review its contract and actual data.<br>- Adapt Test Lab to integrate with API 3.0 using separate test data.<br>&emsp; + Check available seats, last-seat contention, request replay, changed content with the same key, duplicate booking, and ticket access rights.<br>- Audit data after testing, add regression tests, and check the dashboard in a browser.<br>- Complete documentation, review, and hand over the testing code. | 23/10/2026 | 23/10/2026 | [Grafana k6: sessions and cookies](https://grafana.com/docs/k6/latest/using-k6/cookies/); [AWS: DynamoDB transactions](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/transaction-apis.html) |
| 7 | - Review the merged application and Test Lab with the teammate.<br>- Standardize work records, project context, collaboration rules, and Git guidance.<br>&emsp; + Clarify reference sources and implementation evidence.<br>- Compare the application version with the test suite and identify updates needed before the next test round. | 24/10/2026 | 24/10/2026 | [Git worktree](https://git-scm.com/docs/git-worktree) |

### Week 4 Achievements:

* **Buyer journey and scope:** Agreed that buyers need an account before booking, while event browsing remains public. Defined three test groups and the required evidence for booking outcomes, responses, and data consistency.
* **Collaboration:** Separated application and testing responsibilities, using separate branches/worktrees and test data for parallel work. The testing work received and integrated with the buyer and administrator journeys developed by the teammate.
* **Test suite:** Built Event Test Lab with data preparation, load simulation, a runner, a dashboard, result storage, and database auditing. Dashboard status, charts, and history use actual measurements.
* **Integration and verification:** On API 3.0, the 2-user/4-seat test created exactly 2 tickets; the 2-user/1-seat test created only 1 ticket. Request replay, rejection of changed content with the same key, duplicate prevention, and ticket access checks passed; ticket records and seat counts matched after testing.
* **Quality and handover:** Testing records report 28/28 passing Test Lab unit tests, successful dashboard build/lint, and passing browser checks. The code was merged and pushed to the remote; work records, project context, collaboration rules, and Git guidance were standardized.
* **Next steps:** The application now uses contract 4.1, while Test Lab has integration evidence only for contract 3.0. Compatibility updates and small test reruns are needed before 100-user scenarios. Large-load results and AWS autoscaling have not been demonstrated; AWS deployment, OTP, and payment are not implemented.
