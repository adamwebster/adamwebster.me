---
title: The Importance of Visual Feedback
tagline: 'Let your users know something happened'
date: '2020-07-01'
featured: true
slug: 'importance-of-visual-feedback'
category: 'UX Design'
featuredImage: images/visual-feedback.jpg
tags: [UX Design, Users, Feedback, Front-end Development]
layout: full
heroColor: '#b70002'
---

import SectionHeader from '../../src/components/SectionHeader/SectionHeader';

I was recently working on project that has an user interaction where pressing a button adds an item to a list that is not always visible. Which got me thinking about the importance of visual feedback for users.

<SectionHeader>What is Visual Feedback?</SectionHeader>

Visual feedback is letting a user of your website or application know that something happened when they took an action such as pressing a button.

<SectionHeader>Types of Visual Feedback</SectionHeader>

There are different ways to handle giving the user feedback on an action that they took depending on the level of importance or the situation.

### Alert Dialogs 

Alert dialogs are the most intrusive type of feedback to show to a user. They are shown to a user when an action must be taken to resolve an issue or to allow something that may be destructive to happen. They do not allow the user to interact with the application or website until they choose an action from the dialog.

An example of this would be showing a user a dialog when they are deleting an item and it would not be able to be restored. They must confirm that deleting the item is okay or not.

### Notification Banners 

Notification banners usually show up fixed on the top of the webpage or application. They are either static and must be closed manually or they are only shown for a brief period of time.  This is a way to let a user know that either something succeeded or failed but does not require any direct action to be taken. 

### Toasts Notifications

Toast notifications are similar to notification banners but they only show for a limited period of time and do not require an action from a user. They are used to give the user information that does not need their immediate attention and should not disrupt they workflow. They usually are displayed in bottom right or top left corners of the screen.

An example of a toast notification is letting the user know that they received a message from someone or a report they ran finished.

### Loading States

Loading states show the user the action they took causes something to load or change.  An example would be clicking the next page button on a table that has multiple pages of data, the table would show loading state such as a spinner icon.  The loading state can take up the whole page or just replace the element that is loading new data.

<SectionHeader>Why Visual Feedback is Important</SectionHeader>

Giving visual feedback for an action taken by a user is very important so that the user knows that something the user is happening or has happened. If a user clicks a button and nothing changes on the page then they do not know that the pressing the button had the desired effect, which may cause them to push the button again and could cause an undesired change to data or the page.

<BuyMeACoffeeWidget />