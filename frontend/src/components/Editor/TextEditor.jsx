import React, {Component} from 'react';
import {connect} from 'react-redux';
import AceEditor from 'react-ace'

import actions from '../../redux/actions';
import CustomKoaMode from "./rule";
import 'brace/theme/textmate';

import styles from './TextEditor.scss';
import editorStyles from './KoaTheme.scss';

class TextEditor extends Component {
    componentDidMount() {
        const customMode = new CustomKoaMode();
        this.refs.aceEditor.editor.getSession().setMode(customMode);
        //this.refs.aceEditor.editor.getSession().setValue(this.props.currentFileText);
    }

    render() {
        //TODO state를 redux에서 불러오는 것으로 변경
        return (
            <div className="TextEditor">
                <AceEditor
                    ref="aceEditor"
                    mode="text"
                    onChange={(target) => {
                        console.log(target)
                        this.props.changeFileText(target);
                    }}
                    name="koaEditor"
                    theme="textmate"
                    value={this.props.currentFileText}
                    editorProps={{$blockScrolling: true}}
                    width="100%"
                    height="100%"
                    showPrintMargin={false}
                    readOnly={!this.props.currentFileName}
                />
            </div>
            // <div className="TextEditor">
            //     <textarea
            //         disabled={!this.props.currentFileName}
            //         value={this.props.currentFileText}
            //         onChange={({target}) => this.props.changeFileText(target.value)}
            //         className="TextEditor-editor"
            //     />
            // </div>
            // <div className="TextEditor">
            //     <pre>
            //         <span contentEditable>def print_hi(name)</span>
            //         <span contentEditable>	puts "Hi, #name"</span>
            //         <span contentEditable>end</span>
            //         <span contentEditable></span>
            //         <span contentEditable>print_hi('Tom')</span>
            //         <span contentEditable>#=> prints 'Hi, Tom' to STDOUT.</span>
            //     </pre>
            // </div>                
        )
    }
}

const mapStateToProps = state => {
    const currentFileName = state.playgroundReducer.currentFileName;
    return {
        currentFileName,
        currentFileText: currentFileName ? state.playgroundReducer.fileListObject[currentFileName] : 'Please select or create new file ...',
    }
}

const mapDispatchToProps = {
    changeFileText: actions.playgroundActions.changeFileText,
}

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);