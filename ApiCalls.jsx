import React from 'react'

const ApiCalls = () => {
    /*
        fetch is a built-in JavaScript function (so it does not need additional libraries)that allows you 
        to make network requests to retrieve resources from a server.
        It returns a Promise that resolves to the Response object representing the response to the request.
        If one wants to use fetch in older browsers, they may need to include a polyfill.
        fetch should be considered when trying to make simple https requests
    
    */
    function fetchData() {
        fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.error('Error fetching data:', error));
        
        return "Sample Data from fetchData";
    }

    fetchData();

    /*
        If you want to make HTTP requests in a more feature-rich way, you might consider using libraries like Axios.
        Axios is a popular JavaScript 3rd party library that simplifies making HTTP requests.
        It provides a more powerful and flexible API compared to the built-in fetch function.
        Axios automatically transforms JSON data, handles request cancellation, and supports older browsers without needing polyfills.
        Axios should be considered when you need advanced features like interceptors, request cancellation, or automatic JSON transformation.
    
    */
    function AxiosFetch() {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .catch((error) => console.error('Error fetching data:', error));
        
    }


  return (
    <div>ApiCalls</div>
  )
}

export default ApiCalls