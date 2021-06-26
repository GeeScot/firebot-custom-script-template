"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getScriptManifest = () => {
    return {
        name: 'Firebot Custom Script Template',
        description: 'Firebot Custom Script Template',
        author: 'GeeScot',
        version: '1.0',
        website: 'https://www.twitch.tv/GeeScot',
        startupOnly: false,
        firebotVersion: '5'
    };
};
exports.run = (runRequest) => {
    const fromUser = runRequest.trigger.metadata.username;
    const targetUser = runRequest.trigger.metadata.userCommand.args[0].replace(/@/g, '');
    const response = `${fromUser} gives ${targetUser} a big hug`;
    return createResponse(response);
};
function createResponse(message) {
    return new Promise((resolve, reject) => {
        const response = {
            success: true,
            effects: [{
                    type: 'firebot:chat',
                    message: message,
                    chatter: 'Bot'
                }]
        };
        resolve(response);
    });
}
