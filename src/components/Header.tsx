import React, {FunctionComponent} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare, faEnvelopeSquare, faMapMarkerAlt, faExclamation, IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { v4 as uuidv4 } from 'uuid';
import Typed from 'react-typed';

interface IContactInfo {
    type: string;
    value: string;
}

interface IHeaderProps {
    name: string;
    roles: string[];
    contactInfo: IContactInfo[]
}

const Header: FunctionComponent<IHeaderProps> = ({name, roles, contactInfo}: IHeaderProps) => {

const renderIcon = (type: IContactInfo['type']): IconDefinition => {
    switch (type) {
        case "phone":
        return faPhoneSquare
        case "email":
            return faEnvelopeSquare
        case "location":
            return faMapMarkerAlt
        default:
            return faExclamation
    }
}

const renderContactHref = (type: IContactInfo['type'], value: string|undefined) => {
    switch (type) {
        case "phone":
            return `tel:${value}`
        case "email":
            return `mailto:${value}`
        default:
            return undefined
    }
}

return (
    <div className="resume-header">
        <div className="row align-items-center">
            <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">{name}</h2>
                <Typed
                  className="resume-tagline mb-3 mb-md-0"
                  strings={roles}
                  typeSpeed={50}
                  backSpeed={50}
                  backDelay={1}
                  loop
                  smartBackspace
                />
            </div>
            <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                    {contactInfo.map(info => {
                    return (
                        <li className="mb-2" key={uuidv4()}>
                            <FontAwesomeIcon icon={renderIcon(info.type)} className="fa-fw fa-lg mr-2 "/>
                            <a className="resume-link" {...(renderContactHref(info.type, info.value) && {href: renderContactHref(info.type, info.value)})}>{info.value}</a></li>
                    )
                    })}
                </ul>
            </div>
        </div>
    </div>
)
}

export default Header;