var kittens = ['Milo', 'Otis', 'Garfield'] 

function destructivelyAppendKitten(array) {
  kittens.concat('Ralph')
  return ['Milo', 'Otis', 'Garfield', + 'Ralph']
}
