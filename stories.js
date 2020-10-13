const API_URL = 'http://localhost:3000/books/'


fetch(API_URL)
.then(res => res.json())
.then(data => {
  let stories = data.booklist;


console.log(stories);

const list = document.querySelectorAll('.stories')



  function createStory(name, category) {
    let title = document.createElement("h4")
    title.innerText = name
    let genre = document.createElement("h5")
    genre.innerText = category
    let titleblock = document.createElement("div")
    titleblock.classList.add("title")
    titleblock.append(title)
    titleblock.append(genre)
    let cover = document.createElement("img")
    cover.src = '#' //coverUrl
    cover.alt = 'book'

    let card = document.createElement("span")
    card.classList.add("card")
    card.append(cover)
    card.append(titleblock)

    let story = document.createElement("span")
    story.classList.add("story")
    story.append(card)
    
    return story;

    //list.append(stories)
  }




list.forEach((item)=>{
  
  console.log(item);
  let s = stories.map((book) => {
    let story = createStory(book.title, book.category)
    console.log(story);
    return story
  })
  console.log(s);
  s.forEach((story) =>{
    item.append(story)
  }
  )
})
})





/*
        <span class="story">
          <span class="card">
            <img src="test.jpg" alt="test">
            <div class="title">
              <h4>Test if I'm isnnv see hi uh DC d bb</h4>
              <h5>Comedy</h5>
            </div>
          </span>
        </span>
        
       */