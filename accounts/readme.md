# Accounts

The Accounts package is a complete solution for managing users authentication. Here is what you need to know to get started:

- Add the account package you want to use, i.e. github

```
meteor add accounts-github
```

- Install the `accounts-ui` package
- Add `{{> loginButtons}}` to a template
 In our case go to "./accounts.html" and see it there already

- Start the meteor server
```
meteor
```

- Go to `http:localhost:3000`. You see that red button? *Niiice*
- Follow the instructions
- Login with your github account
- Open the console

Official documentation
 - [Accounts](
     http://docs.meteor.com/#/full/accounts_api
   )
 - [Accounts ui](
     http:docs.meteor.com/#/full/accountsui
   )
 - [Login services available](
     http:docs.meteor.com/#/full/meteor_loginwithexternalservice
   )
