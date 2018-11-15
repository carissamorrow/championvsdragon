import Dragon from "../models/Dragon.js";
import Champion from "../models/champion.js";

// @ts-ignore
let _dragonAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/dragons'
})

// @ts-ignore
let _championAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/champions'
})

// @ts-ignore
let _gameAPI = axios.create({
  baseURL: 'https://dragon-duel.herokuapp.com/api/games'
})


let _dragons = []
let _champions = []
let Games = []
let gameId = []


export default class cdService {
  constructor() {
    console.log("cd service")
  }

  getDragons(draw) {
    _dragonAPI.get('')
      .then(res => {
        console.log(res.data)
        let dragonArr = []
        res.data.forEach(dragonData => {
          dragonArr.push(new Dragon(dragonData))
        })
        _dragons = dragonArr
        draw(dragonArr)
      })

  }
  getChampions(draw) {
    _championAPI.get('')
      .then(res => {
        let championArr = []
        res.data.forEach(championData => {
          championArr.push(new Champion(championData))
        })
        _champions = championArr
        console.log(championArr)
        draw(championArr)
      })
  }

  setDragon(id) {
    Games.dragonId = id;
  }
  setChampion(id) {
    Games.championId = id;
  }
  Games() {
    if (
      Games.hasOwnProperty("dragonId") &&
      Games.hasOwnProperty("championId")
    ) {
      _championAPI.post("game", Games).then(res => {
        gameId = res.data.game_id;
      })
      _dragonAPI.post("game", Games).then(res => {
        gameId = res.data._id;
      })
    }
  }
}
