

const  TodoReducer = (state,payload)=>{
    switch (payload.type) {
      case "GET_TODO":
        
        return [...state,...payload.todo];

      case "UPDATE_TODO":
       let [uploadele] = state.filter((ele)=> ele.id === payload.id);

       uploadele = {...uploadele,title:payload.title};
       return [...state,uploadele]

      default:
        return state;
    }
}

export default TodoReducer;