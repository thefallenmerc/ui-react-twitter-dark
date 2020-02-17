import React from 'react';
import VerifiedBadge from './VerifiedBadge';

export default function Tweet({ isRetweet, user, time, text, images, retweeting, likes, isLiked, comments, retweets }) {
    return (
        <div className={"Tweet" + (isRetweet ? " retweeted" : "")}>
            <div className="tweeter-avatar">
                <img src={user.image} alt={user.name} />
            </div>
            <div className="tweet-content">
                <div className="tweet-head">
                    <div className="user-info">
                        <img src={user.image} alt={user.name} className="retweet-avatar" />
                        <div className="user-name">{user.name}</div>
                        <VerifiedBadge isVerified={user.isVerified} />
                        <div className="username">{user.username}</div>
                    </div>
                    <div className="time"> <i className="fa fa-clock-o" /> {time}</div>
                </div>
                <div className="tweet-body">
                    {text}
                    <div className="images">
                        {images.map((image, index) => {
                            return <img alt="" key={index} src={image} />;
                        })}
                    </div>
                    {
                        retweeting
                            ?
                            <div className="retweeting">
                                <Tweet isRetweet {...retweeting} />
                            </div>
                            :
                            ''
                    }
                </div>
                <div className="tweet-options">
                    <div className="comments"><i className="fa fa-fw fa-comment" />{comments}</div>
                    <div className="retweets"><i className="fa fa-fw fa-retweet" />{retweets}</div>
                    <div className="likes"><i className={"fa fa-fw fa-heart" + (isLiked ? " liked" : "")} />{likes}</div>
                    <div className="share"><i className="fa fa-fw fa-share" /></div>
                </div>
            </div>
        </div>
    )
}