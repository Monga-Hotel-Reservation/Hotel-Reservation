import './restaurant.css'


const Restaurant=()=>{

    return (
        <div className='restaurant'>
        <h1 className='homeRoomHeading'>Browse Restaurants </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
               commodi repudiandae consequuntur voluptatum laborum
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
               molestiae quas vel sint..</p>
            
        
        <div className='cardContainer'>

        <div class="card">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ddf228cf-86a2-4f99-a078-a7e06741bb63/d9p4bp1-2690fb93-7bd0-49e4-9aca-7b0ab6088c58.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2RkZjIyOGNmLTg2YTItNGY5OS1hMDc4LWE3ZTA2NzQxYmI2M1wvZDlwNGJwMS0yNjkwZmI5My03YmQwLTQ5ZTQtOWFjYS03YjBhYjYwODhjNTguanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.iI65y_LPaJ7BpKlVQ0y6cZ2oV9T6Mh21Hl9Rr46aOSI"/>
        <div class="card-content">
        <h2>Restaurant-One</h2>
        <p>This is a simple card component. You can add more content here.</p>
        <a href="#">Read More</a>
        </div>
        </div>

        <div class="card">
        <img src="https://soranews24.com/wp-content/uploads/sites/3/2023/07/OU-5.jpg"/>
        <div class="card-content">
        <h2>Restaurant-Two</h2>
        <p>This is a simple card component. You can add more content here.</p>
        <a href="#">Read More</a>
        </div>
        </div>

        <div class="card">
        <img src="https://media-cdn.tripadvisor.com/media/photo-s/1b/c7/df/49/decoration.jpg" alt="Card Image"/>
        <div class="card-content">
        <h2>Restaurant-Three</h2>
        <p>This is a simple card component. You can add more content here.</p>
        <a href="#">Read More</a>
        </div>
        </div>

        <div class="card">
        <img src="https://m.media-amazon.com/images/I/71WmbPVnnaS._AC_UF894,1000_QL80_.jpg" alt="Card Image"/>
        <div class="card-content">
        <h2>Room-Four</h2>
        <p>This is a simple card component. You can add more content here.</p>
        <a href="#">Read More</a>
        </div>
        </div>

        </div>
        


    </div>
    )
}

export default Restaurant