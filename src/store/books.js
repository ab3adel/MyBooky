import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import { data } from "./mockdata";


export const fetchBooks =createAsyncThunk('books/fetchBooks',async ()=>{
 
  const response = await fetch('http://192.168.1.4:3000/api/getallbooks', {
    method:'GET'
  })
  return response.json()
})
let bookdata = data.data;

const booksSlicer = createSlice({
  name: "booksSlicer",
  initialState: {
    booksList: bookdata,
    savedBooks: [],
    purshasedItems: [],
    comments: [],
    itemsToShow: [],
    bookDetail: {},
  },

  reducers: {
    getBookDetails: (state, action) => {
      for (let i = 0; i < state.booksList.length; i++) {
        let obj = state.booksList[i].filter((ele) => ele.id === action.payload);
        if (obj[0]) {
          state.bookDetail = obj[0];
          break;
        }
      }
    },
    saveBook: (state, action) => {
      let item = null;
      let item_index = -1;

      for (let i = 0; i < state.booksList.length; i++) {
        let obj = state.booksList[i]
          .map((ele, index) => {
            if (ele.id === action.payload && !ele.saved) {
              item_index = index;
              return ele;
            }
            return null;
          })
          .filter((ele) => ele);
        if (obj[0] && item_index !== -1) {
          item = obj[0];
          state.booksList[i][item_index]["saved"] = true;
          break;
        }
      }
      if (item) state.savedBooks.push(item);
    },
    addToCart: (state, action) => {
      state.purshasedItems.push(action.payload);
    },
    addComment: (state, action) => {
     
     state.booksList.forEach((ele,mainIndex)=>{
      ele.forEach((elem,subIndex)=>{
        if (elem.id === action.payload.id) {
         console.log('books',state.booksList[mainIndex][subIndex].details.comments)
          state.booksList[mainIndex][subIndex].details.comments.push({name:'Mohammad Ismaeel',text:action.payload.text})
          state.bookDetail.details.comments.push({name:'Mohammad Ismaeel',text:action.payload.text})
          
        }
      })
     
     })
    },
    showCart: (state, action) => {
      let items_to_show = [];

      state.booksList.map((ele, mainIndex) => {
        ele.map((ele, subMainIndex) => {
          if (state.purshasedItems.includes(ele.id)) {
            state.itemsToShow.push(state.booksList[mainIndex][subMainIndex]);
          }
        });
      });
    },
    removeFromCart: (state, action) => {
      let newPurshased = state.purshasedItems.filter(
        (ele) => ele !== action.payload
      );
      let newItemToShow = state.itemsToShow.filter(
        (ele) => ele.id !== action.payload
      );
      state.purshasedItems = newPurshased;
      state.itemsToShow = newItemToShow;
    },
    removeSavedBook: (state, action) => {
      state.booksList.map((ele, mainIndex) => {
        ele.map((ele, subMainIndex) => {
          if (ele.id === action.payload) {
            state.booksList[mainIndex][subMainIndex]["saved"] = false;
          }
        });
      });
      let newSavedBook = state.savedBooks.filter(
        (ele) => ele.id !== action.payload
      );
      state.savedBooks = newSavedBook;
    },
  },
  extraReducers(builder ) {
    builder.addCase(fetchBooks.rejected,(state,action)=>{
      console.log('failed',action)
    })
    builder.addCase(fetchBooks.pending,(state,action)=>{
      console.log('fetching ...')
    })
    builder.addCase(fetchBooks.fulfilled, (state,action)=>{
      console.log('fetched successfully',action.payload)
    })
  }
});
export const {
  saveBook,
  addComment,
  removeFromCart,
  showCart,
  addToCart,
  getBookDetails,
  removeSavedBook,
} = booksSlicer.actions;

export default booksSlicer.reducer;
