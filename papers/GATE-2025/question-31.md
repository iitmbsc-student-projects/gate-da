---
title: Question-31
pagetitle: Question-31
order: 31
categories: [Bayes theorem, probability, DA-2025]
---

There are three boxes containing white and black balls.

 - Box-1 contains 2 black and 1 white balls.
 - Box-2 contains 1 black and 2 white balls.
 - Box-3 contains 3 black and 3 white balls.

In a random experiment, one of these three boxes is selected, where the probability of choosing Box-1 is $\cfrac{1}{2}$, Box-2 is $\cfrac{1}{6}$, and Box-3 is $\cfrac{1}{3}$. A ball is drawn at random from the selected box. Given that the ball drawn is white, the probability that it is drawn from Box-2 is ____ (Round off to two decimal places)


::: {.callout-note title="Answer" collapse=true}

$0.25$

:::

::: {.callout-note title="Solution" collapse=true}

Classic Bayes' theorem question. Let $B_{1} ,B_{2} ,B_{3}$ be the events that boxes 1, 2 and 3 are chosen respectively. Let $W$ be the event that a white ball is drawn. We need to find $P( B_{2} \ |\ W)$. We have:

$$
\begin{aligned}
P( B_{2} \ |\ W) & =\cfrac{P( B_{2} \cap W)}{P( W)}\\
 & \\
 & =\cfrac{P( B_{2}) \cdot P( W\ |\ B_{2})}{P( B_{1}) \cdot P( W\ |\ B_{1}) +P( B_{2}) \cdot P( W\ |\ B_{2}) +P( B_{3}) \cdot P( W\ |\ B_{3})}\\
 & \\
 & =\cfrac{\cfrac{1}{6} \times \cfrac{2}{3}}{\cfrac{1}{2} \times \cfrac{1}{3} +\cfrac{1}{6} \times \cfrac{2}{3} +\cfrac{1}{3} \times \cfrac{1}{2}}\\
 & \\
 & =\cfrac{\cfrac{1}{9}}{\cfrac{1}{6} +\cfrac{1}{9} +\cfrac{1}{6}}\\
 & \\
 & =\cfrac{1}{4}
\end{aligned}
$$


:::