import Dragon from "../models/dragon.js";
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
let newGames = {}
let gameId = ""


export default class cdService {

  getChampionById(id, drawCallback) {
    let targetChampion = _champions.find(person => person.id == id)
    //add an id to html so I can document.getelembyid on controller
    //need element on DOM to hold template
    //need to make draw function to create above template
  }
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
    newGames.dragonId = id;
  }
  setChampion(id) {
    newGames.championId = id;
  }
  Games() {
    if (
      newGames.hasOwnProperty("dragonId") &&
      newGames.hasOwnProperty("championId")
    ) {
      _championAPI.post("game", newGames).then(res => {
        gameId = res.data.game_id;
      })
      _dragonAPI.post("game", newGames).then(res => {
        gameId = res.data._id;
      })
    }
  }
}
