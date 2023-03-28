export const useGetPokemons = async (url, setState, setLoader) => {
    setLoader(true);
    const request = await fetch(url);
    const response = await request.json();
    setInterval(() => {
      setLoader(false);
      setState(response.results)
    }, 2000);
  };