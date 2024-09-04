---
title: Question-1
pagetitle: Question-1
categories: [relational algebra]
---

Consider two relations $\mathbf{s}(A, B, C)$ and $\mathbf{r}(P, Q, C)$ such that relation $\mathbf{s}$ has $30$ rows and relation $\mathbf{r}$ has $12$ rows. What is the maximum number of rows that are possible in $\mathbf{r} \bowtie \mathbf{s}$?

::: {.callout-note title="Answer" collapse=true}

$360$

:::



::: {.callout-note title="Solution" collapse=true}

The maximum number of rows in the natural join ${ \mathbf{r} \bowtie \mathbf{s} }$ occurs when every row in relation ${ \mathbf{r} }$ can match with every row in relation ${ \mathbf{s} }$ based on the common attribute ${ C }$. Given that ${ \mathbf{r} }$ has 12 rows and ${ \mathbf{s} }$ has 30 rows, if each value of ${ C }$ in ${ \mathbf{r} }$ matches with all rows in ${ \mathbf{s} }$, the join will produce ${ 12 \times 30 = 360 }$ rows, which is the maximum possible number.

:::