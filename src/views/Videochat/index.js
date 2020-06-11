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
        apiKey: '46671452',
        sessionId: '2_MX40NjY3MTQ1Mn5-MTU4Njc3NTM2MDA2MH5IVGQxSDZVaU9mNWRQdER3eDRoNklQa0d-fg',
        secret: '887f0decc5232c9bb96e1aa58a1a2e00c351e35d'
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