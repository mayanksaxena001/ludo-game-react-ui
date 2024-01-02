
class MediaService {
    constructor() {
        this.aduioTracks = new Map();
        // const entranceThemeSound = "/audio/bomb.mp3";
    }
    getAudio = (key) => {
        return this.aduioTracks.get(key);
    }
    setAudio =async(key,value) => {
        this.aduioTracks.set(key,value);
    }
}
export default new MediaService();