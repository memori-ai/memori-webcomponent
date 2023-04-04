# Memori WebComponent

WebComponent to integrate a [Memori](https://memori.ai) in a web page or web app.

Platforms:

- [MemoryTwin](https://app.memorytwin.com/en): consumer / creator platform
- [TwinCreator](https://app.twincreator.com/en): developer-oriented platform

Uses [memori-react](https://github.com/memori-ai/memori-react) under the hood.
See [demo](https://memori-ai.github.io/memori-webcomponent/example/).

## Installation from npm

```bash
npm i --save @memori.ai/memori-webcomponent
```

## Embed or usage from CDN (suggested)

```html
<script
  type="module"
  src="https://esm.run/@memori.ai/memori-webcomponent/dist/memori-webcomponent.js"
></script>
<link
  rel="stylesheet"
  href="https://esm.run/@memori.ai/memori-react/dist/styles.css"
/>
```

## Usage

```html
<memori-client
  memoriName="Memori"
  ownerUserName="nunziofiore"
  tenantID="app.memorytwin.com"
  showShare
  apiURL="https://backend.memori.ai"
  baseURL="https://app.memorytwin.com"
  uiLang="it"
/>
```

For more details on attributes, see [memori-react](https://github.com/memori-ai/memori-react) component props.

Special note for `height`: defaults to `100%` and can be set to a fixed value (e.g. `500px`).
For the best experience, it is recommended to set it to '100vh' (full height of the viewport) or '100svh'.

### Initial context

As for [memori-react](https://github.com/memori-ai/memori-react) component, it is possible to pass an initial context to the Memori session.
With this WebComponent that is slightly different, as the context is not passed as a JSON but as a string in the `context` attribute as comma-separated `KEY:VALUE` pairs:

```html
<memori-client ... context="VAR1:VALUE1,VAR2:VALUE2" />
```

## See also

- [memori-api-client](https://github.com/memori-ai/memori-api-client) - API client for Memori
- [memori-react](https://github.com/memori-ai/memori-react) - React library for Memori, used by this library
