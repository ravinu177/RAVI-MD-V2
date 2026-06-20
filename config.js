const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ADEEL-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0xLQVdSY3FMYysyVDJOUFdSZDFFY0Jmcy9jVnNOaGpnOVlGeHAwUVZVcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiejV6MmJjckYxc0MydDNSaDBVR0FSYTh1MzlhelhFRlZ4UFVFOExDL3QwQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyUHVmVDgvTjM3YTloQ3BlSUdSdzJtRVJnd2JZdVl5Um1hWG0rSys5SWtFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTcitFY1c4cnJtbW9ybU1ZT045a3BrSTFxVjRvVEI4VTVIVUJDRVJTYnhzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFZ3IyMERJMEZZWTA0S2o3VjlDajRPeHMzU2tzRERSZzVMQm5CNmN1RUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InQ0YXRSM0k1Q0tLN01FNUtoUFJoUDNPWW5HcCtCcGtYQUhVeXd1MHpUQlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUl1SklqWWd0NXNzOUJxN2VlWGk3UTcyTWVPYkhydHY0V2JJU0hSYmVtRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWgxQjFabE9YdUM5UUp0bFN3MFhBMGhCZDZ3QS9UeEFuZXZQMWVoY2dtOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlhwNUxUdFhrT0xOdm9kcVllT2VwRmFvanNLQUxGTmhsMlhpOEFBRE51OUxraENaY2pIblRkSHQ0dENSWTVGQTV5UEY3aU1LeTBoK1RiRlVkUm81ZkFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI1LCJhZHZTZWNyZXRLZXkiOiJoRGppeEoweEF1ajFQYktWOTY2anlncWtRUDc0ZXpQaDYrWGdMOXgrRjE0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BYaHVOQUVFSWJZMTlFR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Im1pT3d0Z2U3NE5KRjJTbDZEd3ZQWC81TWNDTEwxNUh0bFdqRzdYc1Nabnc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlEwNFJvUkp6aTQ0ZFlCdUVNM0xIV1hMeG5GbW0rNExqVWNhMDNJRDNxdzR1VUpNY0srdlNSMEhiTjBScG45QysrZHNQMlp3ZE5tK2J6TkxPckwxWUJBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJkMXQ0L296b2JobXF6dEdHdlVkemlCMXRVclZUYjB4Qno5UjRLLy80VEJlQXYvdGdxMUU3dml3MmpNcXVKWHNscGVrVzFiM1UybmxUQ2JmamFwWWxEZz09In0sIm1lIjp7ImlkIjoiOTQ3NjgyMjM3MTg6OTRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiV01STF9TSEFOIiwibGlkIjoiMTMxMDA5ODA2ODgwOTg0Ojk0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxMzEwMDk4MDY4ODA5ODQ6OTRAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlpvanNMWUh1K0RTUmRrcGVnOEx6MS8rVEhBaXk5ZVI3WlZveHUxN0VtWjgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlCUWdDIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc4MTkxODczMSwibGFzdFByb3BIYXNoIjoiNElwM2hxIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIemwifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "false",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY RAVI-MD 🇵🇰*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "false",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "false",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true or false for auto voice reply
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://i.postimg.cc/3wqsBm2d/Whats-App-Image-2026-06-17-at-5-51-24-PM.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "RAVI-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "RAVI-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "94768223718",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "RAVI-MD",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴀᴅᴇᴇʟ-ᴍᴅ*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.postimg.cc/3wqsBm2d/Whats-App-Image-2026-06-17-at-5-51-24-PM.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> I'm alive*RAVI-MD*🇵🇰",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "94768223718",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false",
// make it true for auto recoding 
ANTI_CALL: process.env.ANTI_CALL || "false"
// make it true for auto call reject 
};
