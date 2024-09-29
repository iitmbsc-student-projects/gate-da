---
title: Question-42
pagetitle: Question-42
categories: [DBMS]
---

The relation **book** (title, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?

* select title  
* from book as B  
* where (select count(\*)  
*    from book as T  
*    where T.price\>B.price) \< 5  
1. Titles of the four most expensive books  
2. Title of the fifth most inexpensive book  
3. Title of the fifth most expensive book  
4. Titles of the five most expensive books

::: {.callout-note title="Answer" collapse=true}

Answer: D

:::

