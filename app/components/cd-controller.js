import cdService from "./cd-service.js"

let _cd = new cdService()

export default class cdController {
  constructor() {
    console.log("cd controller")
  }
}