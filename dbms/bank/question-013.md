---
title: Question-13
pagetitle: Question-13
categories: [DBMS, ER-model]
---


Consider an Entity-Relationship (ER) model in which entity sets $E_1$ and $E_2$ are connected by an $m: n$ relationship $R_{12}$. $E_1$ and $E_3$ are connected by a $1: n$ relationship $R_{13}$. $E_1$ has two single-valued attributes $a_{11}$ and $a_{12}$ of which $a_{11}$ is the key attribute. $E_2$ has two single-valued attributes $a_{21}$ and $a_{22}$ of which $a_{21}$ is the key attribute. $E_3$ has two single-valued attributes $a_{31}$ and $a_{32}$ of which $a_{31}$ is the key attribute. The relationships do not have any attributes. If a relational model is derived from the above ER model, then the minimum number of relations that would be generated if all the relations are in 3NF is__________.



::: {.callout-note title="Answer" collapse=true}

$4$

:::



::: {.callout-note title="Solution" collapse=true}

1. $R_{12}$ represents a many-to-many relationship between $E_1$ and $E_2$, so a separate table is created:
   - $E_1$ ($a_{11}$, $a_{12}$)
   - $E_2$ ($a_{21}$, $a_{22}$)
   - $R_{12}$ ($a_{11}$, $a_{21}$)

2. $R_{13}$ represents a $1: n$ relationship between $E_1$ and $E_3$:
   - $E_1$ ($a_{11}$, $a_{12}$) with $a_{11} \rightarrow a_{12}$
   - $E_3$ $R_{13}$ ($a_{31}$, $a_{32}$, $a_{11}$) with $a_{31} \rightarrow a_{32} \,|\, a_{11}$

For 3NF:
- $E_1$ ($a_{11}$, $a_{12}$) with $a_{11} \rightarrow a_{12}$
- $E_2$ ($a_{21}$, $a_{22}$) with $a_{21} \rightarrow a_{22}$
- $R_{12}$ ($a_{11}$, $a_{21}$)
- $E_3$ $R_{13}$ ($a_{31}$, $a_{32}$, $a_{11}$) with $a_{31} \rightarrow a_{32} \,|\, a_{11}$

Thus, the minimum number of relations required for 3NF is 4.

:::