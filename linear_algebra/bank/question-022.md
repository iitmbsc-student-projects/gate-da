---
title: Question-22
pagetitle: Question-22
order: 22
categories: [linear transformation]
---

Let $T: \mathbb{R}^{3} \rightarrow \mathbb{R}$ be a function. Select all linear transformations.

- [ ] $T(v) = ||v||$
- [ ] $T(v) = v_1 + v_2 + v_3$, where $v = (v_1, v_2, v_3)$
- [ ] $T(v) = \text{smallest component of } v$
- [ ] $T(v) = 0$

::: {.callout-note title="Answer" collapse=true}

- [ ] $T(v) = ||v||$
- [x] $T(v) = v_1 + v_2 + v_3$, where $v = (v_1, v_2, v_3)$
- [ ] $T(v) = \text{smallest component of } v$
- [x] $T(v) = 0$

:::

::: {.callout-note title="Solution" collapse=true}

The correct options are quite easy to see. Let us see why the incorrect options are not linear transformations.

<u>Option-1</u>

This doesn't satisfy $T(cv) = cT(v)$. For example, $T(-v) = ||v||$ and not $-||v||$.

<u>Option-3</u>

This doesn't satisfy $T(cv) = cT(v)$. For example, $v = (1, 2, 3)$. Here $T(v) = 1$. But $T(-v) = -3$ and not $-1$.

:::

