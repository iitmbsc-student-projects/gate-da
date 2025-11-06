---
title: Vector Spaces
pagetitle: Vector Spaces
categories: [vector space]
order: 1
---

## Definition

A real vector space is a set $V$ along with two binary operations $+,\cdot$:

- vector addition, $+:V\times V\rightarrow V$ 
- scalar multiplication, $\cdot: V\times \mathbb{R}\rightarrow V$ 

such that the following axioms hold.

### Addition axioms

- Commutativity: $u+v=v+u$ for all $u,v\in V$
- Associativity: $( u+v) +w=u+( v+w)$ for all $u,v,w\in V$
- Additive identity: there exists an element in $V$ denoted as $0$ such that $0+v=v$ for all $v\in V$
- Additive inverse: for every $v\in V$, there exists an element denoted as $-v \in V$ such that $v+( -v) =0$


### Scalar multiplication axioms

- Associativity: $( ab) v=a( bv)$ for all $a,b\in \mathbb{R}$ and $v\in V$
- Multiplicative identity: $1v=v$ for all $v\in V$
- Distributivity
  - $( a+b) v=av+bv$ for all $a,b\in \mathbb{R}$ and $v\in V$
  - $a( u+v) =au+av$ for all $u,v\in V$ and $a\in \mathbb{R}$



## Examples

- The set $\mathbb{R}^{2}$ with the usual rules of addition and scalar multiplication is a vector space.
- As an extension, the set $\mathbb{R}^{n}$ with the usual rules of addition and scalar multiplication is a vector space.
- The set of all polynomials of degree at most $n$ with real coefficients is a vector space with the usual rules of polynomial addition and scalar multiplication. This is sometimes denoted as $P_{n}(\mathbb{R})$.
- The set of all real $m\times n$ matrices is a vector space. This is sometimes denoted as $M_{m\times n}(\mathbb{R})$.



## Important points

- Some of the familiar rules of algebra carry over:
  - $av=0\Longrightarrow a=0$ or $v=0$ or both, where $a\in \mathbb{R}$ and $v\in V$
  - $-v=( -1) v$, where $v\in V$
  - $u+v=0\Longrightarrow u=-v$, where $u,v\in V$
- For a given vector space, the zero element is unique. The zero element plays a very important role in the theory of vector spaces.
- The same symbol is used to denote both the scalar zero and the vector zero. The context will make this distinction clear.
- The zero element for some of the vector spaces discussed above:
  - For $\mathbb{R}^{2}$, it is $( 0,0)$.
  - For $\mathbb{R}^{n}$, it is $( 0,\cdots ,0)$
  - For $P_{2}(\mathbb{R})$ it is $p( x) =0+0x+0x^{2}$, the zero polynomial.
  - For $M_{2\times 2}(\mathbb{R})$, it is the zero matrix of size $2\times 2$, $\begin{bmatrix}
  0 & 0\\
  0 & 0
  \end{bmatrix}$.