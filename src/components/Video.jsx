import React from 'react';

export const Video = props => {
    return (
        <iframe style={{ width: '100%', aspectRatio: 16/9 }} src={`https://www.youtube.com/embed/${props.guid}`} title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
    );
};