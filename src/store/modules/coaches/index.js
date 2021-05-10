import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: 'c1',
          firstName: 'Ori',
          lastName: 'Melamed',
          areas: ['frontend', 'career'],
          description:
            "I'm Ori and I've worked as a junior developer",
          hourlyRate: 30
        },
        {
          id: 'c2',
          firstName: 'Amit',
          lastName: 'Melamed',
          areas: ['Backend', 'career'],
          description:
            "I'm Amit and I've worked as a junior backend developer",
          hourlyRate: 30
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
