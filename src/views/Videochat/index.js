import React from 'react';
import "./styles.scss";

import Publisher from '../../components/Publisher';
import Subscriber from '../../components/Subscriber';

import { OTSession, OTStreams } from 'opentok-react';
import OpenTok from 'opentok';

export default  class Videochat extends React.Component {

    state = {
        isloading: true,
        connected: true,
        apiKey: '46788574',
        sessionId: '2_MX40Njc4ODU3NH5-MTU5MTg5NDM3NDkxNX5Ja2xJc3dDN1hpemw2UGVtbExnTllPaHd-UH4',
        secret: '7baa057e29bd8b212187cc1c5aace6053f10a3bc'
    }

    componentDidMount(){
        const { apiKey, sessionId, secret } = this.state;
        var opentok = new OpenTok(apiKey, secret, { timeout: 30000});
        var tokenOptions = {};
        tokenOptions.role = "moderator";
        tokenOptions.data = "username=bob";
        let tokenGenereted = opentok.generateToken(sessionId, tokenOptions)
        this.setState({ 
            token: tokenGenereted,
            isloading: false
        });
    }



    renderChat = () => {
        const { apiKey, sessionId, token, isloading } = this.state;
        return (
            <div className="container">
                {!isloading ?  
                <OTSession
                    apiKey={apiKey}
                    sessionId={sessionId}
                    token={token}
                    eventHandlers={this.sessionEvents}
                    onError={this.onError}
                    >

                    <Publisher />
                    <OTStreams>
                        <Subscriber />
                    </OTStreams>

                </OTSession>
                :
                <div> espera </div> }
            </div>
        );
    }

    render(){
        return  this.renderChat()
    }
}