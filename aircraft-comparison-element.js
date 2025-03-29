class AircraftComparisonElement extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        // Create container
        const container = document.createElement('div');
        container.id = 'root';
        container.style.width = '100%';
        container.style.height = '600px';
        this.shadowRoot.appendChild(container);

        // Load React and ReactDOM
        Promise.all([
            this.loadScript('https://unpkg.com/react@18/umd/react.production.min.js'),
            this.loadScript('https://unpkg.com/react-dom@18/umd/react-dom.production.min.js')
        ]).then(() => {
            // Load app script
            this.loadScript('https://spectacular-kashata-e31c28.netlify.app/assets/index-C5EwuUyb.js');
            
            // Load app styles
            const styles = document.createElement('link');
            styles.rel = 'stylesheet';
            styles.href = 'https://spectacular-kashata-e31c28.netlify.app/assets/index-BQqlwajr.css';
            this.shadowRoot.appendChild(styles);
        });
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

customElements.define('aircraft-comparison', AircraftComparisonElement); 