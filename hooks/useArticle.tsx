import { useInfiniteQuery } from "react-query";

export const useArticle = useInfiniteQuery(['getArticles'], ({pageParam = 1}) => {
    fetch('').then(res => res.json())
})