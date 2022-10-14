import React, {useState, useEffect} from 'react';
import {Video} from './Video';

export function Videos() {
    const [currentChannelId, setCurrentChannelId] = useState();
    const [videos, setVideos] = useState([]);

    const baseUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.youtube.com%2Ffeeds%2Fvideos.xml%3Fchannel_id%3D';

    useEffect(() => {
        setCurrentChannelId('UCKt_7dN4Y7SUy2gMJWf6suA');
        (async () => {
            if (currentChannelId) {
                try {
                    const data = await fetch(`${baseUrl}${currentChannelId}`).then(response => response.json());
                    setVideos(data.items.slice(0, 1));
                } catch (error) {
                    console.log(error);
                }
            }
        })();
    }, [currentChannelId]);

    return (
        <>
            {videos.map(video => <Video key={video.guid.split('yt:video:')[1]}
                                        guid={video.guid.split('yt:video:')[1]}/>)}
        </>
    );
}