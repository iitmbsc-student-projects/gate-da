
## Question 1

**Tags:** DBMS, SQL, Data integrity

Consider the following table which has three attributes: X, Y, and Z, where X is the primary key and Z is the foreign key referencing X.

| X | Y | Z |
|---|---|---|
| 1 | 1 | 5 |
| 2 | 2 | 5 |
| 3 | 1 | 5 |
| 4 | 2 | 4 |
| 5 | 2 | 4 |
| 6 | 1 | 1 |
| 7 | 4 | 1 |
| 8 | 4 | 7 |


Which of the following sets of tuples are additionally deleted when the tuple $(1,1,5)$ is deleted and `ON DELETE CASCADE` construct is applied over the table?

### Choices
- [ ] $(2,2,5)$ and $(3,1,5)$
- [ ] $(6,1,1)$ and $(7,4,1)$
- [ ] $(6,1,1)$, $(7,4,1)$, and $(8,4,7)$
- [ ] $(6,1,1)$, $(7,4,1)$, and $(2,2,5)$

::: {.callout-note title="Answer" collapse=true}

$(6,1,1)$, $(7,4,1)$, and $(8,4,7)$
:::

### Feedback
The ON DELETE CASCADE constraint is used to automatically delete rows from the child table when rows from the parent table are deleted. Hence, if the tuple $(1, 1, 5)$ is deleted, the tuples $(6, 1, 1)$, $(7, 4, 1)$, and $(8, 4, 7)$ will also be deleted to maintain referential integrity.

## Question 2
**Tags:** DBMS, SQL, Joins



Consider the table below and predict the output of the query that follows.

| class   | house_name | no_of_student |
|---------|------------|---------------|
| Class 9 | Aravali    | 50            |
| Class 10| Nilgiri    | 40            |
| Class 11| Shiwalik   | 60            |
| Class 12| Nilgiri    | 55            |

```sql
SELECT COUNT(house_name)
FROM ((SELECT class, house_name 
       FROM house_distribution) as X
       NATURAL JOIN (SELECT house_name, no_of_student 
                     FROM house_distribution) as Y);
```

::: {.callout-note title="Answer" collapse=true}

$6$
:::

### Feedback
Given the tables X and Y:

X:  
| class   | house_name |
|---------|------------|
| Class 9 | Aravali    |
| Class 10| Nilgiri    |
| Class 11| Shiwalik   |
| Class 12| Nilgiri    |

Y:  
| house_name | no_of_student |
|------------|---------------|
| Aravali    | 50            |
| Nilgiri    | 40            |
| Shiwalik   | 60            |
| Nilgiri    | 55            |

The natural join of X and Y on the `house_name` attribute results in the following table:

| class   | house_name | no_of_student |
|---------|------------|---------------|
| Class 9 | Aravali    | 50            |
| Class 10| Nilgiri    | 40            |
| Class 12| Nilgiri    | 40            |
| Class 11| Shiwalik   | 60            |
| Class 10| Nilgiri    | 55            |
| Class 12| Nilgiri    | 55            |

Counting the occurrences of `house_name` in the joined table yields a count of $6$.

Absolutely, here's the reformatted question:



## Question 3

**Tags:** DBMS, SQL, Subqueries

Consider the table **emp_info** shown below:

| id   | name   | salary |
| ---- | ------ | ------ |
| E001 | Oliver | 45000  |
| E002 | Jack   | 30000  |
| E003 | Harry  | 35000  |
| E004 | Thomas | 55000  |
| E005 | Jacob  | 70000  |
| E006 | Tommy  | 60000  |
| E007 | Joseph | 65000  |

What will the output of the following query be?

```sql
SELECT id
FROM emp_info AS a
WHERE( SELECT COUNT(*) 
       FROM emp_info b 
       WHERE b.salary>a.salary)<2
```

### Choices

- [ ] _
    | id   |
    | ---- |
    | E002 |
    | E003 |

