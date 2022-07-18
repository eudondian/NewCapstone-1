const speakers = [
  {
    image: './F-Assets/female-one.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    image: './F-Assets/male-one.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    image: './F-Assets/female-three.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    image: './F-Assets/female-two.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    image: './F-Assets/male-two.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
  {
    image: './F-Assets/male-three.jpg',
    name: ' minim veniam, quis nostrud exercitation',
    portfolio: 'Duis aute irure dolor in reprehenderit in voluptate',
    more: ' Excepteur sint occaecat cupidatat non proident, sunt in culpa qui',
  },
];

const cards = document.querySelector('#speakers');
// eslint-disable-next-line no-unused-vars
const h2 = document.createElement('h2');
// eslint-disable-next-line no-unused-vars
const div = document.createElement('div');

window.addEventListener('DOMContentLoaded', () => {
  speakers.forEach((item) => {
    cards.insertAdjacentHTML(
      'beforeend',
      `
    <div class='container speaker-con mt-5'>
      <div  class="speaker-row">
         <div><img src="${item.image}" alt="image"></div>
            <div><p class='para'>${item.name}</p>
               <p class="text-danger para1">${item.portfolio}</p>
                 <h6>${item.more}</h6>
            </div>
        </div> 
      </div>
    </div>
 `,
    );
  });
});

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
  menu.style.display = 'flex';
  closeBtn.style.display = 'inline-block';
  menuBtn.style.display = 'none';
  menu.style.zIndex = '11';
});

// Close the nav menu

closeBtn.addEventListener('click', () => {
  menu.style.display = 'none';
  closeBtn.style.display = 'none';
  menuBtn.style.display = 'inline-block';
});
