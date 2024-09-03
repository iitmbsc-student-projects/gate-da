---
title: Question-16
pagetitle: Question-16
categories: [DBMS, Key]
---


Consider the relation scheme $R = (E, F, G, H, I, J, K, L, M, N)$ and the set of functional dependencies ${\{E, F\}} \rightarrow \{G\}, \{F\} \rightarrow \{I, J\}, \{E, H\} \rightarrow \{K, L\}, \{K\} \rightarrow \{M\}, \{L\} \rightarrow \{N\}$ on $R$.

What is the key for $R$?

- [ ] $\{E, F\}$
- [ ] $\{E, F, H\}$
- [ ] $\{E, F, H, K, L\}$
- [ ] $\{E\}$



::: {.callout-note title="Answer" collapse=true}

- [ ] $\{E, F\}$
- [x] $\{E, F, H\}$
- [ ] $\{E, F, H, K, L\}$
- [ ] $\{E\}$

:::



::: {.callout-note title="Solution" collapse=true}

To find the key for $R$, compute the closure of the attribute sets:

Given functional dependencies:
- $\{EF\} \rightarrow \{G\}$
- $\{F\} \rightarrow \{I, J\}$
- $\{EH\} \rightarrow \{K, L\}$
- $\{K\} \rightarrow \{M\}$
- $\{L\} \rightarrow \{N\}$

Calculating closures:
- $[\{EF\}]^+ = \{EFGIJ\}$
- $[\{E\}]^+ = \{E\}$
- $[\{EFH\}]^+ = \{EFGHIJKLMN\}$

Since $[\{EFH\}]^+$ contains all the attributes of $R$, $\{EFH\}$ is the key for $R$. Hence, the correct choice is $\{E, F, H\}$.

:::