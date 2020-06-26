# TODO app

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Backend server

Launch the backend server via `node server`. It will be running on `http://localhost:8080/`.

It provides the following REST API:
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
