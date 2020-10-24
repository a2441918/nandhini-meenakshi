import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IParticipation} from "./ResumeBody";

interface IParticipationSection {
    details: IParticipation
}

const ParticipationSection: FunctionComponent<IParticipationSection> = ({details}: IParticipationSection) => {
    return (
        <section className="skills-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Participation</h3>
            <div className="item">
                <h4 className="item-title">University</h4>
                <ul className="list-unstyled resume-skills-list">
                    {details.university.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2">{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="item">
                <h4 className="item-title">School</h4>
                <ul className="list-unstyled resume-skills-list">
                    {details.school.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default ParticipationSection;