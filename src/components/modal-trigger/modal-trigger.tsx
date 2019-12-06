import { Component, Event, EventEmitter, h } from '@stencil/core';


@Component({
  tag: 'modal-trigger',
  styleUrl: 'modal-trigger.scss',
  shadow: true
})
export class ModalTrigger {
  @Event() openModal!: EventEmitter;

  private triggerClick(e) {
    console.log('this.openModal.emit()');
    this.openModal.emit(e);
  }

  render() {
    return <button onClick={(e) => this.triggerClick(e)}>Ahoy!</button>;
  }
}
