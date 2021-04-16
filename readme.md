# Project Overview

**PROJECT NAME:** Portfolio

**PROJECT AUTHOR:** Chun Hin D. Tang

## Project Schedule

<!-- This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`. -->

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches | Incomplete
|Day 6| Present | Incomplete


## Project Description

This project is to use everything I've learned so far to build my own portfolio.  This portfolio will contain cards that introduce and link to the projects/hw that I have completed for class.

## Google Sheet

[Chun Hin's google sheets](https://docs.google.com/spreadsheets/d/1gG9ADNvPO4dN1fL4r-pTxV-QYtfJ_8SZyhzLTCyNzq8/edit#gid=0)

## Portfolio I want to Emulate

<!-- Search and compare at least 3 profile web sites.  Record your findings in the table below and include some aspect of the site that you would like to incorporate into your own site. -->

Link To Site  | One Thing I'd Like To Incorporate | 
| ------------- | ------------- |
| [dcfonts.com](https://www.dcfonts.com/)| the simplistic yet beautiful color styling
|[lianapenn.com](https://www.lianapenn.com/) | the image in the cards enlarge with mouse over |
| [arlynicholson.github](https://carlynicholson.github.io/portfolio/) |  the project cards design
---

## Wireframes

<!-- Upload images of wireframe to cloudinary and add the link here with a description of the specific wireframe. Do not include the actual image and have it render on the page.   -->

- [Mobile](https://photos.app.goo.gl/qfJtrECupTCufYvbA)
- [Tablet](https://photos.app.goo.gl/pps3SFvhqTjvRVGz8)
- [Desktop](https://photos.app.goo.gl/QovRKePY5RiygNuHA)

<!-- Wireframing Resources:

- [Mockflow](https://mockflow.com/app/#Wireframe)
- [Figma](https://www.figma.com/) -->


## Time/Priority Matrix 

[Time and Priority Matrix](https://www.figma.com/proto/sFzFUC7FSsw6pgywgKfN8P/Time-Priority-Matrix?node-id=3%3A2&scaling=min-zoom&page-id=0%3A1)

<!-- Include a full list of features that have been prioritized based on the `Time and Priority` Matix.  This involves drawing a square.  In the middle of the square, on the x axis draw a line.  The most left part of the line should start with 0hrs and the end of the line should include 3hrs.  This line will be used to estimate how much time any one feature will take to complete.  -->

<!-- Now draw a vertical line on the y axis.  The top of this line should have `High` and the bottom `Low`.  This line will be used to assign a priority to to each feature you wish to include in the project.   -->

<!-- Now create a separate list starting with A and assign it one of the features.  Continue to assign each feature a letter.  Once complete add each letter to the matrix assigning based on what your feel it's prioirty is an how long it will take to implement. If any one feature takes longer than 3hrs to complete than break it down into smaller tasks and reassign them a new letter.  -->

<!-- Once complete tally up the time and determine how long the project will take to complete. Now break those features into MVP and PostMVP so you can guarantee you will have a fully functioning project to demo.  -->

### MVP/PostMVP - 5min

<!-- The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.   -->

#### MVP 

- Use semantic markup for HTML and CSS, adhering to best practices
- Use CSS GRID to create a multi-column layout
- Use Flexbox for project cards
- Use Bootstrap for navigation and hamburger menu
- Be mobile first, then tablet and desktop responsive
- Pull in projects via API call from google sheet
- Be deployed and accessible online via Github Pages, Vercel, Netlify or Render
- Make a form

#### PostMVP 

- Make an interactive banner
- Make my own icon/logo
- Add animations

## Functional Components

<!-- Based on the initial logic defined in the previous sections try and breakdown the logic further into functional components, and by that we mean functions.  Try and capture what logic would need to be defined if the game was broken down into the following categories.

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. -->

#### MVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Basic HTML and CSS | H | 3hr | 4hr |
| Grid | H | 2hr | 2.5hr |
| Flexbox for project cards| H | 3hr | 2hr |  
| Bootstrap Hamburger | M | 1.5hr | 1hr |
| Bootstrap navigation  | M | 1.5hr|  1.5hr | 
| Mobile first/Responsive| H | 3hr | 4hr|
| Working with API | M | 0.5hr | 0.5hr | 
| Deploy site | M | 0.5hr | 1hr |
| Project Previews | H | 3hr | 4hr |
| Adding Form | M | 1.5hr |  1.5hr |
| Total | H | 19.5hrs| 22hrs |

#### PostMVP
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: | 
| Interactive Banner | L | 2.5hr | hr |
| Make own icon/logo | L | 2hr | 2hr |
| Add animations | M | 3hr | 2hr |
| Add carousel | L | 2hr | hr |
| Total | H | 9.5hrs| 4hrs |

## Additional Libraries
 <!-- Use this section to list all supporting libraries and their role in the project.  -->

| Library | Project Role |
| --- | :---:|
| JQUERY | HTML maniputlation, eventlistener, AJAX |
| BOOTSTRAP | Design of the navigation and header |
| FONTAWESOME | Icon resources |

## Code Snippet

<!-- Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
	// here is the code to reverse a string of text
}
``` -->



## Issues and Resolutions
 <!-- Use this section to list of all major issues encountered and their resolution. -->

<!-- #### SAMPLE..... -->
<!-- **ERROR**: 
app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: 
Missing comma after first object in sources {} object -->

**ERROR**
1. I didn't know how to make it scroll after clicking the nav bar links.

**RESOLUTION**
1. I google searched and found out that I need href to the id of the location I wanted to scroll to.  Also to prevent the default jump, I needed to add the property scroll-behavior with value smooth to the html.