---
title: Question-9
pagetitle: Question-9
order: 9
categories: [function]
---

Consider the function $f(x)= x+\cfrac{1}{x}$. Which of the following options are correct?

- [ ] $f$  is an injective function, if the domain of $f$ is $\mathbb{R}\setminus\{0\}$.
- [ ] $f$  is an injective function if the domain of $f$ is $\mathbb{N}$.
- [ ] $f$  is an injective function if the domain of $f$ is $\mathbb{Q}\setminus\{0\}$.
- [ ] $f$  is an injective function if the domain of $f$ is $\mathbb{Z}\setminus\{0\}$.
- [ ] $f$  is a surjective function if the domain of $f$ is $\mathbb{N}$ and co-domain of $f$ is $\mathbb{Q}$.
- [ ] $f$  is a surjective function if the domain of $f$ is $\mathbb{Z}\setminus\{0\}$ and co-domain of $f$ is $\mathbb{Q}$.

::: {.callout-note title="Answer" collapse=true}

- [ ] $f$  is an injective function, if the domain of $f$ is $\mathbb{R}\setminus\{0\}$.
- [x] $f$  is an injective function if the domain of $f$ is $\mathbb{N}$.
- [ ] $f$  is an injective function if the domain of $f$ is $\mathbb{Q}\setminus\{0\}$.
- [x] $f$  is an injective function if the domain of $f$ is $\mathbb{Z}\setminus\{0\}$.
- [ ] $f$  is a surjective function if the domain of $f$ is $\mathbb{N}$ and co-domain of $f$ is $\mathbb{Q}$.
- [ ] $f$  is a surjective function if the domain of $f$ is $\mathbb{Z}\setminus\{0\}$ and co-domain of $f$ is $\mathbb{Q}$.

:::

::: {.callout-note title="Solution" collapse=true}

We have:
$$
f( x) =x+\frac{1}{x}
$$

Let us first try to see what all values this function can take for its natural domain, $\displaystyle \mathbb{R} \backslash \{0\}$:

$$
\begin{aligned}
x+\frac{1}{x} & =y\\
x^{2} -yx+1 & =0
\end{aligned}
$$

For $\displaystyle x\in \mathbb{R} \backslash \{0\}$, the discriminant of the above equation has to be non-negative:

$$
y^{2} -4\geqslant 0\Longrightarrow y\in ( \infty ,-2] \cup [ 2,\infty )
$$

Thus the range of $\displaystyle f$ is $\displaystyle ( \infty ,-2] \cup [ 2,\infty )$.

Let us now probe the injectivity of $\displaystyle f$:

$$
\begin{aligned}
f( x_{1}) & =f( x_{2})\\
x_{1} +\frac{1}{x_{1}} & =x_{2} +\frac{1}{x_{2}}\\
x_{1} -x_{2} +\frac{x_{2} -x_{1}}{x_{1} x_{2}} & =0\\
\frac{( x_{1} -x_{2})( x_{1} x_{2} -1)}{x_{1} x_{2}} & =0\\
( x_{1} -x_{2})( x_{1} x_{2} -1) & =0
\end{aligned}
$$

This suggests one of two possibilities:

$$
x_{1} =x_{2} \ \ \text{OR} \ \ x_{1} x_{2} =1
$$

With this background work, let us now jump into the options:

**Option-1**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{R} \backslash \{0\}$

We see that $\displaystyle f$ is not injective. One simple example is $\displaystyle f( 2) =f\left(\frac{1}{2}\right)$.

**Option-2**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{N}$

$\displaystyle f$ has to be injective. Recall the condition $\displaystyle x_{1} x_{2} =1$. If $\displaystyle x_{1} ,x_{2} \in \mathbb{N}$, then $\displaystyle x_{1} =x_{2} =1$.

**Option-3**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{Q} \backslash \{0\}$

Not injective. Similar to option-1

**Option-4**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{Z} \backslash \{0\}$

$\displaystyle f$ is injective. Similar to option-2

**Option-5**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{N}$ and co-domain is $\displaystyle \mathbb{Q}$

$\displaystyle f$ cannot be surjective as $\displaystyle 1\in \mathbb{Q}$, but $\displaystyle 1$ is not in the range of $\displaystyle f$.

**Option-6**: Domain of $\displaystyle f$ is $\displaystyle \mathbb{Z}$ and co-domain is $\displaystyle \mathbb{Q}$

$\displaystyle f$ cannot be surjective. Similar to option-5


:::