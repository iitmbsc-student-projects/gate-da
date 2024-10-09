---
title: Question-43
pagetitle: Question-43
categories: [DBMS]
---

Consider the following relational schema:

* Student(school-id,sch-roll-no―,sname,saddress)  
* School(school-id―,sch-name,sch-address,sch-phone)  
* Enrolment(school-id,sch-roll-no―,erollno,examname)  
* ExamResult(erollno,examname―,marks)

What does the following SQL query output?

SELECT	sch\-name, COUNT (\*)

FROM	School C, Enrolment E, ExamResult R

WHERE	E.school\-id \= C.school\-id

AND

E.examname \= R.examname AND E.erollno \= R.erollno

AND

R.marks \= 100 AND E.school\-id IN (SELECT school\-id

                                FROM student

                                GROUP BY school\-id

                                 HAVING COUNT (\*) \> 200)

GROUP By school\-id

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

