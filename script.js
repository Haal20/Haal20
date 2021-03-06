let main = document.getElementById('main');
let github = document.getElementById('github');
let webbpages = document.getElementById('webbpages');
let cv = document.getElementById('cv');


function HomeView() {
    main.innerHTML = `<div>
    <p>
      "Experiments blurring boundaries can lead to the future that we hope"
      //Taiho Shin
      <br><br>
      Welcome to my personal webpage about myself. I like to help others solve problems, and strive to do so in a beautiful way.
      <br><br>
      <a class="link" href="https://motherfuckingwebsite.com/">Link to a cool place here</a>
    </p>
    </div>
    <div>
    <a href="mailto:alma-harlin@hotmail.com"><i class="far fa-envelope"></i> email</a>
    <a href="https://steamcommunity.com/id/Abokiddie/"><i class="fab fa-steam-symbol"></i> steam</a>
    <a href="https://www.facebook.com/Almster.The.Hamster/"><i class="fab fa-facebook-f"></i> facebook</a>
    <a href="https://www.instagram.com/almaharlin0.1/"><i class="fab fa-instagram"></i> instagram</a>
    <a href="https://github.com/Haal20"><i class="fab fa-github"></i> github</a>
    <a href="https://www.linkedin.com/in/alma-h%C3%A4rlin-93b36116a/"><i class="fab fa-linkedin-in"></i> linkedin</a>
    <h1>Don't be shy, say hi <i class="fas fa-level-up-alt"></i></h1>
    </div>`;
}
HomeView();

github.addEventListener('click', (e) => {
  main.innerHTML = `<h2>GitHub Repos</h2>`;

  fetch("https://api.github.com/users/haal20/repos")
   .then(function(response) {
       return response.json();
   })
   .then(function(json) {
       console.log("Github API", json);

       for (i=0; i<json.length; i++) {
        main.insertAdjacentHTML("beforeend", "<a href='"+ json[i].html_url + "'target =' _blank'><div>" + json[i].name + "<div></a>");
       }

   });
});

webbpages.addEventListener('click', (e) => {
    main.innerHTML = `<div>
    <h2>Webbpages I manage</h2>
    <a href="https://www.vaxjoboxningsklubb.se/"><i class="fas fa-link"></i> Växjö Boxningsklubb</a> <br>
    <a href="https://fcvaxjo.se/"><i class="fas fa-link"></i> FC Växjö</a>
  </div>`;
});

cv.addEventListener('click', (e) => {
    main.innerHTML = `<div>
    <h2>Education/Experience</h2>
    <p>Open a PDF file: <a href="./images/HaalCV2021.pdf">MyCV</a></p>
  </div>`;
});