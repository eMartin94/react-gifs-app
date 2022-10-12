
export const getGifs = async (cate) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(cate)}&limit=10&api_key=woPqNSQqPHEuxzGVEFhXuB1oiJdRf9CN`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}