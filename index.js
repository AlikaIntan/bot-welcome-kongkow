//define the libraries
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { get } = require("snekfetch");
const http = require("http");
const snekfetch = require('snekfetch');
const moment = require("moment");
const express = require("express");
const app = express();

app.get("/", (request, response) => {
  console.log("Summoned");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 6000);
// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.status(200).send("OK");
});
//when its ready log it
client.on("ready", ()=>console.log("READY"));
//define welcome "package"
const welcome = require("./welcome");
welcome(client);
//start the bot
client.login(config.TOKEN);

//NOTE:
/*
THis is the config.json File

"TOKEN"           ... is your Bot token
"CHANNEL_WELCOME" ... is the Channel ID of your welcome channel
"ROLES_WELCOME"   ... are all of the Role IDs you wanna add to the user when he joins the server, it must be an array and can be unlimited!

{
  "TOKEN":  "",
  "CHANNEL_WELCOME": "",
  "ROLES_WELCOME": ["",""]
}

*/