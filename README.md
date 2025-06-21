 # User Registration API

## Endpoint
**POST** `/users/register`

## Description
This endpoint allows a new user to register by providing their details. It validates the input data and creates a new user in the database.

## Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string representing the user's first name (required, minimum length: 3 characters).
  - `lastname`: A string representing the user's last name (required, minimum length: 3 characters).
- `email`: A string representing the user's email address (required, must be a valid email format).
- `password`: A string representing the user's password (required, minimum length: 8 characters).

### Example Request
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}

## Responses
- **201 Created**: User successfully registered.
  - Response body:
  {
    "token": "JWT_TOKEN",
    "user": {
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com"
    }
  }

- **400 Bad Request**: Validation errors occurred.
  - Response body:
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }

## Status Codes
- **201**: User created successfully.
- **400**: Validation errors in the request body.