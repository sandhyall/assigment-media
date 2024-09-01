import { createSlice } from '@reduxjs/toolkit'

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    width: 40,
    height: 40,
    backgroundColor: 'blue',
    borderRadius: 0,
    padding:20,
    margin:20,
    marginLeft:20,
    marginRight:20,
    marginTop: 10

  },
  reducers: {
    changeToShape: (state, action) => {
      if(state.borderRadius == '50%'){
        state.borderRadius=0
      }else{
        state.height=state.width
        state.borderRadius= '50%'
      }
    },
 
increaseWidth: (state, action) => {
  return{
    ...state,
    width:state.width+20
  }
   },
   decreaseWidth: (state, action) => {
    return{
      ...state,
      width:state.width-20
    }
 },
//    changeTorectangle: (state, action) => {
//     state.height=state.width
//     state.borderRadius= '0%'
//  },
    changebackgroundColor:(state,action)=>{
      state.backgroundColor=action.payload
    },
    moveRight: (state, action) => {
      state.marginLeft= state.marginLeft+20
    },
    moveLeft: (state, action) => {
      state.marginLeft= state.marginLeft-20
    },
    moveBottom: (state, action) => {
      state.marginTop =  state.marginTop +10
    },
    moveUp: (state, action) => {
      state.marginTop =  state.marginTop -10
    },
    
  }
})


export const { changeToShape,increaseWidth, decreaseWidth,changeTorectangle,changebackgroundColor,moveRight,moveLeft,moveUp,moveBottom } = boxSlice.actions

export default boxSlice.reducer