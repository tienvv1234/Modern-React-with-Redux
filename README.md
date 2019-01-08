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