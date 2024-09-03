---
title: Question-28
pagetitle: Question-28
order: 28
categories: [geometry]
---

Let $u$ and $v$ be two vectors in $\mathbb{R}^{2}$ that satisfy $||u|| = 2 ||v||$. What is the value of $\alpha$ such that $w = u + \alpha v$ bisects the angle between $u$ and $v$?

::: {.callout-note title="Answer" collapse=true}

$2$

:::

::: {.callout-note title="Solution" collapse=true}

If we have two vectors $x$ and $y$ such that $||x|| = ||y||$, then the parallelogram formed by these two vectors turns out to be a rhombus. By the paralellogram law of vector addition, we know that $x$ and $y$ form two sides of a parallelogram whose diagonal is $x + y$. When $||x|| = ||y||$, this parallelogram is actually a rhombus, which is a parallelogram all of whose sides are equal. In a rhombus, the diagonals bisect the angle between the sides. Hence $x + y$ is the angle bisector of $x$ and $y$.



![](img-1.svg){width=100%}



We can now use this idea to solve the given problem. We are given that $w = u + \alpha v$. If $\alpha = 2$, then we have $w = u + 2v$, in which the vectors being summed have equal norm. This comes from the data given to us: $||u|| = 2||v||$. This guarantees that $w$ is an angle bisector of $u$ and $2v$, which is the same as the angle bisector of $u$ and $v$. Recall that scaling a vector by a positive constant doesn't change its direction. Hence, $\boxed{\alpha = 2}$.

:::

