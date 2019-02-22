import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import actions from '../../redux/actions';
import { EXECUTION_PHASES } from '../../redux/reducers/playground.reducer';

import styles from './ButtonTab.scss';


class ButtonTab extends Component {
    render() {
        const { currentPhase, isCompiled, isDeployed, isRun } = this.props;
        const { selectCompileTab, selectDeployTab, selectRunTab } = this.props;

        return (
            <div className="ButtonTab">
                <div 
                    className={ClassNames({
                        "ButtonBox": true,
                        "ButtonBox-processed": isCompiled,
                        "ButtonBox-selected": currentPhase === EXECUTION_PHASES.COMPILE || currentPhase === EXECUTION_PHASES.COMPILE_FINISH,
                    })}
                    onClick={() => selectCompileTab()}
                >
                    <span>
                        Compile
                    </span>
                </div>
                <div 
                    className={ClassNames({
                        "ButtonBox": true,
                        "ButtonBox-processed": isDeployed,
                        "ButtonBox-selected": currentPhase === EXECUTION_PHASES.DEPLOY || currentPhase === EXECUTION_PHASES.DEPLOY_FINISH,
                    })}
                    onClick={() => selectDeployTab()}
                >
                    <span>
                        Deploy
                    </span>
                </div>
                <div 
                    className={ClassNames({
                        "ButtonBox": true,
                        "ButtonBox-processed": isRun,
                        "ButtonBox-selected": currentPhase === EXECUTION_PHASES.RUN || currentPhase === EXECUTION_PHASES.RUN_FINISH,
                    })}
                    onClick={() => selectRunTab()}
                >
                    <span>
                        Run
                    </span>
                </div>                                
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