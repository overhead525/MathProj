export class MathProcessor {
  public listAvailableCommands(): void {
    for (const member in this) {
      console.log(member.toString());
    }
  }
}
