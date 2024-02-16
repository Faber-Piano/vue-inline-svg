# Vue Inline SVG

Vue component loads an SVG source dynamically and inline `<svg>` so you can manipulate the style of it with CSS or JS.
It looks like basic `<img>` so you markup will not be bloated with SVG content.
Loaded SVGs are cached so it will not make network request twice.

- [Install](#install)
  - [NPM](#npm)
  - [CDN](#cdn)
  - [Vue 3](#vue-v3)
- [Usage](#usage)
  - [props](#props)
    - [src](#--src)
    - [title](#--title)
    - [keepDuringLoading](#--keepduringloading)
    - [transformSource](#--transformsource)
  - [SVG attributes](#svg-attributes)
  - [events](#events)
    - [loaded](#--loaded)
    - [unloaded](#--unloaded)
    - [error](#--error)
- [Comparison](#comparison)
- [Changelog](#changelog)
- [Contributing](#contributing)
- [License](#license)


## Install

### NPM

```bash
npm install git+ssh://git@github.com/Faber-Piano/vue-inline-svg.git#inline
```

Register locally in your component
```js
import FpaInlineSvg from 'fpa-vue-inline-svg';

// Your component
export default {
    components: {
        FpaInlineSvg,
    }
}
```

Or register globally in the Vue app
```js
import Vue from 'vue';

// as a plugin
import {FpaInlineSvgPlugin} from 'fpa-vue-inline-svg';
Vue.use(FpaInlineSvgPlugin);

// or as a component
import FpaInlineSvg from 'fpa-vue-inline-svg';
Vue.component('fpa-inline-svg', FpaInlineSvg);
```

## Usage

```html
<fpa-inline-svg
    src="image.svg"
    transformSource="transformSvg"
    @loaded="svgLoaded($event)"
    @unloaded="svgUnloaded()"
    @error="svgLoadError($event)"
    width="150"
    height="150"
    fill="black"
    aria-label="My image"
></fpa-inline-svg>
```
[Example](https://github.com/Faber-Piano/fpa-vue-inline-svg/blob/inline/demo/index.html)


### props
#### - `src`
SVG array, [Path to SVG file, inline SVG (optional)]

```html
<fpa-inline-svg :src="['/my.svg', '<svg>test</svg>']">
```

Note: if you use vue-loader assets or vue-cli, then paths like '../assets/my.svg' will not be handled by file-loader automatically like vue-cli do for `<img>` tag, so you will need to use it with `require`:
```html
<inline-svg :src="[require('../assets/my.svg')]"/>
```
Learn more:
- https://vue-loader.vuejs.org/guide/asset-url.html#transform-rules
- https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling


#### - `title`
Sets/overwrites the `<title>` of the SVG

```html
<inline-svg :src="['image.svg']" title="My Image"/>
```


#### - `keepDuringLoading`
`true` by default. It makes vue-inline-svg to preserve old image visible, when new image is being loaded. Pass `false` to disable it and show nothing during loading.

```html
<inline-svg :src="['image.svg']" :keepDuringLoading="false"/>
```

#### - `transformSource`
Function to transform SVG source

This example create circle in svg:
```html
<inline-svg :src="['image.svg']" :transformSource="transform"/>

<script>
const transform = (svg) => {
    let point = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
        point.setAttributeNS(null, 'cx', '20');
        point.setAttributeNS(null, 'cy', '20');
        point.setAttributeNS(null, 'r', '10');
        point.setAttributeNS(null, 'fill', 'red');
        svg.appendChild(point);
    return svg;
}
// For cleaner syntax you could use https://github.com/svgdotjs/svg.js
</script>
```


### SVG attributes
Other SVG and HTML attributes will be passed to inlined `<svg>`. Except attributes with `false` or `null` value.
```html
<!-- input -->
<fpa-inline-svg
    fill-opacity="0.25"
    :stroke-opacity="myStrokeOpacity"
    :color="false"
></fpa-inline-svg>

<!-- output -->
<svg fill-opacity="0.25" stroke-opacity="0.5"></svg>
```


### events
#### - `loaded`
Called when SVG image is loaded and inlined.
Inlined SVG element passed as argument into the listener’s callback function.
```html
<inline-svg @loaded="myInlinedSvg = $event"/>
```

#### - `unloaded`
Called when `src` prop was changed and another SVG start loading.
```html
<inline-svg @unloaded="handleUnloaded()"/>
```

#### - `error`
Called when SVG failed to load.
Error object passed as argument into the listener’s callback function.
```html
<inline-svg @error="log($event)"/>
```

## License

MIT License
