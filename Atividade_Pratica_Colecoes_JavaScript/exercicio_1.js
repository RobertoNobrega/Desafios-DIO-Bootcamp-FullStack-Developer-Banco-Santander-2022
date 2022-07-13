/*
                    Atividade 1 (De Stephany Snusch, da DIO): Maps
    1. Criar uma função getAdmins, que receba um Map;
    2. Criar um Map, popular com nomes de usuários e seus papeis no sistema. EX: Luis => Admin ;
    3. Em getAdmins, usar o loop for-of, para retornar uma lista de nomes dos usuários, que são administradores do sistema.

*/

function getAdmins(map){
   let admins = [];
   for([key,value] of map){  // [key,value] , estará iterando no mapa, com chave e valor.
      if(value === 'Admin'){
          admins.push(key); // Adicionando administrador.
      }
   }
   return admins; 
}

const usuarios = new Map();

usuarios.set('Luis', 'Admin');
usuarios.set('Stephany', 'Admin');
usuarios.set('Jorge', 'User');
usuarios.set('Natália', 'Admin');

console.log(getAdmins(usuarios));  // Executando e Exibindo os Administradores.
