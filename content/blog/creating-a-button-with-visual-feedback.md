---
title: Creating a Button in React with Visual Feedback
tagline: 'With a loading, completed and error state'
date: '2020-07-07'
featured: true
slug: 'creating-a-button-with-visual-feedback'
category: 'Front-end Development'
featuredImage: images/visual-feedback-button.jpg
tags: [UX Design, Users, Visual Feedback, How-to]
layout: full
heroColor: '#083059'
showCoffeeButton: false
---
import { CodeHighlight } from '../../src/components/CodeHighlight';
import { Link } from 'gatsby';
import { Button, ButtonTest } from './DemoComponents/FeedbackButton';

<BuyMeACoffeeWidget />

If you have not read my article about the  <Link to="/blog/post/importance-of-visual-feedback">importance and how to give users visual feedback</Link> that is a good place to start to learn about why giving users visually feedback is important. 

This post is going to show you how to create a button component that gives visual feedback to a user using **React**. 

## Packages we will be using

* Styled Components 
* Typescript
* Font Awesome
    * @fortawesome/fontawesome-svg-core
    * @fortawesome/free-brands-svg-icons
    * @fortawesome/free-regular-svg-icons
    * @fortawesome/free-solid-svg-icons
    * @fortawesome/react-fontawesome
* Polished

##  Creating the basic component 

The code below creates a functional component that returns a button element that will be styled using **Styled Components**. It also passes the child of the component to be the text of the button.

```tsx render=true
import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>``;

interface Props {
  children: ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
```

At this point when this button component is imported into another component it will display as a standard button.


## Adding styles to the button 

The following styles for the button are added to the  `StyledButton` *constant*. There are also styles for the button for it's hovered and disabled.

```tsx render=true
border-radius: 25px;
border: none;
font-size: 1rem;
height: 36px;
cursor: pointer;
transition: all 0.2s ease;

&:hover:not([disabled]) {
  background-color: ${darken(0.1, '#a8d3ea')};
}

&[disabled] {
  background-color: #d9d9d9;
  color: #404040;
  cursor: not-allowed;
}

${({ completed, failed, isLoading }) =>
  !completed &&
  !failed &&
  !isLoading &&
css`
  background-color: #a8d3ea;
  color: #004970;
  padding: 0 40px;
`}
```

The following properties are also added to the component.

* **isLoading** - This property is used to put the button into its loading state,
* **completed** - This property is used to put the button into its completed state.
* **failed** - This property is used to put the button into its failed state.

```tsx render=true
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>`
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    height: 36px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover:not([disabled]) {
        background-color: ${darken(0.1, '#a8d3ea')};
    }

    &[disabled] {
        background-color: #d9d9d9;
        color: #404040;
        cursor: not-allowed;
    }

    ${({ completed, failed, isLoading }) =>
        !completed &&
        !failed &&
        !isLoading &&
    css`
        background-color: #a8d3ea;
        color: #004970;
        padding: 0 40px;
    `}
`;

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const Button = ({
  children,
  isLoading,
  completed,
  failed,
  ...rest
}: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
```

At this point you should have a button that looks like the one below. If you add a disabled attribute to code it will look like the second button.

Go ahead and give the first button a press.

<Button onClick={() => alert('Hey you clicked me')}>Button</Button>

<Button style={{marginLeft : 10 + 'px'}} disabled onClick={() => alert('Hey you pressed me')}>Button</Button>

```tsx render=true
<Button onClick={() => alert('Hey you clicked me')}>Button</Button>
<Button style={{marginLeft : 10 + 'px'}}  disabled onClick={() => alert('Hey you pressed me')}>Button</Button>
```

## Adding a loading state to the button

The next step is to add a loading state to the button.  The loading states lets the user know that something is happening after they click the button.  In the case of this button it is a spinning icon.

First add the following styles to the `Styled Button` *constant*. These styles  change the width of the button when it is the loading state. 

```tsx render=true
${({ isLoading }) =>
  isLoading &&
  css`
      padding: 0;
      width: 36px;
  `
}
  ```

Then pass the **isLoading** property to the **disabled** attribute of the button so it will be disabled when it is loading to prevent secondary clicks.

```tsx render=true
<StyledButton
  isLoading={isLoading}
  disabled={isLoading}
  {...rest}
>
  {children}
</StyledButton>
```
The **isLoading** property is also passed to the the `StyledButton` component so that we can change the styles when the button is in its loading state.

For the loading icon, import the `FontAwesomeIcon` component from the `'@fortawesome/react-fontawesome'` package and the `faSpinner` icon from the `'@fortawesome/free-solid-svg-icons'` package. To make the icon spin add the property of spin to the `FontAwesomeIcon` component.

The icon is only shown when the **isLoading** property is set to true. To do this use a ternary operator to check if the **isLoading** property is true and if it is show the icon or else show the children of the button component.

