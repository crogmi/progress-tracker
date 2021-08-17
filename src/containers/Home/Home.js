import React from "react";
import "./Home.css";
// import all components and sub components
import ProgressTracker from "../../components/ProgressTracker/ProgressTracker";
import PriorityList from "../../components/PriorityList/PriorityList";


const Home = () => {
    return (
        <div className="dashboard">
            <h1 className="page-title">My Progress Dashboard</h1>
            <PriorityList />
        </div>
    )
}

export default Home;