import React from 'react';
import s from './Profileinfo.module.css';

const Profileinfo = () => {
    return (<div className={s.content}>
            <div>
                <img
                    src='https://sun9-4.userapi.com/impf/GkNLSd835mrndCSRuKTOR2zCnjp4A3077iLK9g/A4ttNWQ8RVQ.jpg?size=1590x530&quality=95&crop=82,0,1097,365&sign=42f471f3e593a4978e1e21fbeef2b514&type=cover_group'></img>
            </div>
            <div className={s.descriptionBlock}>
                AVA + Description
            </div>
        </div>
    );
}

export default Profileinfo;
