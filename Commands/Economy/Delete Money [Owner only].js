module.exports = {
  type: "interaction",
  prototype: 'slash',
  name: "delete-money",
  code: `
  $setGlobalUserVar[Money;$sub[$getGlobalUserVar[Money;$authorID];$slashOption[money]];$authorID]
  $interactionReply[;{newEmbed:
  {author:$userTag:$userAvatar}
  {title:Deleted}
  {description:}
  {color:$getVar[EmbedColor]}
  {footer:Owner only commands}
  {timestamp}
  ;;;all;true]
  $onlyForIDs[$clientOwnerIDs;]
  `
