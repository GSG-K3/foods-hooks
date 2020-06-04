import React , { useState, useEffect }  from 'react';
import axios from 'axios'; 
import { makeStyles } from '@material-ui/core/styles';
import { Card,CardActionArea,CardContent,CardMedia } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles({
    root: {
      width: 250,
    },
    media: {
      height: 140,
    },
  });
export default ({id}) => {
    const classes = useStyles();
    const [data ,setData] = useState([])

    useEffect (()=> {
  
    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    
    .then(result => {
        console.log(result.data.meals[0]);
        
    setData(result.data.meals[0])
    })
    },[])

   return(  
    
 <Card className={classes.root} >
 <CardActionArea>
   <CardMedia
     className={classes.media}
     image={data.strMealThumb}
     title="Contemplative Reptile"
   />
   <CardContent>
     <Typography gutterBottom variant="h5" component="h2">
    {data.strMeal}
     </Typography>
   </CardContent>
 </CardActionArea>

</Card>
        
 
  

          )
    } 
         
  
