---
title: Question-28
pagetitle: Question-28
categories: [DBMS]
---

Which of the following query transformations (i.e., replacing the l.h.s. expression by the r.h.s expression) is incorrect? R1 and R2 are relations, C1 and C2 are selection conditions and A1 and A2 are attributes of R1.

- [ ] $\sigma_{C1}(\sigma_{C2}(R1))\rightarrow \sigma_{C2}(\sigma_{C1}(R1))$
- [ ] $\sigma_{C1}(\pi_{A1}(R1))\rightarrow \pi_{A1}(\sigma_{C1}(R1))$
- [ ] $\sigma_{C1}(R1\cup R2)\rightarrow \sigma_{C1}(R1)\cup \sigma_{C1}(R2)$
- [ ] $\pi_{A1}(\sigma_{C1}(R1))\rightarrow \sigma_{C1}(\pi_{A1}(R1))$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\sigma_{C1}(\sigma_{C2}(R1))\rightarrow \sigma_{C2}(\sigma_{C1}(R1))$
- [ ] $\sigma_{C1}(\pi_{A1}(R1))\rightarrow \pi_{A1}(\sigma_{C1}(R1))$
- [ ] $\sigma_{C1}(R1\cup R2)\rightarrow \sigma_{C1}(R1)\cup \sigma_{C1}(R2)$
- [x] $\pi_{A1}(\sigma_{C1}(R1))\rightarrow \sigma_{C1}(\pi_{A1}(R1))$

:::