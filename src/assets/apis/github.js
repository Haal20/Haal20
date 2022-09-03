import { gitUrl } from './api-urls.js'

export async function GETgitData() {
    try {
        const res = await fetch( gitUrl );
        const data = await res.json();
        return data
    } catch (error) {
        return error;
    }
}


// fetch(url)
//     .then(res => {return res.json()})
//     .then(json => {
//         setGitData(json)
//         console.log(json)
// })