# Module 4 Code Challenge

#### Today, you will be building a Beer App 🍺🍺🍺

### Step 1 \*\*\*\*

-- As a user, when the page loads, I should see a list of beer names retrieved from an API on the right hand side of the screen. \*\*\*

### Step 2 \*\*\*

-- As a user, when I click a beer name, the application should reveal more information about that particular beer. \*\*\*

### Step 3

-- As a user, I can filter through the beer list by typing the name of a beer in the search input

![beer gif](App-Gif.gif)

## Setting up the json server

1 - Run the command npm install -g json-server in the command line from this directory

2 - Run json-server --watch db.json

That's it. You will have a server running on localhost:3001 that serves the JSON data contained in the db.json file.

_Troubleshooting: If this fails, be sure you don't already have something running on port 3001_

## Criteria

1. Props and state - Is state maintained in the right components? Are the functions to change state defined and executed in the appropriate places? Are the appropriate props passed from component to component?

2. Code structure and efficiency - Is the code clean and easy to read? Are large chunks of code separated into reusable functions? Is functionality appropriately delegated between class and functional components?

3. Component lifecycle - Are the right component lifecycle methods used? Are they used for the correct purposes?

4. Rendering - Is information rendered in the correct locations?
