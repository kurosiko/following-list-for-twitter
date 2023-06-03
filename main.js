function del(){
    const tweets = document.getElementsByClassName("css-18t94o4 css-1dbjc4n r-1ny4l3l r-ymttw5 r-1f1sjgu r-o7ynqc r-6416eg")
    //const tweets = document.getElementsByClassName("css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1h8ys4a r-1jeg54m r-qvutc0")
    console.log(tweets)
    for (const tweet of tweets){
    tweet.remove()
    }
}

browser.runtime.onMessage.addListener((request,sender,res)=>{
    console.log(request)
    console.log(sender)
    console.log(res)
    res({})
    del()
}
)