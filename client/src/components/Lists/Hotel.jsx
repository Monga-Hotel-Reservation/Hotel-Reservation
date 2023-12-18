import './hotel.css'
 import { Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css' 


const Hotel=()=>{

    const slideImages = [
        {
            url: 'https://m.media-amazon.com/images/I/817JCqabnNL._AC_UF894,1000_QL80_.jpg',
            caption: 'Slide 1'
          },
        {
          url: 'https://www.kanpai-japan.com/sites/default/files/uploads/2022/12/awaji-grand-chariot-hotel-1.jpg',
          caption: 'Slide 2'
        },
     
        {
          url: 'https://www.kanpai-japan.com/sites/default/files/uploads/2022/12/awaji-grand-chariot-hotel-4.jpg',
          caption: 'Slide 4'
        }
      
      ];
 
    return(
        <div className='slide' style={{margin:"5px"}}>
            <Slide>
                {slideImages.map((slideImage, index)=> (
                    <div className='slide-container' key={index}>
                    <img className='slide-image' src={`${slideImage.url}`}/>
                  
                    </div>
                ))} 
            </Slide>
        </div>
    )
}

export default Hotel








