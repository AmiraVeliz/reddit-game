# Reddit game

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run deploy`
Deploys app to [https://abrilvg.github.io/reddit-game](https://abrilvg.github.io/reddit-game) please visit in order to play with the app


## Steps taken

* Expected:
    - Title (at its full length, so take this into account when sizing your cells)
    - Author
    - entry date, following a format like “x hours ago” 
    - A thumbnail for those who have a picture.
    - Number of comments
    - Unread status
    - Pagination support
    - Saving pictures in the picture gallery
    - App state-preservation/restoration
    - Indicator of unread/read post (updated status, after post it’s selected)
    - Dismiss Post Button (remove the cell from list. Animations required)
    - Dismiss All Button (remove all posts. Animations required)
    - Support split layout (left side: all posts / right side: detail post)
    - Responsive design

* Missing:
    - Saving pictures in the picture gallery
    - Dismiss All Button (remove all posts. Animations required) -> As long as they are similar with Dismiss Post Button


### Some details
    - Pagination was replaced by a lazy loading because it fills beter on the design proposed
    - It would be a good idea have sass and the general styles centralized
    - Update post status was made locally because of time, in the other side get pagination top posts was made directly against reddit api