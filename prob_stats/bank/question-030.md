---
title: Question-30 
pagetitle: Question-30
order: 30
categories: [Z-Test]
---
There are a $40\%$ proportion of girls in a school. The principal of the school suspects that girls are more likely to score a GPA more than 8. In a sample of 100 students who scored more than 8 GPA, 49 were found to be girls. Is the data enough, at a significance level of 0.05, to conclude that girls are more likely to score more than 8 GPA $?$

Use $F_Z^{-1}(0.95) = 1.64$  

- [ ] Yes
  
- [ ] No

  

::: {.callout-note title="Hint" collapse=true}
Null and alternative hypothesis will be:

$H_0 : p = 0.4$ and $H_1 : p > 0.4$

Define $T$ as ``number of girls who scored more than 8 GPA". 
Thus, when null hypothesis is true, $T \sim \text{Binomial}\left(100, 0.4\right)$

Therefore, $E[T] = 100 \times 0.4 = 40$ and $\text{Var}(T) = 100 \times 0.4 \times 0.6 = 24$

Using CLT, we can write $\dfrac{T-40}{24} \sim N(0,1)$

Test will be : Reject $H_0$ if 
$T > c$

Use $\alpha = P\left(\text{Reject}~~ H_0 ~|~ H_0 \right)$.

Find the value of $c$ by solving the above part and then make conclusion.




:::

::: {.callout-note title="Answer" collapse=true}
- [x] Yes
  
- [ ] No

  

:::

::: {.callout-note title="Solution" collapse=true}

:::