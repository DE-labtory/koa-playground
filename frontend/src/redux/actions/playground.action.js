import { actionCreator } from './lib';
import AT from '../constants';

export default {
    addFile: actionCreator(AT.ADD_FILE),
    getFile: actionCreator(AT.GET_FILE),
    updateFile: actionCreator(AT.UPDATE_FILE),
    deleteFile: actionCreator(AT.DELETE_FILE),
    selectFile: actionCreator(AT.SELECT_FILE),
};