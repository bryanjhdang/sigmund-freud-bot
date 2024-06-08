# Sigmund Freud Discord Bot
This is a Discord bot that you can use to generate a Sigmund Freud quote anytime, anywhere.  

## Features
`/quote` - make the bot say a randomized Freud quote from 60 options.

`/mother` - make the bot say "I LOVE MY MOM!".

## Run it locally
Normally you'd host it on a server, but I can't justify spending money for a joke, so here's how to do it locally. Deploy it yourself if you want!

### Bot Setup
- Go to the Discord Developer Dashboard at https://discord.com/developers/applications and create your own bot
- Go to the `Bot` tab and toggle on `Server Members Intent` and `Message Content Intent`
- Reset the token and store it somewhere safe to use later, you'll need your Discord password
- Go to the `OAuth2` tab and toggle `bot` and `aplications.commands`
- For permissions, toggle `Read Message/View Channels`, `Send Messages` and `Use Slash Commands`
- Copy the generated URL and paste it in a new tab, then add it to the server you want

### Code Setup
- Clone or zip the source code onto your own PC
- Add an `.env` file in the root folder
- In `.env`, add `DISCORD_TOKEN="{ADD YOUR TOKEN HERE}"` -> it should end up looking like `DISCORD_TOKEN="SFPO89ad9f89"`
- In `.env`, add `CLIENT_ID="{ADD YOUR APPLICATION ID}"` 
- Run `npm i` to download all of the necessary packages
- Run `node deploy-commands.js` to initialize the slash commands
- Run `nodemon` to run your bot

It takes a while for the slash commands to update. Kick the bot and re-add with the same permissions to make it update quicker. 

Enjoy!
     
