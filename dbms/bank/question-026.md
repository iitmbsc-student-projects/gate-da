---
title: Question-26
pagetitle: Question-26
categories: [DBMS, Normalization]
---


Consider a database that has the relation schema CR(StudentName, CourseName). An instance of the schema CR is as given below:

| Student Name | Course Name |
|--------------|-------------|
| SA           | CA          |
| SA           | CB          |
| SA           | CC          |
| SB           | CB          |
| SB           | CC          |
| SC           | CA          |
| SC           | CB          |
| SC           | CC          |
| SD           | CA          |
| SD           | CB          |
| SD           | CC          |
| SD           | CD          |
| SE           | CD          |
| SE           | CA          |
| SE           | CB          |
| SF           | CA          |
| SF           | CB          |
| SF           | CC          |

The following query is made on the database:
${ T1 \leftarrow \Pi_{\text{course Name}} (\sigma_{\text{Student Name} = 'SA'} (CR)) }$
${ T2 \leftarrow CR \div T1 }$

The number of rows in T2 is _____________.



::: {.callout-note title="Answer" collapse=true}

$4$

:::



::: {.callout-note title="Solution" collapse=true}

The query ${ T1 \leftarrow \Pi_{\text{course Name}} (\sigma_{\text{Student Name} = 'SA'} (CR)) }$ selects all the course names where the Student Name is 'SA', resulting in T1 containing course names 'CA', 'CB', and 'CC'.

The query ${ T2 \leftarrow CR \div T1 }$ performs division between CR and T1. The result T2 contains tuples from CR that have all the course names from T1.

The output steps:
1. ${ CR \div \text{CA} }$: Gives students SA, SC, SD, SE, SF.
2. ${ CR \div \text{CB} }$: Gives students SA, SC, SD, SE, SF.
3. ${ CR \div \text{CC} }$: Gives students SA, SC, SD, SF.

Taking the intersection of these outputs gives the students SA, SC, SD, SF, which results in 4 rows in T2.

:::