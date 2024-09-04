---
title: Question-5
pagetitle: Question-5
categories: [DBMS, SQL, Subqueries]
---


Consider the relational schema given in tables below:

Order: 

| Order_id | User_id | Product_id | Quantity |
|----------|---------|------------|----------|
| ...      | ...     | ...        | ...      |

Product: 

| Product_id | Product_name | Price |
|------------|--------------|-------|
| ...        | ...          | ...   |

User:  

| User_id | User_name | Age | Gender |
|---------|-----------|-----|--------|
| ...     | ...       | ... | ...    |

If the relations **Order**, **Product**, and **Users** have $10$, $6$, $8$ rows respectively, what is the maximum number of rows returned by the following query?

(Note: Consider all the attributes have NOT NULL constraint.)

```sql
SELECT * FROM Orders RIGHT OUTER JOIN Users ON Orders.user_id = Users.user_id;
```



::: {.callout-note title="Answer" collapse=true}

$17$

:::



::: {.callout-note title="Solution" collapse=true}

In the **Users** table, the $user\_id$ is the primary key, so all values should be unique. The maximum number of rows returned by the given query occurs when all values of $user\_id$ in the **Orders** table are the same. The maximum number of rows returned by the given query is $10 + 7 = 17$.

:::