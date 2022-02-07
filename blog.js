let blogs = []

// const month = [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december'
// ]

function addBlog(event) {
    event.preventDefault()

    let name = document.getElementById('name').value
    let start = document.getElementById('start-date').value
    let end = document.getElementById('end-date').value
    let description = document.getElementById('description').value
    let node = document.getElementById('node-js').value
    let next = document.getElementById('next-js').value
    let react = document.getElementById('react-js').value
    let typescript = document.getElementById('typescript').value
    let image = document.getElementById('input-blog-image')
    let tech = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value)

    
    image = URL.createObjectURL(image.files[0])

    let blog = {
        name,
        start,
        end,
        description,
        node,
        next,
        react,
        typescript,
        image,
        tech,
        postedAt: new Date()
        
        
    }
    blogs.push(blog)

    renderBlog()

  //if (document.getElementById('node-js').checked == true) {Array.push(getElementById('node-js').value)}
  //if (document.getElementById('next-js').checked == true) {Array.push(getElementById('next-js').value)}
  //if (document.getElementById('react-js').checked == true) {Array.push(getElementById('react-js').value)}
  //if (document.getElementById('typescript').checked == true) {Array.push(getElementById('typescript').value)}
  
}



function renderBlog() {

    let lengthData = blogs.length

    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()

    // looping

    for (let i = 0; i < lengthData; i++) {

        blogContainer.innerHTML += `
      <div id="contents" class="blog-list">
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
          </div>
          <div class="blog-content">
            <p>
              <a href="blog-detail.html" target="_blank"
                >${blogs[i].name}</a>
            </p>
            <div class="detail-blog-content">
              ${blogs[i].postedAt}
            </div>
            <p>
              ${blogs[i].description}
            </p>

            <div class="icon-tech">
              <img src="${blogs[i].tech[0]}" >
              <img src="${blogs[i].tech[1]}" >
              <img src="${blogs[i].tech[2]}" >
              <img src="${blogs[i].tech[3]}" >
            </div>

            <div class="btn-group">
              <button class="btn-edit">edit</button>
              <button class="btn-delete">delete</button>
            </div>
          </div>
        </div>
      </div>
        `
    }


  function getNumberOfDays(start, end) {
    const date1 = new Date(start);
    const date2 = new Date(end);

    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    // Calculating the time difference between two dates
    const diffInTime = date2.getTime() - date1.getTime();

    // Calculating the no. of days between two dates
    const postedAt = Math.round(diffInTime / oneDay);

    return postedAt;
  }


    function firstBlogContent() {
        return `
		
      <div id="contents" class="blog-list">
        <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <p>
              <a href="blog-detail.html" target="_blank"
                >Dumbways Mobile App - 2021</a
              >
            </p>
            <div class="detail-blog-content">
              durasi : 3 bulan
            </div>
            <p>
              App that usedfor dumbways student, it was deployed and can downloaded on playstore. Happy download
            </p>

            <div class="icon-tech">
              <img src="assets/node.png" alt="logo">
              <img src="assets/react.png" alt="logo">
              <img src="assets/java.png" alt="logo">
            </div>

            <div class="btn-group">
              <button class="btn-edit">edit</button>
              <button class="btn-delete">delete</button>
            </div>
          </div>
        </div>
      </div>
        `
    }

}