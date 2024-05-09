# Password Strength Checker

This project is a simple React.js application that evaluates the strength of a password input by a user and visually represents this strength with a progress bar. It is designed to be a beginner-friendly exercise for developers practicing for a Machine Coding Round.

## Features

- **Password Evaluation**: Dynamically checks the strength of a password based on several criteria.
- **Progress Bar**: Displays the password strength on a scale from 0 to 10.

## Password Strength Criteria

The strength of the password is determined based on its length and the variety of characters it includes. The maximum strength rating a password can achieve is 10. The criteria for evaluating the strength are as follows:

- The password length must be between 6 and 32 characters.
- Strength increments:
  - **+1 if the password includes at least one uppercase letter**
  - **+1 if the password includes at least one lowercase letter**
  - **+1 if the password includes at least one digit**
  - **+1 if the password includes at least one special character**
- Strength conditions:
  - **Strength > 3 and <= 6**: Password is considered weak.
  - **Strength > 6 and <= 8**: Password is considered moderate.
  - **Strength > 8**: Password is considered strong.
  - **Password length < 3**: Strength is considered as 0.

## Setup and Installation

1. **Clone and run the repository**
   ```bash
   git clone https://github.com/your-username/password-strength-checker.git
   cd password-checker
   npm install
   npm start
   ```
