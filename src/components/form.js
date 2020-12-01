import {Container,TextField,Typography,Button,Paper} from "@material-ui/core";
import FileBase from "react-file-base64";
import {useState} from "react";
import actions from "../actions/actions";
import {useDispatch,useSelector} from "react-redux";

const FormData=()=>{
    const dispatch=useDispatch();
    const [postData,setPost]=useState({creator:'',title:'',message:'',tags:[],file:''})
    const handleSubmit=(e)=>{
          e.preventDefault();
          dispatch(actions.post(postData));
          console.log(postData)

    }
    return(
        <>
        <Paper className="Contain">
            <form>
                <Typography className="margin" variant="h3" align="center">Post Message</Typography>
              <TextField className="margin" name="creator" variant="outlined" label="creator" fullWidth onChange={e=>setPost({...postData,creator:e.target.value})}/>
              <TextField className="margin" name="title" variant="outlined" label="title" fullWidth onChange={e=>setPost({...postData,title:e.target.value})}/>
              <TextField className="margin" name="message" variant="outlined" label="message" fullWidth onChange={e=>setPost({...postData,message:e.target.value})}/>
              <TextField className="margin" name="tags" variant="outlined" label="tags" fullWidth onChange={e=>setPost({...postData,tags:[e.target.value]})}/>
              <div>
                  <FileBase
                  type="file"
                  multiple={false}
                  onDone={({base64})=>setPost({...postData,file:base64})}
                  />
              </div>
              <Button variant="contained" onClick={handleSubmit} size="large" type="submit" color="primary">
                  Post
              </Button>
            </form>
        </Paper>
        </>
    )
}
export default FormData;