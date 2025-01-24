---
title: Question-15
pagetitle: Question-15
categories: [DBMS, Key]
---


Which of the following is NOT a super key in a relational schema with attributes V, given that the primary key is "VY"?

- [ ] VXYZ
- [ ] VWXZ
- [ ] VWXY
- [ ] VWXYZ



::: {.callout-note title="Answer" collapse=true}

- [ ] VXYZ
- [x] VWXZ
- [ ] VWXY
- [ ] VWXYZ

:::



::: {.callout-note title="Solution" collapse=true}

A super key is any super set of a candidate key (primary key). Given the primary key as "VY":
- $VXYZ$ - Super key
- $VWXZ$ - Not a super key (as $Y$ is not present)
- $VWXY$ - Super key
- $VWXYZ$ - Super key

Therefore, $VWXZ$ is not a super key in this scenario.

:::
