import {
  ADD,
  ADDFAV,
  ADDORDER,
  CHANGESTATUS,
  DELETE,
  LOGIN,
  LOGOUT,
  REMOVEFAV,
} from "./userTypes";

const initialState = {
  logedUserId: null,
  allUsers: [
    {
      id: "123-432-123",
      name: "User",
      email: "test@gmail.com",
      password: "test123",
      role: "user",
      card: [],
      favourite: [],
      orders: [],
    },
    {
      id: "654-312-680",
      name: "User2",
      email: "test2@gmail.com",
      password: "test123",
      role: "user",
      card: [],
      favourite: [],
      orders: [],
    },
    {
      id: "984-193-021",
      name: "Admin",
      email: "admin@gmail.com",
      password: "admin123",
      role: "admin",
      card: [],
      favourite: [],
      orders: [],
    },
  ],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        logedUserId: action.payload,
      };

    case LOGOUT:
      return {
        ...state,
        logedUserId: null,
      };

    case ADD:
      const exist = state.allUsers
        .find((user) => user.id === action.payload.userId)
        .card.find(
          (item) =>
            item.id === action.payload.item.id &&
            item.options.title === action.payload.item.options.title
        );

      if (exist) {
        return {
          ...state,
          allUsers: state.allUsers.map((user) =>
            user.id !== action.payload.userId
              ? user
              : {
                  ...user,
                  card: user.card.map((product) =>
                    product.id !== action.payload.item.id
                      ? product
                      : {
                          ...product,
                          qty: product.qty + action.payload.item.qty,
                        }
                  ),
                }
          ),
        };
      } else {
        return {
          ...state,
          allUsers: state.allUsers.map((user) =>
            user.id !== action.payload.userId
              ? user
              : { ...user, card: [...user.card, action.payload.item] }
          ),
        };
      }
    case DELETE:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id !== action.payload.userId
            ? user
            : {
                ...user,
                card: user.card.filter(
                  (product) =>
                    !(
                      product.id === action.payload.item.id &&
                      product.options.title ===
                        action.payload.item.options.title
                    )
                ),
              }
        ),
      };

    case ADDFAV:
      const isExist = state.allUsers
        .find((user) => user.id === action.payload.userId)
        .favourite.find((item) => item.id === action.payload.item.id);

      if (!isExist) {
        return {
          ...state,
          allUsers: state.allUsers.map((user) =>
            user.id !== action.payload.userId
              ? user
              : {
                  ...user,
                  favourite: [...user.favourite, action.payload.item],
                }
          ),
        };
      } else {
        return {
          ...state,
        };
      }
    case REMOVEFAV:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id !== action.payload.userId
            ? user
            : {
                ...user,
                favourite: user.favourite.filter(
                  (product) => product.id !== action.payload.productId
                ),
              }
        ),
        // ...state,
        // favItems: state.favItems.filter((item) => item.id !== action.payload),
      };
    case ADDORDER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id !== action.payload.userId
            ? user
            : {
                ...user,
                card: [],
                orders: [...user.orders, action.payload.item],
              }
        ),
      };
    case CHANGESTATUS:
      return {
        ...state,
        allUsers: state.allUsers.map((user) =>
          user.id !== action.payload.userId
            ? user
            : {
                ...user,
                orders: user.orders.map((order) =>
                  order.orderId !== action.payload.orderId
                    ? order
                    : { ...order, status: "Delivered" }
                ),
              }
        ),
      };

    default:
      return state;
  }
};

export default userReducer;
