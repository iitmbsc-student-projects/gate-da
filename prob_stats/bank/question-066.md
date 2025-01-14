---
title: Question-66 
pagetitle: Question-66
order: 66
categories: [Conditional PDF]
---

Suppose the joint probability density function (PDF) of $X$ and $Y$ is given as:

 $f_{XY}(x,y) = \begin{cases}
 6xy^2, &~ 0 \leq x \leq 1, 0 \leq y \leq 1\\
 0, &~\text{otherwise}. 
\end{cases}$


Choose the correct options. (Select all that apply)



- [ ]  $f_X(x) = 3x, ~ 0\leq x \leq 1$

  
- [ ] $f_{Y|X}(y | x) = 3xy^2, ~ 0 \leq y \leq 1$

  
- [ ] $f_{Y|X}(y | x) = 3y^2, ~ 0 \leq y \leq 1$ 
  

- [ ] $E[Y | X = x] = \dfrac{3}{4}$
 
  
::: {.callout-note title="Hint" collapse=true}




:::

::: {.callout-note title="Answer" collapse=true}

- [ ]  $f_X(x) = 3x, ~ 0\leq x \leq 1$

  
- [ ] $f_{Y|X}(y | x) = 3xy^2, ~ 0 \leq y \leq 1$

  
- [x] $f_{Y|X}(y | x) = 3y^2, ~ 0 \leq y \leq 1$ 
  

- [x] $E[Y | X = x] = \dfrac{3}{4}$
 
  
:::

::: {.callout-note title="Solution" collapse=true}
$f_{XY}(x,y) = \begin{cases}
 6xy^2, &~ 0 \leq x \leq 1, 0 \leq y \leq 1\\
 0, &~\text{otherwise}. 
\end{cases}$

$f_X(x) = \int_{y=0}^{1}f_{XY}(x,y) dy = \int_{y=0}^{1} 6xy^2 dy = 6x \int_{y=0}^{1}y^2dy = 6x\left[\dfrac{y^3}{3}\right]_{0}^{1} = 2x$ for $0 \leq x \leq 1$.

Thus, first option is incorrect.

Now, $f_{Y|X}(y | x) = \dfrac{f_{XY}(x,y)}{f_X(x)} = \dfrac{6xy^2 }{2x} = 3y^2$. Thus, the third option is correct and second option is incorrect.

$E[Y | X = x] = \int_{0}^{1}y f_{Y|X}(y | x) dy = \int_{0}^{1} y. 3y^2 dy = 3 \int_{0}^{1} y^3 dy = 3 \left[\dfrac{y^4}{4}\right]_{0}^{1} = \dfrac{3}{4}$. Hence, fourth option is correct.




:::