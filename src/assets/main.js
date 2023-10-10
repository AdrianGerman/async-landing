const API =
  "https://youtube-v31.p.rapidapi.com/search?channelId=UCzY1-NKVNDA4UpE4MmTq0eg&part=snippet%2Cid&order=date&maxResults=7";

const content = null || document.getElementById("content");

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "8a51869689msh9d7845173c69b9ep155cb0jsn4a11a0272091",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

async function fetchData(urlApi) {
  const respone = await fetch(urlApi, options);
  const data = await respone.json();
  return data;
}

async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.item
      .map(
        (video) => `
    <div class="group relative">
    <div
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
    </div>
    <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
            <span aria-hidden="true"
                class="absolute inset-0"></span>
            ${video.snippet.title}
        </h3>
    </div>
    </div>
    `
      )
      .slice(0, 4)
      .join("")} `;
  } catch {}
};
