const now = new Date();
const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Asia/Jakarta' };
const formattedDate = now.toLocaleDateString('id-ID', dateOptions);
const formattedTime = now.toLocaleTimeString('id-ID', timeOptions);
const botName= "Lynx-Bot";
const ownerName= "YuuXD";
/**
 *
 * @param { string } prefix
 */
exports.help = (prefix) => {
    return `╭───「 ${botName} 」
│
│  Owner : ${ownerName}
│  Status: Online
│  📆 ${formattedDate}
│  ⏰ ${formattedTime} WIB
│
├──「 Menu 」
│
├ • ${prefix}owner
├ • ${prefix}pinterest
├ • ${prefix}pixiv
├ • ${prefix}nsfwcek
│
├──「 Edukasi 」
│
├ • ${prefix}kbbi
├ • ${prefix}brainly
├ • ${prefix}roboguru
├ • ${prefix}translate
│
├──「 Have Fun 」
│
├ • ${prefix}cekcinta 
├ • ${prefix}cekgay
├ • ${prefix}kapan
├ • ${prefix}bisakah
├ • ${prefix}apakah
├ • ${prefix}nilaijoke
├ • ${prefix}heroml
├ • ${prefix}mlstalk
├ • ${prefix}manga
├ • ${prefix}anime
│
├──「 Downloader 」
│
├ • ${prefix}pinterestdl
├ • ${prefix}pixivdl
├ • ${prefix}spotify
├ • ${prefix}spotifysearch
├ • ${prefix}tiktokmusic
├ • ${prefix}tiktok
├ • ${prefix}ytmp4
├ • ${prefix}ytmp3
├ • ${prefix}ytsearch
├ • ${prefix}ytplay
├ • ${prefix}lirik
├ • ${prefix}lk21
│
├──「 Text Pro Me 」
│
├ • ${prefix}pornhub
├ • ${prefix}glitch
├ • ${prefix}avenger
├ • ${prefix}space
├ • ${prefix}ninjalogo
├ • ${prefix}marvelstudio
├ • ${prefix}lionlogo
├ • ${prefix}wolflogo
├ • ${prefix}steel3d
├ • ${prefix}wallgravity
│
├──「 Ephoto360 」
│
├ • ${prefix}wetglass
├ • ${prefix}multicolor3d
├ • ${prefix}watercolor
├ • ${prefix}luxurygold
├ • ${prefix}galaxywallpaper
├ • ${prefix}lighttext
├ • ${prefix}beautifulflower
├ • ${prefix}puppycute
├ • ${prefix}royaltext
├ • ${prefix}heartshaped
├ • ${prefix}birthdaycake
├ • ${prefix}galaxystyle
├ • ${prefix}hologram3d
├ • ${prefix}greenneon
├ • ${prefix}glossychrome
├ • ${prefix}greenbush
├ • ${prefix}metallogo
├ • ${prefix}noeltext
├ • ${prefix}glittergold
├ • ${prefix}textcake
├ • ${prefix}starsnight
├ • ${prefix}wooden3d
├ • ${prefix}textbyname
├ • ${prefix}writegalacy
├ • ${prefix}galaxybat
├ • ${prefix}snow3d
├ • ${prefix}birthdayday
├ • ${prefix}goldplaybutton
├ • ${prefix}silverplaybutton
├ • ${prefix}freefire
│
├──「 Random Generate 」
│
├ • ${prefix}stickerwa
├ • ${prefix}waifu
├ • ${prefix}ppcp
│
├──「 Other 」
│
├ • ${prefix}ping
├ • ${prefix}request
│
├──「 Coming Soon 」
│
├ • Cmd: ${prefix}ai 
├ • Cmd: ${prefix}img
│
╰───「 ${ownerName} 」`
}
