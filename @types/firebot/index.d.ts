declare module "firebot" {
  type FirebotRequest = {
    parameters: object | null,
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
}
