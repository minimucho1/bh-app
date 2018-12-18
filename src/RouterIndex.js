import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import App from './App';
import Header from './Header/header';
import './styles.scss';

function RouterIndex() {
  return (
    <Router>
      <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/polls" component={App} />
        <Route path="/results" component={App} />
        <Route component={NoMatch} />
      </Switch>
      </>
    </Router>
  );
}

function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: '<style>.h2{color: Coral;}.h2{border: Turquoise groove 10px;border-radius:2px}.h2{background-color: silver;}body{margin: 0; background-color: #282c34; font-family: "Helvetica Neue",Arial,"Liberation Sans",FreeSans,sans-serif; font-size: 26px; text-align: center}.banner{width: 100%;display:block;}.banner > .banner-image{width: 100%;display: block;}p{color: white}</style><head><meta charset=\'utf-8\'><title>AniNation</title></head><div class="banner"><img class="banner-image" src="/images/banner4.png" class="img-fluid" alt=""></div><h2 class="h2">Fall 2018</h2><p class="p1"> Ni Hao! Konnichiwa! Anyeonhaseyo! Hello and welcome to AniNation (nani?!)!!! <br />The anime poll site where we come together to express our opinions and vote on what we believe <br />to be trendy animes worth viewing!  Voting poll categories from best anime, best soundtrack, <br />to results from previous seasons! Journey with us as we acquire informaiton about new and<br />currently great animes every season! <br /><div style="text-align:center"><iframe width="640" height="360" src="https://www.youtube.com/embed/vkbgjEmcx5E?rel=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="p2">While this is only a short snidbit of what the website could be,<br /> we appreciate you stopping in and being able to express your voice on anime!</p>'}}></div>
  );
}

function NoMatch() {
  return (
    <div dangerouslySetInnerHTML={{ __html: '<style>.notfound{display: flex; justify-content: center; margin-top: 15px;}body{margin: 0; background-color: #282c34;}</style><head><meta charset=\'utf-8\'><title>AniNation</title></head><body><div class="notfound"><img src="images/notfound.gif"/></div></body>'}}></div>
  )
}

export default RouterIndex;