module.exports = {
  type: "interaction",
  prototype: 'slash',
  name: "delete-money",
  code: `
  $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$slashOption[member]];$slashOption[money]];$slashOption[member]]
  $interactionReply[;{newEmbed:
  {author:$userTag:$userAvatar}
  {title:Deleted}
  {description:> **✅ | Deleted $slashOption[Money] to <@!$slashOption[member]>}
  {color:$getVar[EmbedColor]}
  {footer:Owner only commands}
  {timestamp}
  ;;;all;true]
  $onlyForIDs[$clientOwnerIDs;**❌ | You have not authorized to run this command.**]
  `
