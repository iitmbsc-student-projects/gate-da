---
title: Question-19
pagetitle: Question-19
categories: [DBMS, Relational Model]
---


In a relational data model, which one of the following statements is TRUE?

- [ ] A relation with only two attributes is always in BCNF.
- [ ] If all attributes of a relation are prime attributes, then the relation is in BCNF.
- [ ] Every relation has at least one non-prime attribute.
- [ ] BCNF decompositions preserve functional dependencies.


::: {.callout-note title="Answer" collapse=true}

- [x] A relation with only two attributes is always in BCNF.
- [ ] If all attributes of a relation are prime attributes, then the relation is in BCNF.
- [ ] Every relation has at least one non-prime attribute.
- [ ] BCNF decompositions preserve functional dependencies.

:::



::: {.callout-note title="Solution" collapse=true}

(a) A relation with two attributes always in BCNF: True. In BCNF, every non-trivial functional dependency $x \rightarrow y$ implies $x$ is a super key. For relations with two attributes, all non-trivial functional dependencies would indeed have the left side ($x$) as a super key.

(b) If all attributes of a relation are prime attributes, then the relation is in BCNF: False. It's possible for prime attributes to determine each other, which is allowed in 3NF but not in BCNF. 

(c) Every relation has at least one non-prime attribute: False. It's not mandatory for a relation to have at least one non-prime attribute. However, every relation has at least one prime attribute.

(d) BCNF decompositions preserve functional dependencies: False. BCNF decompositions might lose some functional dependencies, as exemplified by the case where $D \rightarrow A$ in a relation $[AB \rightarrow CD, D \rightarrow A]$ where $D$ is not a super key, and it's not in BCNF. 

Therefore, the only statement that holds true is (a) - a relation with only two attributes is always in BCNF.

:::