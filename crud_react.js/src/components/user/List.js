
import {makeStyles,TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { blueGrey } from '@material-ui/core/colors';
import 'primeicons/primeicons.css';
import { Link } from "react-router-dom";
import axios from "axios";
import './list.css';
import XLSX from 'xlsx';
import { useState, useEffect ,useRef} from "react";
import { Button } from 'react-bootstrap';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import WysiwygRoundedIcon from '@mui/icons-material/WysiwygRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import DownloadForOfflineRoundedIcon from '@mui/icons-material/DownloadForOfflineRounded';

const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: blueGrey[900],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
})

const List = () => {
  const tableRef = useRef(null);
 const classes = useStyles();
 const [users, setUsers] = useState([]);

  
 const exportToExcel = () => {
  
    const table = tableRef.current;
    const workbook = XLSX.utils.table_to_book(table);
    XLSX.writeFile(workbook, 'Lista de usuarios.xlsx');
  
  };


 useEffect(() => {
  async function getAllStudent() {
   try {
    const users = await axios.get("http://localhost:3333/users")
    // console.log(students.data);
    setUsers(users.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getAllStudent();
 }, [setUsers])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/users/${id}`);
  var new_user = users.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setUsers(new_user);
 }
 
  





 return ( 
  <>
   
   <TableContainer class="table_con" style={{marginLeft: '10px',marginTop: '30px'}} component={Paper}>    
                    
   <Table ref={tableRef} > 

     <TableHead>
      
      <TableRow>  
       <TableCell style={{ backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell style={{ backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center" className={classes.tableHeadCell}>Nombre
        <AccountBoxRoundedIcon style={{color: 'black',fontSize:'40px',marginRight: '10px',marginLeft:'30px',marginBottom: '-10px'}}/>
       </TableCell>
       <TableCell style={{ backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center" className={classes.tableHeadCell}>Gmail
       <MarkunreadRoundedIcon style={{color: 'black',fontSize:'40px',marginRight: '10px',marginBottom: '-10px',marginLeft:'30px'}}/>
       </TableCell>
       <TableCell style={{ backgroundColor: 'white', color: 'black',border: '4px solid black'}} align="center" className={classes.tableHeadCell}>
        <BuildRoundedIcon style={{color: 'black',fontSize:'50px',marginRight: '-20px',marginLeft:'-30px'}}/>
       </TableCell>
       
      </TableRow>
      
     </TableHead>
     <TableBody>
    
       {
          users.map((user, i) => {
        
        
        return (
          
          
          <TableRow style={{ backgroundColor: "#f0efd8" }} key={i}>
      
          <TableCell style={{ backgroundColor: 'grey', color: 'black',border: '4px solid black'}} align="center">{i + 1}</TableCell>
          <TableCell style={{ backgroundColor: 'grey', color: 'black',border: '4px solid black'}} align="center">{user.user}</TableCell>
          <TableCell style={{ backgroundColor: 'grey', color: 'black',border: '4px solid black'}} align="center">{user.email}</TableCell>
          <TableCell style={{ backgroundColor: '', color: 'black',border: '4px solid black'}} align="center">
           <Tooltip title="ver registro">
            <IconButton ><Link to={`/view/${user.id}`}>< WysiwygRoundedIcon style={{ color: 'black',fontSize:'35px',marginLeft:'-40px',marginRight: '10px'}} /></Link></IconButton>
           </Tooltip>
           <Tooltip  title="Editar">
            <Link to={`/edit/${user.id}`}><ManageAccountsRoundedIcon style={{color: 'black',fontSize:'35px',marginRight: '-10px',marginBottom: '-10px',marginLeft:'-10px'}}/></Link>
           </Tooltip>
           
           <Tooltip title="Eliminar">
            <IconButton  onClick={() => handleDelete(user.id)}><DeleteRoundedIcon style={{color: 'black',fontSize:'30px',marginRight: '-70px',marginLeft:'-30px' }} /></IconButton>
           </Tooltip>
            </TableCell>
            </TableRow>
         
        )
          
       })
      }

   </TableBody>
    </Table>
   </TableContainer>
    <Button class="btn" style={{ position: 'relat', left: '1px',top: '50px'}} onClick={exportToExcel}>Exportar a Excel 
    <DownloadForOfflineRoundedIcon style={{fontSize:'45px',marginBottom: '-10px',marginRight: '-10px'}} />
    </Button>
     
  
  </>
 )
 
}

export default List






