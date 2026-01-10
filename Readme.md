# REACT

Website --> UI/Frontend server --> API/Middleware server --> Database Server --> API --> UI --> Website

## Build
    <code>npx create-react-app my-app</code>
                or
    <code>npm create vite@latest my-vite-app</code>


## Key Points
1. An open source JavaScript library
2. Used in building User Interfaces
3. Simplifies creation of SPA (Single Page Applications) by using reusable components

## Benefits:
1. Easy testing
2. Lightweight & very fast fast due to virtual DOM
3. Large community & ecosystem
4. Simple to build SPA (by using components)
5. Cross-platform & open source (free to use)

## Features
1. React Hooks: functions that enables functional components to manage states and lifecycle methods. These functions provides concise way to express and handle component logic.

2. JSX (Javascript XML (Extensible Markup Language)): A javascript extension used to write HTML-like syntaxes in react to aid readbility & maintainability. It is converted into JavaScript by the react library like Babel (Babel is used to transpile JSX syntax into regular JavScript which the browser can understand). The spread operator in JSX is used to expand an array/object. Its Advantages are:
i. Type safety - error checking in advance
ii. Improves readability and writability of code
iii. Supports Javascript expressions e.g 
<code><h1>Hello, {name}</h1> </code>
<code><p>{2 + 2} sum</p> </code>
iv. Code reusability
v. Improved performance


3. Component-based Architecture: React structures the UI as modular reusable components. This promotes a more maintainable & scalable approach to building applications.

4. Community & Ecosystem:  he React ecosystem is a vast,fast-evolving collection of tools, libraries, and frameworks built around the core React library to facilitate modern web and mobile development.

5. Reusability & Composition: Component Composition is the practice of building complex components by combining simpler ones, similar to building with LEGO blocks. Its advantage is, a modification made to a smaller component does not disrupt other components. Reusability is designing components that can be used across different parts of an application (or in different projects) without modification.

6. Virtual DOM (Document Object Model): a programming concept where a lightweight, in-memory copy of the real browser DOM is kept and kept in sync with it, used by frameworks like React and Vue to optimize UI updates, drastically improving performance by minimizing direct, costly real DOM changes through a process called "diffing" and "reconciliation" to batch and apply only necessary updates. Instead of manipulating the browser's DOM tree directly, changes are made to the VDOM first, then efficiently patched to the real DOM, making dynamic UIs faster and easier to manage.

7. React's declarative syntax: allows developers to describe what the user interface should look like for a given state, rather than listing the step-by-step instructions (imperative) on how to change the DOM. Using JSX, developers define the UI, and React handles the underlying process of updating the browser DOM. 
Core Concepts of Declarative React
"What" not "How": You declare the desired end result (e.g., "show a loading spinner," "display this data"), and React ensures the DOM matches that state.
State-Driven UI: The UI is a function of the application state (UI = f(state)). When the state changes, React automatically re-renders the necessary components.
JSX Syntax: React uses JSX, a syntax extension that looks like HTML, allowing you to visually describe the structure of the UI within your JavaScript code.
Virtual DOM: React uses a Virtual DOM to compare the current UI with the desired new state (diffing), applying only the necessary changes to the actual DOM, which makes it efficient.

## Components
    A re-usable building block for creating user interfaces. Through PROPS, data can be passed from a parent component to a child's. Types include:
i. Functional: declared/defined as a JavaScript function . It is a stateless component but with the help of hooks, they can manage internal data/state.
ii. Class: defined using JavaScript classes. It is stateful by using lifecycle components. Render method in a class component is responsible for returning JSX. Data can be passed across through props too but the child to use it, it has to use a "this" keyword. e.g this.props.message.
    <b>"this"</b> keyword is use to enforce/refer to an instance of the class component.

                             Functional                                  Class
Syntax:                 Defined as a JS function                       Defined as a JS(ES6) class
State:                  stateless but stateful with react hooks        Manages state with this.state
Lifecycle methods:      No                                             Yes
Readability:            Concise & readable                             Verbose & complex
this keyword:           No                                             Yes e.g this.props.message
render method:          No                                             Yes


## Prop Drilling
    It is the process of passing down props through multiple layers of components. Why to avoid prop drilling:
1. Complexity: code complexity increases and code readability reduces.
2. Debugging: debugging becomes challenging when props need to be traced through numerous components.
3. Maintenance: makes the code harder to maintain as changes in data flow require updates across multiple components.

## Ways to Avoid Prop Drilling:
1. Context API
2. Custom Hooks
3. Component composition
4. Callback functions
5. Redux