```tsx render=true
<StyledButton
    isLoading={isLoading}
    disabled={isLoading}
    {...rest}
  >
    {isLoading ? <FontAwesomeIcon spin icon={faSpinner} /> : children}
</StyledButton>
```

The full component code should now look like the example below.

```tsx render=true
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>`
  border-radius: 25px;
  border: none;
  font-size: 1rem;
  height: 36px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not([disabled]) {
      background-color: ${darken(0.1, '#a8d3ea')};
  }

  &[disabled] {
      background-color: #d9d9d9;
      color: #404040;
      cursor: not-allowed;
  }


  ${({ completed, failed, isLoading }) =>
      !completed &&
      !failed &&
      !isLoading &&
      css`
          background-color: #a8d3ea;
          color: #004970;
          padding: 0 40px;
      `}

  ${({ isLoading }) =>
        isLoading &&
        css`
            padding:0;
            width: 36px;
      `}
`;

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const Button = ({
  children,
  isLoading,
  completed,
  failed,
  ...rest
}: Props) => {
  return ( 
    <StyledButton
      isLoading={isLoading}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <FontAwesomeIcon spin icon={faSpinner} /> : children}
    </StyledButton>
    );
};

export default Button;

```

Now if you pass the **isLoading** property to the component you should see the button below.

<Button isLoading>Button</Button>

```tsx render=true
<Button isLoading>Button</Button>
```

## Added a completed state to the button

The next step is to add a completed state for the button.  This lets users now that the action they took succeeded.


First add the following styles to the `Styled Button` *constant*.

```tsx render=true
${({ completed }) =>
  completed &&
  css`
  &[disabled] {
      padding:0;
      background-color: #4de783;
      color: #08571f;
      width: 36px;
  }
`}
  ```

Then pass the **completed** property to the **disabled** attribute of the button so it will be disabled when it is completed to prevent accidental secondary clicks.

```tsx render=true
<StyledButton
  isLoading={isLoading}
  completed={completed}
  disabled={isLoading | completed}
  {...rest}
>
  {children}
</StyledButton>
```
The **completed** property is also passed to the the `StyledButton` component so that we can change the styles when the button is in its completed state.

For the completed icon, import the `faCheck` icon from the `'@fortawesome/free-solid-svg-icons'` package. 

The `faCheck` icon is only shown when the **completed** property is set to true. To do this define a *let* called **icon** and set it to be `faSpinner` by default. Then check to see if the components **competed** property is true and if it is set the **icon** to be `faCheck`.

The **icon** *let* is passed to the icon property of the `FontAwesomeIcon` component.

```tsx render=true
let icon = faSpinner;
  if (completed) {
    icon = faCheck;

  }
  return ( 
    <StyledButton
      isLoading={isLoading}
      completed={completed}
      disabled={isLoading || completed}
      {...rest}
    >
        {isLoading || completed ? (
            <FontAwesomeIcon spin={isLoading ? true : false} icon={icon} />
        ) : (
            children
        )}
    </StyledButton>
    );
```

The component code should now look like the example below.

```tsx render=true
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck } from '@fortawesome/free-solid-svg-icons';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>`
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    height: 36px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover:not([disabled]) {
        background-color: ${darken(0.1, '#a8d3ea')};
    }

    &[disabled] {
        background-color: #d9d9d9;
        color: #404040;
        cursor: not-allowed;
    }

    ${({ completed, failed, isLoading }) =>
        !completed &&
        !failed &&
        !isLoading &&
        css`
            background-color: #a8d3ea;
            color: #004970;
            padding: 0 40px;
        `}

     ${({ isLoading }) =>
        isLoading &&
        css`
            padding:0;
            width: 36px;
        `}

    ${({ completed }) =>
        completed &&
        css`
        &[disabled] {
            padding:0;
            background-color: #4de783;
            color: #08571f;
            width: 36px;
        }
    `}
`;

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const Button = ({
  children,
  isLoading,
  completed,
  failed,
  ...rest
}: Props) => {
let icon = faSpinner;
  if (completed) {
    icon = faCheck;
  }
  return ( 
    <StyledButton
      isLoading={isLoading}
      completed={completed}
      disabled={isLoading || completed}
      {...rest}
    >
        {isLoading || completed ? (
            <FontAwesomeIcon spin={isLoading ? true : false} icon={icon} />
        ) : (
            children
        )}
    </StyledButton>
    );
};

export default Button;

```

If you now pass the **completed** property to the component it should look like the button below. 

At this point if you use the following code in one of your react pages then it will display as the button bellow.

<Button completed>Button</Button>

```tsx render=true
<Button completed>Button</Button>
```

 ## Adding a failed state to the Button
 
The final step is to add a failed state for the button.  This lets users know that the action they took failed.

First add the following styles to the `Styled Button` *constant*.

```tsx render=true
${({ failed }) =>
  failed &&
  css`
  &[disabled] {
      padding:0;
      background-color: #ff5959;
      color: #5b0006;
      width: 36px;
  }
`}
  ```

