import { html, css, LitElement, property } from 'lit-element';

export class AtaButton extends LitElement {
  static styles = css`
    :host {}
  `;

  @property({ type: String }) title = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <button @click=${this.__increment}>${this.counter}</button>
    `;
  }
}
