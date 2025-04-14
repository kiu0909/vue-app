import axios from "axios";
import type { Ref } from "vue";

export const useFetcher = () => {
  const fetcher = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: { "Content-type": "application/json" },
  });

  // リクエスト直前にtoken設定を挟む
  fetcher.interceptors.request.use(async (config) => {
    const { token } = useLoginStore();
    if (token !== "") config.headers.Authorization = token;
    return config;
  });

  // レスポンス直後、error_listに格納されていたらconsole.errorを実行
  fetcher.interceptors.response.use(
    (response) => {
      if (response.data.error_list) {
        console.error(response.data.error_list[0].errMsg);
        return Promise.reject({ message: response.data.error_list[0].errMsg });
      }
      if (response.data.Message) {
        console.warn(response.data.Message);
      }
      // httpのstatus codeが400番500番台の場合エラーにする
      if (response.status >= 400) {
        return Promise.reject({
          message: "http status code error :" + response.status,
        });
      }
      return response;
    },
    (err) => {
      console.error(err);
      return Promise.reject(err);
    }
  );

  return { fetcher };
};
