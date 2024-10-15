---
title: Question-56
pagetitle: Question-56
order: 56
categories: [counting]
---

- How many seven digit phone numbers are possible, assuming that the first digit can't be a $\displaystyle 0$ or a $\displaystyle 1$? 
- How would this answer change if no phone number can start with $\displaystyle 911$?

::: {.callout-note title="Answer" collapse=true}

- $8 \times 10^{6}$
- $8 \times 10^{6} - 10^{4}$

:::

::: {.callout-note title="Solution" collapse=true}

The first slot has $\displaystyle 8$ possibilities. The remaining slots have $\displaystyle 10$ possibilities. Therefore, the number of phone numbers is $\displaystyle 8\times 10^{6}$. For the second part, we subtract all phone numbers starting with $\displaystyle 911$. There are $\displaystyle 10^{4}$ such numbers. So the required answer is $\displaystyle 8\times 10^{6} -10^{4}$.

:::