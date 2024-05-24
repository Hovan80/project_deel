const template = document.createElement("template");
template.innerHTML = `
<style>
    img[aria-label="account-image"]{
        position: absolute;
        top: 5px;
        left: 5px;
        border-radius: 5px;
        width: 30px;
        height: 30px;
        object-fit: cover;
        z-index: 1;
    }
    img[aria-label="content"]{
        height: 100%;
        object-fit: cover;
    }
    #shorts-wrapper{
        border-radius: 5px;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 120px;
        height: 180px;
        overflow: hidden;
    }

</style>
<h1>Hello</h1>
<div id="shorts-wrapper">
    <img aria-label="account-image">
    <img aria-label="content">
</div>
`;

class Shorts extends HTMLElement {
  constructor() {
    super();

    const css = new CSSStyleSheet();
    css.replaceSync("import url(/src/scss/global.scss)");
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(template.content.cloneNode(true));

    const accountImg = shadow.querySelector('[aria-label="account-image"]');
    const content = shadow.querySelector('[aria-label="content"]');

    if (this.hasAttribute("user-img")) {
      accountImg.setAttribute("src", this.getAttribute("user-img"));
    } else {
      accountImg.setAttribute("src", "/public/default_user.png");
    }

    if (this.hasAttribute("content")) {
      content.setAttribute("src", this.getAttribute("content"));
    } else {
      content.setAttribute("src", "/public/default_content.png");
    }
  }
}

customElements.define("c-shorts", Shorts);
