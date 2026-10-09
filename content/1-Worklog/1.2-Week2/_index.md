---
title: "Week 2 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.2. </b> "
---

### Week 2 Objectives:

* Confirm the MVP scope and prepare the local development environment for the serverless event registration website.
* Establish the project skeleton and verify the first local database and backend components.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 5 | - Confirm the MVP scope for the serverless event registration website and document the planned AWS architecture.<br>&emsp; + Define attendee functions for viewing events, capacity, and registration outcomes, and administrator functions for managing events and registration status.<br>&emsp; + Set boundaries for the first implementation, including features outside the MVP and the distinction between local development and later AWS deployment.<br>- Check the tools needed to develop and test the project locally.<br>&emsp; + Check VS Code, Git, Docker Desktop with Linux containers, Docker Compose, AWS SAM CLI, and Python 3.12.<br>- Prepare the initial project structure and development environment.<br>&emsp; + Organize frontend, backend, test, and documentation directories; establish a Python virtual environment and dependency list.<br>&emsp; + Review Git exclusions for virtual environments, local data, build artifacts, and sensitive configuration. | 08/10/2026 | 08/10/2026 | [Python venv](https://docs.python.org/3.12/library/venv.html); [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html); [Git ignore rules](https://git-scm.com/docs/gitignore) |
| 6 | - Configure DynamoDB Local for backend development with Docker Compose.<br>&emsp; + Review the local container configuration, named data volume, and table setup script for events and registrations.<br>&emsp; + Query the local tables and retrieve the sample event to check database access.<br>- Create and check the first backend component with AWS SAM.<br>&emsp; + Define the Python 3.12 Lambda function, GET /health route, and local CORS origins in the SAM template.<br>&emsp; + Validate the SAM template and invoke the handler with a simulated health-check event.<br>- Prepare an initial local frontend page.<br>&emsp; + Add an HTML layout for displaying backend status and a control for checking the backend connection. | 09/10/2026 | 09/10/2026 | [DynamoDB Local](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/DynamoDBLocal.html); [Docker volumes](https://docs.docker.com/engine/storage/volumes/); [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html) |

### Week 2 Achievements:

* **Project scope:** Documented the event registration MVP. Attendees are expected to view events, remaining capacity, and registration outcomes; administrators are expected to manage events, capacity, and registration status. Payment, mobile apps, individual email notifications, and microservices are outside the current scope. S3 with CloudFront, API Gateway, Lambda, and DynamoDB form the planned AWS path, not a deployed system.
* **Development environment:** Confirmed the availability of VS Code, Git, Docker Compose, and AWS SAM CLI. Docker Desktop was running Linux containers, and the project virtual environment uses Python 3.12. The frontend, backend, test, and documentation directories, Python dependency list, and Git ignore rules provide an initial project skeleton.
* **Local database:** Docker Compose defines DynamoDB Local with a named volume, and its container was running. A read-only query confirmed the events and registrations tables and retrieved the sample event. Data retention after a container restart has not been verified.
* **Initial backend:** The SAM template declares a Python 3.12 function, a GET /health route, and local CORS origins; SAM lint validation passed. Direct invocation of the Lambda handler with a simulated event returned statusCode 200 and a JSON body indicating status ok. An HTTP request through SAM Local has not been verified.

