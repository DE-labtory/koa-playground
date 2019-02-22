import React, { Component } from 'react';
import { connect } from 'react-redux';
import ClassNames from 'classnames';

import actions from '../../redux/actions'

import styles from './ExecuteBtn.scss';
import { EXECUTION_PHASES } from '../../redux/reducers/playground.reducer';
import { deploy } from '../../redux/api/playground.api';

class ExecuteBtn extends Component {
    constructor(props) {
        super(props);

        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    handleButtonClick(e) {
        const { currentCode, currentPhase, isCompiled, isDeployed, isRun, 
            compileResultObject, deployResultObject  } = this.props;
        const { clickCompile, clickDeploy, clickRun, compile, deploy, run } = this.props;

        if (currentPhase === EXECUTION_PHASES.COMPILE && !isCompiled) {
            clickCompile();
            compile(currentCode);
        } else if (currentPhase === EXECUTION_PHASES.COMPILE && isCompiled) {
            
        } else if (currentPhase === EXECUTION_PHASES.DEPLOY && !isDeployed) {
            clickDeploy();
            deploy(compileResultObject.RawByteCode);
        } else if (currentPhase === EXECUTION_PHASES.DEPLOY && isDeployed) {
            
        } else if (currentPhase === EXECUTION_PHASES.RUN && !isRun) {
            clickRun();
            run(deployResultObject.Address);
        } else if (currentPhase === EXECUTION_PHASES.RUN && isRun) {
            
        } else {
            
        }
    }

    render() {
        const { currentPhase, isActivated } = this.props;
        
        return (
            <div
                className="ExecuteBtn-wrapper"
            >
                <div
                    value={currentPhase}
                    onClick={this.handleButtonClick}
                    className={ClassNames({
                        "ExecuteBtn": true,
                        "ExecuteBtn-activated": isActivated,
                    })}
                >
                    <span
                        className="ExecuteBtn-text"
                    >
                        {currentPhase}
                    </span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { currentFileName, fileListObject, currentPhase, 
        isCompiled, isDeployed, isRun, 
        compileResultObject, deployResultObject 
    } = state.playgroundReducer;

    const isActivated = currentFileName &&  ((currentPhase === EXECUTION_PHASES.COMPILE && !isCompiled) ||
                (currentPhase === EXECUTION_PHASES.DEPLOY && isCompiled && !isDeployed) ||
                (currentPhase === EXECUTION_PHASES.RUN && isCompiled && isDeployed && !isRun));

    return {
        currentCode: fileListObject.hasOwnProperty(currentFileName)? fileListObject[currentFileName]: '',
        currentPhase,
        isCompiled,
        isDeployed,
        isRun,
        isActivated,
        compileResultObject,
        deployResultObject,
    }
}

const mapDispatchToProps = {
    clickCompile: actions.playgroundActions.clickCompile,
    compile: actions.playgroundActions.compile,
    clickDeploy: actions.playgroundActions.clickDeploy,
    deploy: actions.playgroundActions.deploy,
    clickRun: actions.playgroundActions.clickRun,
    run: actions.playgroundActions.run,
}

export default connect(mapStateToProps, mapDispatchToProps)(ExecuteBtn);