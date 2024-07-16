---
title: Question-29
pagetitle: Question-29
categories: [Python programming, Heap]
---

Consider the following statements:
I. The smallest element in a max-heap is always at a leaf node.
II. The second largest element in a max-heap is always a child of a root node.
III. A max-heap can be constructed from a binary search tree in \(\Theta(n)\) time.
IV. A binary search tree can be constructed from a max-heap in \(\Theta(n)\) time.
Which of the above statements are TRUE?

- [ ] I, II and III
- [ ] I, II and IV
- [ ] I, III and IV
- [ ] II, III and IV


::: {.callout-note title="Solution" collapse=true}

- [x] I, II and III
- [ ] I, II and IV
- [ ] I, III and IV
- [ ] II, III and IV

:::



::: {.callout-note title="Feedback" collapse=true}

Let's evaluate each statement:

I. The smallest element in a max-heap is always at a leaf node.  
   - True. In a max-heap, the smallest element will be at a leaf node as all parent nodes have larger values than their children.

II. The second largest element in a max-heap is always a child of a root node.  
   - True. In a max-heap, the second largest element will be a child of the root node as it's among the children of the largest element (root).

III. A max-heap can be constructed from a binary search tree in \(\Theta(n)\) time.  
   - True. A max-heap can be constructed from a binary search tree in linear time complexity by performing heapify which takes \(\Theta(n)\) time.

IV. A binary search tree can be constructed from a max-heap in \(\Theta(n)\) time.  
   - False. It takes \(\Theta(n\log n)\) time

Therefore, the statements I, II, and III are TRUE.

:::