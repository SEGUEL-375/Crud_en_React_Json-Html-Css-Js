import { Box, makeStyles, Grid, TextField, Button } from "@material-ui/core"
import {blueGrey, green } from '@material-ui/core/colors';
import List from "../user/List";
import axios from "axios";
import { useState } from "react";
import './inicio.css';





const useStyles = makeStyles({
 headingColor: {
  backgroundColor: blueGrey[900],
  color: "white"
 },
 addStuColor: {
  backgroundColor: green[400],
  color: "white"
 },
})

const Inicio = () => {

 const classes = useStyles();
 const [user, setUser] = useState({
  user: "",
  email: ""
 });
 const [status, setStatus] = useState();

 function onTextFieldChange(e) {
  setUser({
   ...user,
   [e.target.name]: e.target.value
  })
 }

 async function onFormSubmit(e) {
  e.preventDefault()
  try {
   await axios.post(`http://localhost:3333/users`, user)
   setStatus(true);
  } catch (error) {
   console.log("Something is Wrong");
  }
 }
 if (status) {
  return <Inicio />
  
 }
 return (  
  <>

  
   <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
   <div class="container">
        <div class="pyramid-loader">
      <div class="wrapper">
        <span class="side side1"></span>
        <span class="side side2"></span>
        <span class="side side3"></span>
        <span class="side side4"></span>
        <span class="shadow"></span>
      </div>  
    </div>

       <div class="pyramid-loader">
      <div class="wrapper">
        <span class="side side1"></span>
        <span class="side side2"></span>
        <span class="side side3"></span>
        <span class="side side4"></span>
        <span class="shadow"></span>
      </div>  
    </div>

     

  <div class="content">
    <div class="content__container">
      <p class="content__container__text">
       Bienvenido
      </p>
         
         


      <ul class="content__container__list">
        <li class="content__container__list1__item1">usuario,que ande bien</li>
        <li class="content__container__list__item">al sitio web de registros</li>
        <li class="content__container__list__item">al registro de usuarios</li>
        <li class="content__container__list__item">al inicio del sitio web</li>

        
      </ul>
    </div>
  </div>

  <div class="pyramid-loader">
      <div class="wrapper">
        <span class="side side1"></span>
        <span class="side side2"></span>
        <span class="side side3"></span>
        <span class="side side4"></span>
        <span class="shadow"></span>
      </div>  
    </div>
</div> 


   </Box>
   <Grid container justify="center" spacing={4}>
    <Grid item md={6} xs={12}>

    <div  class="container"> 
    <form class="form" noValidate>
      
    <div class="form_front">
       <div class="spinner">
        <span>R</span>
        <span>e</span>
        <span>G</span>
        <span>I</span>
        <span>S</span>
        <span>T</span>
        <span>R</span>
        <span>O</span>
        </div>
      <Grid container spacing={4}>
       <Grid item xs={10}>
        <TextField class="input" style={{ marginBottom: '-10px'}} type="text" name="user" placeholder="Nombre de usuario" required fullWidth id="stuname"  onChange={e => onTextFieldChange(e)}
        />
       </Grid>
       <Grid item xs={10}>
        <TextField class="input"  type="text" name="email" placeholder="Gmail" required fullWidth id="email"  onChange={e => onTextFieldChange(e)} />
       </Grid>
      </Grid>
      <Box m={3}>
       <Button class="añadir" type="submit"  fullWidth onClick={e => onFormSubmit(e)}>Añadir</Button>
      </Box>
      </div>

     </form>
 </div>

    </Grid>
    <Grid item md={6} xs={12}>
     <List />
    </Grid>
   </Grid>
   
      

    



  </>
 )
}



export default Inicio
