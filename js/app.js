    // PREMIER TEST
    // const menuTabs = document.querySelectorAll('header nav li');

    // menuTabs[0].onclick = test;
    // function test() {
    //     console.log('Tu as cliqué !');
    //     menuTabs[0].className = '';
    //     menuTabs[1].className = 'active';
    // }
    
    const menuTabs = document.querySelectorAll('header nav li');

for (let i=0;i<menuTabs.length;i++){
    menuTabs[i].onclick = ActiveClass;
}

function ActiveClass(){
    for (let i=0;i<menuTabs.length;i++){
        menuTabs[i].className = '';
    }
    this.className = 'active';
}

    // console.log(menuTabs[0]);
    
    // SECOND TEST
    // const numbers = [45, 87, 46, 2];
    // for(let i =0; i < numbers.length; i++) {
    //     console.log(i + ' = ' + numbers[i]);
    // }
    
    // TROISIEME TEST
    // const contacts = [
    // {
    //     firstname: 'Emilie',
    //     age: 24,
    //     address: {
    //         street: '10 av de la Liberté',
    //         city: 'Paris',
    //     }
    // },
    //  {
    //      firstname: 'Georges',
    //      age: 65,
    //      address: {
    //          street: '35 rue des cheminots',
    //          city: 'Bordeaux',
    //      }
    //  },
    //   {
    //       firstname: 'Stéphane',
    //       age: 40,
    //       address: {
    //           street: '6354 bvd de la pierre',
    //           city: 'Tooulouse',
    //       }
    //   },
    // ];
    // for (let i = 0; i < contacts.length; i++){
    //     console.log(contacts[i].firstname);
    // }