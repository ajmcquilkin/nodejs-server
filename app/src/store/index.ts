import { combineReducers, Reducer, Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

/**
 * Top-level state shape of the Redux store
 */
export interface RootState {
  // Add reducers and shapes here
}

const createRootReducer = (): Reducer => combineReducers<RootState>({

});

/**
 * A generic type that can be used when creating functions that dispatch redux actions
 */
export type ThunkActionType<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default createRootReducer;
