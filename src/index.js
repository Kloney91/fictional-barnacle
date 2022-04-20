const myListDiv = document.getElementById('list');
const myHobbies = [
    'Fantasy Sports', //0
    'Surfing The Internet', //1
    'Attending plays', //2
];
MyHobbies[2]=['Fantasy Sports','Surfing the Internet','Attending plays'];

function addName(name) {
    const h1 = document.createElement('h1');
    h1.innerText = name;
    myListDiv.appendChild(h1);
}

myHobbies.forEach(hobby => {
addName(myHobbies);
})