# REACT

Website --> UI/Frontend server --> API/Middleware server --> Database Server --> API --> UI --> Website

## Build
    <code>npx create-react-app my-app</code>
                or
    <code>npm create vite@latest my-vite-app</code>

## Reactive Programming:
    A programming paradigm that focuses on reacting to changes and events in a declarative and asynchronous manner. e.g when typing in Google search bar brigns up options as the users inputs the values.

## Ways in implementing Reactive Programming:
1.	State and Props:	Reacting to changes in local component state and passing data reactively through props.
2.	React Hooks:	Leveraging useState and useEffect hooks for managing state and side effects in functional components.
3.	Event Handling:	Reacting to user interactions through event handling and updating state accordingly.
4.	Context API:	Sharing and managing global state reactively across components using the Context API.
5.	Redux:	Using state management libraries like Redux for managing complex application state reactively.
6.	Component Lifecycle Methods:	Using class components and lifecycle methods for handling side effects and updates.
7.	Async/Await:	Utilizing async/await syntax for handling asynchronous operations reactively.
8.	RxJS and Observables:	Leveraging RxJS for handling asynchronous operations and data streams in a reactive manner.

## GraphQL
    A query language for APIs and a runtime for executing those queries with existing data. React uses GraphQL queries to fetch the data required for rendering.

<code>
    query {
        user(id: 1) {
            id
            name
            email
            posts {
                title
                content
            }
        }
    }
</code>

## How to Implement Authentication in React
 From Client/frontend --> POST:{username, password} --> Authenticate & create JWT Token __> Retrun response (JWT token) --> Token stored at localStorage --> Client requests data (JWT token: Header) --> Token signature validated --> Data sent --> Data displayed on browser

## How to Optimize React App Performance
1. Memoization with useMemo and useCallback: to memoize values and reduce unnecessary recalculations.
2. Optimizing renders with React.Fragment: to avoid wrapper elements that can cause additional DOM nodes.
3. Lazy loading with React Lazy: to reduce the initial bundle size and improve performance
4. Code splitting: to divide app into smaller chunks loaded on demand improving initial load times. 
5. Optimizing images and assets: compress and optimize images, use responsive images, and leverage lazy loading for images to reduce network and rendering overhead.

## JWT:
    JSON (JavaScript Object Notation) Web Token. 

## React Profiler
    Tools set that enables the dev to analyze performance of a React app
    
## REACT                                REACT-NATIVE
1. A library                        A framework
2. Runs on web browswers            Runs on IOS and Android platforms
3. HTML & CSS are sued for UI       Native UI components (e.g View, Text) are used for UI
4. Deployed as web apps             Deployed through app stores
5. Used for building web interfaces Builds mobile apps


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

## Ways to Style React Components
1. CSS modules. CSS Modules files must end in .module.css e.g
<code>
    import React from 'react';
    import styles from './Button.module.css'; // Import as an object

    function Button() {
    // Use styles.className
    return <button className={styles.button}>Click Me</button>;
    }

    export default Button;

</code>
2. CSS stylesheets
3. Inline styles: e.g
<code>
     //or 
    function App() {
        return (
            <div style={{ color: 'red', fontSize: '20px' }}>
            Hello World
            </div>
        );
    }

    //or
    function App() {
        const containerStyle = {
            backgroundColor: 'dodgerblue',
            color: 'white',
            padding: '15px',
            borderRadius: '5px'
        };

        return <div style={containerStyle}>Styled Box</div>;
    }

    //
</code>
4. Global stylesheets: Global CSS refers to styles applied across an entire website, ensuring consistency in look and feel. These styles typically include typography, colors, resets, and layout structures.e.g

<code>
    :root {
        --primary-color: #0034ab;
    }
    body.dark-mode {
    --color-background: #151515;
    --color-text: #fafafa;
    }
</code>

5. CSS Frameworks e.g Bootstrap

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

## How to pass Data from Child to Parent
    Parent provides a callback() to child and then child component can then invoke this callback to pass data back to parent.
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

## Testing Libraries in React
1. Cypress
2. Jest
3. React Testing Libraru
4. Enzyme

