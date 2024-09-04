---
title: Question-24
pagetitle: Question-24
categories: [DBMS, Relational Algebra]
---


Consider the following relations:

```
P(X, Y, Z)
Q(X, Y, T)
R(Y, V)

P        | Q       | R
X  Y  Z  | X  Y  T | Y  V
---------|---------|------
X1 Y1 Z1 | X2 Y1 2 | Y1 V1
X1 Y1 Z2 | X1 Y2 5 | Y3 V2
X2 Y2 Z2 | X1 Y1 6 | Y2 V3
X2 Y4 Z4 | X3 Y3 1 | Y2 V2
```

How many tuples will be returned by the following relational algebra query?
${ \left[ \Pi_X \left( \sigma (P.Y=R.Y \land R.V=V2) (P \times R) \right) - \Pi_X \left( \sigma (Q.Y=R.Y \land Q.T > 2) (Q \times R) \right) \right] }$



::: {.callout-note title="Answer" collapse=true}

$1$

:::



::: {.callout-note title="Solution" collapse=true}

Let's break down the query:

1. ${ \sigma (P.Y=R.Y \land R.V=V2) (P \times R) }$: This performs a natural join between P and R where Y values match in P and R and where R.V = V2.
2. ${ \sigma (Q.Y=R.Y \land Q.T > 2) (Q \times R) }$: This performs a natural join between Q and R where Y values match in Q and R and where Q.T > 2.
3. ${ \Pi_X (\sigma (P.Y=R.Y \land R.V=V2) (P \times R)) - \Pi_X (\sigma (Q.Y=R.Y \land Q.T > 2) (Q \times R)) }$: This subtracts the result of the second operation from the first one based on the X attribute.

The query finds tuples where P.Y matches R.Y and R.V equals V2, then subtracts tuples where Q.Y matches R.Y and Q.T is greater than 2. The final result will have only 1 tuple after performing the subtraction operation.

:::