---
title: Question-39
pagetitle: Question-39
categories: [DBMS]
---

The employee information in a company is stored in the relation

`Employee (name, sex, salary, deptName)`

Consider the following SQL query:

```sql
SELECT deptName  
FROM Employee  
WHERE sex = ‘M’  
GROUP BY deptName  
HAVING avg(salary) >  
    (SELECT avg (salary) FROM Employee)
```
It returns the names of the department in which

- [ ] the average salary is more than the average salary in the company  
- [ ] the average salary of male employees is more than the average salary of all male employees in the company  
- [ ] the average salary of male employees is more than the average salary of employees in same the department  
- [ ] the average salary of male employees is more than the average salary in the company

::: {.callout-note title="Answer" collapse=true}

- [ ] the average salary is more than the average salary in the company  
- [ ] the average salary of male employees is more than the average salary of all male employees in the company  
- [ ] the average salary of male employees is more than the average salary of employees in same the department  
- [x] the average salary of male employees is more than the average salary in the company

:::

