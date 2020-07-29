let btnGen = document.querySelector('button');
 
btnGen.addEventListener('click', () => {
    let info = faker.helpers.createCard();
    let info2 = faker.random.number();
    let info3 = faker.random.number();
    let {name,  email, address:{city, country, zipcode}} = info;
    let account = info2;
    let acc = info3;
    let info4 = console.log(faker);
    document.querySelector('#name').value = name;
    
    document.querySelector('#email').value = email;
    document.querySelector('#city').value = city;
    document.querySelector('#zipcode').value = zipcode;
    document.querySelector('#country').value = country;
    document.querySelector('#account').value = account  + '' + acc;
    
});