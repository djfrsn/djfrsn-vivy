import {
  ON_VIEW_DETAILS } from 'constants';

export default function zoomer(state={
  animate: false }, action={}) {
  switch (action.type) {
    case ON_VIEW_DETAILS:
      return Object.assign({}, state, {
        animate: action.animate
      });
    default:
      return state;
  }
}