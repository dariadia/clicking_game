export class inputController {
  public count: number;
  constructor(count: number) {
    this.count = count;
  }
  public keyboardInput(event: KeyboardEvent) {
    event.keyCode == 37 ||
    event.keyCode == 38 ||
    event.keyCode == 39 ||
    event.keyCode == 40
      ? console.log("Are you feeling relaxed yet?")
      : console.log("No such command");
  }
}
