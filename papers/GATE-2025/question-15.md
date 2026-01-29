---
title: Question-15
pagetitle: Question-15
order: 15
categories: [propositional logic, DA-2025]
---

Let $p$ and $q$ be any two propositions. Consider the following propositional statements:

 - $S_{1} :p\rightarrow q$
 - $S_{2} :\neg p\land q$
 - $S_{3} :\neg p\lor q$
 - $S_{4} :\neg p\lor \neg q$

where $\land$ denotes conjunction (AND operation), $\lor$ denotes disjunction (OR operation), and $\neg$ denotes negation (NOT operation). Which one of the following operations is correct. (Note: $\equiv$ denotes logical equivalence)

 - [ ] $S_{1} \equiv S_{3}$

 - [ ] $S_{2} \equiv S_{3}$

 - [ ] $S_{2} \equiv S_{4}$

 - [ ] $S_{1} \equiv S_{4}$

::: {.callout-note title="Answer" collapse=true}

 - [x] $S_{1} \equiv S_{3}$

 - [ ] $S_{2} \equiv S_{3}$

 - [ ] $S_{2} \equiv S_{4}$

 - [ ] $S_{1} \equiv S_{4}$

:::

::: {.callout-note title="Solution" collapse=true}

Let us draw the truth table:

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
p & q & S_{1} & S_{2} & S_{3} & S_{4}\\
\hline
0 & 0 & 1 & 0 & 1 & 1\\
\hline
0 & 1 & 1 & 1 & 1 & 1\\
\hline
1 & 0 & 0 & 0 & 0 & 1\\
\hline
1 & 1 & 1 & 0 & 1 & 0\\
\hline
\end{array}
$$

Two statements are equivalent if their truth tables are identical. From this, we see that $S_{1} \equiv S_{3}$.

:::