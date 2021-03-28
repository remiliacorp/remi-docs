---
title: "Remilia Market"
order: 0
---

Remilia Market is a private digital art gallery for NFTs exclusively curating Remilia Collective artist works, located at [remilia.org/market](https://remilia.org/market)

![](2021-03-21-22-50-29.png)

## Exclusivity

Remilia Collective artists are contracted to present exclusively on our Collection, with first sales always taking place on Remilia Market. The Market is tightly curated, with Remilia Corp controlling uploads and auctions in collaboration with the artists, with a focus on value preservation.

### Remilia Residency

Remilia Residency is a seasonal space where one or more non-Collective artists will be invited to to show works in Remilia Market. Residencies will be voted on as part of the Shareholder Meeting.

## Technical Specifications

Remilia Market works tightly with [OpenSea's SDK framework](https://github.com/ProjectOpenSea/opensea-js), using it as the backend for NFT management. This way it remains compatible with OpenSea as an NFT aggregation standard, and with [MetaMask](https://metamask.io/) for handling ETH payments. All Remilia Market NFTs are able to be be bought and sold both from Remilia Market's frontend and on OpenSea directly.

### Lazy Minting

Minting his handled by OpenSea's lazy minting system, such that NFT's are encoded with its metadata on creation, but not actually minted until the point of sale. The buyer then incurs the Ethereum gas fees associated with minting along the with the sale, in addition to the 2.5% fee OpenSea charges for this service.

### Metadata

Remilia Market will apply the following permanent metadata tags to each NFT:
- Artist name
- Creation date
- Series
- Dimensions
- Filetype
- Medium

This is done to ensure robustness in the face of the evolving NFT space, and in line with physical art authentication tradition.