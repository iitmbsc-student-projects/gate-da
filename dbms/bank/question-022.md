---
title: Question-22
pagetitle: Question-22
categories: [DBMS, Relational Algebra]
---


Consider the following three relations in a relational database.
- Employee (eId, Name)
- Brand(bId, bName)
- Own(eId, bId )

Which of the following relational algebra expressions return the set of eIds who own all the brands?

- [ ] $\Pi_{eId} (\Pi_{eId, bId} (\text{Own}) / \Pi_{bId} (\text{Brand}))$
- [ ] $\Pi_{eId} (\text{Own}) - \Pi_{eId} ((\Pi_{eId} (\text{Own}) \times \Pi_{bId} (\text{Brand})) - \Pi_{eId, bId} (\text{Own}))$
- [ ] $\Pi_{eId} (\Pi_{eId, bId} (\text{Own})/\Pi_{bId} (\text{Own}))$
- [ ] $\Pi_{eId} ((\Pi_{eId} (\text{Own}) \times \Pi_{bId} (\text{Own})) / \Pi_{bId} (\text{Brand}))$



::: {.callout-note title="Answer" collapse=true}

- [x] $\Pi_{eId} (\Pi_{eId, bId} (\text{Own}) / \Pi_{bId} (\text{Brand}))$
- [x] $\Pi_{eId} (\text{Own}) - \Pi_{eId} ((\Pi_{eId} (\text{Own}) \times \Pi_{bId} (\text{Brand})) - \Pi_{eId, bId} (\text{Own}))$
- [ ] $\Pi_{eId} (\Pi_{eId, bId} (\text{Own})/\Pi_{bId} (\text{Own}))$
- [ ] $\Pi_{eId} ((\Pi_{eId} (\text{Own}) \times \Pi_{bId} (\text{Own})) / \Pi_{bId} (\text{Brand}))$

:::



::: {.callout-note title="Solution" collapse=true}

To find the set of eIds who own all the brands:
- The first expression ($\Pi_{eId} (\Pi_{eId, bId} (\text{Own}) / \Pi_{bId} (\text{Brand}))$) performs a division between the projection of eId and bId in Own and the projection of bId in Brand. This retrieves the eIds who own all brands.
- The second expression uses set difference and intersection operations to achieve the same result as the first expression, thereby also returning the correct set of eIds who own all brands.

Hence, choices a and b are the correct relational algebra expressions to obtain the set of eIds who own all the brands.

:::