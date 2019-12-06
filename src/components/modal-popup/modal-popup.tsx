import { Component, h, Host, Listen, State, Watch } from '@stencil/core';

@Component({
  tag: 'modal-popup',
  styleUrl: 'modal-popup.scss',
  shadow: true
})
export class ModalPopup {
  @State() isOpen = false;
  @State() ariaHidden = 'true';

  @Listen('openModal', { target: 'document' })
  openModalWindow() {
    this.isOpen = true;
  }

  private closeModal() {
    this.isOpen = false;
  }

  @Watch('isOpen')
  updateAria() {
    this.ariaHidden = this.isOpen ? 'false' : 'true';
  }

  render() {
    return (
      <Host aria-labelledby="modal-title" aria-hidden={this.ariaHidden} role="dialog">
        <button class="modal-scrim" onClick={() => this.closeModal()}>Close Modal</button>
        <section class="modal">
          <header class="modal__header">
            <h2 class="modal__title" id="modal-title">
              Ahoy, matey!
            </h2>
            <button class="modal__header-close" onClick={() => this.closeModal()}>Close Modal</button>
          </header>
          <div class="modal__content">
            <p>Shiver me timbers! Ye best batten down the hatches or walk the plank!</p>
          </div>
          <footer class="modal__footer">
            <button class="modal__footer-close" onClick={() => this.closeModal()}>Aye, aye</button>
          </footer>
        </section>
      </Host>
    );
  }
}
