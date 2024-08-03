import React, { useState, useEffect } from 'react';

function Home() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/hello')
            .then(response => response.json())
            .then(data => setMessage(data.message))
            .catch(error => console.error('Error:', error));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to My Flask-React App</h1>
                <p>{message}</p>
            </header>
        </div>
    );
}

export default Home;