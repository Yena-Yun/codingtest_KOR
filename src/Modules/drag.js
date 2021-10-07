const INITIAL_STATE = [];

export function drag(state = INITIAL_STATE, action) {
  if (action.type === 'columnDrag') {
    console.log(action.payload); // 드래그 결과가 반영된 배열 반환

    return [...action.payload];
  } else {
    return state;
  }
}
