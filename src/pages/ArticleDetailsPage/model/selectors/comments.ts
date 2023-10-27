import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleCommentsIsLoading = (state: StateSchema) => state.ArticleDetailsComments?.isLoading;
export const getArticleCommentsError = (state: StateSchema) => state.ArticleDetailsComments?.error;
