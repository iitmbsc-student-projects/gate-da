---
title: Question-10
pagetitle: Question-10
order: 10
categories: [Bayes Theorem]
---
Students from $3$ colleges $X$, $Y$, and $Z$ have participated in a competition, where $30\%$ of the participants are from college $X$, $20\%$ from college $Y$, and $50\%$ from college $Z$. It is known that $50\%$, $40\%$ and $60\%$ of the participants from colleges $X$, $Y$, and $Z$ respectively are
girls. If a girl is randomly selected, what is the probability that she is from college $X?$ (Enter the answer correct upto three decimal places.)


::: {.callout-note title="Hint" collapse=true}

Define an event as $G$ which represents the "event that a randomly selected participant is a girl" and calculate $P(G)$ by using law of total probability and then apply bayes theorem.




:::

::: {.callout-note title="Answer" collapse=true}


0.283

:::

::: {.callout-note title="Solution" collapse=true}

Let $X$, $Y$, and $Z$ represent the events that a randomly selected participant is from college
$X$, $Y$, and $Z$ respectively.  
Let $G$ represent the event that a randomly selected participant is a girl.  
Given, $P(X) = 0.3, P(Y) = 0.2, P(Z) = 0.5 \hspace{2mm} \text{and,}$
$P(G \hspace{1mm} | \hspace{1mm} X) = 0.5, P(G \hspace{1mm} | \hspace{1mm} Y) = 0.4, P(G \hspace{1mm} | \hspace{1mm} Z) = 0.6$  

Using Bayes theorem,   

$P(X \hspace{1mm} | \hspace{1mm} G) = \dfrac{P(X) P(G \hspace{1mm} | \hspace{1mm} X) }{P(G)}$    

$P(X \hspace{1mm} | \hspace{1mm} G) = \dfrac{P(X) P(G \hspace{1mm} | \hspace{1mm} X) }{P(X) P(G \hspace{1mm} | \hspace{1mm} X) + P(Y) P(G \hspace{1mm} | \hspace{1mm} Y)+P(Z) P(G \hspace{1mm} | \hspace{1mm} Z)}$  

$P(X \hspace{1mm} | \hspace{1mm} G) =\dfrac{(0.3 \times 0.5)}{(0.3 \times 0.5) + (0.2 \times 0.4) + (0.5 \times 0.6)} =\dfrac{0.15}{0.53} =0.283$

:::