## STATE
1. State is the current data of the component
2. Stateful or state management means, when a user performs some actions on the UI, the React application should be able to update and re-render that data or state on the UI.

## Ways to Achieve State Management
1. useState Hook: It's used in a simple component-level state. This is because it is ideal for applications having small components and isolated state due to it being lightweight and built into React only.
2. Context API: prop drilling avoidance for sharing global data. Simplifies data passing through the component tree, reducing the need for manual prop.
3. Redux: Large-scale applications with complex state. Centralized store and actions provide a predictable state management pattern, aiding in debug and scalability.

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

3. useContext - provides a way to pass data from a parent to nested child components without having to pass props through every child that do no not need the data. It returns an object with Provider and Consumer properties. The Provider properties is responsible for providing context values to all its child components. While Consumer property/ useContext methodmcan be used to consume context's values in child components.
useContext Usage in Real Applications
1. Theme Switching (Dark/ Light)
You can centralize and pass the theme selection of the application from the parent to all the deep child components.

2. Localization (language selection)
You can centralize and pass the language selection of the application from the parent to all the child components.

3. Centralize Configuration Settings
Common configuration settings like API endpoints can be centralized and change in the parent component will pass the setting to all its child components

4. User Preferences
Any other user preferences apart from theme and localization can also be centralized.

5. Notification System
Components that trigger or display notifications can access the notification state from the context.

4. useReducer (Complex State)
While useState is great for simple values, useReducer is better when you have complex state logic involving multiple sub-values or when the next state depends on the previous one. It follows the Redux pattern: (state, action) => newState.
<code>
JavaScript

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </>
  );
};
</code>

5. useCallback (Memoization)
Every time a component re-renders, the functions defined inside it are recreated. If you pass these functions to optimized child components, those children will re-render unnecessarily. useCallback returns a memoized version of the function that only changes if its dependencies change.
<code>
JavaScript

const Parent = () => {
  const [count, setCount] = useState(0);

  const handler = useCallback(() => {
    console.log("Clicked");
  }, []);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Re-render Parent</button>
      <Child onClick={handler} />
    </>
  );
};
</code>
6. useMemo (Performance)
useMemo is similar to useCallback, but instead of memoizing a function, it memoizes the result of a calculation. This is vital for expensive operations (like filtering large lists or complex math) to ensure they don't run on every single render.

<code>
JavaScript

const total = useMemo(() => {
  return largeArray.reduce((acc, val) => acc + val, 0);
}, [largeArray]);
</code>

7. useRef (Refs)
useRef returns a mutable object that persists for the full lifetime of the component. It has two main uses:

Accessing the DOM: Grabbing a reference to an element (like focusing an input).

Storing mutable values: Keeping a value that doesn't trigger a re-render when it changes (like a timer ID).

<code>
JavaScript

const InputFocus = () => {
  const inputEl = useRef(null);

  const onButtonClick = () => {
    inputEl.current.focus();
  };

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus Input</button>
    </>
  );
};
</code>

8. useLayoutEffect (Synchronous Side Effects)
This hook is identical to useEffect, but it fires synchronously after all DOM mutations but before the browser has a chance to paint. Use this only when you need to measure DOM elements (like getting the height or scroll position) and perform an update before the user sees a visual flicker.

<code>
JavaScript

useLayoutEffect(() => {
  const rect = elementRef.current.getBoundingClientRect();
  setHeight(rect.height);
}, []);
</code>


## In programming, asynchronous (or "async") 
    refers to a style of execution where a task can start now and finish later without stopping the rest of the program.

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


## Component Life Phases
1. Mounting Phase (Creation of component): occurs when an instance of a component is being created and inserted into the DOM.
2. Updating Phase: occurs when a component is re-rendererd as a result of changes to either its props or state.
3. Unmounting Phase: occurs when a component is being removed/unloaded from the DOM

## Component Life Methods
    These are special mehods that get called at various phases of a component's life.
1. Mounting Phase methods:
i. constructor()
ii. getDerivedStateFromProps()
iii. render()
iv. componentDidMount()

2. Updating Phase methods:
i. shouldComponentUpdate()
ii. getDerivedStateFromProps()
iii. render()
iv. getSnapshotBeforeUpdate()
v. componentDidUpdate()

