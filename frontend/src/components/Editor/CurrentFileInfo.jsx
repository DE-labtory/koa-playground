import React, {Component} from 'react';
import {connect} from 'react-redux';

import styles from './CurrentFileInfo.scss'

class CurrentFileInfo extends Component {
    render() {
        return (
            <div>
                <div className="CurrentFileInfo">
                    <div className="CurrentFileInfo-ic"/>
                    {this.props.currentFileName}

                </div>
                <div className="CurrentFileInfoButtonTab">
                    <button className="CurrentFileInfoButtonTab-btn">
                        <div className="CurrentFileInfoButtonTab-reset-ic"/>reset text
                    </button>
                    <button className="CurrentFileInfoButtonTab-btn">
                        <div className="CurrentFileInfoButtonTab-export-ic"/>export contract
                    </button>
                </div>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    currentFileName: state.playgroundReducer.currentFileName,
})


export default connect(mapStateToProps, null)(CurrentFileInfo);