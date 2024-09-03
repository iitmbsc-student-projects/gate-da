---
title: Question-11
pagetitle: Question-11
order: 11
categories: [Bernoulli Distribution]
---

Suppose that $P(X=a) = p \hspace{1mm}\text{and} \hspace{1mm} P(X=b) = 1-p$. 


### Question - 11 (a)

---
order: 2
categories: [Bernoulli Distribution]
---

 Idenitfy the distribution of $\dfrac{X-b}{a-b}$.

- [ ] Binomial distribution
- [ ] Negative Binomial distribution
- [ ] Bernoulli distribution
- [ ] Cannot determine

::: {.callout-note title="Hint" collapse=true}

Substitute the values of $X$ and try to identify the distribution.

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] Binomial distribution
- [ ] Negative Binomial distribution
- [x] Bernoulli distribution
- [ ] Cannot determine

:::

::: {.callout-note title="Solution" collapse=true}

 Since $\dfrac{X-b}{a-b}$ will equal 1 with probability $p$, or 0 with probability $1-p$.  
Therefore, it follows bernoulli distribution.

:::

### Question - 11 (b)

---
order: 2
categories: [Bernoulli Distribution]
---

 Find the value of Var$(X)$.

- [ ] $p(1-p)$  
  
- [ ] $\dfrac{p(1-p)}{(a-b)^2}$
  
- [ ] $(a-b)^2 \hspace{0.5mm}p\hspace{0.5mm}(1-p)$ 
- [ ] $np(1-p)$ 

::: {.callout-note title="Hint" collapse=true}

Start with the Var$\left(\dfrac{X-b}{a-b}\right)$.

:::

::: {.callout-note title="Answer" collapse=true}


- [ ] $p(1-p)$  
  
- [ ] $\dfrac{p(1-p)}{(a-b)^2}$
  
- [x] $(a-b)^2 \hspace{0.5mm}p\hspace{0.5mm}(1-p)$ 
- [ ] $np(1-p)$ 

:::

::: {.callout-note title="Solution" collapse=true}

 Since $\dfrac{X-b}{a-b}$ is a bernoulli random variable will take value 1 with probability $p$, or 0 with probability $1-p$.
 Thus, $p(1-p)=\text{Var}\left(\dfrac{X-b}{a-b}\right) = \dfrac{1}{(a-b)^2} \text{Var}(X-b)=\dfrac{1}{(a-b)^2} \text{Var}(X)$  
$\implies p(1-p) = \dfrac{1}{(a-b)^2} \text{Var}(X)$  
$\implies \text{Var}(X) = (a-b)^2p(1-p)$

:::