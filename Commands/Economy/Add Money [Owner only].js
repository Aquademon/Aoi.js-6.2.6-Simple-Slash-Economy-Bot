module.exports = {
  type: "interaction",
  prototype: 'slash',
  name: "add-money",
  code: `
  $setGlobalUserVar[Money;$sum[$getGlobalUserVar[Money;$authorID];$slashOption[money]];$authorID]
  $interactionReply[;{newEmbed:
  {author:$userTag:$userAvatar}
  {title:Added}
  {description:> **✅ | Added $slashOption[money] to <@!$slashOption[member]>!**}
  {color:$getVar[EmbedColor]}
  {footer:Owner only commands}
  {timestamp}
  };;;all;true]
  $onlyForIDs[$clientOwnerIDs;❌ | **You are not authorized to run this command**]
  `
}
