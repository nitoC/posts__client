
import {Container,AppBar,Typography,Grow,Grid} from "@material-ui/core";
const Posts=()=>{
    return(
        <>
        <Container maxidth="lg" className="Posts">
            <AppBar position="static" className="Typo" color="inherit">
                <Typography variant="h3" align="center" >Timeline</Typography>
                
            </AppBar>
              <Grow in>
                  <Grid container justify="space-between" alignItems="stretch">
                      <Grid xsm={12} sm={6}>

                      </Grid>
                  </Grid>
              </Grow>
        </Container>
        </>
    )
}
export default Posts