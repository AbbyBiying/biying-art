export class art {
  constructor(public name: string, public state = 'inactive') { }

  animateMe() {
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }
}