function getMax(arr, compare) {
  let max = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], max) > 0) {
      max = arr[i];
    }
    i++;
  }

  return max;
}

function getMin(arr, compare) {
  let min = arr[0];
  let i = 1;

  while (i < arr.length) {
    if (compare(arr[i], min) < 0) {
      min = arr[i];
    }
    i++;
  }

  return min;
}

// equals(a1, a2)
// if a1 === a2 ret true
// else ret false
function search(arr, equals) {

}

function searchByKeyValue(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) {
      return arr[i];
    }
  }
}

function compareByGenres(album1, album2) {
  const n1 = album1.genres.length;
  const n2 = album2.genres.length;
  return n1 - n2;
}

function compareBySale(a1, a2) {
  return a1.sale - a2.sale;
}

export function getAlbumWithMostOfGenres(albums) {
  const mostOfGenres = getMax(albums, compareByGenres);
  console.log("Most of genres", mostOfGenres.title);
}

export function getAlbumWithTeMostOfSale(albums) {
  const mostOfSale = getMax(albums, compareBySale);
  console.log("Most of sale", mostOfSale.title);
}

export function getAlbumWithFewestGenres(albums) {
  let minOfGenres = getMin(albums, compareByGenres);
  console.log("Fewes genres", minOfGenres.title);
}

export function getAlbumWithYearOf(albums, byYear) {
  const album = searchByKeyValue(albums, 'year', byYear);
  console.log('By Year', album.title);
}

export function getAlbumWithArtist(albums, artist) {
  const album = searchByKeyValue(albums, 'artist', artist);
  console.log('By Artist', album.title);
}

export function getAlbumByGenre(albums, byGenre) {
  for (let i = 0; i < albums.length; i++) {
    for (let j = 0; j < albums[i].genres.length; j++) {
      if (albums[i].genres[j] === byGenre) {
        console.log("By genre", albums[i].title);
        return;
      }
    }
  }
}

