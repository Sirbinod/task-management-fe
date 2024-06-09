import { AsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/general';

const initialState: IInitialState = {
  status: null,
  loading: false,
  data: null,
  message: null,
  error: undefined,
};

export const defaultSlice = (sliceName: string, makeApiRequest: AsyncThunk<any, void, any>) => {
  return createSlice({
    name: sliceName,
    initialState: initialState,
    reducers: {
      resetUsersList: (state) => {
        state.data = null;
        state.message = 'Users Cleared Successfully!';
        state.status = null;
      },
    },
    extraReducers: (builder) => {
      builder.addCase(makeApiRequest.pending, (state) => {
        state.status = 100;
      });
      builder.addCase(makeApiRequest.fulfilled, (state, action) => {
        state.status = 1;
        state.data = action.payload;
        state.message = action.payload.msg ?? 'Success';
      });
      builder.addCase(makeApiRequest.rejected, (state) => {
        state.status = 0;
        state.data = null;
        state.message = 'Failed';
      });
    },
  });
};
