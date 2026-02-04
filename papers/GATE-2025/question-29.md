---
title: Question-29
pagetitle: Question-29
order: 29
categories: [sorting, insertion sort, DA-2025]
---

Suppose that insertion sort is applied to the array $[ 1,3,5,7,9,11,x,15,13]$ and it takes exactly two swaps to sort the array. Select all possible values of $x$.

 - [ ] $10$

 - [ ] $12$

 - [ ] $14$
 
 - [ ] $16$

::: {.callout-note title="Answer" collapse=true}

 - [x] $10$

 - [ ] $12$

 - [x] $14$
 
 - [ ] $16$

:::

::: {.callout-note title="Solution" collapse=true}

We are given the array $[ 1,3,5,7,9,11,x,15,13]$. Until the value $11$, the algorithm would not have to perform any swaps. The value of $x$ will determine if the first swap happens at $x$ or not. Also, notice that there is at least one swap involving $13$ at the end. Since all the options are integers, we will inspect the problem only for integers. 

**Case-1**: $x< 11$

The first swap will happen here to give the array $[ 1,3,5,7,9,x,11,15,13]$. Now if $x< 9$, then we will exhaust one more swap here. However, note that this swap is reserved for the $13$ at the end. Therefore, $x\geqslant 9$. This gives us a range for $x$ as $9\leqslant x< 11$. Sticking to integers, $x=9,10$ are two possible values $x$ can take.

**Case-2**: $11\leqslant x\leqslant 13$

In this case, there only one swap is required to sort the array. So all these are ruled out.

**Case-3**: $13< x\leqslant 15$

If $x=14$ or $x=15$, then there are two swaps involving $13$, one with the each of the two values bigger than $13$. Therefore, we get $x=14,15$ as potential candidates.

**Case-4**: $x >15$

Here, the first swap will not happen at $15$ resulting in $[ 1,3,5,7,9,11,15,x,13]$. However, since $x >13$, we will have the second swap which results in $[ 1,3,5,7,9,11,15,13,x]$. But this is still not sorted and we need a third swap to get the sorted array. Therefore, $x >15$ is ruled out.

The final list of values is $9,10,14,15$.

:::