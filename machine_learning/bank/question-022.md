---
title: Question-22
pagetitle: Question-22
order: 22
categories: [ ]
draft: true
---

Based on the above data, answer the given subquestions.

Consider the following dataset with feature vector **x** and label *y*:

| **x** | *y* |
| :--- | :-: |
| [4 1]<sup>T</sup> | 2 |
| [2 8]<sup>T</sup> | -14 |
| [1 4]<sup>T</sup> | -7 |
| [3 2]<sup>T</sup> | -1 |

Fit the linear regression model *y* = **wx**, **w** = [w<sub>1</sub> w<sub>2</sub>]<sup>T</sup> using the squared error.

- [ ] y = x<sub>1</sub> + 2x<sub>2</sub>

- [ ] y = x<sub>1</sub> - 2x<sub>2</sub>

- [ ] y = x<sub>1</sub> - x<sub>2</sub>

- [ ] y = x<sub>1</sub> + x<sub>2</sub>

::: {.callout-note title="Hint" collapse=true}

:::

::: {.callout-note title="Answer" collapse=true}

- [ ] y = x<sub>1</sub> + 2x<sub>2</sub>

- [x] y = x<sub>1</sub> - 2x<sub>2</sub>

- [ ] y = x<sub>1</sub> - x<sub>2</sub>

- [ ] y = x<sub>1</sub> + x<sub>2</sub>

:::

::: {.callout-note title="Solution" collapse=true}

### Linear Regression using the Normal Equation

The goal of linear regression is to find the optimal weight vector **w** that minimizes the sum of squared errors between the predicted values and the actual labels. The linear model is given by:

*y* = *f*(**x**) = **w**<sup>T</sup>**x** = w<sub>1</sub>x<sub>1</sub> + w<sub>2</sub>x<sub>2</sub>

For the entire dataset, this can be expressed in matrix form as **y** = **Xw**, where **X** is the design matrix (with each row being a feature vector **x**<sup>T</sup>) and **y** is the vector of labels.

**1. Construct the Design Matrix (X) and Target Vector (y):**

From the given data, we construct the matrix **X** and vector **y**:

$X = \begin{bmatrix} 4 & 1 \\ 2 & 8 \\ 1 & 4 \\ 3 & 2 \end{bmatrix}$, $y = \begin{bmatrix} 2 \\ -14 \\ -7 \\ -1 \end{bmatrix}$

**2. The Normal Equation:**

The solution that minimizes the squared error is given by the normal equation:

**w** = (**X**<sup>T</sup>**X**)<sup>-1</sup>**X**<sup>T</sup>**y**

**3. Calculate the components of the Normal Equation:**

*   **Calculate X<sup>T</sup>X:**  
    $X^T = \begin{bmatrix} 4 & 2 & 1 & 3 \\ 1 & 8 & 4 & 2 \end{bmatrix}$
    
    $X^TX = \begin{bmatrix} 4 & 2 & 1 & 3 \\ 1 & 8 & 4 & 2 \end{bmatrix} \begin{bmatrix} 4 & 1 \\ 2 & 8 \\ 1 & 4 \\ 3 & 2 \end{bmatrix} = \begin{bmatrix} (16+4+1+9) & (4+16+4+6) \\ (4+16+4+6) & (1+64+16+4) \end{bmatrix} = \begin{bmatrix} 30 & 30 \\ 30 & 85 \end{bmatrix}$

*   **Calculate the inverse (X<sup>T</sup>X)<sup>-1</sup>:**  
    The inverse of a 2x2 matrix $\begin{bmatrix} a & b \\ c & d \end{bmatrix}$ is $\frac{1}{ad-bc}\begin{bmatrix} d & -b \\ -c & a \end{bmatrix}$.
    
    det(X<sup>T</sup>X) = (30)(85) - (30)(30) = 2550 - 900 = 1650
    
    $(X^TX)^{-1} = \frac{1}{1650} \begin{bmatrix} 85 & -30 \\ -30 & 30 \end{bmatrix}$

*   **Calculate X<sup>T</sup>y:**  
    $X^Ty = \begin{bmatrix} 4 & 2 & 1 & 3 \\ 1 & 8 & 4 & 2 \end{bmatrix} \begin{bmatrix} 2 \\ -14 \\ -7 \\ -1 \end{bmatrix} = \begin{bmatrix} 4(2) + 2(-14) + 1(-7) + 3(-1) \\ 1(2) + 8(-14) + 4(-7) + 2(-1) \end{bmatrix} = \begin{bmatrix} 8 - 28 - 7 - 3 \\ 2 - 112 - 28 - 2 \end{bmatrix} = \begin{bmatrix} -30 \\ -140 \end{bmatrix}$

**4. Calculate the weight vector w:**  

Now, we multiply the parts together:

**w** = $(X^TX)^{-1} (X^Ty) = \frac{1}{1650} \begin{bmatrix} 85 & -30 \\ -30 & 30 \end{bmatrix} \begin{bmatrix} -30 \\ -140 \end{bmatrix}$

**w** = $\frac{1}{1650} \begin{bmatrix} 85(-30) + (-30)(-140) \\ -30(-30) + 30(-140) \end{bmatrix} = \frac{1}{1650} \begin{bmatrix} -2550 + 4200 \\ 900 - 4200 \end{bmatrix} = \frac{1}{1650} \begin{bmatrix} 1650 \\ -3300 \end{bmatrix} = \begin{bmatrix} 1 \\ -2 \end{bmatrix}$

So, w<sub>1</sub> = 1 and w<sub>2</sub> = -2.

**5. Final Model:**

The resulting linear regression model is:
*y* = 1 &middot; x<sub>1</sub> + (-2) &middot; x<sub>2</sub>  
*y* = x<sub>1</sub> - 2x<sub>2</sub>


:::
