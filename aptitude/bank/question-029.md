---
title: Question-29
pagetitle: Question-29
order: 29
categories: [counting, aptitude]
---

A shop has 4 distinct flavors of ice-cream. One can purchase any number of scoops of any flavor. The order in which the scoops are purchased is inconsequential. If one wants to purchase 3 scoops of ice-cream, in how many ways can one make that purchase?

- [ ] 4
- [ ] 20
- [ ] 24
- [ ] 48

::: {.callout-note title="Answer" collapse=true}

- [ ] 4
- [x] 20
- [ ] 24
- [ ] 48

:::

::: {.callout-note title="Soluton" collapse=true}

Let the number of scoops of ice-cream purchased of type $\displaystyle i$ be $\displaystyle x_{i}$. Then, we have:

$$
x_{1} +x_{2} +x_{3} +x_{4} =3
$$

where $\displaystyle 0\leqslant x_{i} \leqslant 3$. The number of solutions to this equation is the same as the number of ways of purchasing ice-creams. The number of solutions is given by $\displaystyle \binom{3+3}{3} =20$.

:::