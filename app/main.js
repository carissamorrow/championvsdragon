import cdController from "./components/cd-controller.js";

class App {
  constructor() {
    this.controllers = {
      cdController: new cdController()
    }
  }
}

// @ts-ignore
window.app = new App();