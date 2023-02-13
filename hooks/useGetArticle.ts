import axios from "axios"
import { useQuery } from "react-query"
import { ArticleType } from "types/ArticleType"

export const useGetArticle = () => useQuery<ArticleType[]>(['getArticles'], async ({ pageParam = 1 }) => {
    return axios.get('api/articles123').then(response => response.data)
}, {
    getNextPageParam: () => { }
})