import { Typography, Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import { blueGrey, green } from '@material-ui/core/colors';
import {useState, useEffect, } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import './edit.css';





const useStyles = makeStyles({
 headingColor: {
  backgroundColor: blueGrey[900],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },

});

const Edit = () => {
 const [mostrarAviso, setMostrarAviso] = useState(false);
 const classes = useStyles();
 const { id } = useParams();
 const history = useHistory();
 const [user, setUser] = useState({
  user: "",
  email: ""
 });
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
 }, [id]);

 function onTextFieldChange(e) {
  setUser({
   ...user,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  setMostrarAviso(true);
  e.preventDefault()
  try {
   await axios.put(`http://localhost:3333/users/${id}`,user)
   history.push("/")
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 function handleClick() {
  history.push("/")
 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
    <Typography variant="h2"> Sesion de Edicion
    </Typography>
   </Box>
   <Grid class="container" style={{ marginLeft: '20px' }} container justify="center" spacing={4}>
    <Grid  item md={6} xs={12}>
      <Grid class="formu_">
       <Grid style={{ marginLeft: '20px' }} class="input" item xs={12} sm={6}>
        <TextField autoComplete="id" name="id"  required fullWidth id="id" label="ID" autoFocus value={id} disabled />
       </Grid>
       <Grid style={{ marginLeft: '20px' }} class="input" item xs={12} sm={6}>
        <TextField autoComplete="user" name="user" required fullWidth id="user" label="Name" value={user.user} onChange={e => onTextFieldChange(e)} />
       </Grid>
       <Grid style={{ marginLeft: '20px' }} class="input" item xs={12}>
        <TextField autoComplete="email" name="email"  required fullWidth id="email" label="Email Address" value={user.email} onChange={e => onTextFieldChange(e)} />
       </Grid>
       < Box m={3}>
       <Button
        class="shadow__btn"  type="button"  fullWidth onClick={e => onFormSubmit(e)}>Actualizar</Button>
         {mostrarAviso}
      </Box>
      </Grid>
     </Grid> 
     </Grid > 
     <Box  m={3} textAlign="center">
      <Button class="btn" onClick={handleClick}>Volver al inicio</Button>
     </Box>
  </>
      
 )
}


export default Edit
