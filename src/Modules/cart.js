const INITIAL_STATE = [];

export function cart(state = INITIAL_STATE, action) {
  if (action.type === 'addBeer') {
    console.log(action.payload);
    console.log(action.payload.id);

    let idx = state.findIndex((beer) => beer.id === action.payload.id);
    console.log(idx);

    if (idx >= 0) {
      alert('이미 장바구니에 추가된 품목입니다.');
    }
    return [...state, action.payload];
  } else if (action.type === 'removeBeer') {
    return [...state, state.filter((el) => el.id !== action.payload.id)];
  } else {
    return state;
  }
}
