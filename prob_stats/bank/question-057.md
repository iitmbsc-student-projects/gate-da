---
title: Question-57
pagetitle: Question-57
order: 57
categories: [counting]
---

You plan to go out for dinner each night of a certain week. There are ten restaurants that you have shortlisted. How many schedules are possible if you don't want to eat at the same place twice in a row (or more)?

::: {.callout-note title="Answer" collapse=true}

$10 \times 9^{4}$

:::

::: {.callout-note title="Solution" collapse=true}

The required count is $\displaystyle 10\times 9^{4}$. On the first day, you can go to any of the ten restaurants. On the second day, you can go to any of the restaurants other than the one you went to on the first day, which results in $\displaystyle 9$ choices. A similar arguments is true for the remaining days. On each of the days, you exclude the choice of the previous day.

:::