function verifyLogin(login, allLogins){
  for(let i=0; i<allLogins.length; i++)
    if (login === allLogins[i])
      return true;
  return false;
}

function varifyPassword(password){
  return password === 'hufmj@123' ? true : false;
}

function createNewLogin(allDataLogins){
  allDataLogins.push(prompt('Enter the new User:'));
}

const allDataLogins = [
  'Richard', 
  'Rodrigo', 
  'Felipe', 
  'Wesley'
];

(function () {
    const anwser = prompt('Do you want to create new user?')
    if(anwser === 'yes')
      createNewLogin(allDataLogins);
})();

const login = prompt(`Login:`);
const password = prompt(`Password for ${login}:`);

if(verifyLogin(login, allDataLogins) && varifyPassword(password))
  console.log(`Good Morning ${login}`); 
else
  console.log(`${login} doesn't exist in the database`);
