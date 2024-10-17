export default {
  routes: [
    {
      method: 'GET',
      path: '/content-summary',
      handler: 'content-summary.getSummary',
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};