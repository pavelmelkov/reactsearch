import React from "react";
import CardListItem from "./CardListItem";
const CardList = ({counts}) => {
    console.log(counts);
      return counts.map( (item) => (
        <CardListItem key={item.id}>{ item.count }</CardListItem>
      ));
    };

export default CardList;