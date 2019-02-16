import AT from '../constants';
import actions from '../actions';

const initState = {
    currentFileName: '',
    fileListObject: {
        'koa.txt': 'koa is something bla bla',
        'koa-playground.txt': 'hey yo',
        'koa-hello.txt': 'this is something',
    },
    tabListSet: new Set([]),
}

export default (state = initState, action) => {
    switch(action.type) {
        case AT.ADD_FILE:
            return {
                ...state,
                fileListObject: {
                    ...state.fileListObject, 
                    [action.payload]: ''
                },
            }
        case AT.GET_FILE:
        case AT.UPDATE_FILE:
        case AT.DELETE_FILE:
            delete state.fileListObject[action.payload];
            return {
                ...state,
                fileListObject: {
                    ...state.fileListObject
                },
            }
        case AT.SELECT_FILE:
            return {
                ...state,
                currentFileName: action.payload,
                tabListSet: state.tabListSet.add(action.payload)
            }

        case AT.SELECT_TAB:
            return {
                ...state,
                currentFileName: action.payload,
            }
        case AT.CLOSE_TAB:
            const tabIdx = [...state.tabListSet].indexOf(action.payload);

            return {
                ...state,
                currentFileName: tabIdx > 0? [...state.tabListSet][tabIdx - 1] : [...state.tabListSet][tabIdx + 1],
                tabListSet: new Set([...state.tabListSet].filter(fileName => fileName != action.payload)),
            }
        case AT.CHANGE_FILE_TEXT:
            return {
                ...state,
                fileListObject: {
                    ...state.fileListObject,
                    [state.currentFileName]: actions.payload,
                }
            }
        default:
            return {
                ...state
            }
    }
}