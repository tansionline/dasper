const navbar = document.querySelector(".navbar");

navbar.innerHTML = `
  <div class="container-fluid">  
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="../../">Home</a>
        </li>
    </ul>   
        <a class="nav-link" href="./shared.html">My Shared</a>
        <a class="nav-link" href="./blog.html">Blog Posts</a>
        <a class="nav-link" href="./me.html">Who am I?</a>
    </div>
  </div>
`;
