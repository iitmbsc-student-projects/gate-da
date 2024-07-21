# GATE DBMS Set - 2

## Question 1
In an Entity-Relationship (ER) model, suppose \(R\) is a many-to-one relationship from entity set \(E1\) to entity set \(E2\). Assume that \(E1\) and \(E2\) participate totally in \(R\) and that the cardinality of \(E1\) is greater than the cardinality of \(E2\). Which one of the following is true about \(R\)?

### Choices 
- [ ] Every entity in \(E1\) is associated with exactly one entity in \(E2\).
- [ ] Some entity in \(E1\) is associated with more than one entity in \(E2\).
- [ ] Every entity in \(E2\) is associated with exactly one entity in \(E1\).
- [ ] Every entity in \(E2\) is associated with at most one entity in \(E1\).

::: {.callout-note title="Answer" collapse=true}
- Every entity in \(E1\) is associated with exactly one entity in \(E2\).
:::

#### Feedback
Given that \(R\) is a many-to-one relationship from \(E1\) to \(E2\) and both \(E1\) and \(E2\) participate totally in \(R\), and the cardinality of \(E1\) is greater than the cardinality of \(E2\), the correct option is:

- Every entity in \(E1\) is associated with exactly one entity in \(E2\).

This aligns with the conditions of a many-to-one relationship where every entity in \(E1\) maps to exactly one entity in \(E2\), ensuring total participation and many-to-one from \(E1\) to \(E2\).


## Question 2

Consider an Entity-Relationship (ER) model in which entity sets \(E_1\) and \(E_2\) are connected by an \(m: n\) relationship \(R_{12}\). \(E_1\) and \(E_3\) are connected by a \(1: n\) relationship \(R_{13}\). \(E_1\) has two single-valued attributes \(a_{11}\) and \(a_{12}\) of which \(a_{11}\) is the key attribute. \(E_2\) has two single-valued attributes \(a_{21}\) and \(a_{22}\) of which \(a_{21}\) is the key attribute. \(E_3\) has two single-valued attributes \(a_{31}\) and \(a_{32}\) of which \(a_{31}\) is the key attribute. The relationships do not have any attributes. If a relational model is derived from the above ER model, then the minimum number of relations that would be generated if all the relations are in 3NF is__________.

### Answer
::: {.callout-note title="Answer" collapse=true}

4
:::

#### Feedback
1. \(R_{12}\) represents a many-to-many relationship between \(E_1\) and \(E_2\), so a separate table is created:
   - \(E_1\) (\(a_{11}\), \(a_{12}\))
   - \(E_2\) (\(a_{21}\), \(a_{22}\))
   - \(R_{12}\) (\(a_{11}\), \(a_{21}\))

2. \(R_{13}\) represents a \(1: n\) relationship between \(E_1\) and \(E_3\):
   - \(E_1\) (\(a_{11}\), \(a_{12}\)) with \(a_{11} \rightarrow a_{12}\)
   - \(E_3\) \(R_{13}\) (\(a_{31}\), \(a_{32}\), \(a_{11}\)) with \(a_{31} \rightarrow a_{32} \,|\, a_{11}\)

For 3NF:
- \(E_1\) (\(a_{11}\), \(a_{12}\)) with \(a_{11} \rightarrow a_{12}\)
- \(E_2\) (\(a_{21}\), \(a_{22}\)) with \(a_{21} \rightarrow a_{22}\)
- \(R_{12}\) (\(a_{11}\), \(a_{21}\))
- \(E_3\) \(R_{13}\) (\(a_{31}\), \(a_{32}\), \(a_{11}\)) with \(a_{31} \rightarrow a_{32} \,|\, a_{11}\)

Thus, the minimum number of relations required for 3NF is 4.

## Question 3

Consider a relation \(R(A, B, C, D, E)\) with the following three functional dependencies: \(AB \rightarrow C\), \(BC \rightarrow D\), \(C \rightarrow E\). The number of super keys in the relation \(R\) is _________.

### Answer

::: {.callout-note title="Answer" collapse=true}

8
:::

#### Feedback
Given functional dependencies: \(AB \rightarrow C\), \(BC \rightarrow D\), \(C \rightarrow E\)

1. Candidate Key: \(AB\)
2. Candidate Key Combinations with non-prime attributes:
   - Combinations with the remaining attributes \((n - 2)\) where \(n\) is the number of Attributes
   - Total number of super keys with combinations: \(2^{5-2} = 2^3 = 8\)
   
Therefore, there are 8 super keys for the relation \(R\), which are: {AB, ABC, ABD, ABE, ABCD, ABDE, ABCE, ABCDE}

## Question 4

Which of the following is NOT a super key in a relational schema with attributes V, W, X, Y, Z and primary key VY?

### Choices 
- [ ] VXYZ
- [ ] VWXZ
- [ ] VWXY
- [ ] VWXYZ
::: {.callout-note title="Answer" collapse=true}

