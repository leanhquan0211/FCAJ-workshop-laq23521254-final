---
title: "Week 1 Worklog"
date: 2024-01-01
weight: 1
chapter: false
pre: " <b> 1.1. </b> "
---
{{% notice warning %}}
Week 1 records research and a preliminary project direction. The topic, architecture, and scope have not been finalized or implemented.
{{% /notice %}}

### Week 1 Objectives:

* Review the AWS FCAJ workshop requirements and identify the information needed for a project proposal.
* Explore a practical AWS project topic, an initial architecture, and cost-conscious scope.

### Tasks to be carried out this week:

| Day | Task | Start Date | Completion Date | Reference Material |
| --- | --- | --- | --- | --- |
| — | **Work Done:** Reviewed the workshop requirements, including proposal sections, architecture diagrams, and AWS Well-Architected guidance.<br>**Results:** Identified the proposal inputs to prepare: problem and solution overview, goals and scope, challenges, initial architecture, plan and timeline, cost estimate, and risks with mitigations. Noted Security as a priority alongside Reliability, Performance Efficiency, Cost Optimization, and Operational Excellence. | — | — | [FCAJ workshop requirements](https://hcm-rules.awsfcaj.com/3-project/); [AWS Well-Architected](https://aws.amazon.com/architecture/well-architected/) |
| — | **Work Done:** Explored an online event registration platform as a candidate project topic.<br>**Results:** Outlined a possible scope: list events, register attendees, and let administrators create events and change registration status. Identified concurrent registrations and capacity limits as questions for further study. | — | — | [FCAJ workshop requirements](https://hcm-rules.awsfcaj.com/3-project/) |
| — | **Work Done:** Studied a small serverless architecture for the candidate topic.<br>**Results:** Considered a static frontend on Amazon S3 → Amazon API Gateway → AWS Lambda → Amazon DynamoDB, with Amazon CloudWatch for logs and monitoring and AWS IAM for access control. Terraform remains an optional infrastructure-as-code tool. Scaling, permissions, and preventing registrations beyond event capacity still need design work. | — | — | [S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html); [API Gateway](https://docs.aws.amazon.com/apigateway/latest/developerguide/welcome.html); [Lambda](https://docs.aws.amazon.com/lambda/latest/dg/welcome.html); [DynamoDB](https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Introduction.html); [CloudWatch](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/WhatIsCloudWatch.html); [IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html) |
| — | **Work Done:** Compared the initial scope with a broader service set under a limited budget.<br>**Results:** Prioritized further study of the smaller serverless option. ECS/Fargate, Application Load Balancer, RDS, NAT Gateway, WAF, Secrets Manager, Route 53, and CloudFront are outside the initial scope under consideration; services may be added if later requirements justify them. A detailed cost estimate has not been completed. | — | — | [AWS Pricing Calculator](https://calculator.aws/) |

### Week 1 Achievements:

* Established a **preliminary project direction**, not an approved topic: **Design and Implementation of a Scalable and Cost-Efficient Serverless Event Registration Platform on AWS**.
* Defined the candidate business functions and key open questions around simultaneous registration, event capacity, security, and scaling.
* Identified a small serverless architecture for further evaluation and recorded cost as a design constraint. No AWS resources were deployed or measured during this work.
