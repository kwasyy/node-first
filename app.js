const fs = require('fs');

  const genders=['male','female'];
  const maleNames=['Radek','Karol','Bartek','Piotr','Kacper'];
  const femaleNames=['Olga','Monika','Dominika','Alicja','Paulina'];
  const lastNames=['Wowra','Owczarek','Szturc','Glanc','Paliwoda'];

  const randChoice = arr => {
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    return arr[randomIndex];
  };

  const people=[];

  for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders);
    const firstName = gender === 'male' ? randChoice(maleNames) : randChoice(femaleNames);
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const age = Math.floor(Math.random() * 60) + 18;

    const person = {
        gender: gender,
        firstName: firstName,
        lastName: lastName,
        age: age,
    };

     people.push(person);
  }

  const jsonData = JSON.stringify(people);
fs.writeFile('people.json', jsonData, err => {
  if (err) throw err;
  console.log('The file has been saved!');
});



