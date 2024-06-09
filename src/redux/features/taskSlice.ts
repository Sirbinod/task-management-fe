import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IInitialState } from '../../interfaces/general';
import { apiRequest } from '../../requests';
import { API_LIST, API_METHODS } from '../../requests/apiList';
import { RootState } from '../store';

const initialState: IInitialState = {
  status: null,
  loading: false,
  data: { tasks: [], totalTasks: 1, currentPage: 1, totalPages: 1 },
  message: null,
  error: undefined,
};

export const fetchData = createAsyncThunk('tasks/fetchData', async (query: string) => {
  try {
    const response = await apiRequest({ url: `${API_LIST.task}?${query}`, method: API_METHODS.get }, {});
    return response?.data?.data;
  } catch (error) {
    throw error;
  }
});

export const createData = createAsyncThunk('tasks/createData', async (newData: any) => {
  try {
    const response = await apiRequest({ url: `${API_LIST.task}`, method: API_METHODS.post }, newData);
    return response?.data?.data;
  } catch (error) {
    throw error;
  }
});

export const updateData = createAsyncThunk('tasks/updateData', async (updatedData: any) => {
  try {
    const response = await apiRequest(
      { url: `${API_LIST.task}/${updatedData.id}`, method: API_METHODS.put },
      updatedData,
    );
    return response?.data?.data;
  } catch (error) {
    throw error;
  }
});

export const deleteData = createAsyncThunk('tasks/deleteData', async (id: number) => {
  try {
    await apiRequest({ url: `${API_LIST.task}/${id}`, method: API_METHODS.delete }, {});
    return id; // Return the deleted id for reducer to remove from state
  } catch (error) {
    throw error;
  }
});

const TaskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(createData.fulfilled, (state, action) => {
        state.loading = false;
        state.data.tasks.push(action.payload);
      })
      .addCase(createData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(updateData.fulfilled, (state, action) => {
        state.loading = false;
        // Find and update the specific item in the data array
        state.data.tasks = state.data.tasks.map((item: any) => (item.id === action.payload.id ? action.payload : item));
      })
      .addCase(updateData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteData.pending, (state) => {
        state.loading = true;
        state.error = undefined;
      })
      .addCase(deleteData.fulfilled, (state, action) => {
        state.loading = false;
        // Remove the deleted item from the data array
        state.data.tasks = state.data.tasks.filter((item: any) => item.id !== action.payload);
      })
      .addCase(deleteData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// Define a combined selector
export const selectTasksState = (state: RootState) => ({
  loading: state.tasks.loading,
  error: state.tasks.error,
  data: state.tasks.data,
});

export default TaskSlice.reducer;
