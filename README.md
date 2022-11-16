# Ecom Backend 
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  ## Table of Contents 
  - [Project Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - [Questions](#Questions)

  ## Description
  Ecom Backend is a simple applicated which allows users to manage product inventory by the use of a mysql database. The databse stores products, product categories and their tags. Users are able to create, delete, update, get by specific Id and get all Products, Categories and Product Tags via the use of html routes. It is best to utilize softwqare such as insomnia when accessing the application, though launching and setup is done via the command line. 

  ## Installation 
  To install the project, download all code via the included GitHUb link below. Once you have downloaded all files, enter your integrated terminal and run npm i to install all node dependencies. Once all dependencies have been installed, login to your mysql shell. From here, run "source db/schema.sql" to setup your databse. Exit mysql and run "npm run seed" to seed your database with the starting data. Once done with this, run "npm run watch" and open insomnia. You are now ready to use the app. 

  GitHub: https://github.com/JamesJPorter/E-Com-Back-End

  ## Usage 
  Having followed the installation isntructions in the previous section, you should now be inside of Insomnia with your server running and ready to start making some http requests! There are 15 total requests you can make in the form of Get, Put, Post and Delete. It would be best to setup Insomnia with 3 folders containing all of your requests as seen in the screenshot below: 

![Ecom Backend Routes via Insomnia](./Assets/Ecom%20Backend%20Insomnia%20setup.png?raw=true "Ecom Backend")

To setup these routes, use the following in the order seen in the above screenshot: 
#### Tags Routes
    - Create New Tag: 
            http://localhost:3001/api/tags/
            - JSON: {"tag_name": "Electronics"}

    - Delete Tag: 
            http://localhost:3001/api/tags/9

    - Update Tag: 
            http://localhost:3001/api/tags/9
            - JSON: {"tag_name": "Handhelds"}

    - Get Tag By ID: 
            http://localhost:3001/api/tags/9

    - Get All Tags
            http://localhost:3001/api/tags/

#### Category Routes
    - Delete Category:
            http://localhost:3001/api/categories/6 
    
    - Update Category:
            http://localhost:3001/api/categories/6
            - JSON: {"category_name": "Electronics"}

    - New Category: 
            http://localhost:3001/api/categories/
            - JSON: {"category_name": "Electronics"}

    - Get All Categories: 
            http://localhost:3001/api/categories/

    - Get Category By ID: 
            http://localhost:3001/api/categories/5

#### Product Routes
    - Get All Products 
            http://localhost:3001/api/products/

    - Get One Product
            http://localhost:3001/api/products/6

    - Create New Product 
            http://localhost:3001/api/products/
            - JSON: {"product_name": "Gameboy",
                    "price": 200.00,
                    "stock": 10,
                    "tagIds": [1, 2, 3, 4]}

    - Update Product
            http://localhost:3001/api/products/6
            - JSON: {"product_name": "Gameboy", 
	                "price": 20.00, 
	                "stock": 10, 
	                "tagIds": [7, 1, 2, 8]}

    - Delete Product 
            http://localhost:3001/api/products/6


Enter the above for the corresponding routes, and have fun with efficient product inventory management!

  Video Demonstration: https://drive.google.com/file/d/1J1_dDs0B0aQMRvfR39ssGpba6ZMJNKai/view  

  ## License 
  Licensed udner the [MIT](https://opensource.org/licenses/MIT) license

  ## Contribution 
  N/A

  ## Tests 
  N/A

  ## Questions 
  ###porterjjames@gmail.com
  ###N/A
