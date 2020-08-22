// ==================== form validation ==============================

export const REQUIRED_FIELD = "This field is required"
export const TOO_SHORT_FIELD = (field_name) => `${field_name} is too short`
export const TOO_LONG_FIELD = (field_name) => `${field_name} is too long`
export const LOGIN_FORM_INIT = {username: "", password: ""}
export const SIGN_UP_FORM_INIT = {username: "", password:"", password_confirmation: "", first_name: "", last_name: "", gender: ""}

// ===================================================================

// ==================== Routes =======================================

export const SIGNUP_LOGIN_PATH = ["/login", "/signup"]

// ===================================================================


// ==================== Values =======================================

export const GENDER_VALUES = [  {  value: "male", label: "Male" },
                                { value: "female", label: "Female" },
                                { value: "other", label: "Other" }
                              ]

export const USER_REGISTRATION_PATH = "/user_authentications"

// ===================================================================