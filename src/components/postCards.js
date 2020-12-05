import React from 'react';
import {useDispatch,useSelector} from "react-redux";
import {Card, CardActions,CardContent,CardMedia,Button,Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import {CircularProgress} from "@material-ui/core"
import moment from "moment";
import apiData from "../api/api";
import actions from "../actions/actions";
import {useState, useEffect} from "react"


var clickLike=false;

const Cards = ({post}) => {  
const dispatch=useDispatch();
var [currentId,setCurrentId]=useState(null)
   const disp={display:'none'}
const [color,setColor]=useState({color:"#555"})
const [displayC,setDisplay]=useState({display:"none"})
    const likeFunc=()=>{
        
        if(clickLike==false){
            clickLike=true;
            console.log(post._id)   
            dispatch(actions.like(post._id))
        }
        else{
            return;
        }
    }
    useEffect(()=>{
        console.log(currentId)
        
    },[currentId,post])
    const displ=()=>{
    if(JSON.stringify(displayC)===JSON.stringify({display:"none"})){
        console.log("first color")
           setDisplay({display:"block"})
        }
        else{
            console.log("second color")
            setDisplay({display:"none"})
        }
    }
    const deleteFunc=()=>{
        
            dispatch(actions.deleteAction(post._id))
           
    }
    return ( 
        post.length<=0? <CircularProgress/>: <Card className="card">
            <CardMedia className="Media" component="img" src={post.file} image={post.file} title={post.title}/>
            <div className="overlay">
                <div className="createData">
                    <Typography variant="h6" style={{color:"white"}}>{post.creator}</Typography>
                    <Typography variant="body2" style={{color:"white"}}>{moment(post.createdAt).fromNow()}</Typography>
                     
                </div>
                <div id="update" style={displayC} onClick={()=>dispatch(actions.update())}><p>update</p></div>
                <Button className="horibtn" size="small" onClick={displ}>
                    <MoreHorizIcon style={{color:"white"}} fontSize="default"/>
                </Button>
            </div>
            <div className="message">
            <CardContent>
               <Typography variant="body2">{post.message}</Typography>
            </CardContent>
            </div>
            <div >
                <CardActions className="actions">
                    <Button variant="secondary" color="primary" onClick={likeFunc}>
                        <ThumbUpAltIcon style={post.like>0?{color:"#40e0d0"}:{color:"#555"}} fontSize="small"/> Like
                    </Button>
                    <div className="loike" style={{color:"blue"}}>{post.like<=0?'':post.like}</div>
                    <Button onClick={deleteFunc}>
                        <DeleteIcon  style={{color:"red"}} fontSize="small"/> Delete
                    </Button>
                </CardActions>
            </div>
        </Card>
     );
}
 
export default Cards;