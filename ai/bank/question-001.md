---
title: Question-1
pagetitle: Question-1
order: 1
categories: [logic, DA-2024]
---

Let $x$ and $y$ be two propositions. Which of the following statements are tautologies?

- [ ] $(\neg x \land y) \implies (y \implies x)$
- [ ] $(x \land \neg y) \implies (\neg x \implies y)$
- [ ] $(\neg x \land y) \implies (\neg x \implies y)$
- [ ] $(x \land \neg y) \implies (y \implies x)$

::: {.callout-note title="Answer" collapse=true}

- [ ] $(\neg x \land y) \implies (y \implies x)$
- [x] $(x \land \neg y) \implies (\neg x \implies y)$
- [x] $(\neg x \land y) \implies (\neg x \implies y)$
- [x] $(x \land \neg y) \implies (y \implies x)$

:::

::: {.callout-note title="Solution" collapse=true}

Let us view each of these options as $P \implies Q$. For this to be a tautology, $Q$ should be true whenenever $P$ is true. So we need to look for those values of $x, y$ for which $P$ is true.

- $(\neg x \land y) \implies (y \implies x)$
  - $P$ is true when $x$ is false and $y$ is true.
  - $Q$ would be false.
  - Thus $P \implies Q$ is false.
  - It follows that $P \implies Q$ is not a tautology.
- $(x \land \neg y) \implies (\neg x \implies y)$
  - $P$ is true when $x$ is true and $y$ is false.
  - $Q$ would be true.
  - Thus $P \implies Q$ is true.
  - It follows that $P \implies Q$ is a tautology.
- A similar argument holds for the remaining options.

:::