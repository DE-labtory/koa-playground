import React, {Component} from 'react';
import {connect} from 'react-redux';

import actions from '../../redux/actions'

import styles from './BrowserButtonTab.scss';

class BrowserButtonTab extends Component {
    // TODO : 파일 불러오기 및 추가
    constructor(props) {
        super(props);
        this.state ={
            newFileCounter:0,
        }
    }

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
                    onClick={() => {
                        this.props.addFile("untitled" + this.state.newFileCounter.toString());
                        this.setState({
                            newFileCounter:this.state.newFileCounter + 1
                        });
                    }}
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

const mapStateToProps = state => {
    console.log(state)
    return {
        fileList: state.playgroundReducer.fileListObject,
    }
}

const mapDispatchToProps = {
    addFile: actions.playgroundActions.addFile,
}

export default connect(mapStateToProps, mapDispatchToProps)(BrowserButtonTab);