3. Unmounting Phase methods:
i. componentWillUnmount()

1. Mounting Phase methods
This phase occurs when an instance of a component is being created and inserted into the DOM.

i constructor(): The first method called before the component is mounted. It is used to initialize local state and bind event handler methods to the instance.

ii getDerivedStateFromProps(): A static method called right before calling the render method, both on the initial mount and on subsequent updates. It exists for rare cases where the state depends on changes in props over time.

iii render(): The only required method in a class component. It examines this.props and this.state and returns React elements, arrays, fragments, portals, or strings.

iv componentDidMount(): Invoked immediately after a component is mounted. This is the correct place to instantiate network requests, set up subscriptions, or interact with the DOM.

2. Updating Phase methods
An update can be caused by changes to props or state. This phase happens when a component is being re-rendered.

i shouldComponentUpdate(): Returns a boolean value that specifies whether React should continue with the rendering process or not. It is used for performance optimization.

ii getDerivedStateFromProps(): Also called during updates to allow the state to stay in sync with prop changes.

iii render(): Re-runs to reflect the changes in state or props.

iv getSnapshotBeforeUpdate(): Invoked right before the most recently rendered output is committed to the DOM. It enables the component to capture some information from the DOM (such as scroll position) before it is potentially changed.

v componentDidUpdate(): Invoked immediately after updating occurs. This is a good place to perform network requests as long as you compare the current props to previous props to avoid infinite loops.

3. Unmounting Phase methods
This phase occurs when a component is being removed from the DOM.

i componentWillUnmount(): Invoked immediately before a component is unmounted and destroyed. It is used to perform necessary cleanup, such as invalidating timers, canceling network requests, or cleaning up subscriptions.

Constructors in Class Components
The constructor is a special method called when an instance of a class is created. It is used for initializing the component state by assigning an object to this.state or performing any setup needed before the component is rendered. You must call super(props) before any other statement to ensure this.props is defined.

<code>
JavaScript

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: 0
    };
  }
}
</code>

render()
A method that returns React elements that will be rendered to the DOM. It must be pure, meaning it does not modify component state, it returns the same result each time it is invoked, and it does not directly interact with the browser.

componentDidMount()
This method runs after the component output has been rendered to the DOM. Because it is guaranteed that the DOM nodes are available at this point, it is the standard location for API calls and setting up any third-party libraries that require a DOM connection.


## How to Handle Forms in React:
    ...By using controlled components

## How ot handle multiple input fields in a controlled form
    ...maintain separate state variables for each input field and update them individually using the onChange event.

## How to Handle Form Validation in a controlled component
    ...by using conditional rendering based on the state and validate input values before updating the state.   
    
## Scenarios where Uncontrolled Components are advantageous
    When integrating with non-react libraries or when dealing with forms where controlled components are not possible.

## Controlled Components
    Components whose form elements (like input fields checkboxes) are controlled by the application state/component rather than the DOM.

##  Controlled                                                          Uncontrolled
1. Controled by React state                                             Values are not controlled by React state
2. Event handlers update React state                                    No explicit state update, and values can be access directly from the DOM
3. Does not depend on useRef                                            Commonly uses useRef() to access form elements values
4. Re-renders on state changes                                          Less re-rendering since values are not directly tied to React state.
5. A recommended and standard practice for form handling in React.      Useful in certain scenarios but commonly considered best practice.  

## Characteristics of Controlled Components
1. State control: the value of the form element is stored in component's state.
2. Event handling: changes made to form's element trigger an event (e.g onChange for input fields)
3. State update: the event handler updates the component's state with the new values of the form element.
4. Re-rendering: the component re-renders with the updated state, and the form element reflects the new value.

## Benefits of Controlled Components
1. Form elements have values managed by React state, ensuring a single source of truth.
2. Facilitates predictable and synchronous updates, making it easire to implement features such as form validation and dynamic rendering, and seamless integration with React's lifecycle methods.
3. They offer better control and maintainability compared to uncontrolled components, making them the best procatice for handling forms in React applications.

## Single Source of Truth (SSOT)
    In React refers to the practice of making the component state the one and only place where the data for your UI lives.

