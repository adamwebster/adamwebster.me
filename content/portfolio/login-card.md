---
slug: 'login-card'
date: '2020-01-08'
title: 'Login Card'
category: 'Front-end Development'
featuredImage: 'images/loginCard.png'
technologyUsed: 'React, Javascript, HTML, CSS, Styled Components'
draft: false
description: 'This project was created to design and develop a login card that could be used for a web application.'
demo: '[Login Card](https://examples.adamwebster.me/login)'
repo: '[Login Card](https://github.com/adamwebster/react-tests/blob/master/src/pages/LoginPage.js)'
---

import SetHeaderColor from '../../src/components/SetHeaderColor/SetHeaderColor';
import SectionHeader from '../../src/components/SectionHeader/SectionHeader';

<SetHeaderColor color="#29a19c" />

<SectionHeader>Project Information</SectionHeader>


**Technologies Used**: React, Javascript, HTML, CSS, Styled Components <br />
**Demo:** [Login Card Demo](https://examples.adamwebster.me/login)  <br />
**GitHub Repo**: [Login Card Repo](https://github.com/adamwebster/react-tests/blob/master/src/pages/LoginPage.js)

<SectionHeader>Description</SectionHeader>

This project was created to design and develop a login card that could be used for a web application.

<SectionHeader>How it works</SectionHeader>

The user would enter their username and password and then click the login button.  The login button would then become disabled and a spinner icon would show on the button.

If the user enters an incorrect username or password they would be shown a message saying that the either the username or password is incorrect. It does not tell them which one specifically which one for security reasons.

If the user forgot their username or password they have an option to reset their password by clicking on the forgot password link.
<SectionHeader>Images</SectionHeader>

<figure>

![Image of Login Page Validation](/images/loginCard-error.jpg)

<figcaption>Login Page Validation</figcaption>

</figure>

<figure>

![Image of Login Page Forgot Password](/images/loginCard-forgotpassword.jpg)

<figcaption>Login Page Forgot Password</figcaption>

</figure>