// export {}
export const useHttp = () => {

    interface IRequestHeaders {
        [key: string]: string
    }

    const request = async (url: string, method = 'GET', body = null, headers: IRequestHeaders = { 'Content-Type': 'application/json' }) => {

        try {
            const response = await fetch(url, { method, body, headers });

            if (!response.ok) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }

            const data = await response.json();
            console.log(data);
            return data;
        } catch (e) {
            throw e;
        }
    };

    return { request }
}