import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './FileTab.scss';
import actions from '../../redux/actions';

class FileTab extends Component {
    render() {
        const { currentFileName, tabListSet } = this.props;

        return (
            <div>
                {currentFileName}
                <ul>
                { 
                    [...tabListSet].map(fileName => (
                        <li
                            key={fileName + 'tab'}
                        >
                            <span
                                onClick={() => this.props.selectTab(fileName)}
                            >
                                {fileName}
                            </span>
                            <button
                                onClick={() => this.props.closeTab(fileName)}
                            >
                                close
                            </button>
                        </li>
                    )) 
                }
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentFileName: state.playgroundReducer.currentFileName,
    tabListSet: state.playgroundReducer.tabListSet,
})

const mapDispatchToProps = {
    selectTab: actions.playgroundActions.selectTab,
    closeTab: actions.playgroundActions.closeTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(FileTab);