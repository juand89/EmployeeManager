## Description

***fullstack-engineer-challenge*** is a code challenge.
## Summary

This is a website to manage employees and also to leave reviews to employees made by using **Vue.js**, **Tailwind css** and **Firebase** for the the database and API. 

Is possible to login the website as an **admin** or an **employee**.
## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

## Admin
The login of the admin account is:
- **Email**: admin@example.com
- **Password**: asdf0987
### Admin features
- Create, edit and delete employees.
- View performance reviews and assign employees to participate.

## Employee
Is possible to login with any of the employees with the same password, the default account is: 
- **Email**: juan@example.com
- **Password**: asdf0987

### Employee features
- See the list of employees requiring feedback
- Submit feedback

### This website features:
  - Responsive design for multiples devices.
  - Keep up to date the data with Firebase.
  - Save the user session even if the tab is closed.

### Coding Features:
  - Reusable components.
  - Handle errors when making requests to the server.
  - Comments on the html to help identify parts of code.
### TODO
- [ ] Implement Firebase cloud functions or change the project to Nuxt to add the firebase admin features to create an user without reauthentication.
- [ ] Add transition effect to display the modals more smoothly
- [ ] Create an alert to display success or error messages.
- [ ] Add a better validation for the user input.
- [ ] Add loading indicator to the buttons.
- [ ] Implement the search for selecting employees.


