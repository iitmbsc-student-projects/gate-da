---
title: Question-10
pagetitle: Question-10
categories: [GATE-2017, DBMS, Foreign key]
---


Consider the following tables T1 and T2.

| **T1** | **T1** |     | **T2** | **T2** |
| ------ | ------ | --- | ------ | ------ |
| **P**  | **Q**  |     | **R**  | **S**  |
| 2      | 2      |     | 2      | 2      |
| 3      | 8      |     | 8      | 3      |
| 7      | 3      |     | 3      | 2      |
| 5      | 8      |     | 9      | 7      |
| 6      | 9      |     | 5      | 7      |
| 8      | 5      |     | 7      | 2      |
| 9      | 8      |     |        |        |

In table T1, **P** is the primary key and **Q** is the foreign key referencing **R** in table T2 with on delete cascade and on update cascade. In table T2, **R** is the primary key and **S** is the foreign key referencing **P** in table T1 with on delete set NULL and on update cascade.

To delete record ⟨3, 8⟩ from table T1, the number of additional records that need to be deleted from table T1 is: _____



::: {.callout-note title="Answer" collapse=true}

$0$

:::



::: {.callout-note title="Solution" collapse=true}

The on delete cascade action implies that when a primary key is deleted from the referenced (parent) table, the related value in the referencing (child) table (using the foreign key) must be deleted.

However, in this scenario, there are no additional records to be deleted from table T1 apart from the specified record ⟨3, 8⟩ because the foreign key **Q** in T1 referencing **R** in T2 doesn't contribute to the deletion requirement.

The on delete set NULL action doesn't necessitate additional deletions in T1 when a primary key from T2 is deleted because it only sets the related value to NULL in T1, not requiring the deletion of rows. Therefore, the deletion of record ⟨3, 8⟩ from table T1 does not lead to further deletions based on the specified constraints.

:::