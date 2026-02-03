---
title: Question-51
pagetitle: Question-51
order: 51
categories: [maxima and minima, optimization, calculus, derivatives, DA-2025]
---

Let $f:\mathbb{R}\rightarrow \mathbb{R}$ be a twice-differentiable function and suppose its second derivative satisfies $f^{\prime \prime }( x)  >0$ for all $x\in \mathbb{R}$. Which of the following statements is/are ALWAYS correct?

 - [ ] $f$ has a local minimum 

 - [ ] There does not exist $x$ and $y$, such that $f^{\prime }( x) =f^{\prime }( y) =0$

 - [ ] $f$ has at most one global minimum

 - [ ] $f$ has at most one local minimum

::: {.callout-note title="Answer" collapse=true}

 - [ ] $f$ has a local minimum 

 - [x] There does not exist $x$ and $y$, such that $f^{\prime }( x) =f^{\prime }( y) =0$

 - [x] $f$ has at most one global minimum

 - [x] $f$ has at most one local minimum

:::

::: {.callout-note title="Solution" collapse=true}

Since $f^{\prime \prime }( x)  >0$ for all $x\in \mathbb{R}$, $f^{\prime } :\mathbb{R}\rightarrow \mathbb{R}$ has to be a strictly increasing function. Since $f^{\prime }$ is strictly increasing, it has to be one-one. That is, $f^{\prime }( x) =f^{\prime }( y) \Longrightarrow x=y$. To put it in another way, there do not exist $x,y$ with $x\neq y$ such that $f^{\prime }( x) =f^{\prime }( y)$. A specific case of this observation is option-(B).

Since $f^{\prime }$ is strictly increasing, it can be equal to zero at most once. This means that $f$ could have at most one local minimum. An example of this would be $f:\mathbb{R}\rightarrow \mathbb{R}$, $f( x) =x^{2}$.

Since $f$ is differentiable and since the domain is $\mathbb{R}$, a global minimum, if it exists, should also be a local minimum. Therefore, $f$ has at most one global minimum. In fact, a stronger statement is this: for the function $f$ given in this question, if $x=a$ is a minimum, then $x=a$ is both local and global.

Finally, $f(x) = e^{x}$ is a counter-example for option-(A). It is a function that doesn't have a minimum, either local or global.

:::