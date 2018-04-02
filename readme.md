######Introduction
**This is my application for Competition Results Management developed as a final project for the Web Developer Academy organised by Motorola Solutions.**
Application was written in *Vanilla JavaScript* using *Node.js*, *Express.js*, *Bootstrap3*, *Grunt*, *Mocha & Chai* tests.
Fans of the Game of Thrones can enjoy a tournament between GOT main characters in the well-known GOT world while listening to their favourite soundtrack downloaded from [Youtube](https://www.youtube.com/watch?v=Hf9u3jPvkkI). The climber names, routes, timing and available points are hard-coded in the 'server.js' file. You can modify styles/background by launching Grunt and updating 'style.scss' file.

######How to start
In order to launch my application, please download or clone my repository. Then in the main directory in the project root in command line please type `npm install` and `npm start`. The project will be available in your browser on 'http://localhost:3000'. Any changes in style.scss file will be converted to style.css by having Grunt launched (in order to ensure it please type `grunt` in the other command line that you started your server also in the main directory in the project root). RWD is provided, checked manually in the Chrome Developer Tools, in case of problems with displaying the correct view on your screen, I would be grateful for the detailed information sent to the email address: anna.gorzanowska@gmail.com. You are able to launch 4 Mocha & Chai tests by typing 'npm test'. Dockerfile also is added, you should be able to build and run Docker image by typing `docker build -t competition-results .` and then `docker run -p 3000:3000 competition-results`. If you use Docker, the npm install and npm start commands are not needed.

######More About
This application gives competition manager an opportunity to put online result of competition by selecting not disqualified climbers, available routes, timings and get actual ranking list automatically updated by server. The project does not yet provide persistence, it is planned to be upgraded in the future.
Actually 'Disqualify' button removes climber from the database. In the future I am planning to upgrade it by changing 'isDisqualified' property that could be easily managed instead of using 'fetch.delete'. In order to refresh the database just stop and start your server again by pressing 'Ctrl+C' and typing `npm start`.

######Extensions
It is my first application with backend background developed by myself and with tests provided. I really enjoyed developing it from scratch and I hope that you will enjoy it, too.
I learned a lot during the development of this project but I still have a lot to learn, so I would be grateful for any additional suggestions regarding the project sent to anna.gorzanowska@gmail.com. I plan to introduce additional extensions to the project in the future if I have more free time.