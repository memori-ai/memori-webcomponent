# Memori WebComponent

WebComponent to integrate a [Memori](https://memori.ai) in a web page or web app.

Platforms:

- [MemoryTwin](https://app.memorytwin.com/en): consumer / creator platform
- [TwinCreator](https://app.twincreator.com/en): developer-oriented platform

Uses [memori-react](https://github.com/memori-ai/memori-react) under the hood.
See [demo](https://memori-ai.github.io/memori-webcomponent/example/).

## Work in progress

This library is still in development and is not ready for production.

## Installation from npm

```bash
yarn add @memori.ai/memori-webcomponent
```

```bash
npm install @memori.ai/memori-webcomponent
```

### Embed or usage from CDN

```html
<script
  type="module"
  src="https://unpkg.com/@memori.ai/memori-webcomponent/dist/memori-webcomponent.js"
></script>
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

## See also

- [memori-api-client](https://github.com/memori-ai/memori-api-client) - API client for Memori
- [memori-react](https://github.com/memori-ai/memori-react) - React library for Memori, used by this library
