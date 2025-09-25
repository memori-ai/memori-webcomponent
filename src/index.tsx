import ReactDOM from 'react-dom';
import type { Integration } from '@memori.ai/memori-api-client/dist/types';
import Memori from '@memori.ai/memori-react';

const parseJSONsafe = <T = { [key: string]: any },>(json: string): T | null => {
  try {
    return JSON.parse(json) as T;
  } catch (e) {
    return null;
  }
};

class MemoriWebComponent extends HTMLElement {
  connectedCallback() {
    const wrapper = document.createElement('div');

    const mountPoint = document.createElement('div');
    mountPoint.setAttribute('id', 'memori-root');

    wrapper.appendChild(mountPoint);

    this.appendChild(wrapper);

    const props = Object.keys(
      Memori.propTypes as { [key: string]: any }
    ).reduce<{ [key: string]: any }>((acc, key) => {
      if (this.hasAttribute(key)) {
        acc[key] = this.getAttribute(key);

        if (acc[key] === 'true' || acc[key] === 'false') {
          acc[key] = acc[key] === 'true';
        }
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
    const integration = this.getAttribute('integration');
    const parsedIntegration = integration
      ? parseJSONsafe<Integration>(integration) || undefined
      : undefined;

    let apiURL = this.getAttribute('apiURL') || undefined;
    if (apiURL && new URL(apiURL).hostname === 'backend.memori.ai') {
      apiURL = 'https://backend-proxy.aisuru.com';
    }

    if (tenantID) {
      ReactDOM.render(
        <Memori
          {...props}
          apiURL={apiURL}
          context={parsedContext}
          tenantID={tenantID}
          additionalInfo={additionalInfo}
          integration={parsedIntegration}
          __WEBCOMPONENT__={true}
        />,
        mountPoint
      );
    } else {
      console.error('No tenantId attribute found');
    }
  }
}

customElements.define('memori-client', MemoriWebComponent);
