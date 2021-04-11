import { html, css, LitElement, property } from 'lit-element';

export class AtaButton extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--ata-button-text-color, #000);
    }
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }
}
