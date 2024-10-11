---
title: Question-35
pagetitle: Question-35
categories: [DBMS]
---

Consider the following schedule for transactions $T1, T2$ and $T3$:


| $\mathbf{T1}$     | $\mathbf{T2}$     | $\mathbf{T3}$     |
| ----------------- | ----------------- | ----------------- |
| $\text{Read}(X)$  |                   |                   |
|                   | $\text{Read}(Y)$  |                   |
|                   |                   | $\text{Read}(Y)$  |
|                   | $\text{Write}(Y)$ |                   |
| $\text{Write}(X)$ |                   |                   |
|                   |                   | $\text{Write}(X)$ |
|                   | $\text{Read}(X)$  |                   |
|                   | $\text{Write}(X)$ |                   |

Which one of the schedules below is the correct serialization of the above?

- [ ] $T1\rightarrow T3 \rightarrow T2$
- [ ] $T2\rightarrow T1 \rightarrow T3$
- [ ] $T2\rightarrow T3 \rightarrow T1$
- [ ] $T3\rightarrow T1 \rightarrow T2$

::: {.callout-note title="Answer" collapse=true}

- [x] $T1 \rightarrow T3 \rightarrow T2$
- [ ] $T2 \rightarrow T1 \rightarrow T3$
- [ ] $T2 \rightarrow T3 \rightarrow T1$
- [ ] $T3 \rightarrow T1 \rightarrow T2$

:::

