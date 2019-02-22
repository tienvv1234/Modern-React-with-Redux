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

---

- HOW TO SOLVE THIS

* Use re-access state system (Class component) (we use state and set state will almost instantly rerender the component )

- Rules of class components

* Must be a javascript
* Must extend (subclass) React.Component
* Must define a 'render' method that returns some amount of JSX

- State in React (`Rule of State`)

* Only usable with class components (NOTE: Technically we can used state with functional components using the host system)
* You will confuse props with state.
* State is a JS object that contains data relevant to a component.
* Updating 'state' on a component causes the component to (almost) instantly rerender
* State must be initialized when a component is created
* State can only be updated using the function 'setState'

- Life Cycle

* Contructor
* Render method
* Content visible on screen
* ComponentDidMount
* Sit and wait for updates
* ComponentDidUpdate
* Sit and wait until this component is not longer shown
* ComponentWillUnmount

- Controll and UnControll

* User types in input
* Callback gets invoked
* we call setState with the new value
* Component rerenders
* input is told what it is value is (coming from state)

#redux

- redux is a state management library
- makes creating complex applications easier
- not explicitly designed to work with react

redux Cycle
Action creator --> action --> dispatch --> reducers --> state

note: when we change something inside a producer we always want to return a new array or a new object as opposed to modifying an existing one, so we always avoid as much as possible modifying existing data structures inside of a producer

- these are both components that are created by react redux
- the provider is going to be rendered at the very top of our application hierarchy even above the app component

#Redux is not Magic!

- Redux does not automatically detect action creators being called
- Redux does not automatically detect a function returning an object that is an 'action'

General Data loading with Redux

Synchronous action creator and Asynchronous action creator(need to install something called a middleware that going to allow you to deal with these asynchronous action creators)

middleware in redux

- is a plain javascript function that is going to be called with every single action that you dispatch
- inside of that function a middleware has the opportunity to stop, modify an action from being dispatch, so prevent it from going to any of your reducers middleware can modify an action or it can otherwise just kind of mess around in with an action in any way shape or form you can imagine a vary simple example
- one of the most popular uses of middleware is for dealing with these asynchronous action creator (redux-thunk)

rudux-thunk
Normal Rules:

- Action Creators must return action object (must be a plain javascript object) that has a type property and optionally can also have a payload as well

- `redux-thunk allows you tu rutn either in action object or a function`

rules of reducers

- Must return any value besides 'undefined'
- Produces 'state', or data to be used inside of your app using only previous state and the action(reducers are pure)
- must not return reach 'out of itself' to decede what value to return

- must not mutate it's input 'state' argument

- Removing an element from an array

* bad `state.pop()` good `state.filter(e => e !=='hi')`

- Adding an element to an array

* bad `state.push('hi')` good `[...state, 'hi']`

- Replacing an element in an array

* bad `state[0] = 'hi'` good `state.map(e => e === 'hi' ? 'bye', el)`

- Updating a property in an object

* bad `state.name = 'Sam'` good `{...state, name: 'Sam'}`

- Adding a property to an object

* bad `state.age = 30` good `{...state, age:30 }`

- Removing a property from an object

* bad delete state.name good `{...state, age: undefined }` or use lodash `_.omit(state, 'age')`

memoize from lodash, we using function for handle many duplicate request user

const abc = \_.memoize(pass function like argument) ==> so abc is function have same logic with the function be passed into memoize, but lodash will additional code inside the function.

the only difference is that we can only call memoize abc 1 time twith any unique set of arguments (ex: abc(1) ,abc(2))
so in other word the function abc will call only one time, and second time the function itseft is not going to run instead we are just going to return whatever was returned the previous time

- we only want to build a call our action creator with a unique Id one time
