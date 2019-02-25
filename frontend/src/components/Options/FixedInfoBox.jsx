import React, { Component } from 'react';
import { connect } from 'react-redux';

import actions from '../../redux/actions'

import styles from './FixedInfoBox.scss';
import { EXECUTION_PHASES } from '../../redux/reducers/playground.reducer';

class FixedInfoBox extends Component {
    render() {
        const { infoText } = this.props;
        

        return (
            <div className="FixedInfoBox">
                <span className="FixedInfoBox-text">
                    {infoText}
                </span>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { currentPhase } = state.playgroundReducer;
    
    let infoText;
    switch(currentPhase) {
        case EXECUTION_PHASES.COMPILE:
        case EXECUTION_PHASES.COMPILE_FINISH:
            infoText = "에디터에서 작성한 코드를 Compile하면 Bytecode로 변환됩니다.";
            break;
        case EXECUTION_PHASES.DEPLOY:
        case EXECUTION_PHASES.DEPLOY_FINISH:
            infoText = "컴파일하여 변환된 바이트코드를 디플로이하여 블록체인 네트워크 서버에 전송하세요.";
            break;
        case EXECUTION_PHASES.RUN:
        case EXECUTION_PHASES.RUN_FINISH:
            infoText = "블록체인 네트워크에 전송된 바이트코드를 실행(Run) 하세오.";
            break;
    }
    return {
        infoText,
    }
}

export default connect(mapStateToProps, null)(FixedInfoBox);