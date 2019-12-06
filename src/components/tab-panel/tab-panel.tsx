import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'tab-panel',
  styleUrl: 'tab-panel.scss',
  shadow: true
})
export class TabPanel {
  @Element() el: HTMLElement;

  private querySelectorAll(sel) {
    return this.el.shadowRoot.querySelectorAll<HTMLElement>(sel);
  }

  componentDidLoad() {
    const tabs = this.querySelectorAll('.tab');
    const panels = this.querySelectorAll('.panel');
    const firstTab = tabs[0];

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => {
          if (t === tab) {
            t.setAttribute('aria-selected', 'true');
          } else {
            t.setAttribute('aria-selected', 'false');
          }
        });

        panels.forEach(p => {
          if (p.id.replace('-panel', '') === tab.id.replace('-tab', '')) {
            p.setAttribute('aria-hidden', 'false');
          } else {
            p.setAttribute('aria-hidden', 'true');
          }
        });
      });

      firstTab.click();
    });
  }

  render() {
    return (
      <Host>
        <ul class="tabs" role="tablist">
          <li class="tab" id="props-tab" role="tab" tabindex="0" aria-controls="props-panel">Props</li>
          <li class="tab" id="state-tab" role="tab" tabindex="0" aria-controls="state-panel">State</li>
          <li class="tab" id="watch-tab" role="tab" tabindex="0" aria-controls="watch-panel">Watch</li>
          <li class="tab" id="events-tab" role="tab" tabindex="0" aria-controls="events-panel">Events</li>
        </ul>

        <div class="panels">
          <div class="panel" id="props-panel" role="tabpanel" aria-labelledby="props-tab">
            <h3 class="panel__title">Props</h3>
            <div class="panel__contents">
              <name-tag
                name="Lin"
                style={{
                  '--name-tag-bg':'blue', '--name-tag-marker-color': '#82ae31'
                }}
              ></name-tag>
            </div>
          </div>

          <div class="panel" id="state-panel" role="tabpanel" aria-labelledby="state-tab">
            <h3 class="panel__title">State</h3>
            <div class="panel__contents">
              <click-counter></click-counter>
            </div>
          </div>

          <div class="panel" id="watch-panel" role="tabpanel" aria-labelledby="watch-tab">
            <h3 class="panel__title">Watch</h3>
            <div class="panel__contents">
              <fizz-buzz></fizz-buzz>
            </div>
          </div>

          <div class="panel" id="events-panel" role="tabpanel" aria-labelledby="events-tab">
            <h3 class="panel__title">Events</h3>
            <div class="panel__contents">
              <modal-trigger></modal-trigger>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
