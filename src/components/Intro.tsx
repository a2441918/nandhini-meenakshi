import React, {FunctionComponent} from 'react';
import profilePic from '../assets/images/resume-profile.png';

interface IIntroProps {
    summary: string
}

const Intro: FunctionComponent<IIntroProps> = ({summary}: IIntroProps) => {
    return (
        <div className="resume-intro py-3">
            <div className="media flex-column flex-md-row align-items-center">
                <img className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded mx-auto"
                     src={profilePic} alt="image"/>
                    <div className="media-body text-left">
                        <p className="mb-0">{summary}</p>
                    </div>
            </div>
        </div>
    )
}

export default Intro;