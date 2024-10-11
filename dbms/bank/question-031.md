---
title: Question-31
pagetitle: Question-31
categories: [DBMS]
---

Consider the relation `Student (name, sex, marks)`, where the primary key is shown underlined, pertaining to students in a class that has at least one boy and one girl. What does the following relational algebra expression produce? (Note: $\rho$ is the rename operator).

$$\pi_{name}\{\sigma_{sex=female}(\text{Student})\} - \pi_{name}(\text{Student} \Join_{(sex=female \wedge x=male \wedge marks \leq m)} \rho_{n,x,m}(\text{Student}))$$

- [ ] names of girl students with the highest marks  
- [ ] names of girl students with more marks than some boy student  
- [ ] names of girl students with marks not less than some boy student  
- [ ] names of girl students with more marks than all the boy students

::: {.callout-note title="Answer" collapse=true}

<!-- Answer here -->
- [ ] names of girl students with the highest marks  
- [ ] names of girl students with more marks than some boy student  
- [ ] names of girl students with marks not less than some boy student  
- [ ] names of girl students with more marks than all the boy students

:::

