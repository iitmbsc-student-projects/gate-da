---
title: Question-6
pagetitle: Question-6
categories: [DBMS, Relational Algebra]
---


Consider the relation **student** shown in the below table:

| Roll\_no | Name   | marks |
|----------|--------|-------|
| 1        | Ram    | 50    |
| 2        | Rakesh | 65    |
| 3        | Ram    | 45    |
| 4        | Pranav | 89    |
| 5        | Rakesh | 99    |
| 6        | Emily  | 99    |
| 7        | Grace  | 100   |
| 8        | Lily   | 95    |

What is the number of tuples returned by the following relational algebra expression: $\prod_{\text{name}}(\sigma_{\text{marks}>50}(\text{student}))$?



::: {.callout-note title="Answer" collapse=true}

$5$

:::



::: {.callout-note title="Solution" collapse=true}

Relational algebra, based on set theory, returns unique tuples. The query retrieves tuples where the 'marks' are greater than $50$ and projects only the 'name' attribute. The repeated entries, like 'Rakesh', will be returned only once. Hence, only $5$ tuples are returned.

| Name   |
|--------|
| Rakesh |
| Pranav |
| Emily  |
| Grace  |
| Lily   |

:::