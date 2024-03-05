# Entrega UI - Entrega Routing - Desarrollo de Interfaces

This project corresponds to the submission of the initial assignment for the course 'Interface Development,' aimed at demonstrating proficiency in integrating an API within our project.

Project Features:
- We have created a React project using Vite.
- The PokeAPI has been utilized as a service to fetch data.
- Axios library has been added to handle HTTP requests.
- Tanstack Query was used to perform asynchronous requests, cache previously fetched data, and manage "Pending" states to display a loading screen and "Success" states to render the data.
- The rest of the component styles have been created using native CSS, including the dynamic statistics bars.

Project Features V2:
- In this second version, more MaterialUI components have been implemented, in addition to the loading page and icons. A basic navigation bar has been added, along with a simple table with a button inside, and a dynamic paginated table with the ability to modify the displayed results.
- The react-router-dom library has been implemented to create a main page that only displays the home menu, and two child pages for "Pokemon" and "Generations". Additionally, a simple error page has been created for cases where a non-existing URL is entered.