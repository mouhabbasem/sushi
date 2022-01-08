import React from 'react'
import RatesInfoWrap from './app/modules/RatesInformation/RatesInfoWrap'
import ScrollReverse from './app/shell/ScrollReverse'
import { BrowserRouter as Router,HashRouter, Route, Switch } from "react-router-dom";
import FooterNav from './app/shell/layout/FooterNav';


function App() {
    return (
        <>
            <HashRouter>
                <ScrollReverse />

                <div className="app-contain">
                    <div className="app-wrap">
                        <div className="app-data">
                            <div className="app-data-head">
                                <div className='back-btn'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g><path fill="rgba(0,119,189,0)" d="M0 0H24V24H0z"></path></g><path fill="#212121" d="M1598.321-2.738l-6.615-6.615a.843.843 0 0 1-.406-.721.84.84 0 0 1 .113-.422.847.847 0 0 1 .146-.2.859.859 0 0 1 .089-.078l6.672-6.672a.844.844 0 0 1 1.193 0 .844.844 0 0 1 0 1.193l-5.331 5.331h14.273a.844.844 0 0 1 .844.844.844.844 0 0 1-.844.843h-14.242l5.3 5.3a.843.843 0 0 1 0 1.192.842.842 0 0 1-.6.247.841.841 0 0 1-.592-.242z" transform="translate(-1588.301 22.689)"></path></svg>
                                </div>

                            </div>
                            <div className="app-data-body">
                                <Switch>
                                    <Route
                                        exact
                                        path="/"
                                        component={RatesInfoWrap}
                                    />

                                    
                                </Switch>
                            </div>
                            <div className="app-data-foot">
                                <FooterNav />
                            </div>

                        </div>
                        <div className="app-background"></div>
                    </div>
                </div>
                
                
            
            </HashRouter>

        </>
    )
}

export default App
