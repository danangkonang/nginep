const initialState = {
   data: [],
   isLoading: false
 }
 
 const user = (state = initialState, action) => {
   switch (action.type) {
     case 'GET_USERS':
       return {
         ...state,
         data: action.payload,
         isLoading: false
       }
     case 'GET_USERS_PENDING':
       return {
         ...state,
         isLoading: true
       }
      case 'reset':
        return state;
     default:
       return state;
   }
 }
 
 export default user;