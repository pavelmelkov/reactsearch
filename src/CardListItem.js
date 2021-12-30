import React from "react";
import Card from "@mui/material/Card";
function CardListItem({children}) {
    return (
        <Card variant="outlined" style={{minHeight:"5rem", alignSelf:"center"}}>{children}</Card>
    );
}

export default CardListItem;
