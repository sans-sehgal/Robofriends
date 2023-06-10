import React from "react";
import CardList from "./CardList";
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends React.Component
{ 
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    sleep = (seconds) => {
        var e = new Date().getTime() + (seconds * 1000);
        while (new Date().getTime() <= e) {}
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.sleep(1);
            this.setState({robots: users})
        })

    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }
    render(){
        const filteredRobots = this.state.robots.filter(robot=> {
            return robot.name.toLowerCase().includes(this.state.searchfield)
        })
        if (this.state.robots.length === 0){
            return <h1 className="tc">Loading</h1>
        }
        return (
            <div className="text-center">
                <h1 className="f1"> RoboFriends </h1>
                <SearchBox searchchange = {this.onSearchChange}/>
                <Scroll>
                    <CardList Robots={filteredRobots}/>
                </Scroll>
            </div>
        )
    }
}

export default App