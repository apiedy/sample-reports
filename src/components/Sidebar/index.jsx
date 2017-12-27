import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col } from 'react-bootstrap';
import './style.css';

export default class Sidebar extends React.Component {
    render() {   
        return(
            <Col className="dashboardSidebar" xs = {3} sm = {3} md={2}>
                <div className="userDetailsWrapper">
                    <h4 className = "appName">React App </h4>
                    <div className="userImg"><img className = "img-circle" src="http://www.oiioproperty.com/Images/article/2016051402425466.png" alt="Profile User"/></div>
                        <div className="userDetails">
                            <p className="userName">John Doe</p>
                        </div>
                    </div>
                    <div className = "Parent">
                        <div className="userReportsBlock">
                            <ul className="userReports">
                                <li className="userReportTitle"><NavLink to="/app">Home</NavLink></li>  
                                <li className="userReportTitle"><NavLink to="/app/report1">Report 1</NavLink></li>
                                <li className="userReportTitle"><NavLink to="/app/report2">Report 2</NavLink></li>
                                <li className="userReportTitle"><NavLink to="/report3">Report 3</NavLink></li>     
                            </ul>
                        </div>
                    </div>

                    <div className  = "userFooterBlock">
                        <ul className = "userFooter">
                            <li className = "user_help" ><i className="fa fa-info" aria-hidden="true"></i> <NavLink to="/help">Help</NavLink></li>
                            <li className = "user_settings" ><i className="fa fa-cog" aria-hidden="true"></i> <NavLink to="/settings">Settings</NavLink> </li>
                            <li className = "user_logout" ><i className="fa fa-power-off" aria-hidden="true"></i> <NavLink to="/logout">Logout</NavLink></li>
                        </ul>
                    </div>
            </Col>
        )
    }
}