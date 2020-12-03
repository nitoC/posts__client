
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
import {useSelector} from 'react-redux';
import Cards from "./postCards";



const Posts=()=>{

    const posts=useSelector(state=>state)
    return(
        <>
        <Container maxidth="lg" className="Posts">
            <AppBar position="static" className="Typo"  color="inherit">
                <Typography variant="h4" align="center" >Timeline</Typography>
            </AppBar>
            
              <Grow in>
                  <Grid container justify="space-between" spacing={2} alignItems="stretch" contained>
                      
                          {
                              posts.map((post,index)=>{

                             return(   <Grid className="grid"  item xsm={12} sm={8} md={6} >
                                         <Cards post={post} key={index}/>
                                       </Grid>
                                    )
                              })
                          }
                         
                      
                  </Grid>
              </Grow>
        </Container>
        </>
    )
}
export default Posts