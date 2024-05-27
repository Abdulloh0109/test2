import lang from './slices/lang';
import auth from './slices/auth';
import search from './slices/search';

const rootReducer = {
  auth,
  lang,
  search,
};

export default rootReducer;
