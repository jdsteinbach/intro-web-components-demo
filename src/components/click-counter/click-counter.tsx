import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'click-counter',
  styleUrl: 'click-counter.scss',
  shadow: true
})
export class ClickCounter {
  @State() count = 0;

  private incrementCount() {
    this.count++;
  }

  private clearCount() {
    this.count = 0;
  }

  private randomCount() {
    this.count = Math.round(Math.random() * 100);
  }

  render() {
    return (
      <div>
        <p>Count: <b>{this.count}</b></p>
        <button type="button" onClick={() => this.incrementCount()}>Plus 1</button>
        <button type="button" onClick={() => this.clearCount()}>Clear</button>
        <button type="button" onClick={() => this.randomCount()}>Random</button>
      </div>
    );
  }
}
