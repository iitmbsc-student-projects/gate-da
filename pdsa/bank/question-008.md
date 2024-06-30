---
title: Question-8
pagetitle: Question-8
categories: [GATE-2021, Data Structures, Trees]
---

## Question 8

Consider a complete binary tree with 7 nodes. Let $A$ denote the set of first 3 elements obtained by performing Breadth-First Search (BFS) starting from the root. Let $B$ denote the set of first 3 elements obtained by performing Depth-First Search (DFS) starting from the root. The value of $|A - B|$ is _________.



::: {.callout-note title="Answer" collapse=true}

$1$

:::



::: {.callout-note title="Feedback" collapse=true}

![image](https://hackmd.io/_uploads/S1Lh9BiV6.png)

Breadth-First Search = $1,2,3,4,5,6,7$  
Depth-First Search = $1,2,4,5,3,6,7$  

$A = \{1, 2, 3\}$  
$B = \{1, 2, 4\}$  

$A - B = \{3\}$  

Hence, the value of $|A - B|$ will be $1$ after performing the said operation on a complete binary tree.

:::