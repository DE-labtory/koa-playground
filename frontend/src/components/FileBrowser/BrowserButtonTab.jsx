import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './BrowserButtonTab.scss';

class BrowserButtonTab extends Component {
    // TODO : 파일 불러오기 및 추가
    render() {
        return (
            <div
                className="BrowserButtonTab"
            >
                <button
                    className="BrowserButtonTab-btn"
                >
                    <div
                        className="BrowserButtonTab-open-ic"
                    > 
                    </div>
                </button>
                <button
                    className="BrowserButtonTab-btn"
                >
                    <div
                        className="BrowserButtonTab-new-ic"
                    > 
                    </div>
                </button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    addFile: actions.playgroundActions.addFile,
}

export default connect(null, mapDispatchToProps)(BrowserButtonTab);