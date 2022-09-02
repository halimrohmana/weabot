const fs = require('fs')

exports.menu = (username, limit, hit, role) => {
    return `
┌──⭓ *About Me*
│
│➣ Name ↣ ${username}
│➣ Limit ↣ ${limit}
│➣ Role ↣ ${role}
│
└───────⭓

┌──⭓ *Animeweb Menu*
│
│➣ animeplanet ↣ query
│➣ anoboy ↣ query
│➣ doujindesu ↣ url-query
│➣ kiryuu ↣ query
│➣ kissmanga ↣ query
│➣ klikmanga ↣ query
│➣ komikstation ↣ query
│➣ mangatoon ↣ query
│➣ mynime ↣ url-query
│➣ nekopoi ↣ query
│➣ nhentai ↣ query
│➣ otakudesu ↣ url-query
│➣ sauce ↣ url-quoted
│➣ mal ↣ query
│
└───────⭓

┌──⭓ *Convert Menu*
│
│➣ emoji ↣ query
│➣ emojimix ↣ query
│➣ shorturl ↣ url
│➣ stickerc ↣ url-quoted
│➣ sticker ↣ url-quoted
│➣ stickernobg ↣ url-quoted
│➣ stickerp ↣ quoted
│➣ takesticker ↣ quoted
│➣ toimg ↣ quoted
│➣ tourl ↣ quoted
│➣ tovideo ↣ url-quoted
│➣ whatmusic ↣ url-quoted
│➣ ssweb ↣ url
│
└───────⭓

┌──⭓ *Creator Menu*
│
│➣ attp ↣ query
│➣ botcomment ↣ query
│➣ sadcat ↣ query
│➣ captcha ↣ query
│➣ changemymind ↣ query
│➣ hartatahta ↣ query
│➣ tahtacustom ↣ query
│➣ kannagen ↣ query
│➣ pikachu ↣ query
│➣ nuliskanan ↣ query
│➣ nuliskiri ↣ query
│➣ phcomment ↣ query
│➣ drakememe ↣ query
│➣ poohmeme ↣ query
│➣ smeme ↣ query
│➣ trump ↣ query
│➣ biden ↣ query
│➣ ttp ↣ query
│➣ ttpcustom ↣ query
│➣ maketweet ↣ query
│➣ waifu2x ↣ query
│➣ ytcomment ↣ query
│
└───────⭓

┌──⭓ *Downloader Menu*
│
│➣ cocofun ↣ url
│➣ facebook ↣ url
│➣ gore ↣ -
│➣ hentaivideo ↣ -
│➣ instagram ↣ url
│➣ instastory ↣ url
│➣ joox ↣ query
│➣ mediafire ↣ url
│➣ pinterest ↣ url
│➣ soundcloud ↣ url
│➣ tiktok ↣ url
│➣ tiktokporn ↣ -
│➣ tiktokmp3 ↣ url
│➣ tiktokwm ↣ url
│➣ twitter ↣ url
│➣ xnxx ↣ url
│➣ xvideos ↣ url
│➣ youtube ↣ url
│➣ ytplay ↣ url
│➣ zippyshare ↣ url
│
└───────⭓

┌──⭓ *Entertainment Menu*
│
│➣ asahotak ↣ -
│➣ caklontong ↣ -
│➣ family100 ↣ -
│➣ jagokata ↣ query
│➣ siapakah ↣ -
│➣ simi ↣ - query
│➣ susunkata ↣ -
│➣ tebakbendera ↣ -
│➣ tebakgambar ↣ -
│➣ tebakkabupaten ↣ -
│➣ tebakkalimat ↣ -
│➣ tebakkata ↣ -
│➣ tebaklagu ↣ -
│➣ tebaklagu2 ↣ -
│➣ tebaklirik ↣ -
│➣ tebaktebakan ↣ -
│➣ tekateki ↣ -
│➣ truth ↣ -
│➣ dare ↣ -
│
└───────⭓

┌──⭓ *Information Menu*
│
│➣ blogger ↣ url
│➣ covid ↣ -
│➣ gempa ↣ -
│➣ iplookup ↣ query
│➣ weather ↣ query
│➣ kbbi ↣ query
│➣ mpl ↣ -
│➣ translate ↣ query
│➣ loltranslate ↣ query
│➣ wikia ↣ query
│➣ wikipedia ↣ query
│➣ steam ↣ query
│➣ itunes ↣ query
│
└───────⭓

┌──⭓ *Islami Menu*
│
│➣ audioayat ↣ query
│➣ audiosurah ↣ query
│➣ jadwalsholat ↣ query
│➣ kisahmuslim ↣ -
│➣ kisahnabi ↣ query
│➣ listkota ↣ query
│➣ listsurah ↣ query
│
└───────⭓

┌──⭓ *Main Menu*
│
│➣ help ↣ -
│➣ ping ↣ -
│➣ premiumlist ↣ -
│
└───────⭓

┌──⭓ *More Nsfw Menu*
│
│➣ mnsfwimage ↣ query
│➣ mnsfwmenu ↣ -
│
└───────⭓

┌──⭓ *Nekoslife Menu*
│
│➣ sfwgif ↣ query
│➣ sfwimage ↣ query
│➣ sfwmenu ↣ -
│
└───────⭓

┌──⭓ *News Menu*
│
│➣ antaranews ↣ -
│➣ bbcnews ↣ -
│➣ cnbcnews ↣ -
│➣ dailynews ↣ -
│➣ detiknews ↣ -
│➣ inews ↣ -
│➣ kompasnews ↣ -
│➣ kontanews ↣ -
│➣ koransindo ↣ -
│➣ okezone ↣ -
│➣ temponews ↣ -
│➣ tribunews ↣ -
│
└───────⭓

┌──⭓ *Photo Editor Menu*
│
│➣ blur ↣ image
│➣ brighten ↣ image
│➣ circle ↣ image
│➣ comrade ↣ image
│➣ contrast ↣ image
│➣ gay ↣ image
│➣ glass ↣ image
│➣ greyscale ↣ image
│➣ horny ↣ image
│➣ invert ↣ image
│➣ jail ↣ image
│➣ passed ↣ image
│➣ pixelate ↣ image
│➣ 2x ↣ image
│➣ sepia ↣ image
│➣ triggered ↣ image
│➣ upscale ↣ image
│➣ wasted ↣ image
│➣ pet ↣ image
│➣ wanted ↣ image
│➣ gun ↣ image
│
└───────⭓

┌──⭓ *Primbon Menu*
│
│➣ artimimpi ↣ query
│➣ artinama ↣ query
│➣ shio ↣ query
│➣ zodiak ↣ query
│➣ haribaik ↣ query
│➣ harilarangan ↣ query
│➣ jadian ↣ query
│➣ rejekiweton ↣ query
│➣ nomorhoki ↣ query
│
└───────⭓

┌──⭓ *Random Anime Menu*
│
│➣ randomanime ↣ type
│➣ animecouple ↣ -
│➣ animeme ↣ -
│➣ hololive ↣ -
│➣ animemenu ↣ [menu]
│
└───────⭓

┌──⭓ *Random Asupan Menu*
│
│➣ randomasupan ↣ type
│➣ asupan ↣ -
│➣ asupantiktok ↣ -
│➣ aeunicetjoaa ↣ -
│➣ natajadeh ↣ -
│➣ asupanmenu ↣ [menu]
│
└───────⭓

┌──⭓ *Random Image Menu*
│
│➣ randomimage ↣ type
│➣ minecraft ↣ -
│➣ imagemenu ↣ [menu]
│
└───────⭓

┌──⭓ *Random Text Menu*
│
│➣ animequote ↣ query
│➣ cerpen ↣ -
│➣ cersex ↣ -
│➣ randomtext ↣ type
│➣ textmenu ↣ [menu]
│
└───────⭓

┌──⭓ *Search Menu*
│
│➣ animequotes ↣ query
│➣ bacaresep ↣ query
│➣ dafont ↣ query
│➣ gimage ↣ query
│➣ jadwaltv ↣ query
│➣ liriklagu ↣ query
│➣ pin ↣ query
│➣ pixiv ↣ query
│➣ sfilesearch ↣ query
│➣ stickersearch ↣ query
│➣ styletext ↣ query
│➣ trending ↣ query
│➣ wagroup ↣ query
│➣ wamod ↣ query
│➣ xnxxsearch ↣ query
│➣ xvideosearch ↣ query
│➣ ytsearch ↣ query
│➣ zerochan ↣ query
│
└───────⭓

┌──⭓ *Stalker Menu*
│
│➣ cekapi ↣ query
│➣ stalkig ↣ username
│➣ stalktt ↣ username
│
│➣ nickaov ↣ query
│➣ nickautochess ↣ query
│➣ nickbigolive ↣ query
│➣ nickcocofun ↣ query
│➣ nickcod ↣ query
│➣ nickdomino ↣ query
│➣ nickdragonraja ↣ query
│➣ nicksdriver ↣ query
│➣ nickff ↣ query
│➣ nickhago ↣ query
│➣ nicklokapala ↣ query
│➣ nicknimotv ↣ query
│➣ nickpb ↣ query
│➣ nickpubg ↣ query
│➣ nicksausage ↣ query
│➣ nickzepeto ↣ query
│➣ nickml ↣ query
│➣ nickkmladventure ↣ query
│
└───────⭓

┌──⭓ *Togel Menu*
│
│➣ singapore4d ↣
│➣ cambodia ↣
│➣ hongkong ↣
│➣ laos ↣
│➣ sydney ↣
│➣ taipei ↣
│
└───────⭓

┌──⭓ *Webzone Menu*
│
│➣ amino ↣ query
│➣ drakor ↣ query
│➣ gsmarena ↣ query
│➣ jadwalbioskop ↣ query
│➣ nowplaying ↣ -
│➣ playstore ↣ query
│➣ wattpad ↣ query
│➣ webtoons ↣ query
│
└───────⭓

┌──⭓ *Users Menu*
│
│➣ ceklimit ↣ -
│➣ cekpremium ↣ -
│➣ profile ↣ -
│➣ leaderboard ↣ -
│➣ afk ↣ reason
│➣ del ↣ quoted
│
└───────⭓

┌──⭓ *Group Menu*
│
│➣ leveling <type>
│➣ nsfw <type>
│➣ offline <type>
│
└───────⭓

┌──⭓ *Bot Menu*
│
│➣ nambang ↣ -
│➣ mancing ↣ -
│➣ jual ↣ <type>
│➣ beli ↣ <type>
│
│➣ casino ↣ query
│➣ judi ↣ query
│
│➣ more ↣ query
│➣ bisakah ↣ query
│➣ kapankah ↣ query
│➣ apakah ↣ query
│➣ watak ↣ query
│➣ gantengcek ↣ query
│➣ cantikcek ↣ query
│
└───────⭓

`}

exports.inventory = (username, balance, fish, batu, permata, emas) => {
    return `
┏ [ *YOUR INVENTORY* ]
┃
┣ *NAME* : ${username}
┣ *BALANCE* : ${balance}
┃
┣ [ *HASIL NAMBANG* ]
┃
┣ *BATU 🗿* : ${batu}
┣ *PERMATA 💎* : ${permata}
┣ *EMAS 🪙* : ${emas}
┃
┣ [ *HASIL MANCING* ]
┃
┃ *FISH 🐟* : ${fish}
┗ 

`}
