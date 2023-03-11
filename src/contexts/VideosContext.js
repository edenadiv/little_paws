import { createContext, useState } from 'react';
import VideosData from '../data/videos.json'

const VideosContext = createContext()

export const VideosProvider = ({children}) => {
    const [videos, setVideos] = useState(VideosData)

        return <VideosContext.Provider
        value={{videos,}}
        >
        {children}
    </VideosContext.Provider>
}
export default VideosContext