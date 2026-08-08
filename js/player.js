class Jukebox {
    constructor(albums) {
        this.albums = []
    }
    addAlbum = function(album) {
        this.albums.push(album)
    }
    favoriteAlbum = function() {
        let max = -1, fav
        for (let i = 0; i < this.albums.length; i++) {
            if (this.albums[i].played > max) {
                max = this.albums[i].played
                fav = this.albums[i]
            }
        }
        return fav.display()
    }
}

class Album {
    constructor(artist, title) {
        this.artist = artist
        this.title = title
        this.played = 0
    }
    play = function() {
        this.played += 1
    }
    display = function() {
        return `${this.artist} : ${this.title}. The album has been played ${this.played} times.`
    }
}
/*
var jbox = new Jukebox()
const album1 = new Album('Operation Ivy', 'Energy')
const album2 = new Album('Blink 182', 'Dude Ranch')
const album3 = new Album('New Found Glory', 'Sticks and Stones')

jbox.addAlbum(album1)
jbox.addAlbum(album2)
jbox.addAlbum(album3)
*/
//STEP 1 : Store artists/albums within an array
//initialize an empty array
const albumArray = []

//create instances and push them into the array
albumArray.push(new Album('Operation Ivy', 'Energy'))
albumArray.push(new Album('Blink 182', 'Dude Ranch'))
albumArray.push(new Album('New Found Glory', 'Sticks and Stones'))

//STEP 2 : Bind that array to the drop down menu on the web page
 
// get the dropdown element in the DOM
const dropdown = document.getElementById('albumDropdown')
// loop through the array and dynamically add options
albumArray.forEach(item => {
  // create a new <option> element
  const option = document.createElement('option')
  
  // set the value attribute and the visible text
  option.value = item;
  option.textContent = item;
  
  // append the option to the dropdown menu
  dropdown.appendChild(option);
});

function playAlbum(albumId) {
    console.log("Playing album:", albumId);
    // Add your tracking logic here
     
}


// STEP 3
const playButton = document.getElementById('play-btn')
//const dropdown = document.getElementById('albumDropdown')

playButton.addEventListener('click', function() {
  const selectedAlbumId = dropdown.value
});

playAlbum(selectedAlbumId)
 
//Show favorite button

function favAlbum() {
  let topAlbum = albumArray[0]
  
  for (let i = 1; i < albumArray.length; i++) {
    if (albumArray[i].plays > topAlbum.plays) {
      topAlbum = albumArray[i];
    }
  }
  
  document.getElementById("favoriteAlbum").innerText = 
    `Your favorite album is ${topAlbum.title} with ${topAlbum.artist} plays!`;
}

document.getElementById("favorite-btn").addEventListener("click", favAlbum);

/*
album1.play()
album2.play()
album2.play()
album2.play()
album2.play()
album2.play()
album3.play()

console.log(`Your favorite album is: ${jbox.favoriteAlbum()}`)
*/
