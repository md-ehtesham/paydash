'use strict';

import React from 'react';
import {render} from 'react-dom';
import Musters from './containers/musters.jsx';
import Overview from './containers/overview.jsx';
import ActiveLink from './lib/active-link';

ActiveLink.init();


if (window.location.pathname === '/musters') {
    render( <Musters url='/musters/data'/> , document.getElementById('musters'));
}

if (window.location.pathname === '/overview') {
    render( <Overview url='/overview/data'/> , document.getElementById('overview'));
}
