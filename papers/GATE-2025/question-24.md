---
title: Question-24
pagetitle: Question-24
order: 24
categories: [derivatives, calculus, differentiability, DA-2025]
---

Consider two functions $f:\mathbb{R}\rightarrow \mathbb{R}$ and $g:\mathbb{R}\rightarrow ( 1,\infty )$. Both functions are differentiable at a point $c$. Which of the following functions is/are ALWAYS differentiable at $c$? The symbol $\cdot$ denotes product and the symbol $\circ$ denotes composition of functions.

 - [ ] $f\pm g$

 - [ ] $f\cdot g$

 - [ ] $\cfrac{f}{g}$

 - [ ] $f\circ g+g\circ f$

::: {.callout-note title="Answer" collapse=true}

 - [x] $f\pm g$

 - [x] $f\cdot g$

 - [x] $\cfrac{f}{g}$

 - [ ] $f\circ g+g\circ f$

:::

::: {.callout-note title="Solution" collapse=true}

 - The sum of two functions that are differentiable at a point are also differentiable.

 - The product rule shows that $f\cdot g$ is differentiable at $c$.

 - The quotient rule shows that $\cfrac{f}{g}$ is differentiable at $c$. Also note that the quotient rule is applicable since $g( c) \neq 0$.

 - $f\circ g$ or $g\circ f$ may not be differentiable at $c$. For example, consider $g( x) =1+\cfrac{1}{1+|x|}$ and $f( x) =x-2$. Then, we see that $( g\circ f)( x) =1+\cfrac{1}{1+|x-2|}$. Now, for $c=2$, both $g$ and $f$ are differentiable. However, $g\circ f$ isn't.

:::