## DOM
It's a tree-like representation of the web page document which allows Javascript to access and manipulate the content and structure of the web page.
HTML (HyperText Markup Language) and the DOM (Document Object Model) are closely related but represent two different stages of a webpage's lifecycle. HTML is the static source code/text file that you write, while the DOM is the live, in-memory, tree-structured model of that code created by the browser, which can be modified in real-time

    DOM                                     Virtual DOM
1. Actual representation of webpage         Lightweight copy of DOM
2. Re-renders entire page during updates    Only changed parts are re-rendered
3. Slower, especially with frequent         Optimized for faster rendering updates
4. Suitable for static, simple websites     Ideal for dynamic & complex SPA with frequent updates

## SPA
A Single Page Application (SPA) in React is a web application that loads a single HTML page (index.html) in the browser and dynamically updates content as the user interacts with it, without reloading the entire page. React is widely used to build SPAs because its component-based architecture and Virtual DOM allow for fast, smooth, and app-like user experiences.

## Here is an explanation of why React is not the best choice for small applications:
1. Overkill and Unnecessary Complexity
Too Many Moving Parts: React requires a build step (Webpack, Babel) and, often, a package manager (npm/yarn). For a simple website, setting up this environment is excessive compared to writing simple HTML, CSS, and vanilla JavaScript.
Component-Driven Overhead: Everything in React is a component. If your application doesn't require complex, reusable UI elements, breaking down a simple page into components slows down development rather than speeding it up.
State Management: For simple interactivity (e.g., a modal), React's state management approach can lead to "prop drilling" or the need to manage complex, nested state, which is overkill for small projects. 
2. Performance and Resource Overhead
Bundle Size: React requires the client to download the React library itself, plus ReactDOM and any other dependencies. This adds unnecessary kilobytes to the initial load, which can slow down a simple website, particularly on mobile devices or slow networks.
Virtual DOM Overhead: React uses a Virtual DOM to minimize direct DOM manipulation. For small, simple sites, the overhead of calculating the "diff" between the virtual and real DOM is actually slower than just updating the real DOM directly with vanilla JS. 
3. SEO and Initial Rendering Issues
Client-Side Rendering (CSR): By default, React renders content in the browser (client-side). This can lead to SEO issues, as web crawlers might not index the content properly if it takes too long to load or isn't rendered on the server.
SEO Fixes Add Complexity: To solve SEO, developers often use Next.js or server-side rendering (SSR), which adds even more configuration, tools, and complexity, making it even less suitable for a "small" project. 
4. Development and Maintenance Costs
Steep Learning Curve: Even for "simple" tasks, React requires understanding JSX, hooks, component lifecycles, and state management, which is a steep learning curve for developers needing to build something fast.
Rapid Ecosystem Changes: React moves quickly, and what was best practice two years ago might be deprecated today. This requires constant maintenance and updates, which is disproportionate for a small app that should be "set and forget". 

Better Alternatives for Small Apps
For small, static websites, simple portfolios, or landing pages, it is generally better to use: 
Vanilla JS/HTML/CSS: Fast, simple, and direct.
Static Site Generators (SSG): Examples include Jekyll, Hugo, or 11ty.
Lightweight Frameworks: Alpine.js, HTMX, or Preact, which are designed to bring reactivity to HTML without the overhead of a large library. 
When is React not overkill? Only if that small app is intended to grow into a large, highly interactive single-page application (SPA) later.

## Conditional Rendering Types:
1. if/else statements
2. Ternary operator
3. && operator
4. Switch statements 

## Main Files:
1. index.html: Single page for react app. It is the main HTML file(SPA) in React application
2. Components/component1.js: application reusable components
3. App.js: Main component or container of the root component. It defines the structure, layout, and routing in the application. The <code>function</code> keyword contains the entire logic of the component. Its function takes in props as its arguments and returns JSX. the keyword <code>return</code> is used to return the element from the function.
4. App.test.js(optional): used for writing tests for App.js file
5. index.css(optional): global css file that serves as the main stylesheet for entire app
6. index.js: entry point for javascript. Renders the main react component(App.js) into the root DOM element.

## How React App Loads and displays components in browsers
     ==> Browser is opened 
    .html (single page loads index.js by React libraries e.g Babel)
    ==> index.js (replaces root element of index.html with newly rendered (App) components with the help of ReactDOM library)
    ==> App.js (root component that contains all child components)
    ==> ChildComponent.js(Custom child components replced over App component)

Feature 	    	                        Library	                            Framework
Control Flow	                            You call the library	            Framework calls your code
Flexibility	                                High (choose to use any part)	    Low (must follow its structure)
Opinion	                                    Unopinionated (tool-focused)	    Opinionated (prescribes structure)
Purpose	                                    Specific tasks (e.g., parsing)	    Application backbone

## Diferences Between React and Angular
    React                                       Angular
