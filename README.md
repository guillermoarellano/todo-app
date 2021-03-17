# TODO app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0. It has since been upgraded to use Angular CLI version 11.2.4.

## Development server

Run `npm start` for a frontend and backend dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Backend server

The backend server can be run independently via `node server` terminal command. It will run on `http://localhost:8080/`.

Provides the following REST API:

* `GET /todos`
  * retrieves the list of TODO items
* `GET /todos/:id`
  * retrieves a specific TODO item
* `POST /todos`
  * creates a new TODO item
* `PUT /todos/:id`
  * updates an existing TODO item with new values
* `DELETE /todos/:id`
  * deletes an existing TODO item

All requests with payload must use `Content-Type: application/json`.

## Additional Functionality

This project needs to implement the SOLID principles demmonstrated in this [Angular In Depth article](https://indepth.dev/posts/1414/angular-and-solid-principles).

Main takeaways from the article:

* Create *Abstract* services that can be reused by other services.
* Article helps implement the **Open-Closed**, **Liskov-substitution**, and **Dependency Inversion** principles.
