import { articles_url, language, country_code, _api_key } from '../config/rest_consfig';
import nextId from "react-id-generator";

export async function getArticles(category='general') {

    try {
        let articles = await fetch(`${articles_url}?category=${category}&language=${language}`,{
            headers:{
                'X-Api-Key':_api_key
            }
        });

        let result = await articles.json();
        articles = null;

        result.articles.forEach(item => {
            item.id = nextId();
        });

        return result.articles;
    }
    catch(error) {
        throw error;
    }
}