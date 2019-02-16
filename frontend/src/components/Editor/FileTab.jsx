import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import styles from './FileTab.scss';
import actions from '../../redux/actions';

class FileTab extends Component {
    render() {
        const { currentFileName, tabListSet } = this.props;

        return (
            <div className="FileTab">
                <div
                    className="FileTab-list"
                >
                { 
                    [...tabListSet].map(fileName => (
                        <span
                            key={fileName + 'tab'}
                            className={ClassNames({
                                'FileTab-item': true,
                                'FileTab-item-selected': fileName === currentFileName,
                            })}
                        >
                            <span
                                onClick={() => this.props.selectTab(fileName)}
                            >
                                {fileName}
                            </span>
                            <button
                                onClick={() => this.props.closeTab(fileName)}
                            >
                                x
                            </button>
                        </span>
                    )) 
                }
                </div>
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