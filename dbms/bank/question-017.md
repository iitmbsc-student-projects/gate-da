---
title: Question-17
pagetitle: Question-17
categories: [DBMS, Key]
---


Relation $R$ has eight attributes $ABCDEFGH$. Fields of $R$ contain only atomic values.

$F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}$ is a set of functional dependencies (FDs) such that $F^+$ is exactly the set of FDs that hold for $R$.

How many candidate keys does the relation $R$ have?

- [ ] $3$
- [ ] $4$
- [ ] $5$
- [ ] $6$



::: {.callout-note title="Answer" collapse=true}

- [ ] $3$
- [x] $4$
- [ ] $5$
- [ ] $6$

:::



::: {.callout-note title="Solution" collapse=true}

Given FD set:
- $CH \rightarrow G$
- $A \rightarrow B$
- $A \rightarrow C$
- $B \rightarrow C$
- $B \rightarrow F$
- $B \rightarrow H$
- $E \rightarrow A$
- $F \rightarrow E$
- $F \rightarrow G$

Calculating closures:
- $[A]^+ = \{ABCDEFGH\}$
- $[AD]^+ = \{ABCDEFGH\}$
- $[ED]^+ = \{ABCDEFGH\}$
- $[FD]^+ = \{ABCDEFGH\}$
- $[BD]^+ = \{ABCDEFGH\}$

The attribute $D$ is not present in the FD set, so whenever an attribute is not present in the FDs, adding that attribute forms a candidate key. Therefore, candidate keys = $[AD, ED, FD, BD]$, leading to $4$ candidate keys for relation $R$. Hence, the correct answer is $4$.

:::