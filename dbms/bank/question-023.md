---
title: Question-23
pagetitle: Question-23
categories: [DBMS, Relational Algebra]
---


The following relation records the age of 500 employees of a company, where empNo (indicating the employee number) is the key:
${ \text{empAge}(\text{empNo}, \text{age}) }$

Consider the following relational algebra expression:
${ \Pi_{\text{empNo}}.(\text{empAge} \bowtie (\text{age} > \text{age1}) \rho \text{ empNo1, age1} (\text{empAge})) }$

What does the above expression generate?

- [ ] Employee numbers of only those employees whose age is the maximum
- [ ] Employee numbers of only those employees whose age is more than the age of exactly one other employee
- [ ] Employee numbers of all employees whose age is not the minimum
- [ ] Employee numbers of all employees whose age is the minimum



::: {.callout-note title="Answer" collapse=true}

- [ ] Employee numbers of only those employees whose age is the maximum
- [ ] Employee numbers of only those employees whose age is more than the age of exactly one other employee
- [x] Employee numbers of all employees whose age is not the minimum
- [ ] Employee numbers of all employees whose age is the minimum

:::



::: {.callout-note title="Solution" collapse=true}

Let's break down the given expression:

- ${ \Pi_{\text{empNo}} }$: Projection on the attribute empNo.
- ${ \text{empAge} }$: Relation containing the empNo and age of employees.
- ${ \bowtie (\text{age} > \text{age1}) }$: Semi-join operation using the condition age > age1.
- ${ \rho \text{ empNo1, age1} (\text{empAge}) }$: Renaming the attributes of empAge to empNo1 and age1.

The expression generates the employee numbers of all employees whose age is not the minimum. This is achieved by performing a semi-join on empAge with itself based on the condition that the age of an employee is greater than some other employee's age, thus excluding those with the minimum age. Therefore, the correct choice is (c) Employee numbers of all employees whose age is not the minimum.

:::