import * as types from 'constants';

export function viewDetails() {
  return {
    type: types.ON_VIEW_DETAILS,
    animate: true
  };
}