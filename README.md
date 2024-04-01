<h1>ecomSnow: Personal Project</h1>
<p>This is a project designed to showcase my skills as a developer. It is a mock ecommerce site for snowboarding and skiing. It uses real data pulled from sites such as Burton, Salomon, K2, ThirtyTwo, Forum and more. I plan on making this responsive, and hosting this site soon!</p>
<p><strong>Things to note:</strong></p>
<p>One of the biggest challenges was attempting actual project images. As it stands now, There is one photo being used for all of the products, and I need to do more research to updating the API rendring images based on their values.</p>
<p>There were some aspects that I had to do a bunch of research on, including useEffect, as it was not something I learned in school. I am unsure if I implemented this process correctly, or if maybe I should be using Axios.</p>
<p>I decided not to implement Shopify, or any shopping cart purchase API, this is partly because the site is not live yet there isnt a point, nor do I actually want people to purchase anything.</p>

<h2>Tech Stack</h2>
<p>I used React, Redux, NodeJS, MongoDB, and some traditional JS and CSS.</p>
<p>I also leveraged Bootstrap to speed up the process for a portion of the design.</p>

<h2>About This Project</h2>
<p>This project was designed off an idea of what a smaller Ecommerce website would look like. I chose a traditional home page design, such as a hero, an about section, and a quick description of the company.</p>

<p><strong>Pages:</strong></p>
<p>There are 4 seperate pages for this project. Home, Products, ProductDetails, and Cart.</p>

<p><strong>Home:</strong></p>
<p>The Home page is interesting through a quick scrolling text animation and some curvy designs. I have still not settled on a color scheme, as no matter what I decide on I can't help but think I could do better.</p>

<p><strong>Products:</strong></p>
<p>Here is a list of all the products in the database. There is a filters tab, where you can maniuplate the products shown, from age to price range to what brand it is. </p>
<p>The onclick event for clicking one of these products takes you to the products details page.</p>

<p><strong>Product Details:</strong></p>
<p>This page takes the specific data from the item clicked, and gives a bit more. The sizes are now selectable options you can click, and upon clicking add to cart, the product is added to a redux state that is shown and manipulated through the Cart page.</p>

<p><strong>Cart:</strong></p>
<p>Here is a list of all the cart items, and you can remove or checkout.</p>

<h2>My Thoughts</h2>
<p>This project was fun and frustrating at the same time. Working with the filteres was simple yet so complicated. I am still unsure if I preformed the actions within this in the best way possible. Furthermore, It had been a bit since I worked with Redux, but that proved to be fun and simple.</p>
