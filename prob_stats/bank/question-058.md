---
title: Question-58
pagetitle: Question-58
order: 58
categories: [counting]
---

A round-robin tournament is one in which every player plays against every other player exactly once. Consider a round-robin tournament with $\displaystyle n$ players in which each game can result in either a win or a loss (no draws are possible). Define an outcome-list of a tournament to be the list of the names of winners and losers for each game.

- [ ] The total number of games played is $\displaystyle 2^{n}$

- [ ] The total number of games played is $\displaystyle \binom{n}{2}$

- [ ] The total number of outcome-lists for a specific tournament is $\displaystyle 2^{n}$

- [ ] The total number of outcome-lists for a specific tournament is $\displaystyle 2^{\binom{n}{2}}$

::: {.callout-note title="Answer" collapse=true}

- [ ] The total number of games played is $\displaystyle 2^{n}$

- [x] The total number of games played is $\displaystyle \binom{n}{2}$

- [ ] The total number of outcome-lists for a specific tournament is $\displaystyle 2^{n}$

- [x] The total number of outcome-lists for a specific tournament is $\displaystyle 2^{\binom{n}{2}}$

:::

::: {.callout-note title="Solution" collapse=true}

There are $\displaystyle n$ choices for the first player and $\displaystyle n-1$ choices for the second player. Using the multiplication rule, we have $\displaystyle n( n-1)$ choices for a pair of players. However, a game is an unordered pair, so we have $\displaystyle n( n-1) /2$ games in total. Alternatively, a game is a choice of two players from the set of $\displaystyle n$ players. The total number of games is given by $\displaystyle \binom{n}{2}$.

Given a tournament, each game has two possibilities. Therefore, the total number of outcome-lists would be $\displaystyle 2^{\binom{n}{2}}$.

:::