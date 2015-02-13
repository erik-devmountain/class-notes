###HTTP/basic authentication 

- http://username:password@localhost.com
- insecure for user 
- stateless: every single request will have to include auth info

###Form based

- uses cookies

<form method="POST" action="/login">
  <input name="username">
  <input type="password" name="password">
  <button action="/post">Login</button>
</form>

express-session 

###OAuth

- token based 


### Passport 

require passport 
require passport-twitter 

passport.serializeUser

- serialize: translate into another format