- [ ] _
    | id   |
    | ---- |
    | E005 |
    | E007 |

- [ ] _
  | id   |
  | ---- |
  | E007 |

- [ ] _
  | id   |
  | ---- |
  | E003 |

::: {.callout-note title="Answer" collapse=true}

  _
    | id   |
    | ---- |
    | E005 |
    | E007 |

:::
### Feedback

For every selected `emp_info`, the subquery returns the count of those `emp_info` entries which have a higher salary than the selected `emp_info`. 

The WHERE clause of the outer query will be true for the highest and the second highest salary.


Absolutely, here is the reformatted question and solution:

## Question 4

**Tags:** DBMS, SQL, Subqueries

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

### Feedback

In the **Users** table, the $user\_id$ is the primary key, so all values should be unique. The maximum number of rows returned by the given query occurs when all values of $user\_id$ in the **Orders** table are the same. The maximum number of rows returned by the given query is $10 + 7 = 17$.


Absolutely, here's the formatted question as per your instructions:

### Question 5

**Tags:** DBMS, Relational Algebra

Consider the relation **student** shown in the below table:

| Roll\_no | Name   | marks |
|----------|--------|-------|
| 1        | Ram    | 50    |
| 2        | Rakesh | 65    |
| 3        | Ram    | 45    |
| 4        | Pranav | 89    |
| 5        | Rakesh | 99    |
| 6        | Emily  | 99    |
| 7        | Grace  | 100   |
| 8        | Lily   | 95    |

What is the number of tuples returned by the following relational algebra expression: $\prod_{\text{name}}(\sigma_{\text{marks}>50}(\text{student}))$?


::: {.callout-note title="Answer" collapse=true}

$5$

:::
### Feedback

Relational algebra, based on set theory, returns unique tuples. The query retrieves tuples where the 'marks' are greater than $50$ and projects only the 'name' attribute. The repeated entries, like 'Rakesh', will be returned only once. Hence, only $5$ tuples are returned.

| Name   |
|--------|
| Rakesh |
| Pranav |
| Emily  |
| Grace  |
| Lily   |

Certainly!



## Question 6

**Tags:** GATE-2023, DBMS, Relational model, Arity

Which one of the options given below refers to the degree (or arity) of a relation in relational database systems?

## Choices
- [ ] Number of attributes of its relation schema.
- [ ] Number of tuples stored in the relation.
- [ ] Number of entries in the relation.
- [ ] Number of distinct domains of its relation schema.

::: {.callout-note title="Answer" collapse=true}

Number of attributes of its relation schema.

:::

## Feedback
The degree or arity of a relation in a relational database system refers to the number of attributes or fields in its relation schema. Therefore, the correct answer is the number of attributes of its relation schema, which represents the arity of a relation.



## Question 7

**Tags:** GATE-2014, DBMS, Key


Given an instance of the STUDENTS relation as shown below:

| Student ID | Student Name | Student Email | Student Age | CPI |
|------------|--------------|---------------|-------------|-----|
| 2345       | Shankar      | shankar@math  | X           | 9.4 |
| 1287       | Swati        | swati@ee      | 19          | 9.5 |
| 7853       | Shankar      | shankar@cse   | 19          | 9.4 |
| 9876       | Swati        | swati@mech    | 18          | 9.3 |
| 8765       | Ganesh       | ganesh@civil  | 19          | 8.7 |

For $(\text{Student Name}, \text{Student Age})$ to be a key for this instance, the value $X$ should NOT be equal to $\_\_\_\_$.



::: {.callout-note title="Answer" collapse=true}

$19$

:::

### Feedback
In order for $(\text{Student Name}, \text{Student Age})$ to serve as a key, it must uniquely identify each tuple in the relation. In this instance, we observe that both "Shankar" and "Swati" have the same age of $19$. To maintain uniqueness, the value of $X$ cannot be $19$, ensuring that each combination of $(\text{Student Name}, \text{Student Age})$ remains distinct. Hence, $X \neq 19$ satisfies the criteria for $(\text{Student Name}, \text{Student Age})$ to be a key.


