
const apiKey = '19B5B1KbY7NstETrqnE05DunzVRVlV9G&q'

export default function getGifs({ keyword = 'morty' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}=${keyword}&limit=10&offset=0&rating=pg-13&lang=es`

    return fetch(apiURL)
        .then((res) => res.json())
        .then(response => {
            const { data } = response;
            const gifs = data.map(image => {
                const { images, title, id } = image;
                const { url } = image.images.downsized_medium;
                return { title, id, url, images };
            })
            return gifs;
        })
}
