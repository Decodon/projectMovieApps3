import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";
import MoviePage from "./pages/movieDetailsPage";
import FavouriteMoviesPage from "./pages/favouriteMoviesPage";
import MovieReviewPage from "./pages/movieReviewPage";
import SiteHeader from "./components/siteHeader";
import UpcomingMoviesPage from "./pages/upcomingMoviesPage";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import MoviesContextProvider from "./contexts/moviesContext";
import AddMovieReviewPage from "./pages/addMovieReviewPage";
//import MustWatch from "./pages/mustWatchPage";
//import FavouriteMoviesPage2 from "./pages/favourireMoviesPage2"
import MustWatchPage from "./pages/mustWatchPage";
import TvsContextProvider from "./contexts/tvsContext";
import TvsPage from "./pages/tvsPage";
import TvPage from "./pages/tvDetailsPage";
import SimilarMoviesPage from "./pages/similarMoviesPage";
import TopRatedMoviesPage from "./pages/topRatedMoviesPage";
import ActorsPage from "./pages/actorsPage";
import ActorDetailsPage from "./pages/actorDetailsPage";
import AuthProvider from "./authContext";
import ProtectedRoute from "./protectedRoute";
import LoginPage from "./pages/loginPage";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 360000,
      refetchInterval: 360000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <MoviesContextProvider>
            <TvsContextProvider>
              <SiteHeader />
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                  path="/reviews/form"
                  element={
                    <ProtectedRoute>
                      <AddMovieReviewPage />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/movies/upcoming"
                  element={<UpcomingMoviesPage />}
                />
                <Route
                  path="/movies/favourites"
                  element={<FavouriteMoviesPage />}
                />
                <Route path="/movies/mustWatch" element={<MustWatchPage />} />
                <Route
                  path="/movies/topRated"
                  element={<TopRatedMoviesPage />}
                />
                <Route path="/reviews/:id" element={<MovieReviewPage />} />
                <Route path="/movies/:id" element={<MoviePage />} />
                <Route path="/tvs" element={<TvsPage />} />
                <Route path="/tvs/:id" element={<TvPage />} />
                <Route
                  path="/movies/:id/similar"
                  element={<SimilarMoviesPage />}
                />
                <Route path="/actors" element={<ActorsPage />} />
                <Route path="/actors/:id" element={<ActorDetailsPage />} />
                <Route path="/" element={<HomePage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </TvsContextProvider>
          </MoviesContextProvider>
        </AuthProvider>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
