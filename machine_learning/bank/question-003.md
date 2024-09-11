---
title: Question-3
pagetitle: Question-3
order: 3
categories: [PCA]
---

Which of the following is the most appropriate description of the method used in PCA to achieve dimensionality reduction?

- [ ] PCA achieves this by discarding a random subset of features in the dataset
- [ ] PCA achieves this by selecting those features in the dataset along which the variance of the dataset is maximised
- [ ] PCA achieves this by looking for those directions in the feature space along which the variance of the dataset is maximised
- [ ] PCA achieves this by retaining the those features in the dataset along which the variance of the dataset is minimised

::: {.callout-note title="Answer" collapse=true}

- [ ] PCA achieves this by discarding a random subset of features in the dataset
- [ ] PCA achieves this by selecting those features in the dataset along which the variance of the dataset is maximised
- [x] PCA achieves this by looking for those directions in the feature space along which the variance of the dataset is maximised
- [ ] PCA achieves this by retaining the those features in the dataset along which the variance of the dataset is minimised

:::

::: {.callout-note title="Solution" collapse=true}

PCA looks for a new set of directions in feature space such that the first few directions capture the maximum variance in the data. It does this by re-orienting the feature axes, which can be thought of as rotating the axes in the feature space.

:::