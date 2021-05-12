import React from 'react'
import {Card, CardBody, CardText, CardTitle, CardFooter} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import './Post.css'
import ThumbUpOutlinedIcon from '@material-ui/icons/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@material-ui/icons/ThumbDownOutlined';
import ThumbsUpDownOutlinedIcon from '@material-ui/icons/ThumbsUpDownOutlined';

const Post = ({title, description, image, poll}) => {
    return (
        <Card className="post">
            <CardBody className="postBody">
                <CardTitle className="postHeaderText">{title}</CardTitle>
                <CardText className="postDescription">{description}</CardText>
            </CardBody>
            <CardFooter className="postFooter">
                <div className="postFooterIcons">
                    <ThumbUpOutlinedIcon fontSize="small"/>
                    <h4>Agree</h4>
                </div>
                <div className="postFooterIcons">
                    <ThumbDownOutlinedIcon fontSize="small"/>
                    <h4>DisAgree</h4>
                </div>
                <div className="postFooterIcons">
                    <ThumbsUpDownOutlinedIcon fontSize="small"/>
                    <h4>Needs Improvement</h4>
                </div>
            </CardFooter>
        </Card>
    )
}

export default Post;

{/* <div className="post">
                <div className="postBody">
                    <div className="postHeader">
                        <div className="postHeaderText">
                            <h3>{title}</h3>
                        </div>
                        <div className="postDescription">
                            <p>{description}</p>
                        </div>
                        <div className="postFooter">
                            <div className="postFooterIcons">
                                <ThumbUpOutlinedIcon fontSize="small"/>
                                <h4>Agree</h4>
                            </div>
                            <div className="postFooterIcons">
                                <ThumbDownOutlinedIcon fontSize="small"/>
                                <h4>DisAgree</h4>
                            </div>
                            <div className="postFooterIcons">
                                <ThumbsUpDownOutlinedIcon fontSize="small"/>
                                <h4>Needs Improvement</h4>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}