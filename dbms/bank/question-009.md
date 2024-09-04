---
title: Question-9
pagetitle: Question-9
categories: [GATE-2021, DBMS, Foreign key]
---


Consider the following statements S1 and S2 about the relational data model:

S1: A relation scheme can have at most one foreign key.
S2: A foreign key in a relation scheme $R$ cannot be used to refer to tuples of $R$.

Which one of the following choices is correct?

- [ ] Both S1 and S2 are true
- [ ] S1 is true and S2 is false
- [ ] S1 is false and S2 is true
- [ ] Both S1 and S2 are false



::: {.callout-note title="Answer" collapse=true}

- [ ] Both S1 and S2 are true
- [ ] S1 is true and S2 is false
- [ ] S1 is false and S2 is true
- [x] Both S1 and S2 are false

:::



::: {.callout-note title="Solution" collapse=true}

| Relation Scheme   | Foreign Keys |
|-------------------|--------------|
| Employees         | DepartmentID |
| Employees         | ManagerID    |

In the above example, the `Employees` relation scheme contains two foreign keys: one referring to the `DepartmentID` in the `Departments` relation and another referring to the `ManagerID` within the same `Employees` relation. 

The fact that there are two foreign keys contradicts S1 and the fact that the foreign key `ManagerID` refers to the same relation `Employees` contradicts S2

Hence, both S1 and S2 are false.

:::