---
title: Question-20 
pagetitle: Question-20
order: 20
categories: [Z-test and Confidence Interval]
---
A data scientist wishes to determine the average time it takes to run one epoch of a machine learning model in her machine. How large a sample will she need to be 95\% confident that her sample mean will be within 15 seconds of the true mean? Assume that it is known from previous studies that $\sigma = 40$ seconds.


::: {.callout-note title="Hint" collapse=true}

Use $P(-1.96<Z<1.96)=0.95$.



:::

::: {.callout-note title="Answer" collapse=true}


28

:::

::: {.callout-note title="Solution" collapse=true}
We know that

$P(|Z| \leq Z_{\alpha/2}) = 1-\alpha$

$P\left(-Z_{\alpha/2} \leq Z \leq Z_{\alpha/2}\right) = 1-\alpha$ 

$P\left(-Z_{\alpha/2} \leq \dfrac{\bar{X} -\mu}{\sigma/\sqrt{n}} \leq Z_{\alpha/2}\right) = 1-\alpha$

$P\left(-Z_{\alpha/2} \hspace{1mm}\sigma/\sqrt{n} \leq \bar{X} -\mu  \leq Z_{\alpha/2} \hspace{1mm}\sigma/\sqrt{n}\right) = 1-\alpha$
According to the question,

$P(-15 \leq \bar{X} -\mu \leq 15) = 0.95$

Thus,

$Z_{\alpha/2} \hspace{1mm}(\sigma/\sqrt{n}) = 15 \implies n = \left(\dfrac{Z_{\alpha/2} \hspace{1mm}(\sigma)}{15}\right)^2$

Since $P(-1.96 < Z < 1.96)=0.95$, therefore $Z_{\alpha/2} = 1.96$. Thus,

$n= \left(\dfrac{1.96 \times 40}{15}\right)^2 = 28$

:::