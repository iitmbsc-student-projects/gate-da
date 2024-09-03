---
title: Question-8
pagetitle: Question-8
categories: [GATE-2014, DBMS, Key]
---


Given an instance of the STUDENTS relation as shown below:

| Student ID | Student Name | Student Email | Student Age | CPI |
|------------|--------------|---------------|-------------|-----|
| 2345       | Shankar      | shankar@math  | X           | 9.4 |
| 1287       | Swati        | swati@ee      | 19          | 9.5 |
| 7853       | Shankar      | shankar@cse   | 19          | 9.4 |
| 9876       | Swati        | swati@mech    | 18          | 9.3 |
| 8765       | Ganesh       | ganesh@civil  | 19          | 8.7 |

For $(\text{Student Name}, \text{Student Age})$ to be a key for this instance, the value $X$ should NOT be equal to $\_\_\_\_$.



::: {.callout-note title="Answer" collapse=true}

$19$

:::



::: {.callout-note title="Solution" collapse=true}

In order for $(\text{Student Name}, \text{Student Age})$ to serve as a key, it must uniquely identify each tuple in the relation. In this instance, we observe that both "Shankar" and "Swati" have the same age of $19$. To maintain uniqueness, the value of $X$ cannot be $19$, ensuring that each combination of $(\text{Student Name}, \text{Student Age})$ remains distinct. Hence, $X \neq 19$ satisfies the criteria for $(\text{Student Name}, \text{Student Age})$ to be a key.

:::