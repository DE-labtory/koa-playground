import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './FlexibleInfoBox.scss';

class FlexibleInfoBox extends Component {
    render() {
        return (
            <div
                className="FlexibleInfoBox"
            >
                <div
                    className="FlexibleInfoBox-message-box"
                >
                    <div
                        className="FlexibleInfoBox-message-box-title"
                    >
                        <div
                            className="FlexibleInfoBox-message-box-title-ic"
                        >
                        
                        </div>
                        <div
                            className="FlexibleInfoBox-message-box-title-text"
                        >
                            Compile Success
                        </div>                        
                    </div>
                    <div
                        className="FlexibleInfoBox-message-box-body"
                    >
                        <span
                            className="FlexibleInfoBox-message-box-body-text"
                        >
                            Sub text Sub text Sub text Sub text Sub text Sub text Sub text Sub text Sub text 
                        </span>                                             
                    </div>                                   
                </div>             
            </div>
        )
    }
}

export default connect(null, null)(FlexibleInfoBox);