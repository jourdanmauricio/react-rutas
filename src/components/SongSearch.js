import React, { useEffect, useState } from "react";
import SongForm from "./SongForm";
import SongDetails from "./SongDetails";
import Loader from "./Loader";
import { helpHttp } from "../helpers/helpHttp";
import { HashRouter, Link, Route, Routes } from "react-router-dom";
import { Error404 } from "../pages/Error404";
import SongTable from "./SongTable";
import SongPage from "./SongPage";

let mySongsInit = JSON.parse(localStorage.getItem("mySongs")) || [];

export default function SongSearch() {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);
  const [mySongs, setMySongs] = useState(mySongsInit);

  useEffect(() => {
    if (search === null) return;

    const fecthData = async () => {
      const { artist, song } = search;

      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(songRes);
      // console.log(artistRes, songRes);
      setLoading(false);
    };

    fecthData();
    localStorage.setItem("mySongs", JSON.stringify(mySongs));
  }, [search, mySongs]);

  const handleSearch = (data) => {
    setSearch(data);
  };

  const handleSaveSong = () => {
    //alert("Salvando canción en Favoritos");
    let currentSong = {
      search,
      lyric,
      bio,
    };

    let songs = [...mySongs, currentSong];
    setMySongs(songs);
    setSearch(null);
    localStorage.setItem("mySongs", JSON.stringify(songs));
  };
  const handleDeleteSong = (id) => {
    //alert(`Eliminando canción con el id: ${id}`);
    let isDelete = window.confirm(
      `¿Estás seguro de eliminar la canción con el id "${id}"`
    );

    if (isDelete) {
      let songs = mySongs.filter((el, index) => index !== id);
      setMySongs(songs);
      localStorage.setItem("mySongs", JSON.stringify(songs));
    }
  };

  return (
    <div>
      <HashRouter>
        {/* basename="/canciones" */}

        <header>
          <h2>Song Search</h2>
          <Link to="/canciones">Home</Link>
        </header>
        {loading && <Loader />}
        <article className="grid-1-2">
          <Routes>
            <Route
              path="/canciones"
              element={
                <>
                  <SongForm
                    handleSearch={handleSearch}
                    handleSaveSong={handleSaveSong}
                  />
                  <SongTable
                    mySongs={mySongs}
                    handleDeleteSong={handleDeleteSong}
                  />
                  {search && !loading && (
                    <SongDetails bio={bio} lyric={lyric} search={search} />
                  )}
                </>
              }
            />
            <Route
              path="/canciones/:id"
              element={<SongPage mySongs={mySongs} />}
            />
            {/* <Route path="/canciones/eliminar" element={<Agregar />} /> */}
            <Route path="*" element={<Error404 />} />
          </Routes>
        </article>
      </HashRouter>
    </div>
  );
}
