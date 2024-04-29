import { useState } from 'react'

// The initial tweet objects that should be displayed
import initialTweets from './assets/data/tweets.js'

// The user that we're pretending is signed in
import user from './assets/data/user.js'



import LeftSidebar from './components/LeftSidebar.jsx'
import RightSidebar from './components/RightSidebar.jsx'
import Main from './components/Main.jsx'

function App() {
    const [loggedInUser] = useState(user)
    const [tweets, setTweets] = useState(initialTweets)
    const [createTweetContent, setCreateTweetContent] = useState('')

    const addTweet = (e) => {
        e.preventDefault()
        setTweets([
            {
                ...loggedInUser,
                date: '1m',
                content: createTweetContent,
                commentCount: 0,
                retweetCount: 0,
                heartCount: 0,
                analyticsCount: 0
            },
            ...tweets
        ])
    }

    const handleSearch = (e) => {
        const query = e.target.value
        if (query.length > 0) {
            e.preventDefault()
            let filteredTweets = tweets.filter(tweet => tweet.content.includes(query))
            setTweets(filteredTweets)
        } else {
            setTweets(initialTweets)
        }
    }

    return (
        <div className="container">
            
            <LeftSidebar loggedInUser={loggedInUser}/>

            <Main loggedInUser={loggedInUser} tweets={tweets} addTweet={addTweet} createTweetContent={createTweetContent} setCreateTweetContent={setCreateTweetContent}/>
            <RightSidebar onSearch={handleSearch}/>
        </div>
    )
}

export default App
