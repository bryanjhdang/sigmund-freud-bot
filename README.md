# Sigmund Freud Discord Bot
This is a Discord bot that you can use to generate a Sigmund Freud quote anytime, anywhere.  

## Features
`/quote` - make the bot say a quote randomized from 60 options.

`/mother` - make the bot say "I love my mom."

## Run it locally
Normally you'd host it on a server so that people can use it. I can't justify spending money on keeping this bot running as a joke, so you're gonna have to do it yourself.

- Go to the Discord Developer Dashboard at https://discord.com/developers/applications and create your own bot.
- Go to the `Bot` tab and toggle on `Server Members Intent` and `Message Content Intent`.
- Reset the token and store it somewhere safe to use later. Hopefully you remember your Discord password.
- Go to the `OAuth2` tab and toggle `bot`.
- For permissions, toggle `Read Message/View Channels`, `Send Messages` and `Use Slash Commands`.
- Copy the generated URL and paste it in a new tab, then add it to the server you want.

Now everything on the Discord side should be set up. Time to configure the code.
- Clone or zip the source code onto your own PC.
- Add an `.env` in the root folder and add `DISCORD_TOKEN="{ADD YOUR TOKEN HERE}"` -> it should end up looking like `DISCORD_TOKEN="SFPO89ad9f89"`.
- Run `npm i` to download all of the necessary packages.
- Run `nodemon` to run your bot.

Enjoy!
     
