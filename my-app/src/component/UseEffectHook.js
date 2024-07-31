import React, { useState, useEffect } from 'react';

function UseEffectHook() {
  // State to hold the user data
  const [user, setUser] = useState(null);
  // State to handle loading and error states
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    // Function to fetch user data
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUser(data); // Set user data in state
      } catch (error) {
        setError(error); // Set error state
      } finally {
        setLoading(false); // Set loading to false
      }
    };

    fetchUserData(); // Call the function to fetch data
  }, []); // Empty dependency array means this effect runs once when component mounts

  // Conditional rendering based on loading and error states
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{user.id}</h1>
      <p>Email: {user.title}</p>
      <p>Username: {user.body}</p>
    </div>
  );
}

export default UseEffectHook;
