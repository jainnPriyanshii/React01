import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData();
    return (
        <main>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
        <img src={data.avatar_url} alt="Git picture" width={300} />
        </div>
        </main>
      )
    }
     
    export default Github
    export const githubInfo = async () =>{
        const response = await fetch("https://api.github.com/users/jainnPriyanshii")
        const data = await response.json();
        console.log(data);
        return data;
      }
