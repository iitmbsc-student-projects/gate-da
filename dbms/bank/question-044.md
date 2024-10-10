---
title: Question-44
pagetitle: Question-44
categories: [DBMS]
---

Consider the following relations:

**Student**

| Roll_No | Student_Name |
| ------- | ------------ |
| 1       | Raj          |
| 2       | Rohit        |
| 3       | Raj          |

**Performance**

| Roll_No | Course  | Marks |
| ------- | ------- | ----- |
| 1       | Math    | 80    |
| 1       | English | 70    |
| 2       | Math    | 75    |
| 3       | English | 80    |
| 2       | Physics | 65    |
| 3       | Math    | 80    |


Consider the following SQL query.

```sql
SELECT S.Student_Name, Sum(P.Marks) 
FROM Student S, Performance P
WHERE S.Roll_No= P.Roll_No
GROUP BY S.Student_Name
```

The numbers of rows that will be returned by the SQL query is \_\_\_\_\_\_\_.

::: {.callout-note title="Answer" collapse=true}

$2$

:::

