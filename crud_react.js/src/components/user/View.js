import {Typography, Box, makeStyles,Table, TableBody, TableCell, TableHead, TableRow, Button } from "@material-ui/core"
import {blueGrey } from '@material-ui/core/colors';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect} from "react";
import axios from "axios";
import './view.css';



const useStyles = makeStyles({
 stuListColor: {
   

  backgroundColor:blueGrey[900],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
});
const View = () => {
      
 const classes = useStyles();
 const { id } = useParams();
 const [user, setUser] = useState([]);
 const history = useHistory();
 useEffect(() => {
  async function getUser() {
   try {
    const user = await axios.get(`http://localhost:3333/users/${id}`)
    // console.log(student.data);
    setUser(user.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
 getUser();
 }, [id])

 function handleClick() {
  history.push("/")
 }
 return (
   
    
  <>    

   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Registro de usuarios</Typography>
   </Box>
   
    <Table class="tableta" style={{ borderCollapse: 'collapse',width: '60px', border: '1px solid black',marginLeft: '580px',marginTop: '90px' }}>
     <TableHead >
      <TableRow style={{ backgroundColor: "#616161"}}>
       <TableCell style={{border: '4px solid black '}} align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell style={{border: '4px solid black'}} align="center" className={classes.tableHeadCell}>Name</TableCell>
       <TableCell style={{border: '4px solid black'}} align="center" className={classes.tableHeadCell}>Email</TableCell>
      </TableRow>
     </TableHead>
     <TableBody >
      <TableRow >
       <TableCell style={{ backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center">{user.id}</TableCell>
       <TableCell style={{backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center">{user.user}</TableCell>
       <TableCell style={{backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center">{user.email}</TableCell>
      </TableRow>
     </TableBody>
    </Table>

   <Box m={3} textAlign="center">
    <Button class="al_inicio" variant="contained" color="primary" onClick={handleClick}>Volver al inicio</Button>
   </Box>

         <div class="holder">
        <div class="candle">
          <div class="blinking-glow"></div>
          <div class="thread"></div>
          <div class="glow"></div>
          <div class="flame"></div>
        </div>
    </div>
      

  </>
 
 )
}

export default View
