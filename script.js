let age = 0

document.getElementById('button').addEventListener('click', check)

function check () {
  age = document.getElementById('age').value
  age = parseInt(age)

  if (age > 1 ){
    alert('You can watch a R rated movie alone.')
} else if (age >= 13) {
    alert('You can see a PG-13 movie by yourself.')
} else if (age >= 5) {
    alert('You can see a G or PG movie alone.')
} else {
    alert('You are too young to see all movies.')
  }
}
