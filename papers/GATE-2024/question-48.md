---
title: Question-48
pagetitle: Question-48
order: 48
categories: [linear algebra,system of equations,DA-2024]
---

Which of the following statements is/are true?

**Note**: $\mathbb{R}$ denotes the set of all real numbers.

- [ ] There exist $\mathbf{M} \in \mathbb{R}^{3 \times 3}, \mathbf{p} \in \mathbb{R}^{3}$ and $\mathbf{q} \in \mathbb{R}^{3}$ such that $\mathbf{Mx} = \mathbf{p}$ has a unique solution and $\mathbf{Mx} = \mathbf{q}$ has infinite solutions.
- [ ] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{3\times 3} ,\mathbf{p} \in \mathbb{R}^{3}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{3}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has no solutions and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has infinite solutions.
- [ ] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{2\times 3} ,\mathbf{p} \in \mathbb{R}^{2}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{2}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has a unique solution and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has infinite solutions.
- [ ] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{3\times 2} ,\mathbf{p} \in \mathbb{R}^{3}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{3}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has a unique solution and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has no solutions.

::: {.callout-note title="Answer" collapse=true}

- [ ] There exist $\mathbf{M} \in \mathbb{R}^{3 \times 3}, \mathbf{p} \in \mathbb{R}^{3}$ and $\mathbf{q} \in \mathbb{R}^{3}$ such that $\mathbf{Mx} = \mathbf{p}$ has a unique solution and $\mathbf{Mx} = \mathbf{q}$ has infinite solutions.
- [x] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{3\times 3} ,\mathbf{p} \in \mathbb{R}^{3}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{3}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has no solutions and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has infinite solutions.
- [ ] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{2\times 3} ,\mathbf{p} \in \mathbb{R}^{2}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{2}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has a unique solution and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has infinite solutions.
- [x] There exist $\displaystyle \mathbf{M} \in \mathbb{R}^{3\times 2} ,\mathbf{p} \in \mathbb{R}^{3}$ and $\displaystyle \mathbf{q} \in \mathbb{R}^{3}$ such that $\displaystyle \mathbf{Mx} =\mathbf{p}$ has a unique solution and $\displaystyle \mathbf{Mx} =\mathbf{q}$ has no solutions.

:::

::: {.callout-note title="Solution" collapse=true}

The key to solving this problem is to note the following facts about a general system $Ax = b$, where $A \in \mathbb{R}^{m \times n}$ , $b \in \mathbb{R}^m$:

- $Ax = b$ has a solution if $b$ is in the column space of $A$.
- If $Ax = b$ has a solution, it is unique if and only if the columns of $A$ are linearly independent.
- The columns of $A$ are linearly independent if and only if $A$ has full column rank.

Thus we can divide the problem into three cases:

**Case-1**: $m > n$

If $A$ has full column rank, we can always find:

- $b_1$, some vector in the column space
- $b_2$, some vector not in the column space

The first leads to a unique solution and the next gives no solution.

If $A$ is rank deficient, we can always find:

- $b_1$, some vector in the column space
- $b_2$, some vector not in the column space

The first leads to infinite solutions and the next gives no solution.

**Case-2**: $m = n$

If $A$ has full column rank, we are guaranteed a unique solution for any $b$.

If $A$ is rank deficient, the analysis is similar to the second point in case-1

**Case-3**: $m < n$

We can never get a unique solution as this system can never have full column rank. But we can still end up with a situation similar to the second point in case-1.

:::