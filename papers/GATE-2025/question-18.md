---
title: Question-18
pagetitle: Question-18
order: 18
categories: [hash table, collision, linear probing, data structures, DA-2025]
---

Consider a hash table of size $10$ with indices $\{0,1,\cdots ,9\}$ with the hash function:

$$
h( x) \equiv 3x\ \left(\text{mod} \ 10\right)
$$
where linear probing is used to handle collisions. The hash table is initially empty and then the following sequence of keys is inserted into the hash table: $1,4,5,6,14,15$. The indices where the keys $14$ and $15$ are stored are, respectively

 - [ ] $2$ and $5$

 - [ ] $2$ and $6$

 - [ ] $4$ and $5$

 - [ ] $4$ and $6$

::: {.callout-note title="Answer" collapse=true}

 - [ ] $2$ and $5$

 - [ ] $2$ and $6$

 - [ ] $4$ and $5$

 - [x] $4$ and $6$

:::

::: {.callout-note title="Solution" collapse=true}

The hash function evaluations are given below. The collisions are highlighted in red. The index after the collision has been resolved is given in green.

$$
\begin{array}{ c c c }
x & h( x) & \text{index}\\
1 & 3 & 3\\
4 & 2 & 2\\
5 & 5 & 5\\
6 & 8 & 8\\
\textcolor[rgb]{0.99,0.13,0.23}{14} & \textcolor[rgb]{0.99,0.13,0.23}{2} & \textcolor[rgb]{0.49,0.83,0.13}{4}\\
\textcolor[rgb]{0.99,0.13,0.23}{15} & \textcolor[rgb]{0.99,0.13,0.23}{5} & \textcolor[rgb]{0.49,0.83,0.13}{6}
\end{array}
$$

For the input $14$, the hash value is $2$. The index $2$ is occupied, so there is a collision. Since we are using linear probing, we look at the next immediate entry in the table. The index $3$ is also occupied. We look at the next index, which is $4$, and that happens to be free. So $14$ is placed at index $4$. The input $15$ collides at index $5$. The next immediate spot is $6$, which is free for occupation.

:::