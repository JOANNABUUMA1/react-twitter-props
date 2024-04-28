import Timeline from "./Timeline"

function Main({ loggedInUser, tweets, addTweet, createTweetContent }) {
    return <main>
        <div className='top-bar'>
            <h2 className="title">Home</h2>
        </div>

        <div className='create-tweet'>
            <form onSubmit={addTweet}>
                <div className="avatar-section">
                    <div className="profile-icon"><img src={loggedInUser.profileImage} /></div>
                </div>

                <div className="textarea-section">
                    <textarea
                        className="content"
                        type="text"
                        placeholder="What is happening?!"
                        value={createTweetContent}
                        onChange={(e) => setCreateTweetContent(e.target.value)}
                    ></textarea>
                </div>

                <div></div>

                <div className="actions-section">
                    <div className="actions">
                        <i className="fa-regular fa-image action-icon"></i>
                        <i className="fa-solid fa-list action-icon"></i>
                        <i className="fa-regular fa-face-smile action-icon"></i>
                        <i className="fa-regular fa-calendar action-icon"></i>
                        <i className="fa-solid fa-location-dot action-icon"></i>
                    </div>

                    <button type="submit" disabled={createTweetContent.length < 1} className="tweet-btn">Tweet</button>
                </div>
            </form>
        </div>

        <div className="show-more-tweets">
            <p>Show 35 Tweets</p>
        </div>

        <Timeline tweets={tweets}/>

    </main>

}

export default Main