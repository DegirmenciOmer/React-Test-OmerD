1. What React components does your app have and what is the responsibility of each component?
   (_TIP: We've filled in the App component for you, add the rest of the components in a similar manner_)

`App` - Functions as the entry point for the whole application. Renders the app container component.
`Inputs` - Collects inputs from the user. It assigns values to each state which belongs to the module names respectively.
`Navbar` - Includes two buttons. The buttons function to navigate between the pages.
`Radar` - Gets the values from inputs. Sends the values to get the radar chart url from the given api. And renders the graph as an img. It uses getRadarChartUrl() from `getChartUrl` component.
`Bar` - Gets the values from inputs. Sends the values to get the Bar chart url from the given api. And renders the graph as an img. It uses getBarChartUrl() from `getChartUrl` component.

2. Let's say your product owner asks you to define what you need to change to also validate that the user can only enter a number between 1 and 10. Write down (do NOT implement) in short steps what you would need to do.

- I would include those attributes in input tags:
- add min='1' in order to identify minimum value
- add max='10' in order to identify maximum value

  (_TIP: Write down if you would add a component or hook. Or what components need what alterations_)
  (_TIP: For example, if the new feature was to add an option to change the color of the radar graph it would be:_

- Create a color picker component
- Add the color picker component to the radar graph page
- Add a paremeter to the `getRadarChartUrl` to set the color
- Update the `getRadarChartUrl` function to pass the color to the API

  )
