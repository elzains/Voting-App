class Content extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="container">
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdjDgDmCU9bYoAOx1xIJ__zqLfNuUGO6dtQ4gZDQ-rKlCbtNg/viewform" style="height:100vh;width:100%" frameborder="0" marginheight="0" marginwidth="0">Memuat…</iframe>
      </div>
    `;
  }
}

customElements.define("content-wrap", Content);
