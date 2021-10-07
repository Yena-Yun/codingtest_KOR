const INITIAL_STATE = [];

export function cart(state = INITIAL_STATE, action) {
  if (action.type === 'addBeer') {
    let idx = state.findIndex((beer) => beer.id === action.payload.id);
    if (idx >= 0) {
      alert('이미 장바구니에 추가된 품목입니다.');
    }
    return [...state, action.payload];
  } else if (action.type === 'removeBeer') {
    return [...state.filter((beer) => beer.id !== action.payload.id)];
  } else {
    return state;
  }
}
