// 简单写一个types
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const ADD_MESSAGE = 'ADD_MESSAGE';


// 删除的actions
export function deleteMessage(id){
  return {
    type: DELETE_MESSAGE,
    payload: {id}
  }
}

// 添加message的action
export function addMessage(name,content,time){
  return {
    type: ADD_MESSAGE,
    payload: {name,content,time}
  }
}


