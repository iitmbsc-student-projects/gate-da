---
title: Question-21
pagetitle: Question-21
categories: [DBMS, Normalization]
---


Relation $R$ has eight attributes $ABCDEFGH$. Fields of $R$ contain only atomic values. Given functional dependencies $F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}$, such that $F^+$ is exactly the set of FDs that hold for $R$. Determine the normal form of relation $R$.

- [ ] in 1NF, but not in 2NF.
- [ ] in 2NF, but not in 3NF.
- [ ] in 3NF, but not in BCNF.
- [ ] in BCNF.



::: {.callout-note title="Answer" collapse=true}

- [x] in 1NF, but not in 2NF.
- [ ] in 2NF, but not in 3NF.
- [ ] in 3NF, but not in BCNF.
- [ ] in BCNF.

:::



::: {.callout-note title="Solution" collapse=true}

Given FD set:
$F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}$

Candidate keys: {AD, ED, FD, BD}

Testing for normal forms:

BCNF: 
- $CH \rightarrow G$ (violates BCNF as $CH$ is not a super key)
- $A \rightarrow BC$ (does not violate BCNF)

3NF: 
- $A \rightarrow BC$ (violates 2NF as $A$ is a proper subset of the candidate key $AD$)
- $B \rightarrow CFH$ (does not violate 3NF)

2NF: 
- $A \rightarrow BC, B \rightarrow CFH$ (violates 2NF as $A$ and $B$ are not super keys)

Therefore, the relation is in 1NF but not in 2NF (option a).

:::