- VWXZ
:::
#### Feedback
A super key is any super set of a candidate key (primary key). Given the primary key as "VY":
- \(VXYZ\) - Super key
- \(VWXZ\) - Not a super key (as \(Y\) is not present)
- \(VWXY\) - Super key
- \(VWXYZ\) - Super key

Therefore, \(VWXZ\) is not a super key in this scenario.

## Question 5

Consider the relation scheme \(R = (E, F, G, H, I, J, K, L, M, N)\) and the set of functional dependencies \({\{E, F\}} \rightarrow \{G\}, \{F\} \rightarrow \{I, J\}, \{E, H\} \rightarrow \{K, L\}, \{K\} \rightarrow \{M\}, \{L\} \rightarrow \{N\}}\) on \(R\).

What is the key for \(R\)?

### Choices 
- [ ] \(\{E, F\}\)
- [ ] \(\{E, F, H\}\)
- [ ] \(\{E, F, H, K, L\}\)
- [ ] \(\{E\}\)

::: {.callout-note title="Answer" collapse=true}

- \(\{E, F, H\}\)
:::


#### Feedback
To find the key for \(R\), compute the closure of the attribute sets:

Given functional dependencies:
- \(\{EF\} \rightarrow \{G\}\)
- \(\{F\} \rightarrow \{I, J\}\)
- \(\{EH\} \rightarrow \{K, L\}\)
- \(\{K\} \rightarrow \{M\}\)
- \(\{L\} \rightarrow \{N\}\)

Calculating closures:
- \([\{EF\}]^+ = \{EFGIJ\}\)
- \([\{E\}]^+ = \{E\}\)
- \([\{EFH\}]^+ = \{EFGHIJKLMN\}\)

Since \([\{EFH\}]^+\) contains all the attributes of \(R\), \(\{EFH\}\) is the key for \(R\). Hence, the correct choice is \(\{E, F, H\}\).

## Question 6

Relation \(R\) has eight attributes \(ABCDEFGH\). Fields of \(R\) contain only atomic values.

\(F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}\) is a set of functional dependencies (FDs) such that \(F^+\) is exactly the set of FDs that hold for \(R\).

How many candidate keys does the relation \(R\) have?

### Choices 
- [ ] \(3\)
- [ ] \(4\)
- [ ] \(5\)
- [ ] \(6\)


::: {.callout-note title="Answer" collapse=true}

-  \(4\)
:::

#### Feedback
Given FD set:
- \(CH \rightarrow G\)
- \(A \rightarrow B\)
- \(A \rightarrow C\)
- \(B \rightarrow C\)
- \(B \rightarrow F\)
- \(B \rightarrow H\)
- \(E \rightarrow A\)
- \(F \rightarrow E\)
- \(F \rightarrow G\)

Calculating closures:
- \([A]^+ = \{ABCDEFGH\}\)
- \([AD]^+ = \{ABCDEFGH\}\)
- \([ED]^+ = \{ABCDEFGH\}\)
- \([FD]^+ = \{ABCDEFGH\}\)
- \([BD]^+ = \{ABCDEFGH\}\)

The attribute \(D\) is not present in the FD set, so whenever an attribute is not present in the FDs, adding that attribute forms a candidate key. Therefore, candidate keys = \([AD, ED, FD, BD]\), leading to \(4\) candidate keys for relation \(R\). Hence, the correct answer is \(4\).

## Question 7

Suppose the following functional dependencies hold on a relation \(U\) with attributes \(P, Q, R, S,\) and \(T\):
- \(P \rightarrow QR\)
- \(RS \rightarrow T\)

Which of the following functional dependencies can be inferred from the above functional dependencies?

### Choices 
- [ ] \(PS \rightarrow T\)
- [ ] \(R \rightarrow T\)
- [ ] \(P \rightarrow R\)
- [ ] \(PS \rightarrow Q\)

::: {.callout-note title="Answer" collapse=true}
- \(PS \rightarrow T\)
- \(P \rightarrow R\)
- \(PS \rightarrow Q\)
:::


#### Feedback
Given FD set: 
- \(P \rightarrow QR\)
- \(RS \rightarrow T\)

Inferring functional dependencies:
- \((PS)^+ = \{PQRST\}\); Therefore, \(PS \rightarrow T\) can be inferred.
- \((R)^+ = \{R\}\); \(R \rightarrow T\) cannot be inferred.
- \((P)^+ = \{PQR\}\); Therefore, \(P \rightarrow R\) can be inferred.
- \((PS)^+ = \{PQRST\}\); Therefore, \(PS \rightarrow Q\) can be inferred.

Hence, the inferred functional dependencies are \(PS \rightarrow T, P \rightarrow R,\) and \(PS \rightarrow Q\).

## Question 8

In a relational data model, which one of the following statements is TRUE?

