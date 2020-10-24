import React, {FunctionComponent} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin, IconDefinition} from "@fortawesome/free-brands-svg-icons";
interface IFooterDetails {
    type: string;
    value: string;
    url: string
}

interface IFooterProps {
    details: IFooterDetails[]
}

const Footer: FunctionComponent<IFooterProps> = ({details}: IFooterProps) => {

    const renderIcon = (type: IFooterDetails['type']): IconDefinition => {
        switch (type) {
            case "github":
                return faGithubSquare
            case "linkedin":
                return faLinkedin
            default:
                return faLinkedin
        }
    }
    return (
        <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
                {details.map(item => {
                    return (
                        <li className="list-inline-item mb-lg-0 mr-3">
                            <a className="resume-link" href={item.url}>
                                <FontAwesomeIcon icon={renderIcon(item.type)} size={'2x'} transform='down-4' className='mr-2'/>
                                <span
                            className="d-none d-lg-inline-block text-muted">{item.value}</span></a></li>
                    )
                })}
            </ul>
        </div>
    );
};

export default Footer;