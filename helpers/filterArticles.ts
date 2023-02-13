import { ArticleType } from "types/ArticleType"

export const filterArticles = (searchString: string, listOfArticles: ArticleType[]) => {
    if (!searchString) return listOfArticles

    return listOfArticles.filter((article) => (
        article.date.toLowerCase().includes(searchString.toLowerCase()) || article.title.toLowerCase().includes(searchString.toLowerCase())
    ))
}