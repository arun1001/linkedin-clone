import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.scss";
import { login, logout, selectUser } from "./features/userSlice";
import { Feed } from "./Feed";
import Header from "./Header";
import { Login } from "./Login";
import { Sidebar } from "./Sidebar";
import { Widget } from "./Widget";

function App() {
  const user = useSelector(selectUser);
  const auth = getAuth();
  const dispatch = useDispatch()
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log('user Details', user)
      if (user) {
        dispatch(
          login({
            email: user?.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout())
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="body">
          <Sidebar />
          <Feed />
          <Widget/>
        </div>
      )}

      
    </div>
  );
}

export default App;
