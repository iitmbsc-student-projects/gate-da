---
title: Question-32
pagetitle: Question-32
order: 32
categories: [limits, calculus, DA-2025]
---

$\lim\limits _{t\rightarrow \infty } \ \sqrt{t^{2} +t} -t=$____ 

(Round off to one decimal place) 

::: {.callout-note title="Answer" collapse=true}

$0.5$

:::

::: {.callout-note title="Solution" collapse=true}

Rationalizing the numerator, we have:

$$
\begin{aligned}
\sqrt{t^{2} +t} -t & =\frac{\left(\sqrt{t^{2} +t} -t\right)\left(\sqrt{t^{2} +t} +t\right)}{\sqrt{t^{2} +t} +t}\\
 & \\
 & =\frac{t^{2} +t-t^{2}}{\sqrt{t^{2} +t} +t}\\
 & \\
 & =\frac{t}{\sqrt{t^{2} +t} +t}\\
 & \\
 & =\frac{1}{\sqrt{1+\frac{1}{t}} +1}
\end{aligned}
$$

Now, we have

$$
\lim\limits _{t\rightarrow \infty } \ \frac{1}{\sqrt{1+\frac{1}{t}} +1} =\frac{1}{2}
$$

:::