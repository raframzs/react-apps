export const utilHttp = () => {
    const customFetch = (endpoint, options) => {
        // headers
        const defaultHeader = {
            accept: "application/json",
        };

        // Check down server API
        const controller = new AbortController();
        options.signal = controller.signal;

        // If the options object doesn't have a defined method
        // set it up the GET one
        options.method = options.method || "GET";

        // Merge default options and user options
        options.headers = options.headers
            ? { ...defaultHeader, ...options.headers}
            : defaultHeader;

        // Define the body in case that doesn't have
        options.body = JSON.stringify(options.body) || false;
        if (!options.body) delete options.body;

        //console.log(options);
        // abort if fetch is taking more than 1 second
        setTimeout(() => controller.abort(), 3000);

        return fetch(endpoint, options)
        .then((res) =>
        res.ok
          ? res.json()
          : Promise.reject({
              err: true,
              status: res.status || "00",
              statusText: res.statusText || "Ocurrió un error",
            })
        ).catch((err)=> err);
    };

    const GET = (url, options = {}) => customFetch(url, options);

    const POST = (url, options = {}) => {
        options.method = 'POST';
        return customFetch(url, options);
    };
    const PUT = (url, options = {}) => {
        options.method = 'PUT';
        return customFetch(url, options);
    };
    const DELETE = (url, options = {}) => {
        options.method = 'DELETE';
        return customFetch(url, options);
    };

    return {
        GET,
        POST,
        PUT,
        DELETE,
    };
};
