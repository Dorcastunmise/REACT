// <Routes> component is the root container used to define a set of routes in a React application using React Router.
// <Route> component is used to define a single route, specifying the path and the component to render when that path is matched.
// Route parameters allow you to define & pass dynamic segments in the URL, which can be accessed within the component to render content based on those parameters.
// <Switch> component is used to group multiple <Route> components, ensuring that only the first matching route is rendered.
// Switch is typically used to handle exclusive routing scenarios, such as rendering a "Not Found" page when no routes match.
// exact prop is used in <Route> to ensure that the route only matches when the path is exactly the same as the current URL.
/*
Note: exact prop is no longer needed: In React Router v6+, routes match exactly by default.
You can remove the exact prop from your / route; it won't break anything if it stays, 
but it's redundant.
Path Case Sensitivity: By default, paths are case-insensitive. 
However, it's common convention to use lowercase for paths (e.g., /about instead of /About) 
to match standard URL practices.
*/

import React from "react";
import {Routes, Route, Link, Switch} from "react-router-dom";

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;
const Contact = () => <h2>Contact Page</h2>;
const User = () => <h2>User Page</h2>;
const Users = () => <h2>Users Page</h2>;

const AppsRoute = () => {
    return (
        <>
            {/* Navigation Links */}
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </nav>

              {/* Route component prop was used in version 5 
              but got replaced with element prop in version 6 for more 
              flexibility and more consistent API*/}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            {/* Switch component */}
            <Switch>
                <Route path="/users" element={Users} />
                <Route path="/user/:id" element={User} />
                <Route path="*" element={<NotFound />} />
            </Switch>
        </>
    );
}

export default AppsRoute;