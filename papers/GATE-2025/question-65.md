---
title: Question-65
pagetitle: Question-65
order: 65
categories: [DFS, algorithms, DA-2025]
---

Consider a directed graph $\displaystyle G=( V,E)$, where $\displaystyle V=\{0,1,2,\cdots ,100\}$ and $\displaystyle E=\left\{( i,j) :\ 0< j-i\leqslant 2,\ \text{for all} \ i,j\in V\right\}$. Suppose the adjacency list of each vertex is in decreasing order of vertex number, and depth first search (DFS) is performed at vertex $\displaystyle 0$. The number of vertices that will be discovered after vertex $\displaystyle 50$ is ___ (Answer in integer)

::: {.callout-note title="Answer" collapse=true}

$\displaystyle 75$

:::

::: {.callout-note title="Solution" collapse=true}

The directed graph looks as follows. We show only five nodes here:

![](img-11.png)

If we start DFS at $\displaystyle 0$, then since the adjacency list of $\displaystyle 0$ is $\displaystyle [ 2,1]$, the vertex visited will be $\displaystyle 2$. Extending this logic, DFS will first visit all the even vertices, $\displaystyle 0\rightarrow 2\rightarrow \cdots \rightarrow 100$. Now it begins to backtrack. Since $\displaystyle 100$ was reached from $\displaystyle 98$, it will head back to $\displaystyle 98$ and then visit $\displaystyle 99$. Then to $\displaystyle 96$ and from there to $\displaystyle 97$. Then to $\displaystyle 94$ and from there to $\displaystyle 95$. This pattern of even-odd pair vertices continues until all the vertices are discovered. The upshot is that all the vertices are reachable from $\displaystyle 0$.

Out of the $\displaystyle 101$ vertices, the $\displaystyle 25+1=26$ are discovered when $\displaystyle 50$ is reached. This includes all even vertices starting from $\displaystyle 0$ to $\displaystyle 50$. What remains is $\displaystyle 75$ vertices which are then discovered.

:::