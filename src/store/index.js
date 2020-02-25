import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
const initState={
    list:[],//所有数据
    count:[],
    price:[],
    children:[]

}
const render=(state=initState,action)=>{
  return {
      
  }
}
const store=createStore(render,applyMiddleware(thunk))
export default store