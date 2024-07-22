const projects = [
    {
        name: 'Harley-Davidson',
        category: 'Marketing Design',
        mainImg: 'harley-davidson-hero.webp',
        mainmainImgAlt: 'Harley-Davidson Motor Company logo',
        brief: 'During my 7 years at Parr Moto, I had the pleasure of working with the Harley-Davidson Motor Company to develop marketing assets that were used across the entire Harley-Davidson United States dealership network. I led the creative for dozens of campaigns to promote motorcycle sales and test rides, merchandise, new product launches, and seasonal sales and events. These campaigns utilized assets for both the retail and digital spaces and included (but were not limited to): in-store signage, email templates and graphics, campaign success documents, and event promotions.',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'AI for Demand Gen Marketers',
        category: 'Branding + Web Design',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'Marketing Writing Bootcamp',
        category: 'Branding + Web Design',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'Mud Ready Apparel',
        category: 'Branding',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'Mysteries & Misdeeds',
        category: 'Branding',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'Hornstein Solutions',
        category: 'Branding',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'Roll20',
        category: 'UI Design',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
    {
        name: 'MarketingProfs',
        category: 'Branding + Marketing Design',
        mainImg: '',
        mainImgAlt: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        brief: 'turpis egestas maecenas pharetra convallis posuere morbi leo urna molestie at elementum eu facilisis sed odio morbi quis commodo odio aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat in fermentum posuere urna nec tincidunt praesent semper feugiat nibh',
        secondaryImg: 'Harley-Davidson.jpg'
    },
];



document.addEventListener("DOMContentLoaded", function () {
    let counter;
    const portfolioEl = document.getElementById('portfolio-wrapper');
    projects.forEach((project) => {

        const newCol = document.createElement("div");
        newCol.classList.add('col');
        newCol.innerHTML += `<div class="card text-bg-dark mb-3 mb-lg-5 grid-item">
                            <img src="./assets/images/portfolio/${project.mainImg}"
                                class="card-img" alt="${project.mainmainImgAlt}">
                            <div class="card-img-overlay d-flex flex-column justify-content-center align-items-center">
                                <h3 class="card-title">${project.name}</h3>
                                <p class="card-text fs-5">${project.category}</p>
                                <button type="button" class="btn btn-secondary" data-bs-toggle="modal"
                                    data-bs-target="#modal${counter}">
                                    See More >
                                </button>
                            </div>
                        </div>
                        <div class="modal fade" id="modal${counter}"" tabindex="-1" aria-labelledby="modal${counter}"Label"
                            aria-hidden="true">
                            <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <button type="button" class="btn-close" data-bs-dismiss="modal"
                                            aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <div class="container-fluid">
                                            <div class="row row-cols-1 row-cols-md-2">
                                                <div class="col">
                                                    <h1 class="modal-title fs-1" id="modal${counter}"Label">
                                                    ${project.name}
                                                    </h1>
                                                    <p>
                                                    ${project.brief}
                                                    </p>
                                                </div>
                                                <div class="col">
                                                    <img src="./assets/images/portfolio/${project.secondaryImg}" class="w-100" alt="">
                                                </div>
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
        counter++;
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