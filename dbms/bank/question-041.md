---
title: Question-41
pagetitle: Question-41
categories: [DBMS]
---

A company maintains records of sales made by its salespersons and pays them commission based on each individual's total sales made in a year. This data is maintained in a table with following schema:

salesinfo \= (salespersonid, totalsales, commission)

In a certain year, due to better business results, the company decides to further reward its salespersons by enhancing the commission paid to them as per the following formula:

If commission ≤50000, enhance it by 2%

If 50000\<commission ≤100000, enhance it by 4%

If commission \>100000,  enhance it by 6%

The IT staff has written three different SQL scripts to calculate enhancement for each slab, each of these scripts is to run as a separate transaction as follows:

|  T1   | Update salesinfo Set commission \= commission \* 1.02 Where commission \< \= 50000; |
| :---: | ----- |
|  T2   | Update salesinfo Set commission \= commission \* 1.04 Where commission \> 50000 and commission is \< \= 100000; |
|  T3   | Update salesinfo Set commission \= commission \* 1.06 Where commission \> 100000; |

Which of the following options of running these transactions will update the commission of all salespersons correctly

- [ ] Execute T1 followed by T2 followed by T3  
- [ ] Execute T2, followed by T3; T1 running concurrently throughout  
- [ ] Execute T3 followed by T2; T1 running concurrently throughout  
- [ ] Execute T3 followed by T2 followed by T1

::: {.callout-note title="Answer" collapse=true}

- [ ] Execute T1 followed by T2 followed by T3  
- [ ] Execute T2, followed by T3; T1 running concurrently throughout  
- [ ] Execute T3 followed by T2; T1 running concurrently throughout  
- [x] Execute T3 followed by T2 followed by T1

:::

