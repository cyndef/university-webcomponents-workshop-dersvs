import { LitElement, css, html } from 'lit';
alert('hi');
/* INSERT STEP D1.1A */

/**
 * `u-footer`
 * a footer including required footer links
 *
 * @customElement
 * @lit-html
 * @lit-element
 * @element u-footer
 */
class UFooter extends LitElement {
  /**
   * Store the tag name to make it easier to obtain
   * directly.
   */
  static get tag() {
    return 'u-footer';
  }
  /**
   * array of CSS styles to be attached to shadowDOM
   */
  static get styles() {
    return [
      css`
   
/**
 * styles the web component itself
 * (can be overridden by light DOM u-footer {} selector)
 */
:host {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  container-name: host;
}
/**
 * hides anything in shadow DOM with hidden attribute
 */
[hidden] {
    display: none!important;
}
/**
 * styles link color when u-footer has inverted attribute
 */
:host([invert]),
:host([invert]) a {
  color: white;
}
ul {
  margin: 40px auto 20px;
  list-style-type: none;
  position: relative;
  padding: 0;
}
li {
  display: block;
}
/**
 * styles u-mark component in u-footer's shadow DOM
 */
u-mark {
  width: 100px;
  flex: 0 0 auto;
}
@media (min-width:800px) {
  :host { 
    flex-wrap: nowrap;
  }
  u-mark {
    width: 120px;
    flex: 0 0 auto;
  }
  ul {
    text-align: center;
  }
  li {
    display: inline-block;
    line-height: 1.25;
    padding: 0 1em;
    margin-bottom: 1em;
    border-left: 1px solid #888;
  }
  li:first-child {
    border-left: none;
  }
}
 `,
    ];
  }
  static get properties() {
    return {
      /* INSERT STEP D1.1B */
    };
  }

  render() {
    return html`
    	<!-- INSERT STEP D1.2 -->
      <ul>
        <li><a href="#privacy-statement">Privacy</a></li>
        <li><a href="#ad85">Non-Discrimination</a></li><li><a href="#privacy-statement">Privacy</a></li><li><a href="#hr11>Equal Opportunity</a></li><li><a href="#accessibility-statement">Accessibility</a></li>
        <li><a href="#copyright-information">Copyright</a></li>
      </ul>
      <!-- INSERT STEP B1.10 -->
  `;
  }

  /**
   * Called when element is created / loaded in DOM.
   * Useful for setting initial property values.
   */
  constructor() {
    //make sure anything it extended from LitEelement runs
    super();
    alert('hi');
  }
}

window.customElements.define(UFooter.tag, UFooter);
export { UFooter };
