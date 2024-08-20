// Import the discord.js library
const { Client, GatewayIntentBits, ActivityType } = require('discord.js');

const discord_bot = {
    enabled: true,
    token: 'Bot.Token', // Replace this with your bot's Discord Token(Retrieve this from the discord devportal)
    clientID: 'BotID', // Replace this with your Bots user id
    serverID: 'ServerID', // Replace this with your server id that the bot is in
    instanceOwnerID: 'UserID', // Replace this with your user id on discord
    status: {
        type: 'WATCHING', // Status type, can be 'WATCHING', 'PLAYING', 'LISTENING', and it will appear as if they are doing that
        activity: 'You struggle trying to figure out how this works' 
    }
};

// Check if the bot is enabled
if (discord_bot.enabled) {
    // Create a new client instance with the necessary intents
    const client = new Client({ 
        intents: [
            GatewayIntentBits.Guilds
        ]
    });

    // Event triggered when the bot is ready
    client.once('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
        
        // Set the bot's status
        client.user.setPresence({
            activities: [{ 
                name: discord_bot.status.activity, 
                type: ActivityType[discord_bot.status.type] 
            }],
            status: 'online'
        });
    });

    // Log in to Discord with your bot's token
    client.login(discord_bot.token);
}
