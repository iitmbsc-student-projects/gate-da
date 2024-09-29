---
title: Question-29
pagetitle: Question-29
categories: [DBMS]
---

A relational schema for a train reservation database is given below. Passenger (pid, pname, age) Reservation (pid, class, tid)  
**Table: Passenger**  
pid   pname   age  
\-----------------  
 0    Sachin   65  
 1    Rahul    66  
 2    Sourav   67  
 3    Anil     69

**Table : Reservation**  
pid  class  tid  
\---------------  
 0    AC   8200  
 1    AC   8201  
 2    SC   8201  
 5    AC   8203  
 1    SC   8204  
 3    AC   8202

What pids are returned by the following SQL query for the above instance of the tables?

SLECT pid  
FROM Reservation ,  
WHERE class ‘AC’ AND  
    EXISTS (SELECT \*  
       FROM Passenger  
       WHERE age \> 65 AND  
       Passenger. pid \= Reservation.pid)

1. 1, 0  
2. 1, 2  
3. 1, 3  
4. 1, 5

::: {.callout-note title="Answer" collapse=true}

Answer: C

:::

