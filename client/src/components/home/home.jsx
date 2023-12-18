import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import Rooms from '../Lists/Rooms'
import Restaurant from '../Lists/Restaurant'
import Hotel from '../Lists/Hotel'
import Footer from '../Lists/Footer'
import { useLocation } from 'react-router-dom'



const Home=()=>{
const location=useLocation()
const endpoint=location.pathname.split('/')[1]
console.log(endpoint)
    return(
        <div>
            
           <Navbar/>
           <Header/>
            <Hotel/>
           <Rooms/>
           <Restaurant /> 
           <Footer/>
        
         </div>
    )
}

export default Home