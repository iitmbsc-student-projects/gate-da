---
title: Question-59
pagetitle: Question-59
order: 59
categories: [counting]
---

A knock-out tournament is held with $\displaystyle 2^{n}$ tennis players. In each round, the winner of a game moves to the next round while the loser is eliminated.

- [ ] There are $\displaystyle n$ rounds in total.

- [ ] There are $\displaystyle 2n$ rounds in total.

- [ ] The total number of games played is $\displaystyle n^{2}$

- [ ] The total number of games played is $\displaystyle 2^{n} -1$

::: {.callout-note title="Answer" collapse=true}

- [x] There are $\displaystyle n$ rounds in total.

- [ ] There are $\displaystyle 2n$ rounds in total.

- [ ] The total number of games played is $\displaystyle n^{2}$

- [x] The total number of games played is $\displaystyle 2^{n} -1$

:::

::: {.callout-note title="Solution" collapse=true}

In every round, half the number of players participating in that round advance to the next round. In the first round, $\displaystyle 2^{n}$ players play, $\displaystyle 2^{n-1}$ advance from $\displaystyle 2^{n-1}$ games. In the second round, $\displaystyle 2^{n-2}$ players advance from the $\displaystyle 2^{n-2}$ games. Continuing with this pattern, we can deduce that there are $\displaystyle n$ rounds and $\displaystyle 2^{n-1} +\cdots +1=2^{n} -1$ games across all rounds. 

A simpler way of arriving at the total number of games played is to look at the number of players who need to be eliminated. Since the tournament has exactly one winner, $\displaystyle 2^{n} -1$ players need to be eliminated. Each game results in exactly one elimination and each player gets eliminated just once. From this, we see that the total number of games played is $\displaystyle 2^{n} -1$.

:::