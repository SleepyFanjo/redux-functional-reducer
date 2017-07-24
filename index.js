export default function createReducer (initialState, handlers) {
  return function (state, action) {
    if (state === undefined) {
      state = initialState
    }
    if (action === undefined) {
      action = {}
    }

    if ('type' in action) {
      return handlers[action.type]
        ? handlers[action.type](state, action)
        : state
    }

    return state
  }
}

