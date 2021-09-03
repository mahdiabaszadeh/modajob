// import axios from "axios";

export const CHANGE_STATE_ACTION = "CHANGE_STATE_ACTION";

export function updateShowFilter(payload) {
  return {
    type: CHANGE_STATE_ACTION,
    payload,
  };
}

// export const updateShowFilterAfterOneSecond = (val) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(updateShowFilter(val));
//     }, 1000);
//   };
// };

// export const testThunkAction = (val) => {
//   return async (dispatch) => {
//     try {
//       debugger;
//       const result = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts/1"
//       );
//       setTimeout(() => {
//         dispatch(updateShowFilter(val));
//       }, 1000);
//       // you can dispatch any action here or call another api or whatever.
//     } catch (error) {
//       // you can call for you error handler here.
//     }
//   };
// };
