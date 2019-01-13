what is react and it's prupose?
- React is a Javascript library.
- The goal of react is to produce some useful content that is going to show up on the screen of your browser
- the second goal of react is to handle those user interaction
why didn't we use redux to make that app
- react can work by itself
- but it can also work with a tremendous variety of other libraries, packages, servers, and databases
what was the HTML looking stuff?
- JSX it looks like HTML and can be placed in javascript code. Determines the content of our react app just like normal HTML
why did we add two libraries(react and reactdom)
- React is split into two separeate libraries
- 'React' knows what a compoent is and how to make components work together. contains a ton of javascript code that defines what a components is and how different components work together
- 'ReactDOM' knows how to take a component and make it show up in the DOM. contains some amount of javascript code that will take that collection of components and eventually get them to 
show up inside of the dom or get them to show up as some html

create react project:
1. npm install -g create-react-app
2. create-react-app jsx (generate new react project) dependency [Webpack, Babel, DevServer]

es5 supoprted acress all browsers, es2015 almost completely supported, es 2016,17,18 poor support
babel is a command line tool that can take any version of javascript and spit out a newer version

Project Directory
SRC --> Folder where we put all the source code we write
public ---> Folder that stores static files, like images
node_modules ---> Folder that contains all of our project dependencies
package.json ---> Records our project dependencies and configures our project
package-lock-json ---> Records the exact version of packages that we install

acomponent is a function or class that produces HTML to show the user (using JSX) and handles feedback from the user (Using Event Handlers)

JSX vs HTML
- Adding custom styling to an element uses different syntax
- adding a class to an element uses different systax
- JSX can reference JS variables

- component nesting: a component can be shown inside of another
- component resuability: we want to make components that can be easyly reused through out application
- component Configuration: we should be able to configure a component when it is created

semantic-ui.com : open source css

prop system: system for passing data from a paren component to a child component, goal is to customize or configure a child component

function components: good for simple content
class components: good for just about everything else

life cycle:
1. JS file loaded by browser
2. App component gets created
3. We call geolocation service
4. App returns JSX, get rendered to paga as HTML
5...
last. We get result of geolocation

-- something keep in mind and this is something is not going to repeat to you many times throighout the remainder of the course is that getting this geolocation result back takes some amount of time
- big issue when using a functional component with this geolocation api, the whole big problem with this is that it takes some amount of time for the geolocation service to return our position, by the time it finally returns our position we have already rendered our app component onto the screen and with a functional component we don't have any good way or rendering it automatically or somehow telling the app component to like pause it's rendering process
***************************************************
- HOW TO SOLVE THIS
+ Use re-access state system (Class component) (we use state and set state will almost instantly rerender the component )
- Rules of class components
+ Must be a javascript
+ Must extend (subclass) React.Component
+ Must define a 'render' method that returns some amount of JSX

- State in React (`Rule of State`)
+ Only usable with class components (NOTE: Technically we can used state with functional components using the host system)
+ You will confuse props with state.
+ State is a JS object that contains data relevant to a component.
+ Updating 'state' on a component causes the component to (almost) instantly rerender
+ State must be initialized when a component is created
+ State can only be updated using the function 'setState'

- Life Cycle
+ Contructor
+ Render method
+ Content visible on screen
+ ComponentDidMount
+ Sit and wait for updates
+ ComponentDidUpdate
+ Sit and wait until this component is not longer shown
+ ComponentWillUnmount