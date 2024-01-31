import express from "express";
import fetch from "node-fetch";
import dotenv from 'dotenv'

const app = express();
const port = process.env.PORT || 3001;

dotenv.config()

const response = await fetch('https://id.twitch.tv/oauth2/token?client_id=' + process.env.NEXT_PUBLIC_client_id + '&client_secret=' + process.env.NEXT_PUBLIC_secret + '&grant_type=client_credentials', {
  method: 'POST',
  cache: 'no-cache'
})

const authenObj = await response.json();
console.log(authenObj.access_token)

app.use(express.json());

app.post("/api/proxy", async (req, res) => {

  try {
    const { url, body, cache } = req.body;
    //console.log('From Server.mjs: Got these: ',url, body, req.method)

    // Make a request to the restricted API
    const apiResponse = await fetch(url, {
      method: req.method, // Use the same HTTP method as the browser's request
      headers: {
        'Client-ID': process.env.NEXT_PUBLIC_client_id,
        'Authorization': 'Bearer ' + authenObj.access_token,
      },
      body: body,
      cache: cache,
    });


    // Get the response data from the restricted API
    const apiData = await apiResponse.json();
    //console.log('From Server.mjs: ', apiData)
    // Send the API response back to the browser
    res.status(apiResponse.status).json(apiData);
  } catch (error) {
    res.status(500).json({ error: "Proxy request failed" });
  }
});

// Start the Express server
app.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);

});


