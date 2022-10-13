import Gl from "./gl/gl";

class App {
  constructor() {
    this.init();
  }

  init() {
    this.gl = new Gl();
  }
}

new App();
