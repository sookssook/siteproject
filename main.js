const API_KEY = '39efea7389304d74af7037b10a584fb8'
let news=[]
const getLatestNews= async()=>{
    const url = new URL(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`)
    console.log("uuu", url)
    const response = await fetch(url)
    const data = await response.json()
    news = data.articles
    console.log("ddd", news)
}
getLatestNews();
