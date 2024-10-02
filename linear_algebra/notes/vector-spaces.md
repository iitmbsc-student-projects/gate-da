---
title: Vector Spaces
pagetitle: Vector Spaces
categories: [vector space]
---

## Definition

A real vector space is a set $\displaystyle V$ along with two binary operations $\displaystyle +,\cdot$:

- vector addition, $\displaystyle +:V\times V\rightarrow V$ 
- scalar multiplication, $\cdot: V\times \mathbb{R}\rightarrow \mathbb{R}$ 

such that the following axioms hold.



### Addition axioms

- Commutativity: $\displaystyle u+v=v+u$ for all $\displaystyle u,v\in V$
- Associativity: $\displaystyle ( u+v) +w=u+( v+w)$ for all $\displaystyle u,v,w\in V$
- Additive identity: there exists an element in $\displaystyle V$ denoted as $\displaystyle 0$ such that $\displaystyle 0+v=v$ for all $\displaystyle v\in V$
- Additive inverse: for every $\displaystyle v\in V$, there exists an element denoted as $\displaystyle -v$ such that $\displaystyle v+( -v) =0$



### Scalar multiplication axioms

- Associativity: $\displaystyle ( ab) v=a( bv)$ for all $\displaystyle a,b\in \mathbb{R}$ and $\displaystyle v\in V$
- Multiplicative identity: $\displaystyle 1v=v$ for all $\displaystyle v\in V$
- Distributivity
  - $\displaystyle ( a+b) v=av+bv$ for all $\displaystyle a,b\in \mathbb{R}$ and $\displaystyle v\in V$
  - $\displaystyle a( u+v) =au+av$ for all $\displaystyle u,v\in V$ and $\displaystyle a\in \mathbb{R}$



## Examples

- The set $\displaystyle \mathbb{R}^{2}$ with the usual rules of addition and scalar multiplication is a vector space.
- As an extension, the set $\displaystyle \mathbb{R}^{n}$ with the usual rules of addition and scalar multiplication is a vector space.
- The set of all polynomials of degree at most $\displaystyle n$ with real coefficients is a vector space with the usual rules of polynomial addition and scalar multiplication. This is sometimes denoted as $\displaystyle P_{n+1}(\mathbb{R})$.
- The set of all real $\displaystyle m\times n$ matrices is a vector space. This is sometimes denoted as $\displaystyle M_{m\times n}(\mathbb{R})$.



## Important points

- Some of the familiar rules of algebra carry over:
  - $\displaystyle av=0\Longrightarrow a=0$ or $\displaystyle v=0$ or both, where $\displaystyle a\in \mathbb{R}$ and $\displaystyle v\in V$
  - $\displaystyle -v=( -1) v$, where $\displaystyle v\in V$
  - $\displaystyle u+v=0\Longrightarrow u=-v$, where $\displaystyle u,v\in V$
- For a given vector space, the zero element is unique. The zero element plays a very important role in the theory of vector spaces.
- The same symbol is used to denote both the scalar zero and the vector zero. The context will make this distinction clear.
- The zero element for some of the vector spaces discussed above:
  - For $\displaystyle \mathbb{R}^{2}$, it is $\displaystyle ( 0,0)$.
  - For $\displaystyle \mathbb{R}^{n}$, it is $\displaystyle ( 0,\cdots ,0)$
  - For $\displaystyle P_{2}(\mathbb{R})$ it is $\displaystyle p( x) =0+0x+0x^{2}$, the zero polynomial.
  - For $\displaystyle M_{2\times 2}(\mathbb{R})$, it is the zero matrix of size $\displaystyle 2\times 2$, $\displaystyle \begin{bmatrix}
  0 & 0\\
  0 & 0
  \end{bmatrix}$.