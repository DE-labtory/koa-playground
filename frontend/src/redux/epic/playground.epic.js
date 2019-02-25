import { of, from } from 'rxjs';
import { combineEpics, ofType } from 'redux-observable';
import { switchMap, map, catchError } from 'rxjs/operators';

import AT from '../constants';
import { compile, deploy, run } from '../api/playground.api';

const compileEpic = action$ => (
    action$.pipe(ofType(AT.COMPILE),
        switchMap(code => from(compile(code))
            .pipe(map(payload => ({
                type: AT.COMPILE_SUCCESS,
                payload: payload.data,
            })),
            catchError(payload => of({
                type: AT.COMPILE_ERROR,
                payload: payload.data,
            }))))));

const deployEpic = action$ => (
    action$.pipe(ofType(AT.DEPLOY),
        switchMap(rawByteCode => from(deploy(rawByteCode))
            .pipe(map(payload => ({
                type: AT.DEPLOY_SUCCESS,
                payload: payload.data,
            })),
            catchError(payload => of({
                type: AT.DEPLOY_ERROR,
                payload: payload.data,
            }))))));

const runEpic = action$ => (
    action$.pipe(ofType(AT.RUN),
        switchMap(address => from(run(address))
            .pipe(map(payload => ({
                type: AT.RUN_SUCCESS,
                payload: payload.data,
            })),
            catchError(payload => of({
                type: AT.RUN_ERROR,
                payload: payload.data,
            }))))));

export default combineEpics(
    compileEpic,
    deployEpic,
    runEpic,
);