Then pass the **failed** property to the **disabled** attribute of the button so it will be disabled when it is fails to prevent accidental secondary clicks.

```tsx render=true
<StyledButton
  isLoading={isLoading}
  completed={completed}
  failed={failed}
  disabled={isLoading | completed | failed}
  {...rest}
>
  {children}
</StyledButton>
```
The **failed** property is also passed to the the `StyledButton` component so that we can change the styles when the button is in its failed state.

For the failed icon, import the `faTimes`` icon from the `'@fortawesome/free-solid-svg-icons'` package. 

The `faTimes` icon is only shown when the **failed** property is set to true. To do this add an additional if statement after the statement that changes the icon if the competed state is true that checks if the **failed** property is true which then sets the icon to be `faTimes`.


```tsx render=true
let icon = faSpinner;
  if (completed) {
    icon = faCheck;
  }
  if(failed) {
    icon = faTimes;
  }
  return ( 
    <StyledButton
      isLoading={isLoading}
      completed={completed}
      disabled={isLoading || completed}
      {...rest}
    >
        {isLoading || completed ? (
            <FontAwesomeIcon spin={isLoading ? true : false} icon={icon} />
        ) : (
            children
        )}
    </StyledButton>
    );
```


The completed component code should now look like the example below.


```tsx render=true
import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

interface SBProps {
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const StyledButton = styled.button<SBProps>`
    border-radius: 25px;
    border: none;
    font-size: 1rem;
    height: 36px;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover:not([disabled]) {
        background-color: ${darken(0.1, '#a8d3ea')};
    }

    &[disabled] {
        background-color: #d9d9d9;
        color: #404040;
        cursor: not-allowed;
    }

    ${({ completed, failed, isLoading }) =>
        !completed &&
        !failed &&
        !isLoading &&
        css`
            background-color: #a8d3ea;
            color: #004970;
            padding: 0 40px;
        `}

     ${({ isLoading }) =>
        isLoading &&
        css`
            padding:0;
            width: 36px;
        `}

    ${({ completed }) =>
        completed &&
        css`
        &[disabled] {
            padding:0;
            background-color: #4de783;
            color: #08571f;
            width: 36px;
        }
    `}

    ${({ failed }) =>
        failed &&
        css`
        &[disabled] {
            padding:0;
            background-color: #ff5959;
            color: #5b0006;
            width: 36px;
        }
    `}
`;

interface Props {
  children: ReactNode;
  isLoading?: boolean;
  completed?: boolean;
  failed?: boolean;
}

const Button = ({
  children,
  isLoading,
  completed,
  failed,
  ...rest
}: Props) => {
let icon = faSpinner;
  if (completed) {
    icon = faCheck;
  }
  if(failed) {
    icon = faTimes;
  }
  return ( 
    <StyledButton
      isLoading={isLoading}
      competed={competed}
      failed={failed}
      disabled={isLoading || completed || failed}
      {...rest}
    >
        // Add failed here
        {isLoading || completed || failed ? (
            <FontAwesomeIcon spin={isLoading ? true : false} icon={icon} />
        ) : (
            children
        )}
    </StyledButton>
    );
};

export default Button;

```

At this point if you use the following code in one of your React pages then it will display as the button bellow.

<Button failed>Button</Button>


```tsx render=true
<Button failed>Button</Button>
```

That is all of the interactions taken care of so the only thing left to show is how to user it a page or another component.

## Using it

Below is example of how to use it on a react page. It this example I am just setting a timeout to show how it would look it its different states.  In an actually application this would be defined by how long it takes for the action of the button to complete. You could still use a timeout function for how long the success or fail states are shown to the user before switching back to the standard button.

```tsx render=true 

import React, { useState } from 'react';
import Button from '../pathtobutton/Button.tsx'

export const ButtonTest = () => {
  const [loading, setLoading] = useState(false);
  const [loadingFailed, setLoadingFailed] = useState(false);

  const [completed, setCompleted] = useState(false);
  const [failed, setFailed] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 1000);
    setTimeout(() => {
      setCompleted(false);
    }, 1500);
  };

  const handleClickFail = () => {
    setLoadingFailed(true);
    setTimeout(() => {
      setLoadingFailed(false);
      setFailed(true);
    }, 1000);
    setTimeout(() => {
      setFailed(false);
    }, 1500);
  };
  return (
    <>
      <Button
        isLoading={loading}
        completed={completed}
        onClick={() => handleClick()}
      >
        Button
      </Button>

      <p>Fail Example</p>

      <Button
        isLoading={loadingFailed}
        failed={failed}
        onClick={() => handleClickFail()}
      >
        I will fail
      </Button>
    </>
  );
};

export default Button;
```

Here are the final buttons rendered.  One shows the how it would look if the action succeeded and the other if it failed.

<ButtonTest />

If you have any questions please feel free to follow me on [Twitter (@adamwebster)](http://twitter.com/adamwebster) and message me.

