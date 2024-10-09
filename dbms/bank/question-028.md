---
title: Question-28
pagetitle: Question-28
categories: [DBMS]
---

Which of the following query transformations (i.e., replacing the l.h.s. expression by the r.h.s expression) is incorrect? R1 and R2 are relations, C1 and C2 are selection conditions and A1 and A2 are attributes of R1.

- [ ] 𝜎𝐶1(𝜎𝐶2(𝑅1))→𝜎𝐶2(𝜎𝐶1(𝑅1))  
- [ ] 𝜎𝐶1(𝜋𝐴1(𝑅1))→𝜋𝐴1(𝜎𝐶1(𝑅1))  
- [ ] 𝜎𝐶1(𝑅1∪𝑅2)→𝜎𝐶1(𝑅1)∪𝜎𝐶1(𝑅2)  
- [ ] 𝜋𝐴1(𝜎𝐶1(𝑅1))→𝜎𝐶1(𝜋𝐴1(𝑅1))

::: {.callout-note title="Answer" collapse=true}

- [ ] 𝜎𝐶1(𝜎𝐶2(𝑅1))→𝜎𝐶2(𝜎𝐶1(𝑅1))  
- [ ] 𝜎𝐶1(𝜋𝐴1(𝑅1))→𝜋𝐴1(𝜎𝐶1(𝑅1))  
- [ ] 𝜎𝐶1(𝑅1∪𝑅2)→𝜎𝐶1(𝑅1)∪𝜎𝐶1(𝑅2)  
- [x] 𝜋𝐴1(𝜎𝐶1(𝑅1))→𝜎𝐶1(𝜋𝐴1(𝑅1))

:::