module.exports = {
  type: "interaction",
  prototype: 'slash',
  name: "balance",
  code: `
  $interactionReply[;{newEmbed:
  {author:$userTag:$userAvatar}
  {title:Balance}
  {description:> **💵 | You have \`$getGlobalUserVar[Money;$authorID]\` coins**}
  {color:$getVar[EmbedColor]}
  {footer:Requested by $userTag}
  {timestamp}
  };;;all;false]
  `
}
