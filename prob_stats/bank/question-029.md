---
title: Question-29 
pagetitle: Question-29
order: 29
categories: [Z-Test]
---
Suppose $X \sim Normal (\mu, 4)$. For $n=20$ i.i.d. samples of $X$, the observed sample mean is 5.2. What conclusion would a z-test reach if the null hypothesis assumes $\mu = 5$ (against an alternative hypothesis $\mu \neq 5$) at a significance level of $\alpha = 0.05 ?$

Use $F_Z(-1.9599) = 0.025$  

- [ ] Accept $H_0$
  
- [ ] Reject $H_0$

  

::: {.callout-note title="Hint" collapse=true}
If $X \sim \text{Normal}(\mu, \sigma^2)$, then $\overline{X} \sim \text{Normal}\left(\mu,\dfrac{\sigma^2}{n}\right)$. Thus,
If $X \sim \text{Normal}(\mu, 4)$, then $\overline{X} \sim \text{Normal}\left(\mu,\dfrac{4}{20}\right)$

Test will be : Reject $H_0$ if 
$|\overline{X} - 5| > c \implies \overline{X} > 5+c ~~\text{or}~~ \overline{X} < 5-c$

Use $\alpha = P\left(\text{Reject}~~ H_0 ~|~ H_0 \right) = P\left( |\overline{X} - 5| > c ~|~ \mu = 5 \right)$. 
Find the value of $c$ by solving the above part and then make conclusion.




:::

::: {.callout-note title="Answer" collapse=true}
- [x] Accept $H_0$
  
- [ ] Reject $H_0$

  

:::

::: {.callout-note title="Solution" collapse=true}
If $X \sim \text{Normal}(\mu, 4)$, then $\overline{X} \sim \text{Normal}\left(\mu,\dfrac{4}{20}\right)$

Test will be : Reject $H_0$ if 
$|\overline{X} - 5| > c \implies \overline{X} > 5+c ~~\text{or}~~ \overline{X} < 5-c$

Use $\alpha = P\left(\text{Reject}~~ H_0 ~|~ H_0 \right) = P\left( |\overline{X} - 5| > c ~|~ \mu = 5 \right)$.
$\implies 0.05 = P\left( |\overline{X} - 5| > c ~|~ \mu = 5 \right)$ 
$\implies 0.05 = P\left( \left|\dfrac{\overline{X} - 5 }{2/\sqrt{20}} \right| > \dfrac{c}{2/\sqrt{20}}\right)$

$\implies 0.05 = P\left( \left| Z \right| > \dfrac{c}{2/\sqrt{20}}\right)$

$\implies 0.05 = 2 F_Z \left(\dfrac{-c}{2/\sqrt{20}}\right) \implies F_Z \left(\dfrac{-c}{2/\sqrt{20}}\right) = 0.025$ 

$\implies c = -\dfrac{2}{\sqrt{20}} F_Z^{-1}(0.025) = -\dfrac{2}{\sqrt{20}} \times (-1.9599) = 0.8765$

Since $5.2-5 < c$, therefore we will accept $H_0$.
:::