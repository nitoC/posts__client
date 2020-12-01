import React from 'react';
import {Card, CardActions,CardContent,CardMedia,Button,Typograhy} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
const Card = ({post}) => {
    return ( 
        <Card>
            <CardMedia image={Posts.file}/>
            <CardContent>

            </CardContent>
        </Card>
     );
}
 
export default Card;