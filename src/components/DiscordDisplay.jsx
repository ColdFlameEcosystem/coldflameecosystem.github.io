import React, {useEffect} from "react";
import {Videos} from "./Videos";

const DiscordDisplay = () => {
    const [height, setHeight] = React.useState(500);
       useEffect(() => {
           setInterval(() => {
               setHeight(document.getElementById('bg-box')?.clientHeight);

           }, 1000)
       });
    return (
        <div className="row" style={{ padding: '20px' }}>
            <div className="col-md-6 pl-3 pr-3 pb-3 text-center">
                <div id={'bg-box'} className={'bg-box'}>
                    <h3 style={{ width: '100%', display: 'inline-block' }} className={'text-white'}>Our Latest Video</h3>
                    <div style={{ padding: '5px' }}>
                        <Videos />
                    </div>
                    <br/>
                </div>
            </div>
            <div className="col-md-6 text-center">
                <div style={{ height: height + 'px' }} className="bg-box">
                    <iframe src="https://discord.com/widget?id=1022492883644854344&amp;theme=dark"
                            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts" style={{ height: '100%', width: '100%' }}></iframe>
                </div>
            </div>
        </div>
    );
}

export default DiscordDisplay;