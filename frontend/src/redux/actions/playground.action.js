import { actionCreator } from './lib';
import AT from '../constants';

export default {
    addFile: actionCreator(AT.ADD_FILE),
    deleteFile: actionCreator(AT.DELETE_FILE),
    selectFile: actionCreator(AT.SELECT_FILE),

    selectTab: actionCreator(AT.SELECT_TAB),
    closeTab: actionCreator(AT.CLOSE_TAB),

    changeFileText: actionCreator(AT.CHANGE_FILE_TEXT),

    selectCompileTab: actionCreator(AT.SELECT_COMPILE_TAB),
    selectDeployTab: actionCreator(AT.SELECT_DEPLOY_TAB),
    selectRunTab: actionCreator(AT.SELECT_RUN_TAB),

    clickCompile: actionCreator(AT.CLICK_COMPILE),
    clickDeploy: actionCreator(AT.CLICK_DEPLOY),
    clickRun: actionCreator(AT.CLICK_RUN),
    clickMessageClose: actionCreator(AT.CLICK_MESSAGE_CLOSE),

    compile: actionCreator(AT.COMPILE),
    deploy: actionCreator(AT.DEPLOY),
    run: actionCreator(AT.RUN),
};