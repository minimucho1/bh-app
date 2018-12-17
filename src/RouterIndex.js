import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import App from './App';

function RouterIndex() {
  return (
    <Router>
      <>
        <Route exact path="/" component={Home} />
        <Route path="/polls" component={App} />
        <Route component={NoMatch} />
      </>
    </Router>
  );
}

function Home() {
  return (
    <div dangerouslySetInnerHTML={{ __html: '<style>.h2{text-align:center}.h2{font: 48px Vijaya; sans-serif;}.h2{color: Coral;}.h2{border: Turquoise groove 10px;border-radius:2px}.h2{background-color: silver;}.p1{text-align:center}.p1{font: 26px Comic Sans MS}.p2{text-align:center}.p2{font: 26px Comic Sans MS}</style><head><meta charset=\'utf-8\'><title>AniNation</title><link href="/rex.css" rel = "stylesheet" type = "text/css"></head><!--Metadata goes in head --><!-- Content goes in the body --><header class="header"><div class="header-container"><a class="header-container__logo" href="/"><img src="images/anination-icon-70.png" alt="logo" /></a><nav class="header-container__nav"><div class="header-container__nav-container"><button class="header-container__nav-container__item"><a href="/">Home</a></button><button class="header-container__nav-container__item"><a href="http://anination.info/polls">Polls</a></button><button class="header-container__nav-container__item"><a href="http://anination.info/polls">Results</a></button></div></nav></div></header><div class="banner"><img class="banner-image" src="/images/banner4.png" class="img-fluid" alt=""></div><h2 class="h2">Fall 2018</h2><p class="p1"> Ni Hao! Konnichiwa! Anyeonhaseyo! Hello and welcome to AniNation (nani?!)!!! <br />The anime poll site where we come together to express our opinions and vote on what we believe <br />to be trendy animes worth viewing!  Voting poll categories from best anime, best soundtrack, <br />to results from previous seasons! Journey with us as we acquire informaiton about new and<br />currently great animes every season! <br /><div style="text-align:center"><iframe width="640" height="360" src="https://www.youtube.com/embed/vkbgjEmcx5E?rel=0;&autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><p class="p2">While this is only a short snidbit of what the website could be,<br /> we appreciate you stopping in and being able to express your voice on anime!</p>'}}></div>
  );
}

function NoMatch() {
  return (
    <div dangerouslySetInnerHTML={{ __html: '<head><meta charset=\'utf-8\'><title>AniNation</title><link href= "/rex.css" rel = "stylesheet" type = "text/css"></head><!--Metadata goes in head --><body bgcolor="black" Text="white"><!-- Content goes in the body --><header class="header"><div class="header-container"><a class="header-container__logo" href="/"><img src="images/anination-icon-70.png" alt="logo" /></a><nav class="header-container__nav"><div class="header-container__nav-container"><button class="header-container__nav-container__item"><a href="/">Home</a></button><button class="header-container__nav-container__item"><a href="/Polls/polls.html">Polls</a></button><button class="header-container__nav-container__item"><a href="/Results/results.html">Results</a></button></div></nav></div></header><div class="banner"><img class="banner-image" src="images/banner4.png" class="img-fluid" alt=""></div><div><img class="notfound" src="images/notfound.gif"/></div></body>'}}></div>
  )
}

export default RouterIndex;