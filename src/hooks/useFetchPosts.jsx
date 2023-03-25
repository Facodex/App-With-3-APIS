export const useFetchPosts = async(setState, setLoader, setCounter) => {
    setLoader(true);
    const request = await fetch('https://jsonplaceholder.typicode.com/posts');
    const response = await request.json();
    setTimeout(() => {
      setLoader(false);
      setState(response);
      setCounter(10)
    }, 2000);
  }