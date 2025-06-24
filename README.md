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
______________________________________________________________________________________--------------------------------------------------------------------------------------

# Captain API Documentation

## Register Captain

**POST** `/captains/register`

### Description
Register a new captain (driver) by providing personal and vehicle details. Validates input and creates a new captain in the database.

### Request Body
The request body must be in JSON format and include the following fields:

- `fullname`: An object containing:
  - `firstname`: A string (required, minimum 3 characters)
  - `lastname`: A string (required, minimum 3 characters)
- `email`: A string (required, valid email format)
- `password`: A string (required, minimum 6 characters)
- `vehicle`: An object containing:
  - `color`: A string (required, minimum 3 characters)
  - `plate`: A string (required, minimum 3 characters)
  - `capacity`: An integer (required, minimum 1)
  - `vehicleType`: A string (required, one of: `car`, `motorcycle`, `auto`)

#### Example
```json
{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Smith"
  },
  "email": "jane.smith@example.com",
  "password": "captainpass",
  "vehicle": {
    "color": "Red",
    "plate": "XYZ1234",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
- `fullname.firstname`: string, required, min 3 chars
- `fullname.lastname`: string, required, min 3 chars
- `email`: string, required, valid email
- `password`: string, required, min 6 chars
- `vehicle.color`: string, required, min 3 chars
- `vehicle.plate`: string, required, min 3 chars
- `vehicle.capacity`: integer, required, min 1
- `vehicle.vehicleType`: string, required, one of `car`, `motorcycle`, `auto`

### Responses

- **201 Created**
  ```json
  {
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": { "firstname": "Jane", "lastname": "Smith" },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    },
    "token": "JWT_TOKEN"
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
  or
  ```json
  {
    "error": "Captain already exists"
  }
  ```

### Status Codes
- **201**: Captain created successfully.
- **400**: Validation errors in the request body or captain already exists.

---

## Login Captain

**POST** `/captains/login`

### Description
Login as a captain using email and password. Returns a JWT token on success.

### Request Body
The request body must be in JSON format and include:

- `email`: A string (required, valid email format)
- `password`: A string (required, minimum 6 characters)

#### Example
```json
{
  "email": "jane.smith@example.com",
  "password": "captainpass"
}
```
- `email`: string, required, valid email
- `password`: string, required, min 6 chars

### Responses

- **200 OK**
  ```json
  {
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": { "firstname": "Jane", "lastname": "Smith" },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    },
    "token": "JWT_TOKEN"
  }
  ```
- **400 Bad Request**
  ```json
  {
    "errors": [
      {
        "msg": "Invalid Email",
        "param": "email",
        "location": "body"
      }
    ]
  }
  ```
- **401 Unauthorized**
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

### Status Codes
- **200**: Login successful.
- **400**: Validation errors in the request body.
- **401**: Invalid email or password.

---

## Get Captain Profile

**GET** `/captains/profile`

### Description
Returns the authenticated captain's profile. Requires a valid JWT token in the cookie or `Authorization` header.

### Headers
- `Cookie: token=JWT_TOKEN`  
  or  
- `Authorization: Bearer JWT_TOKEN`

### Responses

- **200 OK**
  ```json
  {
    "captain": {
      "_id": "CAPTAIN_ID",
      "fullname": { "firstname": "Jane", "lastname": "Smith" },
      "email": "jane.smith@example.com",
      "vehicle": {
        "color": "Red",
        "plate": "XYZ1234",
        "capacity": 4,
        "vehicleType": "car"
      },
      "status": "inactive"
    }
  }
  ```
- **401 Unauthorized**
  ```json
  { "message": "Unauthorized" }
  ```

---

## Logout Captain

**GET** `/captains/logout`

### Description
Logs out the authenticated captain by blacklisting the token and clearing the cookie. Requires a valid JWT token.

### Headers
- `Cookie: token=JWT_TOKEN`  
  or  
- `Authorization: Bearer JWT_TOKEN`

### Responses

- **200 OK**
  ```json
  { "message": "Logout successfully" }
  ```
- **401 Unauthorized**
  ```json
  { "message": "Unauthorized" }
  ```

---

> **Note:** All captain endpoints require proper validation and authentication as described above.

