---
title: Question-13
pagetitle: Question-13
order: 13
categories: [set theory, aptitude]
---

In an engineering college of 10,000 students, 1,500 like neither their core branches nor other branches. The number of students who like their core branches is $1/4^{th}$ of the number of students who like other branches. The number of students who like both their core and other branches is 500.

The number of students who like their core branches is

- [ ] 1,800
- [ ] 3,500
- [ ] 1,600
- [ ] 1,500

::: {.callout-note title="Answer" collapse=true}

- [x] 1,800
- [ ] 3,500
- [ ] 1,600
- [ ] 1,500

:::

::: {.callout-note title="Soluton" collapse=true}

Let the number of students who like their core branches be $x$. The number of students who like other branches is $4x$. Let $A$ and $B$ be the set of students who like their core branches and other branches respectively. If the set of all students is $U$, then:

$$
\begin{aligned}
|A| & =x\\
|B| & =4x\\
|A^{C} \cap B^{C} | & =1500\\
|A\cap B| & =500\\
|U| & =10,000
\end{aligned}
$$

We can now see that:
$$
\begin{aligned}
|A\cup B| & =|U|-|( A\cup B)^{C} |\\
 & =10,000-1500\\
 & =8,500
\end{aligned}
$$

Finally:

$$
\begin{aligned}
|A\cup B| & =|A|+|B|-|A\cap B|\\
8500 & =x+4x-500\\
5x & =9000\\
x & =1800
\end{aligned}
$$


:::