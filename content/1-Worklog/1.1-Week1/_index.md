---
title: "Week 1: Project Research and Serverless Architecture"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
### Week 1 Objectives:

* Review the AWS FCAJ workshop requirements and identify the information needed for a project proposal.
* Explore a practical AWS project topic, an initial architecture, and cost-conscious scope.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| 4 | - Review the AWS FCAJ workshop requirements and the structure expected for a technical project proposal.<br>&emsp; + Examine the problem statement, objectives, scope, initial architecture, implementation plan, cost estimate, and risk sections.<br>&emsp; + Study the requirements for an AWS architecture diagram and the Well-Architected design criteria, with particular attention to Security.<br>- Explore online event registration as a candidate project problem.<br>&emsp; + Consider the needs of attendees and administrators, including event discovery, registration, event creation, and registration status.<br>&emsp; + Identify concurrent registration and event capacity as topics requiring further design. | 30/09/2026 | 30/09/2026 | [FCAJ workshop requirements](https://hcm-rules.awsfcaj.com/3-project/); [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) |
| 6 | - Study a small serverless architecture for the candidate event registration platform.<br>&emsp; + Review the roles and connections of Amazon S3, Amazon API Gateway, AWS Lambda, and Amazon DynamoDB in the proposed request flow.<br>&emsp; + Consider Amazon CloudWatch for monitoring, AWS IAM for access control, and Terraform as an optional infrastructure tool.<br>- Examine technical questions that could affect the architecture.<br>&emsp; + Consider scaling, access permissions, simultaneous registration, and preventing registration beyond event capacity.<br>- Compare the initial serverless scope with a broader set of AWS services under the available budget.<br>&emsp; + Review whether ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53, and CloudFront are necessary for the first implementation.<br>&emsp; + Review AWS pricing resources for later estimation without treating a cost figure as finalized. | 02/10/2026 | 02/10/2026 | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html); [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html); [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html); [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html); [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html); [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html); [AWS Pricing Calculator](https://calculator.aws/) |

### Week 1 Achievements:

* **Workshop requirements:** Identified the inputs needed for a project proposal: a problem and solution overview, goals and scope, challenges, initial architecture, plan and timeline, cost estimate, and risks with mitigations. Selected Security for particular attention when using AWS Well-Architected, alongside Reliability, Performance Efficiency, Cost Optimization, and Operational Excellence.
* **Preliminary project direction:** Considered Design and Implementation of a Scalable and Cost-Efficient Serverless Event Registration Platform on AWS as a candidate topic, not an approved project. The possible functions are listing events, registering attendees, and allowing administrators to create events and change registration status. Concurrent registrations and event capacity remain open design questions.
* **Initial architecture:** Identified a small architecture for further evaluation: a static frontend on Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB. Amazon CloudWatch could support logging and monitoring, AWS IAM could manage access, and Terraform remains optional. Scaling, permissions, and preventing registrations beyond capacity still need design work.
* **Scope and cost:** Prioritized further study of the smaller serverless option because of the limited budget. ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53, and CloudFront are outside the initial scope under consideration; later requirements may justify adding them. No detailed cost estimate, deployment, or measurement has been completed.
