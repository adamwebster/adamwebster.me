---
title: 'Creating a Accessible Switch Component with React'
date: '2020-10-15'
featured: true
draft: false
path: '/blog/post/creating-a-accessible-switch-react'
category: 'Front-end Development'
featuredImage: images/switch-component.jpg
tags: ['icons', 'icon pack']
layout: full
heroColor: '#001D3C'
showCoffeeButton: false
---

import { Switch } from './DemoComponents/AccessibleSwitch';

<BuyMeACoffeeWidget />


Accessibility on the web is a very something that should be thought about from the design process to the development and testing process.

In this tutorial I am going to show you how to create an accessible switch component that has keyboard and screen reader support.

The technologies that will be used in this tutorial are **React, Typescript** and **Styled Components**.

## Creating the Basic Component

The first step is to import the dependencies that we will require for the component which are React, and styled-components to begin with. We will also be creating a simple test component.

```tsx render true
import React from 'react';
import styled from 'styled-components';

const Switch = () => {
  return <>Test</>;
};
export default Switch;
```

This component can be imported into your app using `import Switch from '../path_to_file';`.

After this is done we can create the jsx for the component and create the styled components needed to render it.

```tsx render true
import React from 'react';
import styled from 'styled-components';

const StyledSwitch = styled.div`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: #919191;
`;

const StyledSwitchToggle = styled.div`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: 2px;
`;

const Switch = () => {
  return (
    <StyledSwitch>
      <StyledSwitchToggle />
    </StyledSwitch>
  );
};

export default Switch;
```

At this point the switch should be in the off position and non functional. In the next step we will be adding a property called checked that allows you to set the switch to be in the on position.

## Having it Toggle Between On and Off

To have it to have it toggle between on and off we are going to pass an a property called checked to the component and add store that value in the components state in a constant called active using useState.

Since this is Typescript we are also create an interface with the property checked defined as a boolean.

We are also going to pass the checked value to both the StyledSwitch and StyledSwitchToggle Styled Components and we are going to add the StyledProps interface to those components as well where we define checked as a boolean.

We are going to check the active property for both of the style components and change the background-color of the StyledSwitch and the left position of the StyledSwitchToggle.

```tsx render true
import React, { useState } from 'react';
import styled from 'styled-components';

interface StyledProps {
  checked: boolean;
}

const StyledSwitch = styled.div<StyledProps>`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: #919191;
  background-color: ${({ checked }) => (checked ? '#006EF5' : '#919191')};
`;

const StyledSwitchToggle = styled.div<StyledProps>`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: ${({ checked }) => (checked ? '24px' : '2px')};
`;

interface Props {
  checked: boolean;
}

const Switch = ({ checked }: Props) => {
  const [active, setActive] = useState(checked);
  return (
    <StyledSwitch checked={active}>
      <StyledSwitchToggle checked={active} />
    </StyledSwitch>
  );
};

export default Switch;
```

At this point if you use this code to render the switch component with `<Switch checked />` it should render with the toggle on the right and the background will be blue.

Next we will be adding an onClick event to the component so that it will toggle between on and off.

We create a function called toggleActive and add it to the StyledSwitch component through the onClick property. The toggleActive function just toggles the active state between true and false.

We also want to send back the active value to component when it is used in other parts of an app. To do that we will use the useEffect hook and check for the active state value changing and the send it back through an onChange property.

Don't forget to add the onChange property to the Props interface and as well as pass it to the component.

```tsx render true
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface StyledProps {
  checked: boolean;
}

const StyledSwitch = styled.div<StyledProps>`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: #919191;
  background-color: ${({ checked }) => (checked ? '#006EF5' : '#919191')};
`;

const StyledSwitchToggle = styled.div<StyledProps>`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: ${({ checked }) => (checked ? '24px' : '2px')};
`;

interface Props {
  checked: boolean;
  onChange: (e) => void;
}

const Switch = ({ checked, onChange }: Props) => {
  const [active, setActive] = useState(checked);

  const toggleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    if (onChange) {
      onChange(active);
    }
  }, [active]);

  return (
    <StyledSwitch onClick={() => toggleActive()} checked={active}>
      <StyledSwitchToggle checked={active} />
    </StyledSwitch>
  );
};

export default Switch;
```

Now if you use the following code in one of your pages you should see it toggle on and off and have the active state value will be displayed in the console.

`<Switch onChange={(e) => console.log(e)} />`

At this point the component is technically functional but the accessibility of the component is lacking.

## Making the Component Accessible

The first step would be to add aria attributes and a role to the StyledSwitch component. We are going to add the attribute aria-checked and set it to the active state value. This will cause a screen reader to announce if the switch is checked or not. We are also going to add a role switch or checkbox to the component which allows the screen reader to announce the element as a switch or checkbox element.

We are also going to add the tabIndex attribute to the StyledSwitch component and set it to be 0 which will allow the it to be accessed by clicking the tab button on the keyboard.

The final step to add accessibility would be to add the onKeyDown property and pass a function to it called handleKeyDown. In the handleKeyDown function we check if the keyCode is 32, which is the space bar, and we toggle the active state.

We are also going to pass a spread to the StyledSwitch component called {...rest} that will allow other undefined properties to be passed to the StyledSwitch component such as an id and attribute and aria-label that will allow a screen reader to announce what the switch is for.

```tsx render true
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

interface StyledProps {
  checked: boolean;
}

const StyledSwitch = styled.div<StyledProps>`
  width: 44px;
  height: 22px;
  border-radius: 25px;
  padding: 2px;
  box-sizing: border-box;
  position: relative;
  background-color: #919191;
  background-color: ${({ checked }) => (checked ? '#006EF5' : '#919191')};
`;

const StyledSwitchToggle = styled.div<StyledProps>`
  background-color: #fff;
  width: 18px;
  height: 18px;
  border-radius: 50px;
  position: absolute;
  transition: all 0.2s ease-in-out;
  left: ${({ checked }) => (checked ? '24px' : '2px')};
`;

interface Props {
  checked: boolean;
  onChange: (e) => void;
}

const Switch = ({ checked, onChange, ...rest }: Props) => {
  const [active, setActive] = useState(checked);

  const toggleActive = () => {
    setActive(!active);
  };

    const handleKeyDown = e => {
    // When the space key is pressed
    if (e.keyCode === 32) {
      setActive(!active);
    }
  };

  useEffect(() => {
    if (onChange) {
      onChange(active);
    }
  }, [active]);

  return (
    <StyledSwitch
      role="switch"
      aria-checked={active}
      tabIndex={0}
      onClick={() => toggleActive()}
      onKeyDown={e => handleKeyDown(e)}
      checked={active}
      {...rest}
    >
      <StyledSwitchToggle checked={active} />
    </StyledSwitch>
  );
};

export default Switch;
```
The completed code to use this component would be as follows:

`<Switch aria-label="Turn on the switch" onChange={e => console.log(e)} />`

Which will render the following component, go ahead and give it a try.  Make sure to check the browsers console to see the active value being sent back.

<Switch aria-label="Turn on the switch" onChange={e => console.log(e)} />


If you have any questions please feel free to follow me on [Twitter (@adamwebster)](http://twitter.com/adamwebster) and message me.

