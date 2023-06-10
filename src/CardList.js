import React from "react";
import Card from "./Card";

const CardList = ({Robots}) => {
    const cardComponenet = Robots.map((user, i) => {
        return(
            <Card
                id = {Robots[i].id}
                name = {Robots[i].name}
                email = {Robots[i].email}
            />
        )
    })
    return(
        <div className="container-fluid container-center text-center">
            {cardComponenet}
        </div>
    )
}
export default CardList
