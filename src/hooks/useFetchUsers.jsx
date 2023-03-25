export const useFetchUsers = async (url, setState) => {
    const request = await fetch(url);
    const response = await request.json();
    setState(response.data);
    return response.data;
};