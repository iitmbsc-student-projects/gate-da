---
title: Question-22
pagetitle: Question-22
order: 22
categories: [maxima and minima]
---

Find the area of the rectangle with largest perimeter that can be inscribed in a circle of unit radius.

::: {.callout-note title="Answer" collapse=true}

$2$

:::

::: {.callout-note title="Solution" collapse=true}

If the angle made by the diagonal of the rectangle with the diameter is $\displaystyle \theta$, the sides are $\displaystyle 2\cos \theta$ and $\displaystyle 2\sin \theta$.

![](img-5.svg)

We have to maximize:

\begin{equation*}
\underset{\theta }{\max} \ 4(\cos \theta +\sin \theta )
\end{equation*}
subject to:

\begin{equation*}
0\leqslant \theta \leqslant \frac{\pi }{2}
\end{equation*}

Since $\displaystyle f( \theta ) =\cos \theta +\sin \theta$ is continuous in $\displaystyle \left[ 0,\frac{\pi }{2}\right]$, it has an absolute maximum and minimum in this interval.

\begin{equation*}
\begin{aligned}
f^{\prime }( \theta ) & =\cos \theta -\sin \theta 
\end{aligned} ;\ \ \ f^{\prime \prime }( \theta ) =-\sin \theta -\cos \theta 
\end{equation*}

In the given interval, $\displaystyle f^{\prime }( \theta ) =0\Longrightarrow \theta =\frac{\pi }{4}$. At this point, $\displaystyle f^{\prime \prime }\left(\frac{\pi }{4}\right) < 0$, which implies that the point is a local maximum. $\displaystyle f\left(\frac{\pi }{4}\right) =\sqrt{2}$ and this is greater than $\displaystyle f( 0) =f\left(\frac{\pi }{2}\right) =1$. It follows that $\displaystyle \frac{\pi }{4}$ corresponds to the point of absolute maximum of $\displaystyle f$ in this interval. The area of the corresponding rectangle (square) is $\displaystyle \boxed{2}$.

:::
