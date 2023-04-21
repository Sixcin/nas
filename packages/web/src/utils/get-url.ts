export default function (params: string[] | string): string {
  const baseURL = import.meta.env.DEV
    ? window.location.origin.replace(
        import.meta.env.VITE_APP_WEB_BASE_PORT,
        import.meta.env.VITE_APP_API_BASE_PORT
      )
    : window.location.origin;

  if (Array.isArray(params)) {
    return `${baseURL}/${params.join("/")}`;
  }

  return `${baseURL}/${params}`;
}
