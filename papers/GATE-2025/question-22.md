---
title: Question-22
pagetitle: Question-22
order: 22
categories: [classifier, perceptron, DA-2025]
---

Consider designing a linear classifier

$$
y=\text{sign}( f( x;w,b)) ,\ f( x;w,b) =w^{T} x+b
$$

on a dataset $D=\{( x_{1} ,y_{1}) ,( x_{2} ,y_{2}) ,\cdots ,( x_{N} ,y_{N})\}$, $x_{i} \in \mathbb{R}^{d}$, $y_{i} \in \{-1,1\}$, $i=1,2,\cdots ,N$. Recall that the sign function outputs $+1$ if the argument is positive, and $-1$ if the argument is non-positive. The parameters $w$ and $b$ are updated as per the following training algorithm:

$$
w_{new} =w_{old} +y_{n} x_{n} ;\ b_{new} =b_{old} +y_{n}
$$

whenever $\text{sign}( f( x_{n} ;w,b)) \neq y_{n}$. In other words, whenever the classifier wrongly predicts a sample $( x_{n} ,y_{n})$ from the dataset, $w_{old}$ gets updated to $w_{new}$, and likewise $b_{old}$ gets updated to $b_{new}$. Consider the case $( x_{n} ,+1)$, $f( x_{n} ;w_{old} ,b_{old}) < 0$. Then:

 - [ ] $f( x_{n} ;w_{new} ,b_{new})  >f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $f( x_{n} ;w_{new} ,b_{new}) < f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $f( x_{n} ;w_{new} ,b_{new}) =f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $y_{n} f( x_{n} ;w_{old} ,b_{old})  >1$

::: {.callout-note title="Answer" collapse=true}

 - [x] $f( x_{n} ;w_{new} ,b_{new})  >f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $f( x_{n} ;w_{new} ,b_{new}) < f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $f( x_{n} ;w_{new} ,b_{new}) =f( x_{n} ;w_{old} ,b_{old})$

 - [ ] $y_{n} f( x_{n} ;w_{old} ,b_{old})  >1$


:::

::: {.callout-note title="Solution" collapse=true}

This is a classic description of the perceptron update rule.

We have $y_{n} =1$ and $f( x_{n} ;w_{old} ,b_{old}) < 0$. This means that the point is misclassified. Therefore,

$$
w_{new} =w_{old} +x_{n} ;\ b_{new} =b_{old} +1
$$
Next:

$$
\begin{array}{ r r l }
 & w_{new}^{T} x_{n} +b_{new} & =w_{old}^{T} x_{n} +b_{old}\\
 &  & +x_{n}^{T} x_{n} +1\\
\Longrightarrow  & f( x_{n} ;w_{new} ,b_{new}) &  >f( x_{n} ;w_{old} ,b_{old})
\end{array}
$$

We see that the function's value is pushed higher after the parameter update. That is, the classifier earlier made a mistake of classifying this point as $-1$. With the update, we are moving the classifier in the correct direction as far as the data-point $x_{n}$ is concerned.

:::

