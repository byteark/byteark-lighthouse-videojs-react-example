/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import VideoPlayer from './VideoPlayer';
import './App.css';
import 'video.js/dist/video-js.css'

const sources = [
  {
    videoId: 'RI2PimuHxDXw',
    title: 'BIG BUCK BUNNY',
    subtitle: 'Big buck bunny sample video',
    poster: '//qoder.byteark.com/images/video-frames/1/GU/cg/1GUcghrocmlz-large.jpg',
    src: '//inox-bhm9yr.cdn.byteark.com/video-objects/RI2PimuHxDXw/playlist.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    videoId: 'Rqi1fj7fP130',
    title: 'ByteArk Promo Video',
    subtitle: 'ByteArk Promo sample video',
    poster: '//qoder.byteark.com/images/video-frames/1/J3/tm/1J3tmPOkPQYF-large.jpg',
    src: '//inox-bhm9yr.cdn.byteark.com/video-objects/Rqi1fj7fP130/playlist.m3u8',
    type: 'application/x-mpegURL',
  }
];

const videoJsOptions = {
  autoplay: true,
  controls: true,
  fluid: true,
  sources,
};

function App() {
  const playerRef = React.createRef()

  function onSelectVideoIndex(event) {
    playerRef.current.src(sources[event.target.value]);
  }

  return (
    <div className="App">
      <nav className="navbar sticky-top navbar-dark bg-dark">
        <a className="navbar-brand" href="#">ByteArk Lighthouse Video.js React Example</a>
      </nav>
      <div className="container-fluid pt-4">
        <div className="row">
          <div className="col-md-8">
            <form>
              <div className="form-group">
                <label>Select Video</label>
                <select
                  className="form-control"
                  onChange={onSelectVideoIndex}>
                  <option value="0">#1 BIG BUCK BUNNY</option>
                  <option value="1">#2 ByteArk</option>
                </select>
              </div>
            </form>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <VideoPlayer { ...videoJsOptions } ref={playerRef}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
