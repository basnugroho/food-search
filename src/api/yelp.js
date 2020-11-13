import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer cTPJ2tWEPFKUtPwHRR6HSlbize1Ts9vVzkgB2WEu6uYs2EBmu3PmetE6Wkqbz9Pr0iPESkC5YCAQqZRjr8BDqdNxtFM-K7R42Cdvr9iwmfWJtOavpGV275YpiFKuX3Yx'
    }
})

// Client ID
// z2pvdBT0ifqZmOMEs3CA_w
