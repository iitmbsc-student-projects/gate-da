---
title: Question-49
pagetitle: Question-49
categories: [Python]
---

Which of the following is/are always **true** about the Floyd-Warshall algorithm?

- [ ] If the shortest path entry `SP[i][i]`in the resultant matrix is negative, then it represents the graph has a negative weight cycle.
- [ ] The time complexity of Floyd-Warshall is $O(V^2)$, where V is the number of vertices in the graph.
- [ ] It works correctly if the graph has negative edge weights but does not have negative weight cycles.
- [ ] The formula to compute the shortest path from vertex `i` to `j` in Floyd-Warshall algorithm is :
​      $SP^k[i,j]=min[SP^{k−1}[i,j]+SP^{k−1}[i,k], SP^{k−1}[k,j]]$

::: {.callout-note title="Answer" collapse=true}

- [x] If the shortest path entry `SP[i][i]`in the resultant matrix is negative, then it represents the graph has a negative weight cycle.
- [ ] The time complexity of Floyd-Warshall is $O(V^2)$, where V is the number of vertices in the graph.
- [x] It works correctly if the graph has negative edge weights but does not have negative weight cycles.
- [ ] The formula to compute the shortest path from vertex `i` to `j` in Floyd-Warshall algorithm is :
​      $SP^k[i,j]=min[SP^{k−1}[i,j]+SP^{k−1}[i,k], SP^{k−1}[k,j]]$

:::
