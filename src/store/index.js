import Vue from 'vue';
import Vuex from 'vuex';
import search from './search';
import audio from './audio';
import home from './home';
import play from './play';
import user from './user';
import genres from './genres';
import sidebar from './sidebar';
import createLogger from 'vuex/dist/logger';
import VuexPersistence from 'vuex-persist';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

const store = new Vuex.Store({
  modules: {
    // new
    genres,
    sidebar,
    // old
    search,
    audio,
    home,
    play,
    user,
  },
  strict: debug,
  plugins: debug ? [createLogger(), vuexLocal.plugin] : [vuexLocal.plugin],
});

export default store;
