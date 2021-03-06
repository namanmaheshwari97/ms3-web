import {Action, ActionReducer} from '@ngrx/store';
import * as PropertiesActions from './properties.actions';
import * as Crud from './crud.reducer';
import {Properties} from '../_domains/properties';

const prefix = PropertiesActions.ACTION_NAME;
const INIT = 'INIT';
const initialState: Properties = {
  list: [],
  cursor: null
};

export function reducer(state = initialState, action: Action = {type: INIT}): Properties {
  switch (action.type) {
    case PropertiesActions.INCREASE_LIST:
      return {
        cursor: (<PropertiesActions.IncreaseList>action).payload.cursor,
        list: [...state.list, ...((<PropertiesActions.IncreaseList>action).payload.list)]
      };

    default:
      const newState = Crud.reducer(state, action, prefix, initialState);

      return newState === null ? initialState : newState;
  }
}
