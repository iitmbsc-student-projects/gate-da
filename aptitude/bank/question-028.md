---
title: Question-28
pagetitle: Question-28
order: 28
categories: [probability, aptitude]
---

A fair six-faced dice, with the faces labelled '1', '2', '3', '4', '5', and '6', is rolled thrice. What is the probability of rolling '6' exactly once?

- [ ] 75/216
- [ ] 1/6
- [ ] 1/18
- [ ] 25/216

::: {.callout-note title="Answer" collapse=true}

- [x] 75/216
- [ ] 1/6
- [ ] 1/18
- [ ] 25/216


:::

::: {.callout-note title="Soluton" collapse=true}

Let $\displaystyle E$ be the event that six occurs exactly once. The only six could turn up in any one of the three throws. Call these events $\displaystyle E_{1} ,E_{2} ,E_{3}$, where $\displaystyle E_{i}$ is the event that the only six occurs in the $\displaystyle i^{\text{th}}$ throw. Then, we see that $\displaystyle E=E_{1} \cup E_{2} \cup E_{3}$ and $\displaystyle E_{1} ,E_{2} ,E_{3}$ are mutually exclusive. Therefore:

$$
\begin{aligned}
P( E) & =P( E_{1}) +P( E_{2}) +P( E_{3})\\
 & \\
 & =\frac{1}{6} \times \frac{5}{6} \times \frac{5}{6} +\frac{1}{6} \times \frac{5}{6} \times \frac{1}{6} +\frac{5}{6} \times \frac{5}{6} \times \frac{1}{6}\\
 & \\
 & =\frac{75}{216}
\end{aligned}
$$


:::


