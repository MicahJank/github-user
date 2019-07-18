/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/


const myInfo = axios.get('https://api.github.com/users/MicahJank');

console.log(myInfo);

/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>
*/

const cardCreator = userObj => {
  const cardDiv = document.createElement('div');

    const cardImg = document.createElement('img');
    cardImg.src = userObj.data['avatar_url'];
    cardDiv.appendChild(cardImg);

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('card-info');
    cardDiv.appendChild(infoDiv);

      // persons name p tag
      const infoName = document.createElement('h3');
      infoName.classList.add('name');
      infoName.textContent = userObj.data.name;
      infoDiv.appendChild(infoName);

      // user name p tag
      const infoUserName = document.createElement('p');
      infoUserName.classList.add('username');
      infoUserName.textContent = userObj.data.login;
      infoDiv.appendChild(infoUserName);

      // location p tag
      const infoLocation = document.createElement('p');
      infoLocation.textContent = `Location: ${userObj.data.location}`;
      infoDiv.appendChild(infoLocation);

      // profile p tag
      const infoProfile = document.createElement('p');
      infoProfile.textContent = 'Profile: ';
      infoDiv.appendChild(infoProfile);
          // a link github user address
          const profileLink = document.createElement('a');
          profileLink.href = userObj.data['html_url'];
          infoProfile.appendChild(profileLink);

      // followers p tag
      const infoFollowers = document.createElement('p');
      infoFollowers.textContent = `Followers: ${userObj.data.followers}`;
      infoDiv.appendChild(infoFollowers);

      // following p tag
      const infoFollowing = document.createElement('p');
      infoFollowing.textContent = `Following: ${userObj.data.following}`;
      infoDiv.appendChild(infoFollowing);

      // bio p tag
      const infoBio = document.createElement('p');
      infoBio.textContent = `Bio: ${userObj.data.bio}`;
      infoDiv.appendChild(infoBio);

  return cardDiv;
}

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
