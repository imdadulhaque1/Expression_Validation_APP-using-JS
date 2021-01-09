# Expression_Validation_APP-using-JS
# For User Name Validation:
Regular Expression: /^(?=.{4,20}$)(?:[a-zA-Z\d]+(?:(?:\.|-|_)[a-zA-Z\d])*)+$/

# For Password Validation:
Regular Expression: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/
1. Min 1 uppercase letter.
2. Min 1 lowercase letter.
3. Min 1 special character.
5. Min 1 number.
6. Min 8 characters.
7. Max 30 characters.

# For Email Validation:
Regular Expression: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

# For Bangladeshi Mobile Number Validation:
Regular Expression: /^(?:\+88|01)?(?:\d{11}|\d{13})$/

# For Bangladeshi Post Code Validation:
Regular Expression: /\d{4}/
