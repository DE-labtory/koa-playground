import { actionCreator } from './lib';
import AT from '../constants';

export default {
    addFile: actionCreator(AT.ADD_FILE),
    deleteFile: actionCreator(AT.DELETE_FILE),
    selectFile: actionCreator(AT.SELECT_FILE),

    selectTab: actionCreator(AT.SELECT_TAB),
    closeTab: actionCreator(AT.CLOSE_TAB),

    changeFileText: actionCreator(AT.CHANGE_FILE_TEXT),
};