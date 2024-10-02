git ---
title: Question-10
pagetitle: Question-10
categories: [GATE-2021, Data Structures, Graph]
---

Let $G$ be a connected undirected weighted graph. Consider the following two statements.

S1: There exists a minimum weight edge in $G$ which is present in every minimum spanning tree of $G$.

S2: If every edge in $G$ has distinct weight, then $G$ has a unique minimum spanning tree.

Which one of the following options is correct?


- [ ] $S1$ is false and $S2$ is true
- [ ] Both $S1$ and $S2$ are false
- [ ] $S1$ is true and $S2$ is false
- [ ] Both $S1$ and $S2$ are true



::: {.callout-note title="Answer" collapse=true}

- [x] $S1$ is false and $S2$ is true
- [ ] Both $S1$ and $S2$ are false
- [ ] $S1$ is true and $S2$ is false
- [ ] Both $S1$ and $S2$ are true

:::



::: {.callout-note title="Solution" collapse=true}

The Kruskal's algorithm can be used to discover the Minimum Spanning Tree on a graph $G$. When implementing Kruskal's algorithm, edges are sorted by weight, and the smallest edge is chosen first. However, $S1$ is false because the Kruskal's method may not always choose a particular weighted edge if there are multiple copies of it. It does not guarantee the selection of a specific minimum weight edge present in every minimum spanning tree.

$S2$ is True. Kruskal's algorithm will always choose a distinct set of edges, resulting in a distinct minimal spanning tree if the sorted order of the edges contains only distinct values due to its reliance on sorting and selecting edges with distinct weights.

:::