import React from 'react';
import FeedHeaderLink from './FeedHeaderLink';
import TrendLink from './TrendLink';
import StatFigure from './StatFigure';
import FollowTile from './FollowTile';
import Tweet from './Tweet';
import VerifiedBadge from './VerifiedBadge';

export class MainContent extends React.Component {

    render() {
        const tweets = [
            {
                user: {
                    name: 'Sonu',
                    username: '@thefallenmerc',
                    isVerified: true,
                    image: "https://avatars3.githubusercontent.com/u/20546147?s=400&v=4",
                },
                time: '5 hours',
                text: 'Without music, life would be a mistake. ⚡',
                images: [
                ],
                comments: 23,
                likes: 67,
                isLiked: true,
                retweets: 15,
                retweeting: {
                    user: {
                        name: 'Sonu',
                        username: '@thefallenmerc',
                        isVerified: true,
                        image: "https://avatars3.githubusercontent.com/u/20546147?s=400&v=4",
                    },
                    time: '5 hours',
                    text: 'batman is ❤.',
                    images: [
                        "https://i.redd.it/vgtneqs83j511.jpg",
                        "https://townsquare.media/site/622/files/2017/01/hot-Toys-Batman-Arkham-Knight-Batman.jpg?w=980&q=75"
                    ],
                    comments: 93,
                    likes: 127,
                    isLiked: true,
                    retweets: 60,
                    retweeting: null,
                },
            },
            {
                user: {
                    name: 'Sonu',
                    username: '@thefallenmerc',
                    isVerified: true,
                    image: "https://avatars3.githubusercontent.com/u/20546147?s=400&v=4",
                },
                time: '5 hours',
                text: 'batman is ❤.',
                images: [
                    "https://i.redd.it/vgtneqs83j511.jpg",
                    "https://townsquare.media/site/622/files/2017/01/hot-Toys-Batman-Arkham-Knight-Batman.jpg?w=980&q=75"
                ],
                comments: 93,
                likes: 127,
                isLiked: true,
                retweets: 60,
                retweeting: null,
            },
            {
                user: {
                    name: 'Sonu',
                    username: '@thefallenmerc',
                    isVerified: true,
                    image: "https://avatars3.githubusercontent.com/u/20546147?s=400&v=4",
                },
                time: '5 hours',
                text: 'Life is a party, dress like it.',
                images: [
                ],
                comments: 33,
                likes: 117,
                isLiked: false,
                retweets: 10,
                retweeting: null,
            },
        ];
        return (
            <div className="MainContent">
                <div className="banner"></div>
                <div className="main-body-container">
                    <div className="trend">
                        <div className="profile card">
                            <div className="verified">
                                <VerifiedBadge isVerified />
                            </div>
                            <div className="card-body">
                                <img src="https://avatars3.githubusercontent.com/u/20546147?s=400&v=4" alt="Shubham Singh Chahar" />
                                <div className="user-name">Shubham S Chahar</div>
                                <div className="username">@thefallenmerc</div>
                                <div className="location"><i className="fa fa-map-marker" />Panchkula, Haryana</div>
                                <div className="stats">
                                    <div className="figures">
                                        <StatFigure title="Tweets" count="127" />
                                        <StatFigure title="Followers" count="852" />
                                        <StatFigure title="Following" count="78" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="options">
                            <div className="option active">
                                <i className="fa fa-eye" />
                                Activity
                            </div>
                            <div className="option">
                                <i className="fa fa-flash" />
                                Moments
                            </div>
                            <div className="option">
                                <i className="fa fa-users" />
                                Friends
                            </div>
                            <div className="option">
                                <i className="fa fa-cog" />
                                Edit Profile
                            </div>
                        </div>
                    </div>
                    <div className="feed">
                        <div className="card">
                            <div className="card-header">
                                <FeedHeaderLink>Tweets</FeedHeaderLink>
                                <FeedHeaderLink active>Tweets &amp; Retweets</FeedHeaderLink>
                                <FeedHeaderLink>Media</FeedHeaderLink>
                                <FeedHeaderLink>Likes</FeedHeaderLink>
                                <FeedHeaderLink><i className="fa fa-ellipsis-h fa-fw" /></FeedHeaderLink>
                            </div>
                            <div className="card-body">
                                {
                                    tweets.map((tweet, index) => {
                                        return <Tweet key={index} {...tweet}></Tweet>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="trend">
                        <div className="card">
                            <div className="card-header">
                                <span>Some trend</span>
                            </div>
                            <div className="card-body">
                                <TrendLink tag="#girls" count="4.2m tweets" />
                                <TrendLink tag="#code" count="4.7m tweets" />
                                <TrendLink tag="#games" count="5.7m tweets" />
                                <TrendLink tag="#bikes" count="5.9m tweets" />
                            </div>
                            <div className="card-footer">
                                See more
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <span>You should follow</span>
                            </div>
                            <div className="card-body">
                                <FollowTile name="Saurav" isVerified username="@k9" />
                                <FollowTile name="Sonu" username="@alphamerc" />
                                <FollowTile name="Shubham" isVerified username="@thefallenmerc" />
                            </div>
                            <div className="card-footer">
                                See All
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}