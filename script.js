const buttonn = document.getElementById('buttonn');
const cardpanel = document.getElementById('cardpanel');
const loader = document.getElementById('loader');


buttonn.addEventListener('click', fetchAPI);

function loadstate() {
  loader.classList.remove('remove');
}


function noloadstate() {
  loader.classList.add('remove');
}

function fetchAPI() {
  loadstate();

  // delay of 2 seconds
  setTimeout(() => {
    fetch('https://reqres.in/api/users?page=1')
      .then(response => response.json())
      .then(data => {
        noloadstate();
        eachUserInfo(data.data);
      })
      .catch(error => {
        noloadstate();
        console.error('Error fetching users:', error);
      });
  }, 2000);
}

// display users
function eachUserInfo(users) {
  cardpanel.innerHTML = '';
  users.forEach(user => {
    const infotag = document.createElement('div');
    infotag.classList.add('infotag');
    infotag.innerHTML = `
    <p class="nametag"> <u> ${user.first_name} ${user.last_name} </u> </p>
      <img src="${user.avatar}" class="imgtag" alt="${user.first_name}" />
       <p>Emailid-></p>
     <u> <p class="mailtag"> ${user.email}</p></u>
    `;
    cardpanel.appendChild(infotag);
  });
}

