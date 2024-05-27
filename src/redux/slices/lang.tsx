import { createSlice } from '@reduxjs/toolkit';

type ThemeType = {
  languages: object[];
  defaultLang: string;
};

const initialState: ThemeType = {
  languages: [
    { locale: 'EN', shortcode: 'en' },
    { locale: 'RU', shortcode: 'ru' },
    { locale: 'UZ', shortcode: 'uz' },
  ],
  defaultLang: localStorage.getItem('i18nextLng') || 'ru',
};

const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeDefaultLang(state, action) {
      state.defaultLang = action.payload;
    },
  },
});

export const { changeDefaultLang } = languageSlice.actions;
export default languageSlice.reducer;
