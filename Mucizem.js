const Lavan = require("../../bot")
const config = require("../../config")
const Language = require('../../language');
const Lang = Language.getString('system_stats');
module.exports.run = async (bot, message, args) => {
    var randomstring = arr => arr[Math.floor(Math.random() * arr.length)];
    MUCIZEM = randomstring([
        "✨Sen benim mucizemsin✨",
        "Bu evrende senin gibi mucize görmedim evrenin ışığı gibisin 🥺❤️",
        "Senin gülüşün evrendeki en büyük ışıktır🥺❤️",
        "✨ Hayalim senle yaşamak senle ölmek iyiki varsın ya ay yüzlüm🥹🫶",
        "Öyle güzelsinki evrendeki mucize sen olduğunu düşüyorum💓  ",
        "Evrenin güneşi burda diğelerine gerek varmı?  ",
        "✨benim huzurumsun✨",

    ])
    await message.chat.sendMessage(MUCIZEM)

     
    }

module.exports.config = {
    command: "mucizem",
    description: `Sen benim mucizemsin`
}

// Bu plugin Lavanstax için yazılmıştır..!
