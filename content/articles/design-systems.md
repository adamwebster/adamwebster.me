---
title: Design Systems
tagline: 'Designing a system to help unify you designs'
date: '2020-03-01'
featured: true
draft: false
slug: 'design-systems'
category: 'Front-end Development'
featuredImage: images/designsystem.jpg
tags: [React, Javascript]
showCoffeeButton: true
---

import SectionHeader from '../../src/components/SectionHeader/SectionHeader';

As some one who works on a **design system** both professional and personally I would like to share some of my thoughts about design systems.

<SectionHeader>What is a Design System?</SectionHeader>

A design system is the single source of truth for you application. It includes guidelines for things like the icons, fonts, and colours that are used in your application.

It is a also a collection of reusable UI components that your developers can use to create the pages.

It can also include a file (for example a sketch file) that includes a library of resusable assets that can be used by UX designers to create their mockups and comps.

<SectionHeader>Why are Design Systems important?</SectionHeader>

As mentioned above Design Systems are the single source of truth for everyone who has an hand in creating your application from the designers to developers.

This means everything in your application will be constent because everyone is using the same libarary of assets when creating there designs and common patterns will be defined for both designers and developers.

For the components when they are updated and the developers get a new version of the libary all the components though out the application will be updated automatically as long as there are no breaking changes.

<SectionHeader>Tools for creating a design system?</SectionHeader>

Some of the tools that I use for creating design systems are as follows

- [Storybook](https://storybook.js.org/) for testing my components in isolation and testing for things like accessibilty. Also creating the documenation for each component.
- [React](https://reactjs.org/) used as the underlining JavaScript framework that each component is written it.
- [TypeScript](https://www.typescriptlang.org/) used for type checking properties of componenets and functions to cut down on errors when developing.
- [Affinity Designer](https://affinity.serif.com/en-gb/designer/) used to design the icons for the design system as well as the designs of the components.

<SectionHeader>Examples of Design Systems</SectionHeader>

- [Fused Components](https://design.adamwebster.me) - An component libary created by yours truly.
- [Carbon Design Systems](https://www.carbondesignsystem.com/) - IBMs desgin system.
- [Evergreen](https://evergreen.segment.com/) - A design system for the Web.

<BuyMeACoffeeWidget />