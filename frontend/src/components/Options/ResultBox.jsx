import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './ResultBox.scss';
import { EXECUTION_PHASES } from '../../redux/reducers/playground.reducer';

class ResultBox extends Component {
    renderCompileResult() {
        const { compileResultObject } = this.props
        const { ABI, RawByteCode, ASM } = compileResultObject;
        console.log(compileResultObject);
        console.log(ABI, RawByteCode, ASM);

        return (
                <div className="ResultBox-compile">
                    <div className="ResultBox-compile-ABI">
                        <div className="ResultBox-title">
                            ABI
                        </div>
                        <div className="ResultBox-text">
                            { JSON.stringify(ABI) || 'No Result'}
                        </div>
                    </div>
                    <div className="ResultBox-compile-Bytecode">
                        <div className="ResultBox-title">
                            Bytecode
                        </div>
                        <div className="ResultBox-text">
                            { RawByteCode || 'No Result'}
                        </div>                            
                    </div>         
                    <div className="ResultBox-compile-ASM">
                        <div className="ResultBox-title">
                            ASM
                        </div>
                        <div className="ResultBox-text">
                            { ASM || 'No Result' }
                        </div>                            
                    </div>
                </div>
        )
    }

    renderDeployResult() {
        const { deployResultObject } = this.props;
        const { Address } = deployResultObject;

        return (
            <div className="ResultBox-deploy">
                <div className="ResultBox-deploy-encoded">
                    <div className="ResultBox-title">
                        Address
                    </div>
                    <div className="ResultBox-text">
                        { Address || 'No Result' }
                    </div>
                </div>      
            </div>
    )
    }

    renderRunResult() {
        const { runResultObject } = this.props;
        const { EncodedOutput, DecodedOutput } = runResultObject;

        return (
                <div className="ResultBox-run">
                    <div className="ResultBox-run-encoded">
                        <div className="ResultBox-title">
                            Encoded Output
                        </div>
                        <div className="ResultBox-text">
                            { EncodedOutput || 'No Result' }
                        </div>
                    </div>
                    <div className="ResultBox-run-Bytecode">
                        <div className="ResultBox-title">
                            Decoded Output
                        </div>
                        <div className="ResultBox-text">
                            { JSON.stringify(DecodedOutput) || 'No Result' }
                        </div>                            
                    </div>         
                </div>
        )
    }    
    render() {
        const { currentPhase } = this.props;

        return (
            <div className="ResultBox">
                <div className="ResultBox-box">
                    {(currentPhase ===  EXECUTION_PHASES.COMPILE || currentPhase === EXECUTION_PHASES.COMPILE_FINISH) && this.renderCompileResult()}
                    {(currentPhase === EXECUTION_PHASES.DEPLOY || currentPhase === EXECUTION_PHASES.DEPLOY_FINISH) && this.renderDeployResult()}
                    {(currentPhase === EXECUTION_PHASES.RUN || currentPhase === EXECUTION_PHASES.RUN_FINISH) && this.renderRunResult()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentPhase: state.playgroundReducer.currentPhase,
        compileResultObject: state.playgroundReducer.compileResultObject,
        deployResultObject: state.playgroundReducer.deployResultObject,
        runResultObject: state.playgroundReducer.runResultObject,
    }
}

export default connect(mapStateToProps, null)(ResultBox);