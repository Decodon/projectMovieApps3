
# ICT Skills 2 Assignment.

Name: Declan O' Donovan

## Overview.

New features added onto the Movie App:

+ List of Popular TV Shows
+ TV Show details
+ TV Show reviews
+ List of Popular Actors
+ Actors Biography
+ Similar Movies
+ Authenication - Based on Sample 8 lab

## Setup requirements.

To clone or download, follow the link below and press whatever option from the green dropdown:
https://github.com/Decodon/projectMovieApps3.git

![][cD]

+ Use "npm install" to install any modules/libraries needed

+ Use "nmp start" to run the project

+ Use "npm run storybook" to run storybook

## App Design.

### Routing/Navigation.

+ /login - Allows protected pages to be seen.
+ /movies/mustWatch - Not implemented, was for adding to a list from Upcoming Movies 
+ /tvs - A list of TV shows currently popular
+ /tvs/:id - Details on a particular TV Show
+ /movies/:id/similar - To show a list of similar movies based on the movie selected
+ /actors - A list of currently popular actors
+ /actors/:id - A biography of a given actor


### Views/Pages.
+ Similar Movies - This returns a list of top rated movies using an API call based on a selected movie. They can then be added to favourites also

![][d1]

+ TV Shows - This returns a list of TVs shows that you can filter by genre

![][d2]

+ TV Show details - This returns some details on the show selected

![][d3]

+ Actors - This returns a list of popular actors

![][d4]

+ Actor Details - This brings up the actors biography

![][d5]

+ Login - A page to login so you can see protected links

![][d6]

+ Top Rated Movies - This returns a list of top rated movies using an API call and can filter based on Genrenks

![][d7]



### Component catalogue.
+ Not much added here, would have liked to added all the new components in and update the sample data for it to run properly

![][stories]

## Caching.
+ Caching was implemented for all the TV modules and Actors

![][caching1]
![][caching2]

## Authentication (if relevant).

This was copied straight from sample 8 in the routing examples and used to only allow a logged in user to write their own review
+ /reviews/form
![][auth]

## Independent learning (if relevant),
Slack channel helped me render my Actors biography correctly, was showing blank pages until I saw others had similar issues

[cD]: ./public/codeDownload.JPG
[d1]: ./public/similarMovies.JPG
[d2]: ./public/tvShows.JPG
[d3]: ./public/tvDetails.JPG
[d4]: ./public/popularActors.JPG
[d5]: ./public/actorDetails.JPG
[d6]: ./public/login.JPG
[d7]: ./public/topRated.JPG
[stories]: ./public/Storybook.JPG
[caching1]: ./public/cachingActors.JPG
[caching2]: ./public/cachingTv.JPG
[auth]: ./public/protectedView.JPG