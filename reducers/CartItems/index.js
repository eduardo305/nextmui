const initialState = {
  items: [],
  qty: 0,
  total: 0,
};

let existingItem = undefined;

const cartItemsReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }

          return {
            ...item,
            qty: item.qty + 1,
          };
        });

        return {
          ...state,
          items: [...updatedItems],
          qty: state.qty + 1,
          total: state.total + action.payload.product.currentPrice,
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
          qty: state.qty + 1,
          total: state.total + action.payload.product.currentPrice,
        };
      }

    case 'remove':
      existingItem = state.items.find((item) => item.id === action.payload.id);

      if (state.qty === 0) {
        return state;
      } else {
        if (existingItem) {
          const updatedItems = state.items.map((item) => {
            if (item.id !== action.payload.id) {
              return item;
            }

            return {
              ...item,
              qty: item.qty - 1,
            };
          });

          return {
            ...state,
            items: [...updatedItems],
            qty: state.qty - 1,
            total: state.total - action.payload.product.currentPrice,
          };
        } else {
          return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload.id),
            qty: state.qty - 1,
            total: state.total - action.payload.product.currentPrice,
          };
        }
      }

    case 'setItems':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export { cartItemsReducer, initialState };
