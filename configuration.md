# Configuration

Before running the Bardie application, you need to obtain the following configuration values: `SECURE1PSID` and `AT_KEY`. These values are required for interacting with the Bard AI service.

## Getting `SECURE1PSID`

1. Open Google Chrome and navigate to the Bard AI web interface.
2. Log in to your Bard AI account.
3. Open the browser's developer tools by right-clicking on the page and selecting "Inspect" or by using the keyboard shortcut `Ctrl + Shift + I`.
4. In the developer tools panel, go to the "Application" tab.
5. Copy the value of the `__Secure-1PSID` cookie. This value is the `SECURE1PSID` you need for configuration.
![at key](https://cdn.discordapp.com/attachments/641007917721583637/1120371541947990036/image.png)

## Getting `AT_KEY`

To capture requests using Postman and obtain the `AT_KEY` value, follow these steps:

1. - Install Postman: If you haven't already, download and install Postman from the official website (https://www.postman.com/downloads/).
    - Install Postman Interceptor for your browser. 
2. Launch Postman: Open Postman on your machine.
3. Enable Capture Requests: In the bottom right corner of the Postman window, you'll see a "Capture Requests" button. Click on it to enable request capturing. When it's active, the button will be highlighted.
4. Start Capturing Requests: Once the capture requests feature is enabled, choose Via Interceptor. Postman will start capturing requests made from your browser.
5. Interact with Bard AI: In your preferred web browser, navigate to the Bard AI service or any webpage that interacts with it. Perform actions, submit questions, or engage with the Bard AI in any way you desire.
6. Capture Relevant Request: Postman will capture the requests made by your browser. Look for the request that contains the `at` value you need.
7. Inspect Request Details: Select the captured request from the list to view its details. You can expand the request to see the headers, and body.
![at key](https://cdn.discordapp.com/attachments/641007917721583637/1120368730409545748/image.png)

8. Set AT_KEY as an Environment Variable: With the `AT_KEY` value copied, you can set it as an environment variable in your project. 

That's it! You can now use the captured `AT_KEY` value and the generated code snippet to incorporate the request into your application.

Note: Remember to stop capturing requests in Postman once you've obtained the necessary information.

## Configuration File

Once you have obtained the `SECURE1PSID` and `AT_KEY` values, create a `.env` file in the project directory and add the following content:

```
SECURE1PSID=<SECURE1PSID_VALUE>
AT_KEY=<AT_KEY_VALUE>
```

Make sure to replace `<SECURE1PSID_VALUE>` and `<AT_KEY_VALUE>` with the actual values you obtained. Remember to keep the `.env` file secure and do not share it publicly.

Now you are ready to run the Bardie application!

```
npm start
```

For more information about using Bardie, refer to the project's [readme.md](readme.md).
