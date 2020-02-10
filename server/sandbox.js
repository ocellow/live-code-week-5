const axios = require('axios');
 
function getData() {
    return axios({
        method: 'POST',
        url: 'https://randomuser.me/'
    })
    .then(result =>{
        console.log(result);
    })
    .catch(err =>{
        console.log(err);
    })

}


getData()