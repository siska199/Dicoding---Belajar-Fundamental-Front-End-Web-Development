class ImageFigure extends HTMLElement {
  constructor() {
    super();
    console.log("constructed");
  }

  connectedCallback() {
    this.src = this.getAttribute("src") || null;
    this.alt = this.getAttribute("alt") || null;
    this.caption = this.getAttribute("caption") || null;
    this.render();
    console.log("connected callback");
  }

  render() {
    this.innerHTML = `
          <figure>
              <img src="${this.src}" alt="${this.alt}"/>
              <figcaption>${this.caption}</figcaption>
          </figure>
      `;
  }

  disconnectedCallback() {
    console.log("disconnected callback");
  }

  adoptedCallback() {
    console.log("adopted callback");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute: ${name} changed!`);
    this[name] = newValue;
    this.render();
  }

  static get observedAttributes() {
    return ["caption"];
  }
}

customElements.define("image-figure", ImageFigure);
