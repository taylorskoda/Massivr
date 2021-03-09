const discord = require("discord.js");

const config = require("./config.json");
const utils = require("./utils/util.js");

const client = new discord.Client();
const util = new utils.Utils(client, process.cwd())
module.exports = { client, config };

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

util.loadModules("events");
util.loadModules("commands", true)

client.login("ODE1NzQ3MzM5OTg1NjE2OTA3.YEc0wQ.3MfLZLQHnM66i2AZmyDQ2U1bCR0");
