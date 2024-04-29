import CreateTweetForm from "./CreateTweetForm"
import Timeline from "./Timeline"

function Main({ loggedInUser, tweets, addTweet, createTweetContent, setCreateTweetContent}) {
    return <main>
        <div className='top-bar'>
            <h2 className="title">Home</h2>
        </div>

        <CreateTweetForm loggedInUser={loggedInUser} addTweet={addTweet} createTweetContent={createTweetContent} setCreateTweetContent={setCreateTweetContent}/>

        <div className="show-more-tweets">
            <p>Show 35 Tweets</p>
        </div>

        <Timeline tweets={tweets}/>

    </main>

}

export default Main