export const fetchShow = async () => {
    try {
        let link = `https://api.tvmaze.com/search/shows?q=all`;
        const response = await fetch(link);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
    }
}