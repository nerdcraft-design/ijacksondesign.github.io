const projects = [
  {
      name: 'Harley Davidson',
      category: 'Marketing Design',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'AI for Demand Gen Marketers',
      category: 'Branding + Web Design',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'Marketing Writing Bootcamp',
      category: 'Branding + Web Design',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'Mud Ready Apparel',
      category: 'Branding',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'Mysteries & Misdeeds',
      category: 'Branding',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'Hornstein Solutions',
      category: 'Branding',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'Roll20',
      category: 'UI Design',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
  {
      name: 'MarketingProfs',
      category: 'Branding + Marketing Design',
      imgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
      brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh'
  },
];



document.addEventListener("DOMContentLoaded", function() {
  let counter;
  const portfolioEl = document.getElementById('portfolio-wrapper');
  projects.forEach((project) => {
    
    const newCol = document.createElement("div");
    newCol.classList.add('col');
    newCol.innerHTML += `<div class="card text-bg-dark mb-3 mb-lg-5">
                            <img src="./assets/images/portfolio/${project.name}.jpg"
                                class="card-img" alt="${project.imgAlt}">
                            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h3 class="card-title">${project.name}</h3>
                                <p class="card-text">${project.category}</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal"
                                    data-bs-target="#modal${counter}">
                                    See More >
                                </button>
                            </div>
                        </div>
                        <div class="modal fade" id="modal${counter}"" tabindex="-1" aria-labelledby="modal${counter}"Label"
                            aria-hidden="true">
                            <div class="modal-dialog modal-dialog modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <h1 class="modal-title fs-1" id="modal${counter}"Label">${project.name}</h1>
                                        <p>
                                          ${project.brief}
                                        </p>
                                        <div class="row">
                                          <div class="col-12">
                                            <img src="./assets/images/portfolio/${project.name}.jpg" class="w-100" alt="${project.imgAlt}">
                                          </div>
                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-lg btn-outline-primary"
                                            data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>`;
    portfolioEl.appendChild(newCol);
    counter ++;
  });
});


// const buttonEL = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//     const enteredValue = inputEl.value;
//     const listItemEl = document.createElement('li');
//     listItemEl.textContent = enteredValue;
//     listEl.appendChild(listItemEl);
//     inputEl.value = '';
// }

// buttonEL.addEventListener('click', addGoal);