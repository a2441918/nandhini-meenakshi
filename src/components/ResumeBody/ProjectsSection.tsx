import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IProjects} from "./ResumeBody";

interface IProjectsSection {
    details: IProjects[]
}

const ProjectsSection: FunctionComponent<IProjectsSection> = ({details}: IProjectsSection) => {
    return (
        <section className="projects-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Projects</h3>
            <div className="item">
                {details.map(item => {
                    return (
                        <>
                        <h4 className="item-title">{item.title}</h4>
                    <ul className="list-unstyled resume-skills-list">
                        <li key={uuidv4()} className="mb-2">{item.desc}</li>
                    </ul>
                        </>
                    )
                })}
            </div>
        </section>
    );
};

export default ProjectsSection;