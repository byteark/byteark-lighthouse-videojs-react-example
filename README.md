# ByteArk Lighthouse Plugin for Video.js with React.js Example

This project is an example usage for ByteArk Lighthouse Plugin for Video.js with React.js to collect video watching statistic and diagnostic network issues.

## Requirements
* Video.js v6 or v7 with VHS plugin

## Installation

1. Add `lighthouse-videojs-plugin.min.js` to script tag before your react app
```html
<script type="text/javascript" src="https://byteark-sdk.cdn.byteark.com/lighthouse/videojs/@latest/lighthouse-videojs-plugin.min.js"></script>
```

2. In your VideoPlayer component **before creating videojs instance** add a ByteArk Lighthouse middleware to Video.js
```js
videojs.use('*', window.ByteArkLighthouse.middleware)
```

3. Set video detail to video player by using options below. The required fields are `videoId` and `title`.

**Option #1**

Set video detail to sources object in VideoJS's options when create video player.

```js
// 'player-id-here' is the ID of <video> or <div> element of the player.

const player = videojs('player-id-here', {
  sources: [{
    src: 'https://inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8',
    type: 'application/x-mpegURL',
    videoId: 'RI2PimuHxDXw',
    title: 'BIG BUCK BUNNY',
    subtitle: 'Big buck bunny sample video',
    poster: 'https//qoder.byteark.com/images/video-frames/1/GU/cg/1GUcghrocmlz-large.jpg',
    lighthouse: {
      user: {
        userId: 'user-id-here',
      },
    },
  }]
}
```

**Option #2**

Set video detail when call `player.src()` function

```js
// player is instance of VideoJS.

player.src({
  src: 'https://inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8',
  type: 'application/x-mpegURL',
  videoId: 'RI2PimuHxDXw',
  title: 'BIG BUCK BUNNY',
  subtitle: 'Big buck bunny sample video',
  poster: 'https//qoder.byteark.com/images/video-frames/1/GU/cg/1GUcghrocmlz-large.jpg',
  lighthouse: {
    user: {
      userId: 'user-id-here',
    },
  },
})
```

#### Video detail fields
| name                   | type   | required | description                       |
|------------------------|--------|----------|-----------------------------------|
| videoId                | string | yes      | videoId from ByteArk service      |
| title                  | string | yes      | title of video                    |
| subtitle               | string | no       | episode name or short description |
| poster                 | string | no       | poster url of video               |
| lighthouse             | object | no       | lighthouse object                 |
| lighthouse.user        | object | no       | user object                       |
| lighthouse.user.userId | string | no       | User id in your system            |

4. Initialize ByteArk Lighthouse Plugin by call init function by pass videojs player instance and options
```js
// Replace 'lighthouse-project-id-here' with your project's ID.

window.ByteArkLighthouse.init(player, {
  projectId: 'lighthouse-project-id-here',
  debug: true,
})
```

5. Try to see the result. If it's work, there should be something logging in your web browser's developer console.

#### ByteArk Lighthouse Opions
| name      | type    | require | description                    |
|-----------|---------|---------|--------------------------------|
| projectId | string  | yes     | ByteArk Lighthouse's projectId |
| debug     | boolean | no      | enable/disable debug log       |

## Disable debug log

Set `debug: false` in options when init ByteArk Lighthouse
