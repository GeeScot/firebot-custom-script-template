const assert = require('assert');
const { run } = require('../build/script');

function createMessage(message) {
  return {
    parameters: null,
    trigger: {
      type: 'command',
      metadata: {
        username: 'GeeScot',
        userCommand: {
          trigger: '!hug',
          args: [message]
        }
      }
    }
  };
}

async function execute(input, expected) {
  const message = createMessage(input);
  const response = await run(message);

  const actual = response.effects[0].message;
  assert.strictEqual(actual, expected);
}

describe('Firebot Custom Script Template', () => {
  it('Gives a user a hug', async () => {
    await execute('@Username', 'GeeScot gives Username a big hug');
  });
});
