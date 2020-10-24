import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {ISkills} from "./ResumeBody";

interface ISkillsSection {
    details: ISkills
}

const SkillsSection: FunctionComponent<ISkillsSection> = ({details}: ISkillsSection) => {
    return (
        <section className="skills-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Skills</h3>
            <div className="item">
                <h4 className="item-title">Technical</h4>
                <ul className="list-unstyled resume-skills-list">
                    {details.technical.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2">{item}</li>
                        )
                    })}
                </ul>
            </div>
            <div className="item">
                <h4 className="item-title">Professional</h4>
                <ul className="list-unstyled resume-skills-list">
                    {details.professional.map(item => {
                        return (
                            <li key={uuidv4()} className="mb-2">{item}</li>
                        )
                    })}
                </ul>
            </div>
        </section>
    );
};

export default SkillsSection;