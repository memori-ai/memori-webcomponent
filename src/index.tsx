import React from 'react';
import ReactDOM from 'react-dom';

import Memori from '@memori.ai/memori-react';

class MemoriWebComponent extends HTMLElement {
  connectedCallback() {
    const wrapper = document.createElement('div');

    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('id', 'memori-root');

    const styles = document.createElement('style');
    styles.innerHTML = `
      @import url('https://unpkg.com/@memori.ai/memori-webcomponent/dist/memori-webcomponent.css');
    `;

    wrapper.appendChild(styles);
    wrapper.appendChild(mountPoint);

    // this.attachShadow({ mode: 'open' }).appendChild(wrapper);
    this.appendChild(wrapper);

    const props = Object.keys(
      Memori.propTypes as { [key: string]: any }
    ).reduce<{ [key: string]: any }>((acc, key) => {
      if (this.hasAttribute(key)) {
        acc[key] = this.getAttribute(key);
      }
      return acc;
    }, {});
    const tenantID = this.getAttribute('tenantId');
    const context = this.getAttribute('context');
    const parsedContext = context?.split(',')?.reduce((acc, cur) => {
      const [key, value] = cur.split(':').map(t => t.trim());
      return { ...acc, [key]: value };
    }, {});

    if (tenantID) {
      ReactDOM.render(
        <Memori {...props} context={parsedContext} tenantID={tenantID} />,
        mountPoint
      );
    } else {
      console.error('No tenantId attribute found');
    }
  }
}

customElements.define('memori-client', MemoriWebComponent);
