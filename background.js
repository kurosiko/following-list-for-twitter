console.log("loaded")
browser.webRequest.onCompleted.addListener((detail) => {    
    
    },
    {
        urls:["https://twitter.com/i/api/*"]
    },
    []
)
