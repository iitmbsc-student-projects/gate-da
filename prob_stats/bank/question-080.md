---
title: Question-80
pagetitle: Question-80
order: 80
categories: [pmf, discrete random variable]
---

Carlsen and Anand play a chess match in which the first player to win a game wins the match. Carlsen wins with probability $0.4$, Anand with probability $0.3$, the game is a draw with probability $0.3$. The match has at most ten games. If all ten games are draws, then the match is a draw. 

## Part-1

What is the probability that Carlsen wins the match? Enter your answer correct to two decimal places.

::: {.callout-note title='Answer' collapse=true}

$0.57$

:::

::: {.callout-note title='Solution' collapse=true}

The required probability is:

$$
0.4 \times [1 + 0.3 + 0.3^{2} + \cdots + 0.3^{9}] \approx 0.57
$$

:::

## Part-2

If the duration of the match is $T$, find its PMF.

- [ ] $\displaystyle p( t) =\begin{cases}
0.3^{t-1} \times 0.7, & 1\leqslant t\leqslant 9\\
0.3^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

- [ ] $\displaystyle p( t) =\begin{cases}
0.4^{t-1} \times 0.7, & 1\leqslant t\leqslant 9\\
0.4^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

- [ ] $\displaystyle p( t) =\begin{cases}
0.3^{t-1} \times 0.4, & 1\leqslant t\leqslant 9\\
0.3^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

::: {.callout-note title='Answer' collapse=true}

- [x] $\displaystyle p( t) =\begin{cases}
0.3^{t-1} \times 0.7, & 1\leqslant t\leqslant 9\\
0.3^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

- [ ] $\displaystyle p( t) =\begin{cases}
0.4^{t-1} \times 0.7, & 1\leqslant t\leqslant 9\\
0.4^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

- [ ] $\displaystyle p( t) =\begin{cases}
0.3^{t-1} \times 0.4, & 1\leqslant t\leqslant 9\\
0.3^{9} , & t=10\\
0, & \text{otherwise}
\end{cases}$

:::

::: {.callout-note title='Solution' collapse=true}

For $1 \leqslant t \leqslant 9$, if $t$ is the duration, then there are $t - 1$ draws. The probability of this is $0.3^{t - 1}$ since all of them are independent. The $t^{th}$ game has a decisive result, which could be a victory for either player. This happens with probability $0.3 + 0.4 = 0.7$. Hence, $P(T = t) = 0.3^{t - 1} \times 0.7$. For $T = 10$, there nine draws and the tenth could have any result. No matter what the result of the last game, the duration will end up being $10$. Hence, this branch has a probability $0.3^{9}$.

:::
