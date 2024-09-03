---
title: Question-20
pagetitle: Question-20
categories: [DBMS, Normalization]
---


Consider the following relational schemas with their non-trivial functional dependencies:

Schema I: Registration ($\text{rollno, courses}$)  
FD: $\text{rollno} \rightarrow \text{courses}$

Schema II: Registration ($\text{rollno, courseid, email}$)  
FDs: $\text{rollno, courseid} \rightarrow \text{email}$, $\text{email} \rightarrow \text{rollno}$

Schema III: Registration ($\text{rollno, courseid, marks, grade}$)  
FDs: $\text{rollno, courseid} \rightarrow \text{marks, grade}$, $\text{marks} \rightarrow \text{grade}$

Schema IV: Registration ($\text{rollno, courseid, credit}$)  
FDs: $\text{rollno, courseid} \rightarrow \text{credit}$, $\text{courseid} \rightarrow \text{credit}$

Which one of the relational schemas above is in 3NF but not in BCNF?

- [ ] Schema I
- [ ] Schema II
- [ ] Schema III
- [ ] Schema IV



::: {.callout-note title="Answer" collapse=true}

- [ ] Schema I
- [x] Schema II
- [ ] Schema III
- [ ] Schema IV

:::



::: {.callout-note title="Solution" collapse=true}

Let's evaluate each schema:

Schema I: 
- $\text{rollno} \rightarrow \text{courses}$ (in BCNF, as $\text{rollno}$ is a super key)

Schema II:
- $\text{rollno, courseid} \rightarrow \text{email}$ (in BCNF, as the left side is a super key)
- $\text{email} \rightarrow \text{rollno}$ (not in BCNF, as $\text{email}$ is not a super key)

Schema III:
- $\text{rollno, courseid} \rightarrow \text{marks, grade}$ (not in BCNF, as neither $\text{marks}$ nor $\text{grade}$ is a super key)
- $\text{marks} \rightarrow \text{grade}$

Schema IV:
- $\text{rollno, courseid} \rightarrow \text{credit}$ (not in BCNF, as $\text{courseid}$ is not a super key)
- $\text{courseid} \rightarrow \text{credit}$

Among these, only Schema II ($\text{rollno, courseid, email}$) is in 3NF but not in BCNF, as the FD $\text{email} \rightarrow \text{rollno}$ violates BCNF since $\text{email}$ is not a super key.

:::