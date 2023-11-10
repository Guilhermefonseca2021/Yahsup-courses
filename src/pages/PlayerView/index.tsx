import CardVideo from '../../components/CardVideo'
import VideoPlayer from '../../components/VideoPlayer'
import './styles.css'

export default function PlayerView() {
  return (
    <div className='container'>
        <div className='video-player'>
            <VideoPlayer />
            <div className='subtitle'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nulla, pariatur molestias quidem maiores.
            </div>
        </div>

        <div className='player-list'>
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
            <CardVideo />
        </div>
    </div>
  )
}
