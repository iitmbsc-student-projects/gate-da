---
title: Question-18
pagetitle: Question-18
categories: [DBMS, Functional dependency]
---


Suppose the following functional dependencies hold on a relation $U$ with attributes $P, Q, R, S,$ and $T$:
- $P \rightarrow QR$
- $RS \rightarrow T$

Which of the following functional dependencies can be inferred from the above functional dependencies?

- [ ] $PS \rightarrow T$
- [ ] $R \rightarrow T$
- [ ] $P \rightarrow R$
- [ ] $PS \rightarrow Q$



::: {.callout-note title="Answer" collapse=true}

- [x] $PS \rightarrow T$
- [ ] $R \rightarrow T$
- [x] $P \rightarrow R$
- [x] $PS \rightarrow Q$

:::



::: {.callout-note title="Solution" collapse=true}

Given FD set: 
- $P \rightarrow QR$
- $RS \rightarrow T$

Inferring functional dependencies:
- $(PS)^+ = \{PQRST\}$; Therefore, $PS \rightarrow T$ can be inferred.
- $(R)^+ = \{R\}$; $R \rightarrow T$ cannot be inferred.
- $(P)^+ = \{PQR\}$; Therefore, $P \rightarrow R$ can be inferred.
- $(PS)^+ = \{PQRST\}$; Therefore, $PS \rightarrow Q$ can be inferred.

Hence, the inferred functional dependencies are $PS \rightarrow T, P \rightarrow R,$ and $PS \rightarrow Q$.

:::