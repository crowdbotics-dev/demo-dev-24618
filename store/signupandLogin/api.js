import axios from "axios"
const signupandLogin = axios.create({
  baseURL: "https://tstcr2020092101-dev-11396.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function signupandlogin_post_api_v1_login_read(payload) {
  return signupandLogin.post(`/api/v1/login`, payload.data)
}
function signupandlogin_post_api_v1_signup_read(payload) {
  return signupandLogin.post(`/api/v1/signup`, payload.data)
}
export const apiService = {
  signupandlogin_post_api_v1_login_read,
  signupandlogin_post_api_v1_signup_read
}
