import AT from '../constants';
import actions from '../actions';

export const EXECUTION_PHASES = {
    COMPILE: 'Compile',
    COMPILE_FINISH: 'Already compiled',
    DEPLOY: 'Deploy',
    DEPLOY_FINISH: 'Already deployed',
    RUN: 'Run',
    RUN_FINISH: 'Already run',
    WAITING_RESPONSE: 'Waiting for server response...'
}

const initExecutionState = {
    currentPhase: EXECUTION_PHASES.COMPILE,
    isCompiled: false,
    isDeployed: false,
    isRun: false,
    isCurrentFileChanged: false,
    compileResultObject: {},
    deployResultObject: {},
    runResultObject: {},
}
const initState = {
    ...initExecutionState,
    currentFileName: 'hello_world.koa',
    fileListObject: {
        'hello_world.koa': `contract {
    func add(a int) int {
        if (a > 5){
            return a + 5
        }else{
            return a * 5
        }
    }
}`
/*`contract {
    func Sig(sig string){
        string pubkey = "fvfidBGruUYC+mTw7CusaCOQbBuZBiYduFgH8h"

        if checkSig(pubkey, sig){
            return true
        }
        return false
    }
}`*/,
    },
    tabListSet: new Set(['hello_world.koa']),
    resultMessageObject:{
        isSuccess:false,
        visible:false,
        title:'',
        message:'',
    },
}

export default (state = initState, action) => {
    switch(action.type) {
        case AT.ADD_FILE:
            return {
                ...state,
                ...initExecutionState,
                fileListObject: {
                    ...state.fileListObject,
                    [action.payload]: ''
                },
                currentFileName: action.payload,
                tabListSet: state.tabListSet.add(action.payload)
            }
        case AT.GET_FILE:
        case AT.UPDATE_FILE:
        case AT.DELETE_FILE:
            delete state.fileListObject[action.payload];
            state.tabListSet.delete(action.payload);
            return {
                ...state,
                fileListObject: {
                    ...state.fileListObject
                },
                tabListSet: new Set([...state.tabListSet]),
            }
        case AT.SELECT_FILE:
            return {
                ...state,
                ...initExecutionState,
                currentFileName: action.payload,
                tabListSet: state.tabListSet.add(action.payload)
            }

        case AT.SELECT_TAB:
            return {
                ...state,
                ...initExecutionState,
                currentFileName: action.payload,
            }
        case AT.CLOSE_TAB:
            const tabIdx = [...state.tabListSet].indexOf(action.payload);

            return {
                ...state,
                ...initExecutionState,
                currentFileName: tabIdx > 0? [...state.tabListSet][tabIdx - 1] : [...state.tabListSet][tabIdx + 1],
                tabListSet: new Set([...state.tabListSet].filter(fileName => fileName !== action.payload)),
            }
        case AT.CHANGE_FILE_TEXT:
            return {
                ...state,
                ...initExecutionState,
                fileListObject: {
                    ...state.fileListObject,
                    [state.currentFileName]: action.payload,
                }
            }
        case AT.SELECT_COMPILE_TAB:
            return {
                ...state,
                currentPhase: state.isCompiled? EXECUTION_PHASES.COMPILE_FINISH: EXECUTION_PHASES.COMPILE
            }
        case AT.SELECT_DEPLOY_TAB:
            return {
                ...state,
                currentPhase: state.isDeployed? EXECUTION_PHASES.DEPLOY_FINISH: EXECUTION_PHASES.DEPLOY
            }
        case AT.SELECT_RUN_TAB:
            return {
                ...state,
                currentPhase: state.isRun? EXECUTION_PHASES.RUN_FINISH: EXECUTION_PHASES.RUN
            }
        case AT.CLICK_COMPILE:
        case AT.CLICK_DEPLOY:
        case AT.CLICK_RUN:
            return {
                ...state,
                currentPhase: EXECUTION_PHASES.WAITING_RESPONSE,
            }
        case AT.COMPILE:
        case AT.DEPLOY:
        case AT.RUN:
            return {
                ...state,
            }
        case AT.COMPILE_ERROR:
        case AT.DEPLOY_ERROR:
        case AT.RUN_ERROR:
            return {
                ...state,
                resultMessageObject:{
                    visible: true,
                    isSuccess: false,
                    title: "Error !",
                    message: action.payload
                }
            }
        case AT.COMPILE_SUCCESS:
            return {
                ...state,
                isCompiled:true,
                currentPhase:EXECUTION_PHASES.COMPILE_FINISH,
                compileResultObject: {
                    ...action.payload
                },
                resultMessageObject:{
                    visible: true,
                    isSuccess: true,
                    title: "Compile Success!",
                    message: "compile finish success message"
                }
            }
        case AT.DEPLOY_SUCCESS:
            return {
                ...state,
                isDeployed:true,
                currentPhase:EXECUTION_PHASES.DEPLOY_FINISH,
                deployResultObject: action.payload,
                resultMessageObject:{
                    visible: true,
                    isSuccess: true,
                    title: "Deploy Success!",
                    message: "deploy finish success message"
                }
            }
        case AT.RUN_SUCCESS:
            return {
                ...state,
                isRun:true,
                currentPhase:EXECUTION_PHASES.RUN_FINISH,
                runResultObject: {
                    ...action.payload
                },
                resultMessageObject:{
                    visible: true,
                    isSuccess: true,
                    title: "Run Success!",
                    message: "run finish success message"
                }
            }
        case AT.CLICK_MESSAGE_CLOSE:
            return{
                ...state,
                resultMessageObject:{
                    ...state.resultMessageObject,
                    visible: false,
                }
            }
        default:
            return {
                ...state
            }
    }
}