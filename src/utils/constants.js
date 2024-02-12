export const API_OPTIONS = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjU4ZWQwYjg4NTlmZTgyODYwMDgyMWQ0NTUxOTNmZiIsInN1YiI6IjY1YmUxYjg5YmE0ODAyMDE2MTY5NDYxZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QTmlGNkBtaBkTAHfIHbB8aBPMOzNuo9_JsGWR_lfLAA'
    }
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
  { identifier: "en", name: "English"},
  { identifier: "hindi", name: "Hindi"},
  { identifier: "spanish", name: "Spanish"}
];

export const OPENAI_KEY = "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";







// export const API_OPTIONS = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer ' + process.env.REACT_APP_TMDBAPI,
//   }
// };

// export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

// export const SUPPORTED_LANG = [
// { identifier: "en", name: "English"},
// { identifier: "hindi", name: "Hindi"},
// { identifier: "spanish", name: "Spanish"}
// ];

// export const OPENAI_KEY = process.env.REACT_APP_OPENAIKEY;