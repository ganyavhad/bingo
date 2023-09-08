const PlayerModel = require("../model/PlayerModel")

let model = {
    register: async (data) => {
        let player = new PlayerModel(data)
        return await player.save()
    }
}

module.exports = model