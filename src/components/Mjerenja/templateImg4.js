import { doc, getDoc, setDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useEffect, useState } from "react";
import { useAuth, upload, storage, db, auth } from "../firebase";

export default function TemplateImage4() {
  const currentUser = useAuth();
  const [photo, setPhoto] = useState("");
  const [loading, setLoading] = useState(false);
  const [photoURL, setPhotoURL] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
  );

  function handleChange(e) {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  }

  function handleClick() {
    const storageRef = ref(storage, `/Images/${photo.name}`);
    const uploadTask = uploadBytesResumable(storageRef, photo);

    uploadTask.on("state_changed", () => {
      // download url
      getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        console.log(url);
        setPhotoURL(url);
        setDoc(doc(db, "AfterThirdPhoto", `${auth.currentUser.uid}`), {
          userPhoto: url,
        });
      });
    });
    /* upload(photo, currentUser, setLoading); */
  }

  useEffect(() => {
    if (currentUser?.photoURL) {
      setPhotoURL(currentUser.photoURL);
    }
  }, [currentUser]);

  useEffect(() => {
    auth.onAuthStateChanged(async (currentUser) => {
      const docRef = doc(db, "AfterThirdPhoto", `${auth.currentUser.uid}`);
      const docSnap = await getDoc(docRef);
      if (currentUser) {
        if (docSnap.id === auth.currentUser.uid && docSnap.exists()) {
          let existInfo = docSnap.data();
          console.log(existInfo.userPhoto);
          setPhotoURL(existInfo.userPhoto);
          console.log(photoURL);
        } else {
          console.log(docSnap.data());
        }
      }
    });
  }, []);

  return (
    <div className="fields">
      <div className="spaceDiv"></div>
      <input type="file" className="setImage" onChange={handleChange} />
      <button
        className="uploadButton"
        disabled={loading || !photo}
        onClick={handleClick}
      >
        Upload
      </button>
      <img src={photoURL} alt="Avatar" className="avatar" />
    </div>
  );
}