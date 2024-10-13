import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom" ;
import { Headers } from './componentss/IU/Headers';
import { DirectorView } from './componentss/directores/DirectorView';
import { GeneroView } from './componentss/generos/GeneroView';
import { MediasView } from './componentss/medias/MediasView';
import { ProductoraView } from './componentss/productoras/ProductoraView';
import { TiposView } from './componentss/tipos/TiposView';
import { MediaUpdate} from './componentss/medias/MediaUpdate';




export const Appss = () => { 
    return <Router>
        <Headers/>
        <Switch>
            <Route exact patc='/' componentss={ MediasView } />
            <Route exact patc='/generos' componentss={ GeneroView } />
            <Route exact patc='/tipos' componentss={TiposView } />
            <Route exact patc='/directores' componentss={ DirectorView } />
            <Route exact patc='/productoras' componentss={ ProductoraView } />
            <Route exact path='/medias/edit/:mediaId' componentss={ MediaUpdate } />
            <Redirect to='/'/>
            
        </Switch>

    </Router>
};
