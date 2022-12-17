async function getVideos(offset = 0, limit = 5) {
  // https://developers.google.com/youtube/v3/docs/playlistItems
  const playlistItems = (await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?key=${process.env.API_KEY_YOUTUBE}&playlistId=PLrY8SmqJ5XZ_UvVurEvGg8i10g-cxMudZ&maxResults=50&part=snippet`) // eslint-disable-line max-len
    .then(resp => resp.json()))
    .items.map(item => item.snippet)
    .reverse()
    .slice(offset, offset + limit);

  // TODO handle array length overflow!!!!
  return playlistItems;
}

export { getVideos };