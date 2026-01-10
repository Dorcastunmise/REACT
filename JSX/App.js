// Imperative syntax involves step by step procedures to achieve a desired outcome. 
// In React, this means using React.createElement() to create elements and build the UI structure manually.
// Javascript has an imperative syntax

function App() {
    return React.createElement(
        'div',
        { className: 'App'},
        React.createElement('h1', null, 'Hello'), //When you pass null, you are telling React that this element has no attributes or propertiesthings like className, id, style, or event handlers like onClick.
        React.createElement('p', null, 'Test'),
    );
}