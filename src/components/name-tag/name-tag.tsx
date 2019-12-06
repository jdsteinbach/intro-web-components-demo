import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'name-tag',
  styleUrl: 'name-tag.scss',
  shadow: true
})
export class NameTag {
  @Prop() name: string;

  render() {
    return (
      <p>
        <span class="hello">Hello</span> my name is <span class="name">{this.name}</span>
      </p>
    );
  }
}
