
# Hair day


<img src="https://github.com/user-attachments/assets/0e6255ad-b9a0-4683-a9bd-ea66d0c15e55" alt="Hair day image" >

> An application where you can book an appointment with your name and time, it is displayed on the screen based on the day booked, and can be deleted.


## 🚀 Installing Hair Day

To install Hair Day, follow this steps:

Clone Repository:

   ```bash
   git clone https://github.com/ErikSsilva/Hair-Day.git
   ```
Access project diretory:
  ```bash
  cd hairday
  ```

## ☕ Using Hair Day

To use Hair Day, follow this steps:

Install dependecies:
```bash
   npm install
   ```
--or--
```bash
   yarn install
   ```

Start JSON-server:
```bash
   npm run server
   ```
*** This will run the json-server on the URL http://localhost:3333.

Run the development environment:
```bash
   npm run dev
   ```
*** This will automatically open the app in the browser at the URL http://localhost:3000.

Generate the production build:
```bash
   npm run build
   ```
To compile the files optimized for deployment:

## 🗂️ Project Structure
The main structure of the project is as follows:

```graphql
├── src
│   ├── assets           # Images and icons
│   ├── libs             # Helper libraries
│   ├── modules          # modules components
│   │   ├── form         # from modules
│   │   └── schedules    # schedules modules
│   ├── services         # API requisitions
│   ├── styles           # CSS files
│   └── utils            # Utils functions
├── server.json          # "fake" API from JSON-server
├── index.html           # Main HTML
├── webpack.config.js    # Webpack configuration
├── package.json         # Project Dependencies and Scripts
└── README.md            # Documentation
   ```

## ⚙️ Technologies Used:
-> Webpack: To package the code

-> Babel: Transpise code to older versions of JavaScript

-> json-server: Simulate a REST API

-> Day.js: Date Manipulation


## Thank you for your time!





