let data = ['HTML', 'CSS','Javascript', 'PHP', 'MYSQL','REACT','VUE','PYTHON','R']
let skill = '';
let ski = document.getElementById('skills')
for (let i = 0; i < data.length; i++) {
    skill += `
    <div class="card shadow p05 radius05">
        <h4>${data[i]}</h4>
        <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias deleniti aperiam quos id harum hic veniam deserunt cumque. Saepe totam laudantium placeat, facere perspiciatis praesentium exercitationem at expedita rem nam.
        </small>
    </div>
    `;
    ski.innerHTML = skill;
    console.log('ini adalah ' + skill)
}