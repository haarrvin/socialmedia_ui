 import "./post.css"
import { MoreVert } from "@mui/icons-material"
 export default function Post() {
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/people/u1.jpg" alt=""></img>
                        <span className="postUserName">David Goggins</span>
                        <span className="postDate">20 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert />
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Stay Hard</span>
                    <img className="postImg" src="/assets/post/1.jpeg" alt=""/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img className="likeIcon" src="/assets/heart.png" alt="" />
                        <img className="likeIcon" src="/assets/like.png" alt="" /> 
                        <span className="postLikeCounter">12.3m people like it</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )

 }