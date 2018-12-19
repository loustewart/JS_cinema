const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function(){
  return this.films.map((film) => {
    return film.title;
  })
};


Cinema.prototype.findFilm = function(title){
  return this.films.find((film) => {
    if (film.title === title){
      return film;
    }
  });
};


Cinema.prototype.filmGenre = function(genre){
  return this.films.filter((film) => {
    if (film.genre === genre){
      return film;
    }
  });
};


Cinema.prototype.filmYear = function(year){
  return this.films.some((film) => {
    if (film.year === year){
      return true
    }
  });
  return false
};


Cinema.prototype.filmLength = function(length){
  return this.films.some((film) => {
    if (film.length > length){
      return true
    }
  });
  return false
};


Cinema.prototype.totalLength = function(length){
  return this.films.reduce((total, length) => {
    return total + length;
  })
};








module.exports = Cinema;
