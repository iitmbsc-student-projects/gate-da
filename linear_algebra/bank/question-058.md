---
title: Question-58
pagetitle: Question-58
order: 58
categories: [subspace]
---

Let $\displaystyle V$ be a vector space and let $\displaystyle S_{1}$ and $\displaystyle S_{2}$ be subspaces of $\displaystyle V$ such that $\displaystyle S_{1} \cap S_{2} =\{0\}$. We have a vector $\displaystyle v\in V$ and vectors $\displaystyle u_{1} ,v_{1} \in S_{1}$ and $\displaystyle u_{2} ,v_{2} \in S_{2}$  such that the following holds:

\begin{equation*}
\begin{aligned}
v & =v_{1} +v_{2} =u_{1} +u_{2}
\end{aligned}
\end{equation*}

Which of the following statements are true?

- [ ] $\displaystyle v_{1} =v_{2}$
- [ ] $\displaystyle u_{1} =u_{2}$
- [ ] $\displaystyle v_{1} =u_{1}$
- [ ] $\displaystyle v_{2} =u_{2}$

::: {.callout-note title="Answer" collapse=true}

- [ ] $\displaystyle v_{1} =v_{2}$
- [ ] $\displaystyle u_{1} =u_{2}$
- [x] $\displaystyle v_{1} =u_{1}$
- [x] $\displaystyle v_{2} =u_{2}$

:::

::: {.callout-note title="Solution" collapse=true}

Let us consider the difference $\displaystyle ( v_{1} +v_{2}) -( u_{1} +u_{2})$:

$$
\begin{equation*}
\begin{aligned}
0 & =( v_{1} +v_{2}) -( u_{1} +u_{2})\\
 & =( v_{1} -u_{1}) +( v_{2} -u_{2})\\
v_{1} -u_{1} & =u_{2} -v_{2}
\end{aligned}
\end{equation*}
$$

Since $\displaystyle v_{1} ,u_{1} \in S_{1}$ and $\displaystyle S_{1}$ is a subspace, $\displaystyle v_{1} -u_{1} \in S_{1}$. A similar argument shows that $\displaystyle u_{2} -v_{2} \in S_{2}$. Since these two vectors are equal and since they appear in both sets, $\displaystyle v_{1} -u_{1} =u_{2} -v_{2} \in S_{1} \cap S_{2}$. But the only element of $\displaystyle S_{1} \cap S_{2}$ is the zero vector. It follows that $\displaystyle v_{1} =u_{1}$ and $\displaystyle v_{2} =u_{2}$.

:::
