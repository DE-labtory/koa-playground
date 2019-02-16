import AT from '../constants';

const initState = {
    currentFile: '',
    fileList: {
        'koa.txt': 'koa is something bla bla',
        'koa-playground.txt': 'hey yo',
        'koa-hello.txt': 'this is something',
    },
}

export default (state = initState, action) => {
    switch(action.type) {
        case AT.ADD_FILE:
            return {
                ...state,
                fileList: {
                    ...state.fileList, 
                    [action.payload]: ''
                },
            }
        case AT.GET_FILE:
        case AT.UPDATE_FILE:
        case AT.DELETE_FILE:
            delete state.fileList[action.payload];
            return {
                ...state,
                fileList: {
                    ...state.fileList
                },
            }
        case AT.SELECT_FILE:
            return {
                ...state,
                currentFile: action.payload,
            }
        default:
            return {
                ...state
            }
    }
}