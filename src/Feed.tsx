import {useEffect, useState } from "react";
import "./Feed.scss";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import { Subscriptions, EventNote, CalendarViewDay } from "@material-ui/icons";
import { InputOption } from "./InputOption";
import Post, { PostProps } from "./Post";
import { db } from "./firebase";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "@firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";
export const Feed = () => {
  const user = useSelector(selectUser)
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    return () => {};
  }, []);

  const [input, setInput] = useState<string>("");
  // const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const Query = query(collection(db, "posts"), orderBy("timeStamp", "desc"));
    const unsubscibe = onSnapshot(Query, (collection) => {
      setPosts(
        collection.docs.map((doc) => {
          console.log(doc.data());
          return {
            name: doc.data().name,
            description: doc.data().description,
            message: doc.data().message,
            photoUrl: doc.data().photoUrl,
            id: doc.id,
          };
        })
      );
    });

    //get data once from collection

    // const getFeed = async () => {
    //   const querySnapshot = await getDocs(collection(db, "posts"));
    //   setPosts(
    //     querySnapshot.docs.map(
    //       (doc): PostProps => {
    //         // doc.data() is never undefined for query doc snapshots
    //         return {
    //           name: doc.data().name,
    //           description: doc.data().description,
    //           message: doc.data().message,
    //           photoUrl: doc.data().photoUrl,
    //           id: doc.id,
    //         };
    //         // console.log(doc.id, " => ", doc.data());
    //       }
    //     )
    //   );
    // };
    // getFeed();

    return () => {
      unsubscibe();
    };
  }, []);

  const sendPost = (e: any) => {
    
    e.preventDefault();
    setInput("");
    const addDocs = async () => {
      const docRef = await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: "Test description",
        message: input,
        photoUrl: user.photoUrl,
        timeStamp: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    };
    addDocs();
  };

  // const getChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   inputRef.current?.value
  // };
  return (
    <div className="feed">
      <div className="inputContainer">
        <div className="input">
          <CreateIcon />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              name="message"
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="inputOptions">
          <InputOption
            Icon={ImageIcon}
            title="Photo"
            color="var(--post-color-icon-photo)"
          />
          <InputOption
            Icon={Subscriptions}
            title="Video"
            color="var(--post-color-icon-video)"
          />
          <InputOption
            Icon={EventNote}
            title="Event"
            color="var(--post-color-icon-event)"
          />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="var(--post-color-icon-article)"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map((post) => {
        return (
          <Post
            name={post.name}
            description={post.description}
            message={post.message}
            photoUrl={post.photoUrl}
            key={post.id}
          />
        );
      })}
      </FlipMove>
      
    </div>
  );
};
