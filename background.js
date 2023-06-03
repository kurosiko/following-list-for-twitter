console.log("loaded")
//特定の要素が画面内に入ったらという条件で書いてみる

const observer = new MutationObserver(()=>{
    console.log("wow")
})


/*
browser.webRequest.onCompleted.addListener((d) => {
    if (/https:\/\/twitter\.com\/i\/api\/graphql\/.*\/Following.*$/.test(d.url)) {
            console.log("てすと")//←ここ反応ない？//よくわからんけどとりあえずlogはでない...
            const act_tab = browser.tabs.query({active:true},(tabs)=>{
                browser.tabs.sendMessage(tabs[0].id,{message:"test"},(res)=>{
                    console.log(res)
                })
            })
            //動作部//
        }
}, { urls: ["<all_urls>"] }, []);
*/
//ちょっと席外してますすまぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬぬ