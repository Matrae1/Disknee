import React from 'react';
import '../Styles/Details.css'
import bannerOne from '../Assets/images/viewers-disney.png'
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import AddIcon from '@mui/icons-material/Add';
import GroupsIcon from '@mui/icons-material/Groups';

const Details = () => {
    return (
        <div className='details__main'>
            <div className="details__background">
                <img src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/4F39B7E16726ECF419DD7C49E011DD95099AA20A962B0B10AA1881A70661CE45/scale?width=1440&aspectRatio=1.78&format=jpeg" alt="" />
            </div>
            <div className="details__title">
            <img src={bannerOne} alt="" />
            </div>
            <div className="details__controls">
                <button className="playButton">
                    <PlayArrowIcon />
                   <span>PLAY</span>
                </button>
                <button className="trailerButton">
                <PlayArrowIcon />
                   <span>TRAILER</span>
                </button>
                <button className="addButton">
                <AddIcon className='icon'/>
                </button>
                <button className="groupButton">
                <GroupsIcon className='icon' />
                </button>
            </div>
            <div className="details__sub-title">
                2018 * 7m * Family * Kids * Animation
            </div>
            <div className="details__description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores, suscipit aut? Impedit deserunt, aut, nihil voluptas doloribus sed cumque dicta sunt earum facilis non beatae excepturi consequatur et a unde?
            </div>
        </div>
    );
}

export default Details;
