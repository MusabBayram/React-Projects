import React, { useState } from 'react';
import { EmojiIcon, GIFIcon, ImageIcon, PollIcon, ScheduleIcon, ShareIcon } from "../icons/Icon";
import db from '../firebase';
import firebase from 'firebase';


function TweetBox() {
    const [content, setContent] = useState('')
    const sendTweet = () => {
        if(content!=='') {
            db.collection('feed').add({
                displayName: "Musab Bayram",
                username: "@musabbayram",
                content,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                avatar: "https://randomuser.me/api/portraits/men/3.jpg' alt='Profile"
            });

            setContent()
        }
    }
  
    return (
    <div className="flex flex-col  mt-2 px-2 flex-1">
        <textarea className="w-full text-xl placeholder-gray-dark outline-none overflow-hidden resize-none bg-transparent" 
        placeholder="What's happening?"
        onChange={e => setContent(e.target.value)}
        value={content}
        />
        <div className="flex items-center justify-between">
            <div className="flex -ml-3">
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                    <ImageIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                    <GIFIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                    <PollIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                    <EmojiIcon className="w-6 h-6 text-primary-base" />
                </div>
                <div className="flex items-center justify-center w-11 h-11 rounded-full hover:bg-gray-lightest">
                    <ScheduleIcon className="w-6 h-6 text-primary-base" />
                </div>
            </div>
            <div>
                <button className="bg-primary-base text-white rounded-full px-4 py-2 font-medium"
                onClick={sendTweet}>Tweet</button>
            </div>
        </div>
    </div>
  )
}

export default TweetBox