---
title: Question-2
pagetitle: Question-2
categories: [DBMS, SQL, Data integrity]
---


Consider the following table which has three attributes: X, Y, and Z, where X is the primary key and Z is the foreign key referencing X.

| X | Y | Z |
|---|---|---|
| 1 | 1 | 5 |
| 2 | 2 | 5 |
| 3 | 1 | 5 |
| 4 | 2 | 4 |
| 5 | 2 | 4 |
| 6 | 1 | 1 |
| 7 | 4 | 1 |
| 8 | 4 | 7 |


Which of the following sets of tuples are additionally deleted when the tuple $(1,1,5)$ is deleted and `ON DELETE CASCADE` construct is applied over the table?

- [ ] $(2,2,5)$ and $(3,1,5)$
- [ ] $(6,1,1)$ and $(7,4,1)$
- [ ] $(6,1,1)$, $(7,4,1)$, and $(8,4,7)$
- [ ] $(6,1,1)$, $(7,4,1)$, and $(2,2,5)$



::: {.callout-note title="Answer" collapse=true}

- [ ] $(2,2,5)$ and $(3,1,5)$
- [ ] $(6,1,1)$ and $(7,4,1)$
- [x] $(6,1,1)$, $(7,4,1)$, and $(8,4,7)$
- [ ] $(6,1,1)$, $(7,4,1)$, and $(2,2,5)$

:::



::: {.callout-note title="Solution" collapse=true}

The ON DELETE CASCADE constraint is used to automatically delete rows from the child table when rows from the parent table are deleted. Hence, if the tuple $(1, 1, 5)$ is deleted, the tuples $(6, 1, 1)$, $(7, 4, 1)$, and $(8, 4, 7)$ will also be deleted to maintain referential integrity.

:::