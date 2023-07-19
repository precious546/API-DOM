const display_posts = document.querySelector('.display_posts');

fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(data => {
        posts(data);
       // console.log(data)


      });

function posts(data) {

    console.log(data);
    
    display_posts.innerHTML = '';


    for (i = 0; i < data.length; i++){
        console.log(data[i].title);

        display_posts.innerHTML += `<div class= 'post' id= 'post1'>
        <h3>${data[i].title}</h3>
        <p>${data[i].body}</p>
        </div>`;
    }
}


const display_users = document.querySelector('.display_users')

fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        users(data);



      });

      function users(data){
        console.log(data);


        display_users.innerHTML = '';

        for(i = 0; i < data.length; i++) {
            console.log(data[i]);

            display_users.innerHTML += `<div class= 'user' id= 'user1'>
                     <h3>${data[i].address.street}</h3>
                     <p>${data[i].company.name}</p>

            </div>`; 
        }
    }

    const display_photos = document.querySelector('.display_photos')
    fetch('https://jsonplaceholder.typicode.com/photos?_limit=10')
      .then(response => response.json())
      .then(data => {
        photos(data);
        
      })

      function photos(data){
        console.log(data);
        display_photos.innerHTML = '';

        for (i = 0; i < data.length; i++) {
            console.log(data[i]);

            display_photos.innerHTML += `<div class= 'photo' id= 'photo1'>
                            <h3>${data[i].title}</h3>
                            <p>${data[i].id}</p>
            </div>`
        }
      }

      const display_albums = document.querySelector('.display_albums')
      fetch('https://jsonplaceholder.typicode.com/albums?_limit=10')
      .then(response => response.json())
      .then(data => {
        albums(data);
      })

      function albums(data) {
        console.log(data);

        display_albums.innerHTML = '';

        for (i = 0; i < data.length; i++){
            console.log(data[i].title);

            display_albums.innerHTML = `<div class= 'album' id= 'album1'>
            <h1>${data[i].title}</h1>
            <p>${data[i].id}</p>
    </div>`
        }
      }