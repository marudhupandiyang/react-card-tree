# react-card-tree
 Simple and **fully customizable** card tree component for react. You need this when you have related data nested deep with in each other and want to display them using a trello like layout. Each horizontal section is called as **step** and each card inside these **steps** are named as **SummaryCard**. One can control what cards gets displayed in each of the steps.
 
 ### Example: 
 Lets assume you need to model a school. You would need to list all the `classes` first. Then each class would have different `sections`(like Class X-A, class X-B.. etc). Under each class you would have `n` students. This is a simple 3 level tree. So when a user selects class X, then he would be displayed with all the sections in it. And when he selects a section we would list all the students in it. The below is how it would look and the same is available under examples folder

[Demo here](http://marudhupandiyang.in/react-card-tree/)
[Demo Source ](example/src/)

![img](https://i.imgur.com/xHGx0tD.gif?1)

## Installation

    npm install react-card-tree

## Usage

    import CardTree from 'react-card-tree';

## Helper functions
Libarary will call the function you pass as and when requires where you need to pass the respective card data.

1. `steps = []`
   **[Required]**
   Send a array that will be used to show the steps.

2. `getStepTitle = (stepName, stepIndex) = (``)`
   **[Required]**
   #### Arguments
   1. `stepName` Name of the step you provided via `steps` props.
   2. `stepIndex` Position of the step in `steps` props. Starts at `0`.
   #### Return
   Return a string or a component that will serve as the title for the step.

3. `getStepData = (stepName, stepIndex) => ([])`
   **[Required]**
   #### Arguments
   1. `stepName` Name of the step you provided via `steps` props.
   2. `stepIndex` Position of the step in `steps` props. Starts at `0`.
   #### Return
   Return an array that contains a list of data to be shown as cards for the step.

4. `onCardClick = (stepName, stepIndex, data) => {}`
   **[Optional]**
   #### Arguments
   1. `stepName` Name of the step you provided via `steps` props.
   2. `stepIndex` Position of the step in `steps` props. Starts at `0`.
   3. `data` The data related to the card that is clicked. This can be used to determine what to do with the click.

   #### Return
   Return nothing.


## Example `render`

    <CardTree
      getStepTitle={getStepTitle}
      steps={['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5', 'Step 6', 'Step 7']}
      getStepData={getStepData}
      onCardClick={this.onCardClick}
     />


## Development

  In one terminal run the library compiler/watch

  1. npm install
  2. npm run start.

  In another terminal, run the example

  1. cd example
  2. npm install
  3. npm run start
  4. start making changes to library or example and it should be hot reloaded.
