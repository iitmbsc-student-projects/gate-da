---
title: Question-4
pagetitle: Question-4
categories: [DBMS, SQL, Subqueries]
---


Consider the table **emp_info** shown below:

| id   | name   | salary |
| ---- | ------ | ------ |
| E001 | Oliver | 45000  |
| E002 | Jack   | 30000  |
| E003 | Harry  | 35000  |
| E004 | Thomas | 55000  |
| E005 | Jacob  | 70000  |
| E006 | Tommy  | 60000  |
| E007 | Joseph | 65000  |

What will the output of the following query be?

```sql
SELECT id
FROM emp_info AS a
WHERE( SELECT COUNT(*) 
       FROM emp_info b 
       WHERE b.salary>a.salary)<2
```

- [ ] Option a

    | id   |
    | ---- |
    | E002 |
    | E003 |

- [ ] Option b

    | id   |
    | ---- |
    | E005 |
    | E007 |

- [ ] Option c
    
    | id   |
    | ---- |
    | E007 |

- [ ] Option d
    
    | id   |
    | ---- |
    | E003 |



::: {.callout-note title="Answer" collapse=true}

- [ ] Option a

    | id   |
    | ---- |
    | E002 |
    | E003 |

- [X] Option b

    | id   |
    | ---- |
    | E005 |
    | E007 |

- [ ] Option c
    
    | id   |
    | ---- |
    | E007 |

- [ ] Option d
    
    | id   |
    | ---- |
    | E003 |

:::



::: {.callout-note title="Solution" collapse=true}

For every selected `emp_info`, the subquery returns the count of those `emp_info` entries which have a higher salary than the selected `emp_info`. 

The WHERE clause of the outer query will be true for the highest and the second highest salary.

:::