
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
[d1]: ./public/similarMovies.JPG
[d2]: ./public/tvShows.JPG
[d3]: ./public/tvDetails.JPG
[d4]: ./public/popularActors.JPG
[d5]: ./public/actorDetails.JPG
[d6]: ./public/login.JPG
[d7]: ./public/topRated.JPG

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

[ Use the Storybook UI to highlight the new components for which you developed stories.]
e.g.

![][stories]

## Caching.

[ List the TMDB server state cached by the app. Include a screenshot(s) of the react-query dev tools to validate your list.]

e.g.
+ Discover movies (pagination support)
+ Movie details
 + etc
+ etc

![][caching]

## Authentication (if relevant).

[Briefly state how you implemented authentication for the app, e.g. basic, Firebase, etc. Also, list the routes that are private/protected.]

e.g.
+ /reviews/:id
+ /movies/favourites

## Server-side persistence (if relevant)

[ Specify the persistence 
platform your app uses (e.g. TMDB lists, Firestore) and itemize the data it persists.]

## Additional features (if relevant),

[Mention any additional user features of your app that may not be obvious from the previous sections, e.g. pagination, extended filtering/sorting, searching.]

## Independent learning (if relevant),

[Briefly explain any aspects of your assignment work that required independent learning (i.e. not addressed in the lectures or labs) on your behalf., e.g. 3rd-party components, libraries, tools. Include source code references.]

[cD]: ./public/codeDownload.JPG
[d1]: ./public/similarMovies.JPG
[d2]: ./public/tvShows.JPG
[d3]: ./public/tvDetails.JPG
[d4]: ./public/popularActors.JPG
[d5]: ./public/actorDetails.JPG
[d6]: ./public/login.JPG
[d7]: ./public/topRated.JPG
[detail]: ./public/detail.png
[caching]: ./public/caching.png
[stories]: ./public/stories.png