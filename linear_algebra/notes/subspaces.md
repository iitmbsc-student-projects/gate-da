---
title: "Subspaces"
pagetitle: "Subspaces"
categories: [subspace]
order: 2
---

## Definition

A subset $U$ of a vector space $V$ is called a subspace if it is a vector space with the same additive identity, addition and scalar multiplication as $V$. To determine if a subset is a subspace, it is sufficient to check the following:

- $0\in U$

- $U$ is closed under vector addition

- $U$ is closed under scalar multiplication

## Examples

- $\mathbb{R}^{2}$
    - Trivial subspaces
      - $\{( 0,0)\}$
      - $\mathbb{R}^{2}$

    - Non-trivial subspaces
      - Any line passing through the origin

    - These are the only subspace of $\mathbb{R}^{2}$

- $\mathbb{R}^{3}$
  - Trivial subspaces
    - $\{( 0,0,0)\}$
    - $\mathbb{R}^{3}$

  - Non-trivial subspaces
    - Any line passing through the origin
    - Any plane passing through the origin

  - These are the only subspaces of $\mathbb{R}^{3}$

- $\mathcal{M}_{3 \times 3}(\mathbb{R})$
  - Trivial subspaces
    - $\{0\}$, the set containing the zero matrix
    - $\mathcal{M}_{3 \times 3}(\mathbb{R})$
  - Some non-trivial subspaces
    - The set of symmetric matrices
    - The set of triangular matrices

## Subspace sum

The sum of two subspaces $U, W$ of a vector space $V$ is denoted as $U + W$ and is defined as:

$$
U + W := \{u + w\ :\ u \in U, w \in W\}
$$

$U + W$ is the set of all vectors that are of the form $u + w$, where $u$ comes from $U$ and $w$ from $V$. The subspace sum is the generalization of the idea of union of two sets to two vector spaces. $U + W$ is a subspace of $V$.

## Properties

- If $U$ and $W$ are subspaces of $V$, $U\cap W$ is a subspace of $V$
- If $U$ and $W$ are subspaces of $V$, $U \cap W$ is always non-empty. It should at least contain the zero vector.
- If $U$ and $W$ are subspaces of $V$, $U\cup W$ needn't be a subspace of $V$
  - Consider the x-axis and y-axis
  - The union is not closed under addition
- $U + W$ is the smallest subspace of $V$ that contains both $U$ and $W$.
