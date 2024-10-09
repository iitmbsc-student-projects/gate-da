---
title: Question-38
pagetitle: Question-38
categories: [DBMS]
---

Consider the set of relations shown below and the SQL query that follows.

Students: (Roll\_number, Name, Date\_of\_birth)

Courses: (Course\_number, Course\_name, Instructor)

Grades: (Roll\_number, Course\_number, Grade)

Select distinct Name

from Students, Courses, Grades

where Students.Roll\_number\=Grades.Roll\_number

	and Courses.Instructor \= 'Korth'

	and Courses.Course\_number \= Grades.Course\_number

	and Grades.Grade \= 'A'

Which of the following sets is computed by the above query?

- [ ] Names of students who have got an A grade in all courses taught by Korth  
- [ ] Names of students who have got an A grade in all courses  
- [ ] Names of students who have got an A grade in at least one of the courses taught by Korth  
- [ ] None of the above

::: {.callout-note title="Answer" collapse=true}

- [ ] Names of students who have got an A grade in all courses taught by Korth  
- [ ] Names of students who have got an A grade in all courses  
- [x] Names of students who have got an A grade in at least one of the courses taught by Korth  
- [ ] None of the above

:::

