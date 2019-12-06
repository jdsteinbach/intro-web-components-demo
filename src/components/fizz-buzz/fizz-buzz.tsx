import { Component, h, State, Watch } from '@stencil/core';

@Component({
  tag: 'fizz-buzz',
  styleUrl: 'fizz-buzz.scss',
  shadow: true
})
export class FizzBuzz {
  @State() count = 0;
  @State() fizzBuzzClass = {
    fizzbuzz: true,
    fizz: false,
    buzz: false
  };

  private incrementCount() {
    this.count++;
  }

  private clearCount() {
    this.count = 0;
  }

  private randomCount() {
    this.count = Math.round(Math.random() * 100);
  }

  @Watch('count')
  updateFizzBuzz() {
    let isFizz = false;
    let isBuzz = false;

    if (this.count > 0) {
      isFizz = (this.count % 3 === 0);
      isBuzz = (this.count % 5 === 0);
    }

    this.fizzBuzzClass = {
      fizzbuzz: true,
      fizz: isFizz,
      buzz: isBuzz
    };
  }

  render() {
    return (
      <div>
        <div class={this.fizzBuzzClass}>
          <p class="fizzbuzz__count">Count: <b>{this.count}</b></p>
        </div>
        <button type="button" onClick={() => this.incrementCount()}>Plus 1</button>
        <button type="button" onClick={() => this.clearCount()}>Clear</button>
        <button type="button" onClick={() => this.randomCount()}>Random</button>
      </div>
    );
  }
}
