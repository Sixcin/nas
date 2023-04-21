import { isRef, ref, Ref, unref, watchEffect } from "vue";
import axios, { AxiosRequestConfig } from "axios";

interface FetchResult {
  data: Ref;
  error: Ref<Error | null>;
  retry: () => void;
}

export default function (
  url: string | Ref<string>,
  config?: AxiosRequestConfig | Ref<AxiosRequestConfig>
): FetchResult {
  const data = ref(null) as Ref;
  const error = ref(null) as Ref<Error | null>;
  const urlValue = unref(url);
  const configValue = unref(config);

  function doAxios() {
    data.value = null;
    error.value = null;

    (async () => {
      try {
        const response = await axios(urlValue, configValue);

        data.value = response.data;
      } catch (e) {
        error.value = e as Error;
      }
    })();
  }

  if (isRef(url)) {
    watchEffect(doAxios);
  } else {
    doAxios();
  }

  return { data, error, retry: doAxios };
}
