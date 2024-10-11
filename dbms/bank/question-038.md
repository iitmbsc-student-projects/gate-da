---
title: Question-38
pagetitle: Question-38
categories: [DBMS]
---

Consider the set of relations shown below and the SQL query that follows.

`Students: (Roll_number, Name, Date_of_birth)`  
`Courses: (Course_number, Course_name, Instructor)`  
`Grades: (Roll_number, Course_number, Grade)`  

```sql
SELECT DISTINCT Name
FROM Students, Courses, Grades
WHERE Students.Roll_number=Grades.Roll_number
AND Courses.Instructor = 'Korth'
AND Courses.Course_number = Grades.Course_number
AND Grades.Grade = 'A'
```

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

