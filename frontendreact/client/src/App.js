import React, {Fragment} from 'react';
// import ReactDOM from 'react-dom';
// import Staff from './components/Staff';
import FormApply from './components/form/FormApply';
import ListCurrentJobs from './components/header/ListCurrentJobs';
import LogIn from './components/form/LogIn';
import ListJobs from './components/ListJobs';
import DownloadFiles from './components/DownloadFiles';
import AboutUs from './components/aboutUs/AboutUs';
import Home from './components/Home';
// import Prismic from './components/Prismic';
// import { apiEndpoint } from './prismic-configuration'
// import { Helmet } from 'react-helmet'
import './App.css';
import {
      BrowserRouter as Router,
      Switch,
      Route,
} from 'react-router-dom';



   
            const App = () => {
                  // const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
                  // const repoName = repoNameArray[1]

            return (
                 
            <Fragment>
                  {/* <Helmet>
                        <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`} />
                  </Helmet> */}
                  <Router>
                        <div className="Container">
                        
                      
                              <Switch>
                                    <Route exact path="/" component={Home} />
                                    {/* <Route exact path="/prismic/:uid"component={Prismic} /> */}
                                    {/* <Route path="/staff/:slug" component={Staff} /> */}
                                 
                                    <Route path="/FormApply" component={FormApply}/>
                                    <Route path ="/ListCurrentJobs" component= {ListCurrentJobs}/>
                                    <Route path="/LogIn" component={LogIn}/>
                                    <Route path="/ListJobs" component={ListJobs}/>
                                    <Route path="/DownloadFiles" component={DownloadFiles}/>
                                    <Route path="/AboutUs" component={AboutUs}/>
                              </Switch>
                        </div>
                  </Router>

               
                 
            </Fragment>
       
            );

      }





export default App;



