---
title: Question-79
pagetitle: Question-79
order: 79
categories: [probability, counting]
---

There are six districts in a city. Six disconnected robberies happen in a given day. It is equally likely for each robbery to have happened at any of the six districts and at any random location within it. What is the probability that some district had more than one robbery? Enter your answer correct to two decimal places.

::: {.callout-note title='Answer' collapse=true}

$0.98$

:::

::: {.callout-note title='Solution' collapse=true}

The negation of the event "some district had more than one robbery is" the event "every district had exactly one robbery. This is because the number of districts is equal to the number of robberies. Therefore, the required probability is:

$$
1 - \cfrac{6!}{6^{6}}
$$

The reasoning is that each robbery could have occurred in any of the six districts with equal probability with the robberies being independent of each other.

:::