1. Javascript library                       Complete Framework
2. Virtual DOM                              Real 
3. Smaller, lightweigt, faster              Bigger because it is a complete framework
4. Depends on external libraries for        Has built-in support for features like routing, validation, HTTP requests etc
    complex functionalities
5. Simpler to learn, more popular           Difficult to learn due to OOP, Typescript etc

## Other JavaScript Frameworks/Libraries 
1. Vue.js
2. Ember.js
3. Backbone.js
4. Angular.js
5. Angular

## STATE
1. State is the current data of the component
2. Stateful or state management means, when a user performs some actions on the UI, the React application should be able to update and re-render that data or state on the UI.

## Props i.e Properties
    A way to pass data from a parent component to a child component.

## NPM & Node modules
    Node Package Manager used to manage the dependencies for a React project including React library itself. node_modules folder contains all the dependencies including React libraries.

## Public Folder
    Contains static assets that served into the browser directly (no API data fetching, no dynamic things & no component) e.g fonts, images, index.html

## src Folder
    Used to store all applications' source code which is then responsible for the dynamic changes in the web application.

## ReactDOM
    A React library that renders components to the DOM/Browser (usually through createRoot() function).

## Fragment (<>, <Fragment>)
    A way to group multiple children's elements. It prevents addition of unnecassary nodes to the DOM.

## Map
    Iterates over an array and modify its elementa using a callback function.

## Transpiler vs Compiler
    Transpiler is a tool used in converting a high-level programming language(JSX) into another high level PL (e.g JavaScript). While a Compiler is used to convert a high level PL(Babel) into a low level PL (e.g machine code/bytecode).

<b>Note: </b> It is possible to use JSX without React by creating one's own transpiler like Babel. Bit, it is not recommended since JSX is tightly integrated with React and relies on many React-specific features.

## Routing
    This allows creation of an SPA with full navigation without a full-page refresh. React uses React Router library to handle routing and enables navigation and  rendering of different components based on the URL.
To install:
    <code>npm install react-router-dom</code>
To implement:
    <code>import { Link, Routes, Route } from "react-router-dom";</code>

## React Hooks
    These are in-built functions provided by react that allows functional components to use state and lifecycle features. Before Hooks, class components lifecycle methods were used to maintain state in React applications. They include:
1. useState - enables functional components to manage state.  It accepts initial state values as the parametr and returns an array with two elements (1st is current state value, 2nd - the function used to update the state). useState is called only once when the component is loaded for the first time. <b>Check the State folder for more info.</b>

2. useEffect - It is called after the component renders.  It accepts twp parameters i.e Effect function and dependency array. This array is an optional array that acts as triggers for useEffect to rerun, meaning if any dependencies values change, the code inside useEffect() will be executed again. useEffect is used to perform side effects in functional components. e.g data fetching from API, subscriptions or any other operation that needs to be performed after the component has been rendered.

3. useContext - Context
4. useReducer - Complex state
5. useCallback - memoization
6. useMemo - performance
7. useRef - refs
8. useLayoutEffect - synchronous side effects


## In programming, asynchronous (or "async") refers to a style of execution where a task can start now and finish later without stopping the rest of the program.

Normally, code runs synchronously, meaning it executes line-by-line. If line 2 takes a long time (like downloading a large file), line 3 has to wait until line 2 is completely finished. This is called "blocking." Asynchronous code allows the program to move on to line 3 while line 2 works in the background.

The Restaurant Analogy
The easiest way to understand the difference is to imagine a waiter in a restaurant:

Synchronous (Blocking): The waiter takes your order, walks to the kitchen, and stands there staring at the chef until the food is ready. Only then does the waiter bring you the food and move to the next customer. The entire restaurant stops because the waiter is "blocked."

Asynchronous (Non-blocking): The waiter takes your order, hands the ticket to the kitchen, and immediately goes to serve other tables. When the kitchen finishes the food, they ring a bell (a callback), and the waiter comes back to deliver your meal.

Why we need it in Web Development
If JavaScript were strictly synchronous, your browser would "freeze" every time you clicked a button that fetched data from a server. You wouldn't be able to scroll, type, or click anything else until the data arrived.

Common Asynchronous Tasks
Network requests: Fetching data from an API.

Timers: Using setTimeout or setInterval.

File operations: Reading or writing files to a hard drive.

Database queries: Waiting for a database to find a record.

How it looks in code
In modern JavaScript, we handle asynchronous tasks using Promises or Async/Await.

Example with Async/Await:
This code starts a data fetch, but the JavaScript engine can do other things while waiting for the server to respond.

<code>
JavaScript

async function loadData() {
  console.log("Starting fetch...");

  const response = await fetch('https://api.example.com/data');
  const data = await response.json();

  console.log("Data received:", data);
}

loadData();
console.log("This runs while we wait for the data!");
</code>