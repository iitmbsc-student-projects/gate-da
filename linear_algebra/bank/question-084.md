---
title: Question-84
pagetitle: Question-84
order: 84
categories: [orthogonality, linear independence, span, basis]
---

If $\displaystyle u,v,w$ are distinct vectors in $\displaystyle \mathbb{R}^{2}$ that are pairwise orthogonal, which of the following are true?

- [ ] $\displaystyle u,v,w$ are linearly independent
- [ ] $\displaystyle u,v,w$ are linearly dependent
- [ ] Each of $\displaystyle \{u,v\}$, $\displaystyle \{v,w\}$ and $\displaystyle \{u,w\}$ is a basis for $\displaystyle \mathbb{R}^{2}$
- [ ] $\displaystyle \text{span}\{u,v,w\} =\mathbb{R}^{3}$

::: {.callout-note title="Hint" collapse=true}

Are all three vectors non-zero?

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle u,v,w$ are linearly independent
- [x] $\displaystyle u,v,w$ are linearly dependent
- [ ] Each of $\displaystyle \{u,v\}$, $\displaystyle \{v,w\}$ and $\displaystyle \{u,w\}$ is a basis for $\displaystyle \mathbb{R}^{2}$
- [ ] $\displaystyle \text{span}\{u,v,w\} =\mathbb{R}^{3}$

:::

::: {.callout-note title="Solution" collapse=true}


If $\displaystyle u,v,w$ are distinct vectors that are pairwise orthogonal, one of them has to be zero. If none of them are zero, then $\displaystyle \{u,v,w\}$ is independent, which can't be the case since these three vectors are in $\displaystyle \mathbb{R}^{2}$.

Without loss of generality, let $\displaystyle u=0$. Then, $\displaystyle v,w$ are non-zero. We see that $\displaystyle \{u,v,w\}$ is linearly dependent. Only $\displaystyle \{v,w\}$ is a basis of $\displaystyle \mathbb{R}^{2}$ and $\displaystyle \text{span}\{u,v,w\} =\mathbb{R}^{2}$.

:::
