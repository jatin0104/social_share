
const axios = require('axios');
require('dotenv').config();
async function postMessageAndLinkOnFacebook(pageAccessToken, message, link) {
    try {
        const response = await axios.post(`https://graph.facebook.com/v18.0/${pageAccessToken}/feed`, {
            message: message,
            link: link
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.status === 200) {
            console.log('Message and link posted successfully on Facebook.');
            console.log('Post ID:', response.data.id);
        } else {
            console.error('Failed to post message and link on Facebook.');
            console.error('Error:', response.statusText);
        }
    } catch (error) {
        console.error('Error:', error?.response);
    }
}

// Usage
// const pageAccessToken = process.env.PAGE_ID;
const pageAccessToken = process.env.PAGE_ACCESS_TOKEN;
const message = 'Hello, World!';
const link = 'https://www.example.com';

postMessageAndLinkOnFacebook(pageAccessToken, message, link);
