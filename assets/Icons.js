import React from 'react';

const Icon = ({ name }) => {
    iconsList = {  
        home: "&#xe019;",
        dashboard: "&#xe871;",
        boat: "&#xe532;",
        user: "&#xf061;",
        more: "&#xe020;",
        notification: "&#xe7f4;",
        history: "&#xe018;",
        location: "&#xe0c8;",
        club: "&#xe7ef;",
        tool: "&#xe869;",
        timer: "&#xe01b;",
        edit: "&#xe014;"
    };

    let icon = iconsList[name];
    icon = icon.substr(3);
    icon = String.fromCharCode(parseInt(icon, 16));

    return icon;
};

export default Icon;