### Choices 
- [ ] A relation with only two attributes is always in BCNF.
- [ ] If all attributes of a relation are prime attributes, then the relation is in BCNF.
- [ ] Every relation has at least one non-prime attribute.
- [ ] BCNF decompositions preserve functional dependencies.

::: {.callout-note title="Answer" collapse=true}
- A relation with only two attributes is always in BCNF.
:::

#### Feedback
(a) A relation with two attributes always in BCNF: True. In BCNF, every non-trivial functional dependency \(x \rightarrow y\) implies \(x\) is a super key. For relations with two attributes, all non-trivial functional dependencies would indeed have the left side (\(x\)) as a super key.

(b) If all attributes of a relation are prime attributes, then the relation is in BCNF: False. It's possible for prime attributes to determine each other, which is allowed in 3NF but not in BCNF. 

(c) Every relation has at least one non-prime attribute: False. It's not mandatory for a relation to have at least one non-prime attribute. However, every relation has at least one prime attribute.

(d) BCNF decompositions preserve functional dependencies: False. BCNF decompositions might lose some functional dependencies, as exemplified by the case where \(D \rightarrow A\) in a relation \([AB \rightarrow CD, D \rightarrow A]\) where \(D\) is not a super key, and it's not in BCNF. 

Therefore, the only statement that holds true is (a) - a relation with only two attributes is always in BCNF.

## Question 9

Consider the following relational schemas with their non-trivial functional dependencies:

Schema I: Registration (\(\text{rollno, courses}\))  
FD: \(\text{rollno} \rightarrow \text{courses}\)

Schema II: Registration (\(\text{rollno, courseid, email}\))  
FDs: \(\text{rollno, courseid} \rightarrow \text{email}\), \(\text{email} \rightarrow \text{rollno}\)

Schema III: Registration (\(\text{rollno, courseid, marks, grade}\))  
FDs: \(\text{rollno, courseid} \rightarrow \text{marks, grade}\), \(\text{marks} \rightarrow \text{grade}\)

Schema IV: Registration (\(\text{rollno, courseid, credit}\))  
FDs: \(\text{rollno, courseid} \rightarrow \text{credit}\), \(\text{courseid} \rightarrow \text{credit}\)

Which one of the relational schemas above is in 3NF but not in BCNF?

### Choices 
- [ ] Schema I
- [ ] Schema II
- [ ] Schema III
- [ ] Schema IV

::: {.callout-note title="Answer" collapse=true}
- Schema II
:::



#### Feedback
Let's evaluate each schema:

Schema I: 
- \(\text{rollno} \rightarrow \text{courses}\) (in BCNF, as \(\text{rollno}\) is a super key)

Schema II:
- \(\text{rollno, courseid} \rightarrow \text{email}\) (in BCNF, as the left side is a super key)
- \(\text{email} \rightarrow \text{rollno}\) (not in BCNF, as \(\text{email}\) is not a super key)

Schema III:
- \(\text{rollno, courseid} \rightarrow \text{marks, grade}\) (not in BCNF, as neither \(\text{marks}\) nor \(\text{grade}\) is a super key)
- \(\text{marks} \rightarrow \text{grade}\)

Schema IV:
- \(\text{rollno, courseid} \rightarrow \text{credit}\) (not in BCNF, as \(\text{courseid}\) is not a super key)
- \(\text{courseid} \rightarrow \text{credit}\)

Among these, only Schema II (\(\text{rollno, courseid, email}\)) is in 3NF but not in BCNF, as the FD \(\text{email} \rightarrow \text{rollno}\) violates BCNF since \(\text{email}\) is not a super key.



## Question 10

Relation \(R\) has eight attributes \(ABCDEFGH\). Fields of \(R\) contain only atomic values. Given functional dependencies \(F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}\), such that \(F^+\) is exactly the set of FDs that hold for \(R\). Determine the normal form of relation \(R\).

### Choices 
- [ ] in 1NF, but not in 2NF.
- [ ] in 2NF, but not in 3NF.
- [ ] in 3NF, but not in BCNF.
- [ ] in BCNF.

::: {.callout-note title="Answer" collapse=true}
- in 1NF, but not in 2NF.
:::


#### Feedback
Given FD set:
\(F = \{CH \rightarrow G, A \rightarrow BC, B \rightarrow CFH, E \rightarrow A, F \rightarrow EG\}\)

Candidate keys: {AD, ED, FD, BD}

Testing for normal forms:

BCNF: 
- \(CH \rightarrow G\) (violates BCNF as \(CH\) is not a super key)
- \(A \rightarrow BC\) (does not violate BCNF)

3NF: 
- \(A \rightarrow BC\) (violates 2NF as \(A\) is a proper subset of the candidate key \(AD\))
- \(B \rightarrow CFH\) (does not violate 3NF)

2NF: 
- \(A \rightarrow BC, B \rightarrow CFH\) (violates 2NF as \(A\) and \(B\) are not super keys)

Therefore, the relation is in 1NF but not in 2NF (option a)