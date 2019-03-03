import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './FlexibleInfoBox.scss';
import {EXECUTION_PHASES} from "../../redux/reducers/playground.reducer";
import compileImg from '../../assets/img/compile.png'
import deployImg from '../../assets/img/deploy.png'
import runImg from '../../assets/img/run.png'

class FlexibleInfoBox extends Component {
    render() {
        const {messageObject} = this.props;
        return (
            <div
                className="FlexibleInfoBox"
            >
                {/*todo : refactoring 너무 더럽게짬 히... hidden 속성으로 해도될듯? 너무 먼길을 돌아와버림 이미 */}
                {!messageObject.visible && <div
                className="ImageBox">
                    {(this.props.currentPhase === EXECUTION_PHASES.COMPILE || this.props.currentPhase === EXECUTION_PHASES.COMPILE_FINISH)
                    && <img className="Image" src={compileImg}/>}
                    {(this.props.currentPhase === EXECUTION_PHASES.DEPLOY || this.props.currentPhase === EXECUTION_PHASES.DEPLOY_FINISH)
                    && <img className="Image" src={deployImg}/>}
                    {(this.props.currentPhase === EXECUTION_PHASES.RUN || this.props.currentPhase === EXECUTION_PHASES.RUN_FINISH)
                    && <img className="Image" src={runImg}/>}

                </div>}
                {messageObject.visible && <div
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
                            {messageObject.title}
                        </div>
                    </div>
                    <div
                        className="FlexibleInfoBox-message-box-body"
                    >
                        <div
                            className="FlexibleInfoBox-message-box-body-text"
                        >
                            {messageObject.message}
                        </div>
                        <div
                            className="FlexibleInfoBox-message-box-body-close"
                            onClick={()=>{
                                this.props.clickMessageClose()
                            }}
                        >
                        </div>
                    </div>
                </div> }

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        messageObject: state.playgroundReducer.resultMessageObject,
        currentPhase : state.playgroundReducer.currentPhase,
    }
}

const mapDispatchToProps = {
    clickMessageClose: actions.playgroundActions.clickMessageClose,
}

export default connect(mapStateToProps, mapDispatchToProps)(FlexibleInfoBox);