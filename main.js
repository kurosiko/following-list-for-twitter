function del(){
    const tweets = document.getElementsByClassName("css-901oao r-1nao33i r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-1h8ys4a r-1jeg54m r-qvutc0")
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