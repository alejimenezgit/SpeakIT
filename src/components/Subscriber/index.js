import React from 'react';

import { OTSubscriber } from 'opentok-react';

class Subscriber extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      audio: true,
      video: true
    };
  }

  setAudio = (audio) => {
    this.setState({ audio });
  }

  setVideo = (video) => {
    this.setState({ video });
  }

  render() {
    return (
      <div className="subscriber">
        

        <OTSubscriber
          properties={{
            subscribeToAudio: this.state.audio,
            subscribeToVideo: this.state.video
          }}
          onError={this.onError}
        />
      </div>
    );
  }
}
export default Subscriber;
