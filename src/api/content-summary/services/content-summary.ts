import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::article.article', ({ strapi }) => ({
    // Custom service method to get a summary of published articles
    async getPublishedArticlesSummary() {
        try {
            // Count the number of published articles using parameters
            const publishedArticlesCount = await strapi.documents('api::article.article').count({ status: 'published' });

            return publishedArticlesCount;
        } catch (error) {
            throw new Error(`Error fetching published articles count: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
    }
}));