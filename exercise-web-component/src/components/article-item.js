class ArticleItem extends HTMLElement {
  constructor() {
    super();
  }
  set article(article) {
    console.log(article);
    this._article = article;
    this.render();
  }
  render() {
    this.innerHTML = `
        <img class="featured-image" src="${this._article.featuredImage}" alt="${this._article.title}">
        <div class="article-info">
            <h2><a href="${this._article.id}">${this._article.title}</a></h2>
            <p>${this._article.description}</p>
        </div>
    `;
  }
  connectedCallback() {}
  disconnectedCallback() {}
  attributeChangedCallabck() {}
  static get observedAttributes() {
    return [""];
  }
}

customElements.define("article-item", ArticleItem);