In traditional HTML/JavaScript, the input field itself holds its own value. In React, we take that power away from the DOM and give it to the component state.

Why this is important
Synchronization: Without an SSOT, the value in the input field and the value in your JavaScript variables could become different. By using SSOT, the UI is always a direct reflection of the state.

Predictability: Because the state is the only source of truth, you know exactly where to look when you need to debug or change the data. You don't have to query the DOM to find out what a user typed.

Control: Every change to the data must go through a state update. This allows you to validate, format, or reject user input before it even appears on the screen.

How it works in practice
When you type into an input, the following cycle happens:

User types: The user presses a key in the input field.

Event triggers: The onChange event fires.

State updates: Your handler takes the new value and calls setState.

Re-render: React re-renders the component with the new state value.

UI reflects state: The input's value attribute is updated by React to match the state.


## Code Splitting
    A technique of splitting JavaScript bundles into smaller chunks which are loaded on demand on the browser.  
    <b> Note:</b> It is possible to load CSS files (through the dynamic import()) to load styles on demand along with corresponding components. Also, to inspect and analyze the size and composition of the generated chunks, use tools like Webpack Bundle Analyzer.

    Ways to split codes:
1. React.lazy() : a function that is used to import/load components lazily (meaning the component is only imported & loaded when it is needed). The App.jsx / root component is rendered separately initially. And when the lazily component is called, it is rendered alone as well. This function enables code splitting by allowing you to import a component asynchronously/dynamically, meaning component is loaded when needed only.
2. Wrap components with Suspense component to handle loading. When the lazily component is yet to be called, the fallback prop is displayed with the help of the Suspense. The fallback prop provides a loading indicator or UI while the dynamically imported component is being loaded.
3. Configuration of build tool (e.g Webpack) for dynamic imports

## Pros of Code Splitting
Faster Initial load time : by only loading necessary code for the current view or feature. It is good for performance/
Optimized bandwidth usage: it reduces the amount of data transferred over the nuetwork, making it good for a slow network.
Improved caching: smaller focused code chunks are more likely to be cached.
Parallel loading: multiple smaller chunks can be loaded simaltaneously, leading to faster overall loading times.
Easier maintenance (more modular and independent code structure for maintenance)

## Cons of Code Splitting
1. Complexity: it adds additional complexity to the app. Resulting into development process being slow.
2. Tooling dependenices: it needs tools and config. like webpack and Babel. Their management are challenging
3. Potential for runtime errors: dynamically loading code at runtime can intorduce the possibility of runtime errors. Careful tetsing is necessat to catch them.
4. Increased number of requests: increase in no of HTTP requests neededd to fetch all necessary chunks. And that can impact performance.
5. Learning Curve: developers new to this concept need time to uncerstand its best practices.


## Role of import() in code splitting
... It returns a promise that allows dynamic loading of modules.

## How Webpack Works
Webpack builds a dependency graph starting from an Entry point (usually index.js). It follows every import and require statement to find every file your project needs. It then uses Loaders to transform non-JS files (like CSS or images) into modules and uses Plugins for tasks like minification and optimization. The result is an Output bundle ready for production.
<code>  
    const path = require('path');
    const HtmlWebpackPlugin = require('html-webpack-plugin');

    module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
        },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
        template: './src/index.html',
        }),
    ],
    mode: 'production',
    };

</code>
## Webpack vs Vite
While Webpack is the industry standard for complex configurations, newer tools like Vite have changed the development landscape:

Build Speed: Webpack bundles your entire project before serving it, which can be slow as the project grows. Vite avoids bundling during development by using native ES Modules in the browser, making server start-up nearly instant.

HMR (Hot Module Replacement): Vite is significantly faster at reflecting code changes in the browser because it only replaces the specific module being edited, whereas Webpack often has to re-bundle parts of the dependency graph.

Production: Both use similar strategies for production. Webpack uses its own bundling engine, while Vite uses Rollup, which is highly efficient for modern JavaScript.

## Higher-Order Components
    A component that takes another component as an argument and adds extra features to the supposed component. It is usually used to provide logging functionality to all components in a reusable way.