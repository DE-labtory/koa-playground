import React, {Component} from 'react';
import {connect} from 'react-redux';
import ClassNames from 'classnames';

import actions from '../../redux/actions';
import {EXECUTION_PHASES} from '../../redux/reducers/playground.reducer';

import styles from './ButtonTab.scss';


class ButtonTab extends Component {
    render() {
        const {currentPhase, isCompiled, isDeployed, isRun} = this.props;
        const {selectCompileTab, selectDeployTab, selectRunTab} = this.props;
        let progress = 5;
        if (isCompiled) progress = 33;
        if (isDeployed) progress = 66;
        if (isRun) progress = 100;

        return (
            <div>
                <div className="ButtonTab">
                    <div
                        className={ClassNames({
                            "ButtonBox": true,
                            "ButtonBox-selected": currentPhase === EXECUTION_PHASES.COMPILE || currentPhase === EXECUTION_PHASES.COMPILE_FINISH,
                        })}
                        onClick={() => selectCompileTab()}
                    >
                    <span>
                        Compile
                    </span>
                    </div>
                    <div className="Arrow"/>
                    <div
                        className={ClassNames({
                            "ButtonBox": true,
                            "ButtonBox-selected": currentPhase === EXECUTION_PHASES.DEPLOY || currentPhase === EXECUTION_PHASES.DEPLOY_FINISH,
                        })}
                        onClick={() => selectDeployTab()}
                    >
                    <span>
                        Deploy
                    </span>
                    </div>
                    <div className="Arrow"/>
                    <div
                        className={ClassNames({
                            "ButtonBox": true,
                            "ButtonBox-selected": currentPhase === EXECUTION_PHASES.RUN || currentPhase === EXECUTION_PHASES.RUN_FINISH,
                        })}
                        onClick={() => selectRunTab()}
                    >
                    <span>
                        Run
                    </span>
                    </div>
                </div>
                <div className="ButtonBox-processed" style={{width: progress+"%"}}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        currentPhase: state.playgroundReducer.currentPhase,
        isCompiled: state.playgroundReducer.isCompiled,
        isDeployed: state.playgroundReducer.isDeployed,
        isRun: state.playgroundReducer.isRun,
    }
}

const mapDispatchToProps = {
    selectCompileTab: actions.playgroundActions.selectCompileTab,
    selectDeployTab: actions.playgroundActions.selectDeployTab,
    selectRunTab: actions.playgroundActions.selectRunTab,
}

export default connect(mapStateToProps, mapDispatchToProps)(ButtonTab);