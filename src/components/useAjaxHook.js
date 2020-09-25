import axios from 'axios';

export default function useAjax (obj){

    // const [returnData, setReturnData] = useState([]);
  
    async function getAjax(url){
        console.log('inside of getAjax', url)
        return await axios.get(url)
    }
    
    async function postAjax(url, body){
        return await axios.post(url, body)
    }

    async function putAjax(url, body){
        console.log('this is in PUT AJAX ', url, body)
        return await axios.put(url, body);
    }

    async function deleteAjax(url, id){
        await axios.delete(url)
    }
 
    if(obj.method === 'get'){
        return getAjax(obj.url, obj.body);
       
    }
    else if(obj.method ==='post'){
        return  postAjax(obj.url, obj.body);
      
    }
    else if(obj.method ==='put'){
        putAjax(obj.url, obj.body)
    }
    else if(obj.method === 'delete'){
        deleteAjax(obj.url )
    }

    
 return {
    //  returnData,
     getAjax,
     putAjax,
     deleteAjax,
     postAjax,
 }

}

// Create a new custom hook called useAjax() to abstract the API calls
// Using this hook in your component should make the calls to the server
// This hook should:
// Accept the URL to the API server, the REST method, and (when relevant) the BODY (JSON) of the request
// Handle CORS Settings, Content-Type, Headers and possibly authentication
// You should use axios to perform the actual AJAX calls