---
title: Question-67 
pagetitle: Question-67
order: 67
categories: [Chi-square Test]
---

The demand for a particular spare part in a factory was found to very from day-to-day. In a sample study the following information was obtained:

| Days   | Mon. | Tues.     | Wed. | Thurs. | Fri. | Sat. |
|--------|-----|-----------|-----|----| ----| ---- |
| No. of parts Demanded  | 1124  | 1125  | 1110 | 1120 | 1126 |  1115 |

Test the hypothesis that the number of parts demanded does not depend on the day of the week. (Given : the values of chi-square significance at 5, 6, 7, d.f. are respectively 11.07, 12.59, 14.07 at 5\% level of significance).




- [ ]  Accept the null hypothesis and conclude that the number of spare parts demanded does not depend on the day of the week.

  
- [ ] Accept the null hypothesis and conclude that the number of spare parts demanded depends on the day of the week.

  
- [ ] Reject the null hypothesis and conclude that the number of spare parts demanded depends on the day of the week.
  

- [ ] Reject the alternative hypothesis and conclude that the number of spare parts demanded does not depend on the day of the week.
 
  
::: {.callout-note title="Hint" collapse=true}

Use the formula of "Chi-square test of goodness of fit" as

$\chi^2 = \sum_{i=1}^{n}\left[\dfrac{(f_i - e_i)^2}{e_i}\right] \sim \chi^2_{n-1}$,

where, $f_i (i = 1, 2, \ldots, n)$ is a set of observed frequencies and $e_i (i = 1, 2, \ldots, n)$ is the corresponding set of expected frequencies such that $\sum_{i=1}^{n}f_i = \sum_{i=1}^{n}e_i$.

Also, expected frequencies, $e_i$, can be calculated as

$e_i = np_i,$ where

$n=$ total number of observations

$p_i =$ probability of category $i$
  




:::

::: {.callout-note title="Answer" collapse=true}

- [x]  Accept the null hypothesis and conclude that the number of spare parts demanded does not depend on the day of the week.

  
- [ ] Accept the null hypothesis and conclude that the number of spare parts demanded depends on the day of the week.

  
- [ ] Reject the null hypothesis and conclude that the number of spare parts demanded depends on the day of the week.
  

- [x] Reject the alternative hypothesis and conclude that the number of spare parts demanded does not depend on the day of the week.  
 
  
:::

::: {.callout-note title="Solution" collapse=true}

$H_0:$ The number of parts demanded does not depend on the day of the week.

Under the null hypothesis, the expected frequencies of the spare parts demanded on each of the six days wpuld be:

$\dfrac{1}{6}(1124+1125+1110+1120+1126+1115) = \dfrac{6720}{6} = 1120$


| Days   | Observed freq. $(f_i)$ | Expected freq. $(e_i)$    | $(fi - e_i)^2$ | $\dfrac{(fi - e_i)^2}{e_i}$|
|--------|-----|-----------|---- | ---- | 
| Mon.  | 1124  | 1120  | 16 | 0.014 |
| Tues. | 1125  | 1120  | 25 | 0.022 |
| Wed.  | 1110  | 1120  | 100 | 0.089 |
| Thurs.  | 1120 | 1120  | 0 | 0 |
| Fri.  | 1126  | 1120  | 36 | 0.032 |
| Sat.  | 1115  | 1120  | 25 | 0.022 |
| Total |  6720 | 6720  |  | 0.179 |

Thus, $\chi^2 = \sum_{i=1}^{n}\left[\dfrac{(f_i - e_i)^2}{e_i}\right]  = 0.179$,
which is less than the tablulated value of $\chi^2_{n-1} = \chi^2_5 = 11.07$. 

Thus, we will accept the null hypothesis (or reject the alternative hypothesis ) and conclude that the number of spare parts demanded does not depend on the day of the week.

Hence, option (a) and (d) are correct.



:::