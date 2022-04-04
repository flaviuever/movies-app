const apiConfig = {
    baseUrl: "https://api.themoviedb.org/3/",
    apiKey: '49e800de027955c63868eb9e24ba6ba9',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/w500/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/p/${imgPath}`
}

export default apiConfig;