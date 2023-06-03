console.log("loaded")
const act_tab = browser.tabs.query({active:true},(tabs)=>{
    console.log(tabs)
    browser.tabs.sendMessage(tabs[0].id,{message:"test"},(res)=>{
        console.log(res)
    })
})
/*
browser.webRequest.onCompleted.addListener((detail) => {
    console.log("detected")
    browser.tabs.sendMessage({
        tabId: tab.id,
        message: "test"
    })
    },
    {
        urls:["targetURL"]
    },
    []
)
*/

//https://stackoverflow.com/questions/42814357/how-to-create-an-exception-for-all-urls-in-chrome-extension
//<all-urls>にして正規表現するしかないっぽいぞ
//よくわからんので先にmessageのテストをする


//    こんなかんじかしら？ (apiのurlがわからぬ)//
//
//    browser.webRequest.onCompleted.addListener(d => {
//        if (/https:\/\/.*\.twitter\.com\/.*\/Following.*/.test(d.url)) {
//            //do something
//        }
//    }, { urls: ["<all-urls>"] });
//


//APIをのReq先→//https://twitter.com/i/api/graphql/JPZiqKjET7_M1r5Tlr8pyA/Following?variables=%7B%22userId%22%3A%221484922165002932227%22%2C%22count%22%3A20%2C%22cursor%22%3A%221760127776538596759%7C1664904431746940884%22%2C%22includePromotedContent%22%3Afalse%7D&features=%7B%22rweb_lists_timeline_redesign_enabled%22%3Atrue%2C%22responsive_web_graphql_exclude_directive_enabled%22%3Atrue%2C%22verified_phone_label_enabled%22%3Afalse%2C%22creator_subscriptions_tweet_preview_api_enabled%22%3Atrue%2C%22responsive_web_graphql_timeline_navigation_enabled%22%3Atrue%2C%22responsive_web_graphql_skip_user_profile_image_extensions_enabled%22%3Afalse%2C%22tweetypie_unmention_optimization_enabled%22%3Atrue%2C%22responsive_web_edit_tweet_api_enabled%22%3Atrue%2C%22graphql_is_translatable_rweb_tweet_is_translatable_enabled%22%3Atrue%2C%22view_counts_everywhere_api_enabled%22%3Atrue%2C%22longform_notetweets_consumption_enabled%22%3Atrue%2C%22tweet_awards_web_tipping_enabled%22%3Afalse%2C%22freedom_of_speech_not_reach_fetch_enabled%22%3Atrue%2C%22standardized_nudges_misinfo%22%3Atrue%2C%22tweet_with_visibility_results_prefer_gql_limited_actions_policy_enabled%22%3Afalse%2C%22interactive_text_enabled%22%3Atrue%2C%22responsive_web_text_conversations_enabled%22%3Afalse%2C%22longform_notetweets_rich_text_read_enabled%22%3Atrue%2C%22longform_notetweets_inline_media_enabled%22%3Afalse%2C%22responsive_web_enhance_cards_enabled%22%3Afalse%7D
//報告：Message成功したぜ
browser.webRequest.onCompleted.addListener((d) => {
    if (/https:\/\/twitter\.com\/i\/api\/graphql\/.*\/Following.*$/.test(d.url)) {
            console.log("てすと")//←ここ反応ない？//よくわからんけどとりあえずlogはでない...
            //とりあえず↑の正規表現でFollowingは検知できるはずですわ～
        }
}, { urls: ["<all-urls>"] }, []);