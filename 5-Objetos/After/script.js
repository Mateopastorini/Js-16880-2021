const pikachu1 = new Pikachu("Pika pika", "electrico", 20, 6, 12) 
const squirtle1 = new Squirtle("Vamo a calmarno", "agua", 16, 5, 10)
const charmander1 = new Charmander("Fueguito", "fuego", 25, 7, 11)

pikachu1.impactrueno(squirtle1)
charmander1.llamarada(pikachu1)
pikachu1.impactrueno(charmander1)
charmander1.llamarada(pikachu1)