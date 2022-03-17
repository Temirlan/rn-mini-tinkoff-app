# rn-mini-tinkoff-app

## Getting Started

First, run start server:

```bash
npm run start
# or
yarn start
```

## Firebase config
```
apiKey: 
authDomain: 
projectId:
storageBucket: 
messagingSenderId: 
appId: 
```

## Configuration
Add config file ( .env file )
```
CURRENCY_API_KEY=
```

##Firebase database
```
accounts
  fields: 
    balance: number
    cardNumber: string
    currency: string
    name: string
    timestamp: timestamp
    userId: string

messages
 fields: 
    text: string
    timestamp: timestamp
    userId: string
users
  fields: 
    _id: string
    displayName: string

stories
  fields: 
    heading: string
    images: string[]
```
