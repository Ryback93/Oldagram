const posts = [
    {
        name: "Leonardo da Vinci",
        username: "Leo_Da_Vin-chi",
        location: "Vinci, Florence",
        avatar: "images/avatar-leo.jpg",
        post: "images/post-leo.jpg",
        comment: "You won't find beauty like this in a cave",
        likes: 14
    }, 
    {
        name: "Paul Cezanne",
        username: "aPAULing",
        location: "Aix-en-Provence, France",
        avatar: "images/avatar-paul.jpg",
        post: "images/post-paul.jpg",
        comment: "lookin' good there handsome!",
        likes: 89
    },
    {
        name: "Pablo Picasso",
        username: "Pablo EsScobar",
        location: "Málaga, Spain",
        avatar: "images/avatar-pablo.webp",
        post: "images/post-pablo.jpg",
        comment: "enjoy your youth while it lasts bois",
        likes: 50
    }
    ];
    
    const postsContainer = document.getElementById("posts-container")


function renderPosts() {
    postsContainer.innerHTML = "";
    
    posts.forEach(post => {
        const postHTML = `
        <article class="post">
            <div class="leo-container">
                <img class="leo-avatar" src="${post.avatar}" alt="${post.name}'s avatar">
                <div class="leo-profile">
                    <h3><b>${post.name}</b></h3>
                    <p>${post.location}</p>
                </div>
            </div>    
        
            <div class="img-container-leo">
                <img class="img-leo" src="${post.post}" alt="Post by ${post.name}">
            </div>
            
            <footer class="post-footer">
                    <div class="section-container">
                        <img class="icon like-btn" src="images/icon-heart.png" alt="Like" data-username="${post.username}">
                        <img class="icon" src="images/icon-comment.png" alt="Comment">
                        <img class="icon" src="images/icon-dm.png" alt="Share">
                    </div>    
                    <p class="likes"><span class="likes-count">${post.likes} likes</span></p>
                    <p class="leo-comment"><b>${post.username}</b> ${post.comment}</p>
            </footer>
        </article>
        `;
        postsContainer.innerHTML += postHTML;
    });
    
    addLikeEventListeners();
}   

function addLikeEventListeners() {
    const likeButtons = document.querySelectorAll(".like-btn")
    
    likeButtons.forEach(button => {
        button.addEventListener("dblclick", (event) => {
            const username = event.target.getAttribute("data-username")
            const post = posts.find(p=> p.username === username);
            if (post) {
                post.likes += 1;
                renderPosts();
            }
        });
    });
} 

renderPosts();
