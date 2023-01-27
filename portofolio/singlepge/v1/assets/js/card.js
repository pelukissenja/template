let card = "";
let pro = document.querySelector('#projects');
for (let i = 1; i < 10; i++) {
    card += `
    <div class="card shadow p05 radius05" id="projects-card">
        <figure>
            <img src="./assets/img/profile.jpg" alt="">
        </figure>
        <div class="title">
            <h4>My First Projects</h4>
        </div>
        <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis expedita nesciunt facere iure. Exercitationem autem laboriosam voluptate, inventore id cumque rem distinctio ipsam dignissimos ab, officiis, architecto vel mollitia illum!
        </div>
        <div class="btn">
            <small>End in November 2019</small> <a href="">Visit Web</a>
        </div>
    </div>
    `;
    pro.innerHTML = card;
}