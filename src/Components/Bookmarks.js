import { useState , useEffect} from "react";
import Bookmark from "./Bookmark";
import axios from "axios";
const API = process.env.REACT_APP_API_URL

function Bookmarks() {
  // console.log(API)
  const [bookmarks , setBookmarks] = useState([]);

useEffect(()=> {
axios.get(`${API}/bookmarks`)
.then((res) => setBookmarks(res.data))
.catch(err => console.log(err))
}, [])

  return (
    <div className="Bookmarks">
      <section>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Take me there</th>
              <th>See this bookmark</th>
            </tr>
          </thead>
          <body>
            {bookmarks.map((bookmark, index) => {
              return <Bookmark key={index} bookmark={bookmark} index={index} />;
            })}
          </body>
        </table>
      </section>
    </div>
  );
}

export default Bookmarks;
