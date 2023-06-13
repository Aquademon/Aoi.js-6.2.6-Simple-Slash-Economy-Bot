const Token = Config.Bot.Token;
const Config = require("./Config.js");

/* Setting up AoiClient */

const { AoiClient, LoadCommands} = require("aoi.js");

const bot = new AoiClient({
  token: Token,
  prefix: Config.Bot.Prefix,
  intents: ["MessageContent",
    "Guilds",
    "GuildMessages",
    "GuildMembers",
    "GuildBans",
    "GuildEmojisAndStickers",
    "GuildIntegrations",
    "GuildWebhooks",
    "GuildInvites",
    "GuildVoiceStates",
    "GuildPresences",
    "GuildMessageReactions",
    "GuildMessageTyping",
    "DirectMessages",
    "DirectMessageReactions",
    "DirectMessageTyping"],
    events: ["onInteractionCreate",
    "onReactionAdd",
    "onReactionRemove",
    "onLeave",
    "onMessage",
    "onJoin",
    "onGuildJoin",
    "onGuildLeave",
    "onBanAdd",
    "onChannelDelete",
    "onChannelUpdate",
    "onChannelCreate",
    "onVoiceStateUpdate",
    "onRoleUpdate",
    "onMemberUpdate",
    "onRoleDelete",
    "onRoleCreate",
    "onBanRemove",
    "onPresenceUpdate",
    "onUserUpdate",
    "onGuildUpdate",
    "onEmojiCreate",
    "onEmojiUpdate",
    "onEmojiDelete",
    "onReactionRemoveAll",
    "onReactionRemoveEmoji",
    "onWebhookUpdate",
    "onChannelPinsUpdate",
    "onVariableCreate",
    "onVariableUpdate",
    "onVariableDelete",
    "onStickerCreate",
    "onStickerUpdate",
    "onStickerDelete",
    "onThreadCreate",
    "onThreadUpdate",
    "onThreadDelete",
    "onThreadListSync"],
    database: {
    type: "aoi.db",
    db: require("aoi.db"),
    tables: ["Table_1"],
    path: "./Database/"
  }, 
    mobilePlatform: Config.Status.MobilePlatform
});

/* Setting up Express */

const AquaDemon = require("express")
();AquaDemon.get
('/', (req, res) => {res.send("AquaDemon Development");});
AquaDemon.listen(8080);

/* Command loader */

const loader = new LoadCommands(bot);
loader.load(bot.cmd, "./Commands");



loader.setColors({
  walking: ["blink", "dim", "fgWhite"],
  failedWalking: {
    name: ["bright", "fgYellow", "underline"],
 
    text: ["bright", "fgRed"]
  },
  typeError: {
    command: ["bright", "fgYellow"],
    type: ["fgYellow"],
    text: ["bright", "fgRed"]
  },
  failLoad: {
    command: ["bright", "fgMagenta"],
    type: ["fgRed"],
    text: ["bright", "fgRed"],
  },
  loaded: {
    command: ["bright", "fgCyan"],
    type: ["bright", "fgBlue"],
    text: ["bright", "fgGreen"]
  },
 
});

/* Custom status */

bot.status({
  text: Config.Status.Text,
  type: Config.Status.Type,
  status: Config.Status.Status,
  time: Config.Status.Time
});

/* A few things needed */

const { Util } = require('aoi.js');
const { parse, createAst, parseChatInputOptions } = require('aoi.parser');
const {
    parseFiles,
    parseExtraOptions
} = require('aoi.parser/components');
 
Util.parsers.ErrorHandler = parse;
   
Util.parsers.FileParser = (data) => {
    return createAst(data).children.map(parseFiles);
}
 
Util.parsers.OptionsParser = (data) => {
    return createAst(data).children.map(parseExtraOptions);
}

/* Variable handler */

bot.variables(require("./Variables.js"))

