import React from 'react';
import { OTPublisher } from 'opentok-react';
import CheckBox from '../../components/CheckBox';
import "./styles.scss";

class Publisher extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: true,
      video: true,
      videoSource: 'camera'
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  changeVideoSource = (videoSource) => {
    (this.state.videoSource !== 'camera') ? this.setState({videoSource: 'camera'}) : this.setState({ videoSource: 'screen' })
  }



  render() {
    return (
      <div className="publisher">

        {this.state.error ? <div id="error">{this.state.error}</div> : null}

        <OTPublisher className="boxPublisher"
        properties={{
            publishAudio: this.state.audio,
            publishVideo: this.state.video,
            videoSource: this.state.videoSource === 'screen' ? 'screen' : undefined
        }}
        />

        
        <div className="chkb">
          <CheckBox
            label="Share Screen"
            onChange={this.changeVideoSource}
          />

          <CheckBox
            label="Publish Audio"
            initialChecked={this.state.audio}
            onChange={this.setAudio}
          />

          <CheckBox
            label="Publish Video"
            initialChecked={this.state.video}
            onChange={this.setVideo}
          />
        </div>
        

      </div>
    );
  }
}
export default Publisher;
