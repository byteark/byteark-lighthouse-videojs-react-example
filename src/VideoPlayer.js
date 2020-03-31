import React from 'react';
import videojs from 'video.js';

class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this);
    });

    // add ByteArk Lighthouse middleware to videojs
    videojs.use('*', window.ByteArkLighthouse.middleware)

    // init Byteark Lighthouse
    window.ByteArkLighthouse.init(this.player, {
      projectId: 'videojs-byteark-lighthouse-uta',
      // TODO: don't forget to remove debug when deploy in production
      debug: true, 
    })
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }

    window.ByteArkLighthouse.destroy()
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>	
        <div data-vjs-player>
          <video ref={ node => this.videoNode = node } className="video-js"></video>
        </div>
      </div>
    );
  }

  src(source) {
    this.player.src(source);
  }
}

export default VideoPlayer;