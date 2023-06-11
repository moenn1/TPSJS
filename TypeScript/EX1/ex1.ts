const personnes = [
    {type: 'user', nom:'Max Mustermann', age: 25, villes: ['Marseille', 'Lyon', 'Paris']},
    {type: 'admin', nom: 'John Wick', age : 45, villes : ['Paris']},
    {type: 'user', nom: 'Kate Muller', age : 23, villes : ['Nantes', 'Lyon', 'Lille', 'Nice']},
    {type: 'admin', nom: 'Bruce Willis', age : 64, villes : ['Paris','Nantes']},
    {type: 'user', nom: 'Jack Wilson', age : 35, villes : ['Marseille','Lyon', 'Montpellier']},
    {type: 'admin', nom: 'Carol Smith', age : 23, villes : ['Marseille', 'Nice ', 'Montpellier']}
    ];
    
function getByTypeForEach(type: string): object[]{
    var result: object[] = [];
    personnes.forEach((personne: any) => {
    if (personne.type === type) {
      result.push(personne);
    }
  });
    
    return result;
}

function getByTypeMap(type: string): object[]{
    var result: object[] = [];
    personnes.map((personne: any) => {
    if (personne.type === type) {
      result.push(personne);
    }
  });
    
    return result;
}


function getByTypeFilter(type: string): object[]{
    var result: object[] = [];
    personnes.filter((personne: any) => {
    if (personne.type === type) {
      result.push(personne);
    }
  });
    
    return result;
}

function getByTypeReduce(type: string): any[] {
    return personnes.reduce((result: any[], personne: any) => {
      if (personne.type === type) {
        result.push(personne);
      }
      return result;
    }, []);
  }


//   function getByTypeFilter(type: string): object[]{
//     return personnes.every((personne: any) => personne.type == type);
// }



console.log(getByTypeReduce("admin"));