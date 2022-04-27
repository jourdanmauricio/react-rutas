import { useParams } from "react-router-dom";
import SongDetails from "./SongDetails";

const SonPage = ({ mySongs }) => {
  let { id } = useParams();
  let currentSong = mySongs[id];
  let { search, lyric, bio } = currentSong;

  return <SongDetails bio={bio} lyric={lyric} search={search} />;
};

export default SonPage;
