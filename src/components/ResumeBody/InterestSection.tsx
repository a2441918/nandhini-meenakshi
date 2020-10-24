import React, {FunctionComponent} from 'react';
import { v4 as uuidv4 } from 'uuid';

interface IInterestSectionProps {
    details: string[]
}

const InterestSection: FunctionComponent<IInterestSectionProps> = ({details}: IInterestSectionProps) => {
    return (
        <section className="interest-section py-3">
            <h3 className="text-uppercase resume-section-heading mb-4">Interests</h3>
            <div className="item">
                <div className="item-content">
                    <ul className="resume-list">
                        {details.map(item => {
                            return (
                                <li key={uuidv4()}>{item}</li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default InterestSection;