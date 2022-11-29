import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../../store';
import {fetchNasaImagesAPI} from '../../api/NasaImagesApi';
import NasaImagesAPIResponse from '../../api/NasaImagesAPIResponse';

export interface NasaImagesState {
  nasaImagesData: NasaImagesAPIResponse;
  nasaSearchText: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: NasaImagesState = {
  nasaImagesData: {} as any as NasaImagesAPIResponse,
  nasaSearchText: '',
  status: 'idle',
};

export const searchAsync = createAsyncThunk(
  'nasaImages/fetchNasaImagesAPI',
  async (text: string) => await fetchNasaImagesAPI(text),
);

export const nasaImagesSlice = createSlice({
  name: 'nasaImages',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(searchAsync.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.nasaSearchText = action.meta.arg;
        state.nasaImagesData = action.payload;
      })
      .addCase(searchAsync.rejected, state => {
        state.status = 'failed';
      });
  },
});

export const selectNasaImagesData = (state: RootState) =>
  state.nasaImages.nasaImagesData;
export const selectNasaSearchText = (state: RootState) =>
  state.nasaImages.nasaSearchText;

export default nasaImagesSlice.reducer;
