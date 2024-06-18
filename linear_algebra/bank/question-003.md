---
title: Question-3
pagetitle: Question-3
order: 3
categories: [system of equations]
---

Select all correct options concerning a system of linear equations given by $Ax = b$, where $A$ is a $m \times n$ matrix, $x \in \mathbb{R}^{n}$ and $b \in \mathbb{R}^{m}$.

- [ ] The solution to this system is given by $A^{-1} b$.

- [ ] The system has a solution if and only if $b$ is one of the columns of $A$.

- [ ] The system has a solution if and only if $b$ is in the column-space of $A$.

- [ ] If this system is consistent, it can have either a unique solution or infinitely many solutions.

::: {.callout-note title="Answer" collapse=true}

- [ ] The solution to this system is given by $A^{-1} b$.

- [ ] The system has a solution if and only if $b$ is one of the columns of $A$.

- [x] The system has a solution if and only if $b$ is in the column-space of $A$.

- [x] If this system is consistent, it can have either a unique solution or infinitely many solutions.

:::

::: {.callout-note title="Solution" collapse=true}

- The system is consistent if $b$ can be expressed as a linear combination of the columns of $A$.
- A consistent system that has at least two solutions cannot have finitely many solutions. To see why this is true, let $x_1$ and $x_2$ be two solutions to $Ax = b$ with $x_1 \neq x_2$. Then $(a + 1)x_1 - ax_2$ is also a solution for $a \in \mathbb{N}$. Using this, one can generate infinitely many solutions.

:::
