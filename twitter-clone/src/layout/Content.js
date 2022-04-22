import React, { useEffect, useState } from "react";
import Divider from "../components/Divider";
import FeedList from "../components/FeedList";
import TweetBox from "../components/TweetBox";
import db from "../firebase";
import { PopulerIcon } from "../icons/Icon";

const Content = () => {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    db.collection("feed")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setTweets(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <main className="flex-1 flex flex-col border-r border-l border-gray-extraLight">
      <header className="sticky top-0 z-10 bg-white flex justify-between items-center p-4 border-b border-gray-extraLight ">
        <span className="font-bold text-xl text-gray-900">Home</span>
        <PopulerIcon className="w-6 h-6 text-primary-base" />
      </header>
      <div className="flex space-x-4 px-4 py-3">
      <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQGyfMTRI4kwhg/profile-displayphoto-shrink_100_100/0/1625836952140?e=1653523200&v=beta&t=bMUaeKmRE8vfsR-1-bfYbVW95bChiidmVaB1V99yeVc"
          alt="Profile"
          className="w-11 h-11 rounded-full"
        />
        <TweetBox />
      </div>
      <Divider />

      {/* Feed */}
      <FeedList tweets={tweets} />
    </main>
  );
};

export default Content;
