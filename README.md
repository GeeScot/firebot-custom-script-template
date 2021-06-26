## Firebot Custom Script Template
A template for Firebot Custom Scripts

### how to use this script
Copy the file build/script.js in to the Firebot custom scripts folder as prompted by Firebot.

### install
```
npm install
```

### build
```
npm run build
```

### test
```
npm test
```

### Firebot types
```js
type FirebotRequest = {
  parameters: { 
    message: string
  },
  trigger: {
    type: string,
    metadata: {
      username: string,
      userCommand: {
        trigger: string,
        args: string[]
      }
    }
  }
}

type FirebotEffectType = 'firebot:chat';
type FirebotChatter = 'Streamer' | 'Bot';

type FirebotEffect = {
  type: FirebotEffectType,
  chatter: FirebotChatter,
  message: string
}

type FirebotResponse = {
  success: boolean,
  effects: FirebotEffect[]
}
```
