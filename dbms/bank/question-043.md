---
title: Question-43
pagetitle: Question-43
categories: [DBMS]
---

Consider the following relational schema:

* `Student(school_id, sch_roll_no, sname,saddress)`
* `School(school_id, sch_name, sch_address, sch_phone)`
* `Enrolment(school_id, sch_roll_no, erollno, examname)`
* `ExamResult(erollno, examname, marks)`

What does the following SQL query output?

```sql
SELECT	sch_name, COUNT (*)
FROM	School C, Enrolment E, ExamResult R
WHERE	E.school_id = C.school_id
AND E.examname = R.examname 
AND E.erollno = R.erollno
AND R.marks = 100 
AND E.school_id IN (
    SELECT school_id
    FROM student
    GROUP BY school_id
    HAVING COUNT (*) > 200)
GROUP BY school_id
```


- [ ] for each school with more than 200 students appearing in exams, the name of the school and the number of 100𝑠 scored by its students   
- [ ] for each school with more than 200 students in it, the name of the school and the number of 100𝑠 scored by its students  
- [ ] for each school with more than 200 students in it, the name of the school and the number of its students scoring 100 in at least one exam   
- [ ] nothing; the query has a syntax error

::: {.callout-note title="Answer" collapse=true}

- [ ] for each school with more than 200 students appearing in exams, the name of the school and the number of 100𝑠 scored by its students   
- [ ] for each school with more than 200 students in it, the name of the school and the number of 100𝑠 scored by its students  
- [ ] for each school with more than 200 students in it, the name of the school and the number of its students scoring 100 in at least one exam   
- [x] nothing; the query has a syntax error

:::

