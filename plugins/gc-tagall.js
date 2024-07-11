let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝙼𝙴𝙽𝚂𝙰𝙹𝙴:* ${pesan}`
  let teks = `*⺀𝗔𝗡𝗢𝗧𝗘𝗡𝗖𝗘 𝗖𝗥𝗜𝗔𝗧𝗨𝗥𝗔𝗦 𝗗𝗘𝗟 𝗦𝗘𝗡̃𝗢𝗥 𝗬 𝗢𝗩𝗘𝗝𝗔𝗦 𝗗𝗘𝗦𝗖𝗔𝗥𝗥𝗜𝗔𝗗𝗔𝗦 𝗢 𝗦𝗜𝗡𝗢 𝗖𝗨𝗣𝗢⺀*\n\n🪐 ${oi}\n\n🪐 *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
  for (let mem of participants) {
  teks += `🐺 @${mem.id.split('@')[0]}\n`}
  teks += `└𝐓𝐄𝐀𝐌 𝐓𝐇𝐄 𝐀𝐋𝐏𝐇𝐀`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler