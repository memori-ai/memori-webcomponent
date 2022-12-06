import React from 'react';
import * as ReactDOM from 'react-dom/client';

import Memori from '@memori.ai/memori-react';

class MemoriWebComponent extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement('div');
    this.attachShadow({ mode: 'open' }).appendChild(mountPoint);

    const props = Object.keys(
      Memori.propTypes as { [key: string]: any }
    ).reduce<{ [key: string]: any }>((acc, key) => {
      if (this.hasAttribute(key)) {
        acc[key] = this.getAttribute(key);
      }
      return acc;
    }, {});
    const tenantID = this.getAttribute('tenantId');

    if (tenantID) {
      const root = ReactDOM.createRoot(mountPoint);
      root.render(<Memori {...props} tenantID={tenantID} />);
    } else {
      console.error('No tenantId attribute found');
    }
  }
}

customElements.define('memori', MemoriWebComponent);
