const Cinema = function (films) {
  this.films = films;
};


Cinema.prototype.filmTitles = function(){
  return this.films.map((film) => {
    return film.title;
  })
};


Cinema.prototype.findFilmByTitle = function(title){
  return this.films.find((film) => {
    return film.title === title;
  });
};


Cinema.prototype.filmGenre = function(genre){
  return this.films.filter((film) => {
    return film.genre === genre;
  });
};


Cinema.prototype.filmYear = function(year){
  return this.films.some((film) => {
    return film.year === year;
  })
};


Cinema.prototype.filmLength = function(length){
  return this.films.every((film) => {
    return film.length > length
  })
};


Cinema.prototype.totalLength = function(){
  return this.films.reduce((total, film) => {
    return total + film.length;
  }, 0)
};



module.exports = Cinema;
