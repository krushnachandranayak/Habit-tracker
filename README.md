# HabitTracker

Host link:- https://habit-tracker-n44z.onrender.com

A web application which help you to create, update, delete and track your habit on daily basis. 
It is user specific app, which mean a user can track their habit, and mark it as done , or not done. 
The project is built using a tech stack consisting of Node.js for the server-side scripting.
Express for handling HTTP requests and routing.
MongoDB for storing and managing the data and EJS for rendering the views and templates.

## Installation
To run this application on your local machine, please follow these steps:

Clone this repository using the following command:
```
$ git clone 
```
Install the required dependencies using the following command:
```
$ npm install 
```
Start the application using the following command:
```
$ npm start 
```
Open the application in your web browser by visiting the following URL:
```
$ http://localhost:8000 
```

## Usage
Once you have the application up and running, you can start using it by following these steps:
* Sing-up/Sign-in into your account.
* Click on the "Add Habit" button to create a new habit.
* Enter the name of the habit you want to track.
* Click on the "Save" button to save the habit.
* To mark a habit as complete/incomplete for the day, simply click on the corresponding icon.
* To delete a habit, click on the "Delete" icon next to it.
* To see today's habits, click on "Show Daily" button.
* To edit a habit, click on the "Edit" icon next to it.

## Folder Structure
```
Habit Tracker
    |
    |               |--->css
    |--->assets---->|--->img
    |               |---> js
    |
    |               |--->flashMiddleware.js
    |--->config---->|--->mongoose.js
    |               |--->passport_local.js
    |
    |                  |-->habit_controller.js
    |--->controllers-->|-->home_controller.js
    |                  |-->user_controller.js
    |
    |               |-->habit.js
    |--->models---->|
    |               |-->user.js
    |
    |              
    |               |-->habit.js
    |--->routes---->|-->index.js
    |               |-->user.js
    |
    |              
    |              |--->_header.ejs
    |              |--->404.ejs
    |              |--->daily_view.ejs
    |              |--->forget_password.ejs
    |--->views---->|--->home.ejs
    |              |--->layout.ejs
    |              |--->user_sign_in.ejs
    |              |--->user_sign_up.ejs
    |              |--->weekly_view.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
 ````

## Screenshots
### Home Page
![image]<img width="959" alt="home_page" src="https://github.com/krushnachandranayak/Habit-tracker/assets/131634927/e79fd9a2-c970-4404-9610-45eaf16ca662">

### Sign-up Page
![image]<img width="960" alt="sign_up" src="https://github.com/krushnachandranayak/Habit-tracker/assets/131634927/6fc5b71f-793c-4753-8309-c82695a923db">

### Sign-in Page
![image]<img width="960" alt="sign_in" src="https://github.com/krushnachandranayak/Habit-tracker/assets/131634927/d7568525-8b94-450b-899c-a8c69ed5fa34">

### Dily View Page
![image]<img width="959" alt="daily_view" src="https://github.com/krushnachandranayak/Habit-tracker/assets/131634927/81437ce6-13e8-409f-ba71-8e4eaa2b1de4">



## Contributing
Contributions are always welcome! If you have any suggestions for improving this application, please feel free to create a pull request or open an issue.




