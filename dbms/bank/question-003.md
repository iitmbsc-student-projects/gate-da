---
title: Question-3
pagetitle: Question-3
categories: [DBMS, SQL, Joins]
---


Consider the table below and predict the output of the query that follows.

| class   | house_name | no_of_student |
|---------|------------|---------------|
| Class 9 | Aravali    | 50            |
| Class 10| Nilgiri    | 40            |
| Class 11| Shiwalik   | 60            |
| Class 12| Nilgiri    | 55            |

```sql
SELECT COUNT(house_name)
FROM ((SELECT class, house_name 
       FROM house_distribution) as X
       NATURAL JOIN (SELECT house_name, no_of_student 
                     FROM house_distribution) as Y);
```



::: {.callout-note title="Answer" collapse=true}

$6$

:::



::: {.callout-note title="Solution" collapse=true}

Given the tables X and Y:

**Table X:**  

| class   | house_name |
|---------|------------|
| Class 9 | Aravali    |
| Class 10| Nilgiri    |
| Class 11| Shiwalik   |
| Class 12| Nilgiri    |

**Table Y:**

| house_name | no_of_student |
|------------|---------------|
| Aravali    | 50            |
| Nilgiri    | 40            |
| Shiwalik   | 60            |
| Nilgiri    | 55            |

The natural join of X and Y on the `house_name` attribute results in the following table:

| class   | house_name | no_of_student |
|---------|------------|---------------|
| Class 9 | Aravali    | 50            |
| Class 10| Nilgiri    | 40            |
| Class 12| Nilgiri    | 40            |
| Class 11| Shiwalik   | 60            |
| Class 10| Nilgiri    | 55            |
| Class 12| Nilgiri    | 55            |

Counting the occurrences of `house_name` in the joined table yields a count of $6$.

:::