---
title: Question-34
pagetitle: Question-34
categories: [DBMS]
---

Consider the following log sequence of two transactions on a bank account, with initial balance 12000, that transfer 2000 to a mortgage payment and then apply a 5% interest. 

1. T:1 start   
2. T1: B old \=12000, new \=10000  
3. T1: M old \=0, new \=2000  
4. T1: commit  
5. T2: start  
6. T2: B old \=10000, new \=10500  
7. T2: commit

Suppose the database system crashes just before log record 7 is written. When  the system is restarted, which one statement is true of the recovery procedure? 

- [ ] We must redo log record 6 to set B to 10500  
- [ ]  We must undo log record 6 to set B to 10000 and then redo log records 2 and 3  
- [ ] We need not redo log records 2 and 3 because transaction T1 has committed   
- [ ] We can apply redo and undo operations in arbitrary order because they are idempotent

::: {.callout-note title="Answer" collapse=true}

- [ ] We must redo log record 6 to set B to 10500  
- [x]  We must undo log record 6 to set B to 10000 and then redo log records 2 and 3  
- [ ] We need not redo log records 2 and 3 because transaction T1 has committed   
- [ ] We can apply redo and undo operations in arbitrary order because they are idempotent

:::

