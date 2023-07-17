import ReactDOM from 'react-dom';
import Memori from '@memori.ai/memori-react';

const parseJSONsafe = (json: string): { [key: string]: any } | null => {
  try {
    return JSON.parse(json);
  } catch (e) {
    return null;
  }
};

class MemoriWebComponent extends HTMLElement {
  connectedCallback() {
    const wrapper = document.createElement('div');

    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('id', 'memori-root');

    // const styles = document.createElement('style');
    // styles.innerHTML = `
    //   @import url('https://unpkg.com/@memori.ai/memori-react@1.0.0-rc.4/dist/styles.css');
    // `;

    // wrapper.appendChild(styles);
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
    const additionalInfo =
      parseJSONsafe(this.getAttribute('additionalInfo') || '{}') || {};

    if (tenantID) {
      ReactDOM.render(
        <Memori
          {...props}
          context={parsedContext}
          tenantID={tenantID}
          additionalInfo={additionalInfo}
        />,
        mountPoint
      );
    } else {
      console.error('No tenantId attribute found');
    }
  }
}

customElements.define('memori-client', MemoriWebComponent);
