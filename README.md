# User Registration & Login API

## Register User

**POST** `/users/register`

### Description
This endpoint allows a new user to register by providing their details. It validates the input data and creates a new user in the database.

### Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string (required, minimum 3 characters)
  - `lastname`: A string (required, minimum 3 characters)
- `email`: A string (required, valid email format)
- `password`: A string (required, minimum 8 characters)

#### Example
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

- **201 Created**
  ```json
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
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "First name must be at least 3 characters long",
        "param": "fullname.firstname",
        "location": "body"
      }
    ]
  }
  ```

### Status Codes
- **201**: User created successfully.
- **400**: Validation errors in the request body.

---

## Login User

**POST** `/users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password. If the credentials are valid, a JWT token is returned.

### Request Body
The request body must be in JSON format and include:

- `email`: A string (required, valid email format)
- `password`: A string (required)

#### Example
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword"
}
```

### Responses

- **200 OK**
  ```json
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
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid email format",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

### Status Codes
- **200**: Login successful.
- **400**: Validation errors in the request body.
- **401**: Invalid email or password.

---

## Get User Profile

**GET** `/users/profile`

### Description
This endpoint returns the authenticated user's profile information. Requires a valid authentication token (JWT) in the cookie or `Authorization` header.

### Headers
- `Cookie: token=JWT_TOKEN`  
  or  
- `Authorization: Bearer JWT_TOKEN`

### Responses

- **200 OK**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Authentication token is missing"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid token"
  }
  ```
- **404 Not Found**
  ```json
  {
    "message": "User not found"
  }
  ```

### Status Codes
- **200**: Profile fetched successfully.
- **401**: Authentication failed or token is missing/invalid.
- **404**: User not found.

---

## Logout User

**GET** `/users/logout`

### Description
This endpoint logs out the authenticated user by clearing the authentication token and blacklisting it. Requires a valid authentication token (JWT).

### Headers
- `Cookie: token=JWT_TOKEN`  
  or  
- `Authorization: Bearer JWT_TOKEN`

### Responses

- **200 OK**
  ```json
  {
    "message": "User logged out successfully"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Authentication token is missing"
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "message": "Invalid token"
  }
  ```

### Status Codes
- **200**: Logout successful.
- **401**: Authentication failed or token is missing/invalid.
--------------------------------------------------------------------------------------------------------------------------------------------------