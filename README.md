# ByteArk Lighthouse Plugin for Video.js with React.js Example

This project is an example usage for ByteArk Lighthouse Plugin for Video.js with React.js to collect video watching statistic and diagnostic network issues.

## Requirements
* Video.js v7 with VHS plugin

## Installation

1. Add `lighthouse-videojs-plugin.min.js` to script tag before your react app
```html
<script type="text/javascript" src="https://byteark-sdk.cdn.byteark.com/lighthouse/videojs/@latest/lighthouse-videojs-plugin.min.js"></script>
```

2. Add video's details to source object
```js
const sources = [{
  videoId: 'RI2PimuHxDXw',
  title: 'BIG BUCK BUNNY',
  subtitle: 'Big buck bunny sample video',
  poster: '//qoder.byteark.com/images/video-frames/1/GU/cg/1GUcghrocmlz-large.jpg',
  src: '//inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8',
  type: 'application/x-mpegURL',
}]
```
#### Video detail fields
| name     | type   | required | description                       |
|----------|--------|----------|-----------------------------------|
| videoId  | string | yes      | videoId from ByteArk service      |
| title    | string | yes      | title of video                    |
| subtitle | string | no       | episode name or short description |
| poster   | string | no       | poster url of video               |

3. In your VideoPlayer component after create videojs instance add a ByteArk Lighthouse middleware to Video.js
```js
videojs.use('*', window.ByteArkLighthouse.middleware)
```

4. Initialize ByteArk Lighthouse Plugin by call init function by pass videojs player instance and options
```js
window.ByteArkLighthouse.init(this.player, {
  projectId: 'videojs-byteark-lighthouse-uta',
})
```

#### ByteArk Lighthouse Opeions
| name      | type    | require | description                    |
|-----------|---------|---------|--------------------------------|
| projectId | string  | yes     | ByteArk Lighthouse's projectId |
| debug     | boolean | no      | enable/disable debug log       |

## Enable debug log

1. Set `debug: true` in options when init ByteArk Lighthouse

2. Open console in web browser developer tools to videw debug log.
