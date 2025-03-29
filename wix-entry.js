class AircraftMap extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async connectedCallback() {
        // Create container
        const container = document.createElement('div');
        container.id = 'root';
        container.style.width = '100%';
        container.style.height = '800px';
        this.shadowRoot.appendChild(container);

        // Load React
        await this.loadScript('https://static.parastorage.com/unpkg/react@18/umd/react.production.min.js');
        await this.loadScript('https://static.parastorage.com/unpkg/react-dom@18/umd/react-dom.production.min.js');

        // Load app styles
        const styles = document.createElement('link');
        styles.rel = 'stylesheet';
        styles.href = 'https://spectacular-kashata-e31c28.netlify.app/assets/index-hC-eA4BU.css';
        this.shadowRoot.appendChild(styles);

        // Load app script
        await this.loadScript('https://spectacular-kashata-e31c28.netlify.app/assets/index-B6UD_p1N.js');
    }

    loadScript(src) {
        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.onload = resolve;
            script.onerror = reject;
            this.shadowRoot.appendChild(script);
        });
    }
}

customElements.define('aircraft-map', AircraftMap); 