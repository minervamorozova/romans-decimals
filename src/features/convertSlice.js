import { createSlice } from '@reduxjs/toolkit'
import {numberToRoman, romanToNumber, romanValidator} from "./romantonum"
import swal from "sweetalert"; 

export const convertSlice = createSlice({
  name: 'convert',
  initialState: {
    value: '',
  },
  reducers: {
    romanToDecimal: (state, action) => {
      if(romanValidator(action.payload)){
        state.value = romanToNumber(action.payload);
      }else{
        swal("Invalid string");
        console.log("Invalid number");
      }
      console.log(action.payload);
    },
    decimalToRoman: (state, action) => {
      if(action.payload<=3999&&action.payload>0){
        state.value = numberToRoman(action.payload);
      }else{
        swal("Invalid number");
        console.log("Invalid number");
      }
      
    }
  },
})

export const { romanToDecimal, decimalToRoman } = convertSlice.actions

export default convertSlice.reducer