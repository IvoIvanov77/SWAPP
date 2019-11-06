import { LOCAL_STORAGE_ITEMS, COLOR_THEMES } from '../util/constants';

const storedColorTheme = localStorage.getItem(LOCAL_STORAGE_ITEMS.COLOR_THEME);
const authToken = localStorage.getItem(LOCAL_STORAGE_ITEMS.AUTH_TOKEN);

const initialData = {
  colorTheme: storedColorTheme ? storedColorTheme : COLOR_THEMES.LIGHT_THEME,
  isSessionExpired: false,
  authenticated: !!authToken,
  errorMessage: '',
};

export default initialData;
