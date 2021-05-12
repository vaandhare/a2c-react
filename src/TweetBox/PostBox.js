import {Avatar, Button } from '@material-ui/core'
import React from 'react'
import './PostBox.css';

const PostBox = () => {
    return (
        <div className="postbox">
            <form>
                <div className="postBoxInput">
                    <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png"/>
                    <input placeholder="What's happening?" type="text"/>
                </div>    
            </form>
            <Button className="postboxButton">Post</Button>
        </div>
    )
}

export default PostBox
