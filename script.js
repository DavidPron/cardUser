'use strict';

const apiUrl = 'https://dummyjson.com/users';

// Function for retrieving data from the backend
async function fetchTodos() {
  try {
    const response = await fetch(apiUrl);

    // Check if the request has completed successfully
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    // Receive data in JSON format
    const data = await response.json();

    console.log(data);

    displayData(data);
  } catch (error) {
    console.error('Error while retrieving data:', error);
  }
}


// +mon
function displayData(data) {
    const container = document.getElementById('data-container');

    data.forEach(item => {
       const div = document.createElement('div');
       div.innerHTML = 
        `
        <h2>${item.title}</h2>
        <p>${item.body}</p>
        `
        container.appendChild(div);
    });
}

// function call
fetchTodos();