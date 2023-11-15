import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IntroductionState {
  image: string;
  description: string;
}

const initialState: IntroductionState = {
  image: '',
  description: '',
};

const introductionSlice = createSlice({
  name: 'introduction',
  initialState,
  reducers: {
    updateIntroduction: (state, action: PayloadAction<IntroductionState>) => {
      state.image = action.payload.image;
      state.description = action.payload.description;
    },
  },
});

export const { updateIntroduction } = introductionSlice.actions;
export const selectIntroduction = (state: { introduction: IntroductionState }) => state.introduction;
export default introductionSlice.reducer;
