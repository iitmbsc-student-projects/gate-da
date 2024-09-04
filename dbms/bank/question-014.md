---
title: Question-14
pagetitle: Question-14
categories: [DBMS, Key]
---


Consider a relation $R(A, B, C, D, E)$ with the following three functional dependencies: $AB \rightarrow C$, $BC \rightarrow D$, $C \rightarrow E$. The number of super keys in the relation $R$ is _________.



::: {.callout-note title="Answer" collapse=true}

$8$

:::



::: {.callout-note title="Solution" collapse=true}

Given functional dependencies: $AB \rightarrow C$, $BC \rightarrow D$, $C \rightarrow E$

1. Candidate Key: $AB$
2. Candidate Key Combinations with non-prime attributes:
   - Combinations with the remaining attributes $(n - 2)$ where $n$ is the number of Attributes
   - Total number of super keys with combinations: $2^{5-2} = 2^3 = 8$
   
Therefore, there are 8 super keys for the relation $R$, which are: {AB, ABC, ABD, ABE, ABCD, ABDE, ABCE, ABCDE}

:::