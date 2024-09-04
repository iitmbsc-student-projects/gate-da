---
title: Question-12
pagetitle: Question-12
categories: [DBMS, ER-model]
---


In an Entity-Relationship (ER) model, suppose $R$ is a many-to-one relationship from entity set $E1$ to entity set $E2$. Assume that $E1$ and $E2$ participate totally in $R$ and that the cardinality of $E1$ is greater than the cardinality of $E2$. Which one of the following is true about $R$?

- [ ] Every entity in $E1$ is associated with exactly one entity in $E2$.
- [ ] Some entity in $E1$ is associated with more than one entity in $E2$.
- [ ] Every entity in $E2$ is associated with exactly one entity in $E1$.
- [ ] Every entity in $E2$ is associated with at most one entity in $E1$.



::: {.callout-note title="Answer" collapse=true}

- [x] Every entity in $E1$ is associated with exactly one entity in $E2$.
- [ ] Some entity in $E1$ is associated with more than one entity in $E2$.
- [ ] Every entity in $E2$ is associated with exactly one entity in $E1$.
- [ ] Every entity in $E2$ is associated with at most one entity in $E1$.

:::



::: {.callout-note title="Solution" collapse=true}

Given that $R$ is a many-to-one relationship from $E1$ to $E2$ and both $E1$ and $E2$ participate totally in $R$, and the cardinality of $E1$ is greater than the cardinality of $E2$, the correct option is:

- Every entity in $E1$ is associated with exactly one entity in $E2$.

This aligns with the conditions of a many-to-one relationship where every entity in $E1$ maps to exactly one entity in $E2$, ensuring total participation and many-to-one from $E1$ to $E2$.

:::