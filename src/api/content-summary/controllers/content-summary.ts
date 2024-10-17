export default {
  async getSummary(ctx) {
    try {
      // Fetch the total count of articles, authors, and categories
      const totalArticles = await strapi.query('api::article.article').count();
      const totalAuthors = await strapi.query('api::author.author').count();
      const totalCategories = await strapi.query('api::category.category').count();
      
      // Call the content summary service to get the count of published articles
      const totalPublishedArticles = await strapi.service('api::content-summary.content-summary').getPublishedArticlesSummary();

      // Return the data as the response
      ctx.body = {
        totalArticles,
        totalAuthors,
        totalCategories,
        totalPublishedArticles, // Use the service method result here
      };
    } catch (err) {
      // Handle any errors and respond with an appropriate error message
      ctx.body = {
        error: 'An error occurred while fetching the summary data',
        details: err instanceof Error ? err.message : 'Unknown error',
      };
      ctx.status = 500; // Set the HTTP status code to 500 to indicate a server error
    }
  },
};