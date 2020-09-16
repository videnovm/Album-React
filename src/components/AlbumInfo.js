import React, {useState, useEffect} from 'react';
import AlbumShow from './AlbumShow';
import useDataHook from "./dataHook";

const AlbumInfo = ({albumId}) => {
    const { data } = useDataHook();
    const [loading, setLoading] = useState(true);
    const [album, setAlbum] = useState();

    useEffect(()=>{
        const found = data.find(element => element.id === albumId);
        setAlbum(found);
        setLoading(false);
    }, [data]);
    return (
        <div>
            <div className="loading">
                {loading?"Loading" : ""}
            </div>
            {(!loading&&album)&&<AlbumShow myAlbum={album}/>}
        </div>
    );
}
export default AlbumInfo;