### Question 8

**Tags:** GATE-2021, DBMS, Foreign key

Consider the following statements S1 and S2 about the relational data model:

S1: A relation scheme can have at most one foreign key.
S2: A foreign key in a relation scheme $R$ cannot be used to refer to tuples of $R$.

Which one of the following choices is correct?

### Choices
- [ ] Both S1 and S2 are true
- [ ] S1 is true and S2 is false
- [ ] S1 is false and S2 is true
- [ ] Both S1 and S2 are false


::: {.callout-note title="Answer" collapse=true}

Both S1 and S2 are false

:::

### Feedback

| Relation Scheme   | Foreign Keys |
|-------------------|--------------|
| Employees         | DepartmentID |
| Employees         | ManagerID    |

In the above example, the `Employees` relation scheme contains two foreign keys: one referring to the `DepartmentID` in the `Departments` relation and another referring to the `ManagerID` within the same `Employees` relation. 

The fact that there are two foreign keys contradicts S1 and the fact that the foreign key `ManagerID` refers to the same relation `Employees` contradicts S2

Hence, both S1 and S2 are false.



### Question 9

**Tags:** GATE-2017, DBMS, Foreign key


Consider the following tables T1 and T2.

| **T1** | **T1** |     | **T2** | **T2** |
| ------ | ------ | --- | ------ | ------ |
| **P**  | **Q**  |     | **R**  | **S**  |
| 2      | 2      |     | 2      | 2      |
| 3      | 8      |     | 8      | 3      |
| 7      | 3      |     | 3      | 2      |
| 5      | 8      |     | 9      | 7      |
| 6      | 9      |     | 5      | 7      |
| 8      | 5      |     | 7      | 2      |
| 9      | 8      |     |        |        |

In table T1, **P** is the primary key and **Q** is the foreign key referencing **R** in table T2 with on delete cascade and on update cascade. In table T2, **R** is the primary key and **S** is the foreign key referencing **P** in table T1 with on delete set NULL and on update cascade.

To delete record ⟨3, 8⟩ from table T1, the number of additional records that need to be deleted from table T1 is:


::: {.callout-note title="Answer" collapse=true}

$0$

:::

### Explanation

The on delete cascade action implies that when a primary key is deleted from the referenced (parent) table, the related value in the referencing (child) table (using the foreign key) must be deleted.

However, in this scenario, there are no additional records to be deleted from table T1 apart from the specified record ⟨3, 8⟩ because the foreign key **Q** in T1 referencing **R** in T2 doesn't contribute to the deletion requirement.

The on delete set NULL action doesn't necessitate additional deletions in T1 when a primary key from T2 is deleted because it only sets the related value to NULL in T1, not requiring the deletion of rows. Therefore, the deletion of record ⟨3, 8⟩ from table T1 does not lead to further deletions based on the specified constraints.


## Question 10

**Tags:** GATE-2017, DBMS, ER-model

Which one of the following is used to represent the supporting many-one relationships of a weak entity set in an entity-relationship diagram?

### Choices 
- [ ] Diamonds with double/bold border
  - **Feedback:** A double/bold diamond represents the relationship between a strong entity set and a weak entity set.
- [ ] Ovals with double/bold border
  - **Feedback:** Ovals with double/bold borders typically denote multivalued attributes.
- [ ] Ovals that contain underlined identifiers
  - **Feedback:** Ovals containing underlined identifiers often signify key attributes.
- [ ] Rectangles with double/bold border
  - **Feedback:** Rectangles with double/bold borders usually represent weak entity sets sets.

  ::: {.callout-note title="Answer" collapse=true}

  Diamonds with double/bold border
  **Feedback:** A double/bold diamond represents the relationship between 
  :::