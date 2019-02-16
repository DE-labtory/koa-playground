import React, { Component } from 'react';
import { connect } from 'react-redux';

import styles from './TextEditor.scss';
import actions from '../../redux/actions';

class TextEditor extends Component {
    render() {
        //TODO state를 redux에서 불러오는 것으로 변경
        return (
            <div>
                <textarea
                    disabled={!this.props.currentFileName}
                    value={this.props.currentFileText}
                    onChange={({target}) => this.props.changeFileText(target.value)}
                />
            </div>
        )
    }
}

const mapStateToProps = state => {
    const currentFileName = state.playgroundReducer.currentFileName;
    
    return {
        currentFileName,
        currentFileText: state.playgroundReducer.fileListObject[currentFileName],
    }
}

const mapDispatchToProps = {
    changeFileText: actions.playgroundActions.changeFileText,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);