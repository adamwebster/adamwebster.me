---
title: Introduction to Framer Motion
tagline: 'Production ready animation library'
date: '2021-02-07'
featured: true
draft: true
slug: 'introduction-to-framer-motion'
category: 'Front-end Development'
featuredImage: images/framermotion.jpg
tags: ['react', 'animation', 'tutorial']
layout: full
heroColor: '#000'
---

In this post I am going to give you an introduction to Framer Motion by showing you how to create a simple animation using the motion feature. I will also be using typescript and styled components to add styles to the components. 

<SectionHeader>What is Framer Motion?</SectionHeader>

[Framer Motion](https://www.framer.com/motion/) is a production-ready animation library for React from the [Framer](https://www.framer.com/) team. It is used to help developers add animations to their React applications.


<SectionHeader>Adding Framer motion to your React application</SectionHeader>

The first step to use Framer Motion is to install it using `npm install framer-motion` or `yarn add framer-motion`

You will then have to import framer motion library  into the component file that you are going to create the animated component in, and create a motion element.

```tsx render=true
import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export function Animation() {
  return <motion.div>Animation will go here</motion.div>;
}
```

<SectionHeader>Adding an fade-in animation</SectionHeader>


The `<motion.div>` component has several properties available to it. The first we are going to look at is the `initial` property.  The initial property defines the initial state of the element for this property we are going to set it to `initial={{opacity: 0}}`. This will make so the element is not displayed to begin with.

The next property we are going to add is the `animate` property this property defines the animation for the components element. We are going to set it to `animate={{opacity: 1}}`.

```tsx render=true
import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

export function Animation() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      Animation will go here
    </motion.div>
  );
}
```

<SectionHeader>Adding styles</SectionHeader>

We are going to be using [styled-components](https://styled-components.com/) to styled our animation. We will start by making it a box. First create the styled component.

```tsx render=true
const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #2880ff;
`;
```

Then we have to make sure that we can use this styled component with the framer motion library. To do this we have to create a custom motion component by calling `motion.custom()` function from framer motion and pass the `StyledBox` component we created previously.

```tsx render=true
const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #2880ff;
`;

const StyledBoxMotion = motion.custom(StyledBox);
```

Then we remove the text and replace the `<motion.div>` component with the `<StyledBoxMotion />` component.


```tsx render=true
import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #2880ff;
`;

const StyledBoxMotion = motion.custom(StyledBox);

export function Animation() {
  return <StyledBoxMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} />;
}
```

<SectionHeader>Adding Movement</SectionHeader>

Next we are going to make it move to the left. To do this we add an `x` property to the initial object and set it to 0.  We then also add an x property to the animate object and set it to 300.

```tsx render=true
import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #2880ff;
`;

const StyledBoxMotion = motion.custom(StyledBox);

export function Animation() {
  return (
    <StyledBoxMotion
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 300 }}
    />
  );
}
```

If you would like it to move down then add the property `y` to the initial and animated objects instead of the `x` property.

<SectionHeader>Delaying the movement animation</SectionHeader>

You may notice that it moves to the left at the same time that it is fading it.  To make the x animation delayed add the property `transition` to the `<StyledBoxMotion />` component and set it to `transition={{ opacity: { duration: 1}, x: { delay: 1 }}}`.

```tsx render=true
import react from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const StyledBox = styled.div`
  width: 300px;
  height: 300px;
  background-color: #2880ff;
`;

const StyledBoxMotion = motion.custom(StyledBox);

export function Animation() {
  return (
    <StyledBoxMotion
      initial={{ opacity: 0, x: 0 }}
      animate={{ opacity: 1, x: 300 }}
      transition={{ opacity: { duration: 1}, x: { delay: 1 }}}
    />
  );
}
```

<iframe src="https://codesandbox.io/embed/framer-motion-introduction-2j8bl?fontsize=14&hidenavigation=1&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="Framer Motion Introduction"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

<BuyMeACoffeeWidget />