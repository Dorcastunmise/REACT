/*
a callback function is a function passed into another function as an argument, 
which is then invoked (called back) inside that outer function to complete some kind of routine or action.
Think of it like giving a friend your phone number and saying, "Don't call me now, but call me as soon as you finish your work." The "phone call" is the callback.

Why do we use them?
Callbacks are essential in JavaScript because it is an event-driven and asynchronous language. 
We use them to ensure that a specific piece of code does not run until another task has finished.

*/

import React, { useState, useEffect } from 'react';

const Effects = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${user}`);
      const data = await res.json();
      setUser(data);
    };

    fetchUser();
  }, [user]);

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <section style={{ marginBottom: '20px', borderBottom: '1px solid #ccc' }}>
        <h2>System Status</h2>
        <p>Window Width: <strong>{width}px</strong></p>
      </section>

      <section>
        <h2>User Profile</h2>
        {user ? (
          <div>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </section>
    </div>
  );
};

export default Effects;