import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IHobbiesSection {
    details: string[]
}

const HobbiesSection: FunctionComponent<IHobbiesSection> = ({details}: IHobbiesSection) => {
    return (
        <section className="skills-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Hobbies</h3>
            <div className="item">
                <ul className="list-unstyled resume-skills-list">
                    {details.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default HobbiesSection;