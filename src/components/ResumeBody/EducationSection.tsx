import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {IEducation} from "./ResumeBody";

interface IEducationSectionProps {
    details: IEducation[]
}

const EducationSection: FunctionComponent<IEducationSectionProps> = ({details}: IEducationSectionProps) => {
    return (
        <section className="education-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Education</h3>
            {details.map(item => {
                return (
                    <div className="item mb-3" key={uuidv4()}>
                        <div className="item-heading row align-items-center mb-2">
                            <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">{item.name}</h4>
                            <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">{item.duration}
                            </div>

                        </div>
                        <div className="item-heading row align-items-center mb-2">
                            <p className="col-12 col-md-6 col-lg-8 mb-2 mb-md-0">{item.degree}</p>
                            <div className="item-meta col-12 col-md-6 col-lg-4 text-left text-md-right">{item.score}
                            </div>

                        </div>
                    </div>
                )
            })}
        </section>
    );
};

export default EducationSection;