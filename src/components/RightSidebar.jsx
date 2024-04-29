
import imgElon from '../assets/images/elon.jpg'
import imgZuck from '../assets/images/zuck.jpg'
import TrendingsCard from './TrendingsCard'

function RightSidebar({ onSearch }) {

    return <aside className='right-side'>
        <div className='search-section'>
            <i className="fa-solid fa-magnifying-glass search-icon"></i>
            <input className="search" type="text" placeholder="Search Twitter" onChange={onSearch} />
        </div>

        <div className='widget'>
            <div className="widget-grid">
                <h1>Get Verified</h1>
                <h3>Subscribe to unlock nothing.</h3>

                <button className="verify-btn">Get Verified</button>
            </div>
        </div>

        <div className='widget'>
            <TrendingsCard />
        </div>
        <div className='widget'>
            <h1>Who to follow</h1>

            <div className="follow-block">
                <div className="icon"><img src={imgElon} /></div>

                <div className="content">
                    <h4>Elon Musk</h4>
                    <h5>@elonmusk</h5>
                </div>

                <div className="action">
                    <button className="follow-btn">Follow</button>
                </div>
            </div>

            <div className="follow-block">
                <div className="icon"><img src={imgZuck} /></div>

                <div className="content">
                    <h4>Mark Zuckerberg</h4>
                    <h5>@markzuckerberg</h5>
                </div>

                <div className="action">
                    <button className="follow-btn">Follow</button>
                </div>
            </div>
        </div>
    </aside>

}

export default RightSidebar