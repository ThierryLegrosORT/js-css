const contacts = [
    {
        firstname: 'Emilie',
        age: 24,
        address: {
            street: '10 av de la Liberté',
            city: 'Paris',
        }
    },
     {
         firstname: 'Georges',
         age: 65,
         address: {
             street: '35 rue des cheminots',
             city: 'Bordeaux',
         }
     },
      {
          firstname: 'Stéphane',
          age: 40,
          address: {
              street: '6354 bvd de la pierre',
              city: 'Tooulouse',
          }
      },
    ];
    for (let i = 0; i < contacts.length; i++){
        console.log(contacts[i].firstname);
    }