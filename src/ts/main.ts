import { Constellation } from "./constellation";
import { inputController } from "./inputController";

class Game {
  public count: number = Math.floor(Math.random() * 100);
  private canvas = <HTMLCanvasElement>document.getElementById("game");
  public noScroll(): void {
    window.scrollTo(0, 0);
  }

  public render(): void {
    const constellation = new Constellation(this.canvas);
    constellation.drawStars(this.count);
    const controller = new inputController(this.count);
    console.log(`You can see ${controller.count} stars here`);

    window.addEventListener("scroll", this.noScroll);
    document.addEventListener("keydown", controller.keyboardInput);
  }
}

new Game().render();
