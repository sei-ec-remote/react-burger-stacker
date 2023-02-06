# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Burger Stacker

You will be writing an app that simulates the stacking of a burger. You are provided an array of ingredients and you need to make an app the displays all the ingredients on the left side and has an area on the right where the ingredients can be stacked to make a burger.

Here is a rough wireframe of the general layout:

![](https://i.imgur.com/beMtwGj.png)

___
## User Stories

* As a user, I want to see all available burger ingredients listed on the left side.
* I want the ability to add any ingredient onto the burger stack using a button.
* I want to see each ingredient I select added to the top of the burger stack on the right side.
* I want the ability to clear the burger stack so I can start again.
* I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

___
## How To Get Started
0. Fork & clone this repository
1. Cd into this directory and run `npx create-react-app .` to make this directory into a react app.
2. Open in your code editor.
3. Clear out the generated code from the `App` component.
4. Draw a component diagram.
5. Write the static versions of your components.
6. Import and nest components so you have your start screen built for the app.
8. Decide what the state should be.
9. Decide where the state should live.
10. Write the handler callbacks that you pass into children to update state.

### Sample Idea for Component Hierarchy:
![ComponentDiagram](/public/componentdiagram.jpeg)

```
App
|--IngredientList
|  |--Ingredient(s)
|  |--ClearBurger
|  |--Smash Burger
|
|--BurgerPane
|  |--BurgerStack
|  |  |--Ingredient(s)
|  
```

### Notes:
The order of items in the `stack` array will affect the order in which they appear on the page. Make sure you are adding ingredients to the `stack` in the correct way to make each ingredient stack on the previous one.

___
## BONUSES
* Each ingredient has an associated color. Use this to give each ingredient a nice background color reminiscent of what it looks like in real life.
* Add a form component (simply text input and button) to the ingredient side that lets a user add a new ingredient to the master list of ingredients in state.
* Add the ability to "undo" the last ingredient added (only the last one) by clicking a button that will remove that ingredient. Only that top ingredient should have the button for this showing up. When that ingredient is removed, the next one down should then get the button that allows it to be removed. **HINT**: You probably need to add this button to the top `Ingredient` when you render it in the `BurgerStack` component.
___
## Licensing
1. All content is licensed under a CC-BY-NC-SA 4.0 license.
2. All software code is licensed under GNU GPLv3. For commercial use or alternative licensing, please contact legal@ga.co.

- Top Bun: <a href="https://www.flaticon.com/free-icons/bun" title="bun icons">Bun icons created by DinosoftLabs - Flaticon</a>
- Bottom Bun: <a href="https://www.flaticon.com/free-icons/food-and-restaurant" title="food and restaurant icons">Food and restaurant icons created by DinosoftLabs - Flaticon</a>
<a href="https://www.flaticon.com/free-icons/food" title="food icons">Food icons created by Freepik - Flaticon</a>
- Black Bean Patty: <a href="https://www.flaticon.com/free-icons/patty" title="patty icons">Patty icons created by Mihimihi - Flaticon</a>
- Fried Chicken: <a href="https://www.flaticon.com/free-icons/chicken" title="chicken icons">Chicken icons created by Freepik - Flaticon</a>
- Chicken Breast: <a href="https://www.flaticon.com/free-icons/chicken-breast" title="chicken breast icons">Chicken breast icons created by surang - Flaticon</a>
- Tomato slice: <a href="https://www.flaticon.com/free-icons/tomato" title="tomato icons">Tomato icons created by smashingstocks - Flaticon</a>
- Cheese slice: <a href="https://www.flaticon.com/free-icons/cheese" title="cheese icons">Cheese icons created by Freepik - Flaticon</a>
- Onion: <a href="https://www.flaticon.com/free-icons/onion" title="onion icons">Onion icons created by Ferdinand - Flaticon</a>
- Bacon: https://en.wikipedia.org/wiki/Bacon 