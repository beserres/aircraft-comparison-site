class AircraftRangeMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        const container = document.createElement('div');
        container.style.width = '100%';
        container.style.height = '800px';
        container.style.position = 'relative';

        const iframe = document.createElement('iframe');
        iframe.src = 'https://spectacular-kashata-e31c28.netlify.app';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        iframe.style.border = 'none';
        iframe.style.position = 'absolute';
        iframe.style.top = '0';
        iframe.style.left = '0';
        
        container.appendChild(iframe);
        this.shadowRoot.appendChild(container);
    }
}

customElements.define('aircraft-range-map', AircraftRangeMap); 