---
title: Question-42
pagetitle: Question-42
categories: [DBMS]
---

The relation **book** (title, price) contains the titles and prices of different books. Assuming that no two books have the same price, what does the following SQL query list?

```sql
SELECT title  
FROM book AS B  
WHERE (
   SELECT count(*)  
   FROM book AS T  
   WHERE T.price>B.price) < 5
```

- [ ] Titles of the four most expensive books  
- [ ] Title of the fifth most inexpensive book  
- [ ] Title of the fifth most expensive book  
- [ ] Titles of the five most expensive books

::: {.callout-note title="Answer" collapse=true}

- [ ] Titles of the four most expensive books  
- [ ] Title of the fifth most inexpensive book  
- [ ] Title of the fifth most expensive book  
- [x] Titles of the five most expensive books

:::