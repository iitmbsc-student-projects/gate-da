---
title: Question-25
pagetitle: Question-25
categories: [DBMS, Relational Algebra]
---


Consider the relations $r(A, B)$ and $s(B, C)$, where $s.B$ is a primary key and $r.B$ is a foreign key referencing $s.B$. Consider the query.
${ Q: r \bowtie (\sigma_{B<5} (S)) }$
Let LOJ denote the natural left outer-join operation. Assume that $r$ and $s$ contain no null values. Which one of the following queries is NOT equivalent to Q?

- [ ] ${ \sigma_{B<5} (r \bowtie s) }$
- [ ] ${ \sigma_{B<5} (r \text{ LOJ } s) }$
- [ ] ${ r \text{ LOJ } (\sigma_{B<5} (s)) }$
- [ ] ${ \sigma_{B<5} (r) \text{ LOJ } s }$



::: {.callout-note title="Answer" collapse=true}

- [ ] ${ \sigma_{B<5} (r \bowtie s) }$
- [ ] ${ \sigma_{B<5} (r \text{ LOJ } s) }$
- [x] ${ r \text{ LOJ } (\sigma_{B<5} (s)) }$
- [ ] ${ \sigma_{B<5} (r) \text{ LOJ } s }$

:::



::: {.callout-note title="Solution" collapse=true}

Let's analyze each query:

- (a) ${ \sigma_{B<5} (r \bowtie s) }$: Selects tuples from the natural join of r and s where B is less than 5.
- (b) ${ \sigma_{B<5} (r \text{ LOJ } s) }$: Selects tuples from the left outer-join of r and s where B is less than 5.
- (c) ${ r \text{ LOJ } (\sigma_{B<5} (s)) }$: Performs a left outer-join of r with tuples from s where B is less than 5. This is different from the original query Q.
- (d) ${ \sigma_{B<5} (r) \text{ LOJ } s }$: Selects tuples from r where B is less than 5 and then performs a left outer-join with s.

Hence, the query that is NOT equivalent to Q is (c) ${ r \text{ LOJ } (\sigma_{B<5} (s)) }$.

:::