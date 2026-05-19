import * as ptk from '../types/ptok';

export function contextLost(): ptk.Event {
  return ptk.reify("context-lost", ptk.UpdateEvent, {
    update(state: any) {
      return {
        ...state,
        renderState: {
          ...state.renderState,
          lost: true
        }
      };
    }
  });
}

export function contextRestored(): ptk.Event {
  return ptk.reify("context-restored", ptk.UpdateEvent, {
    update(state: any) {
      const { lost, ...renderState } = state.renderState;
      return {
        ...state,
        renderState
      };
    }
  });
}