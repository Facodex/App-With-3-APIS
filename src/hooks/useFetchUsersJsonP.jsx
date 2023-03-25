export const useFetchUsersJsonP = async (url, setState, setLoader) => {
    const request = await fetch(url);
    const response = await request.json();
    setLoader(true);
    setTimeout(() => {
        setLoader(false);
        setState(response);
    }, 2000);
    return response;
};