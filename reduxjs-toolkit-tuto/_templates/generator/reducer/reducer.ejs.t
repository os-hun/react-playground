---
to: src/reducers/<%= reducer_name %>.ts
---
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface State {}

const initialState: State = {}

export const <%= reducer_name %> = createSlice({
  name: '<%= reducer_name %>',
  initialState,
  reducers: {},
});

export default <%= reducer_name %>.reducer;
