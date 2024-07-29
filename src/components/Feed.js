import React, { useEffect, useState } from "react";
import QuorBox from "./QuoraBox";
import "../css/Feed.css";
import Post from "./Post";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Create a query to fetch questions ordered by timestamp in descending order
    const q = query(collection(db, "questions"), orderBy("timestamp", "desc"));

    // Listen for snapshot updates and update the posts state
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setPosts(snapshot.docs.map((doc) => ({
        id: doc.id,
        questions: doc.data(),
      })));
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="feed">
      <QuorBox />
      {posts.map(({ id, questions }) => (
        <Post
          key={id}
          Id={id}
          question={questions.question}
          imageUrl={questions.imageUrl}
          timestamp={questions.timestamp}
          users={questions.user}
        />
      ))}
    </div>
  );
}

export default Feed;
