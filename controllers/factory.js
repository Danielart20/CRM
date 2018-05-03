(function () {
    'use strict';
    angular
        .module('crmApp')
        .factory('UserLocalProvider', UserLocalProvider);

    UserLocalProvider.$inject = ['$http'];

    /* @ngInject */
    function UserLocalProvider($http){
        var exports = {
            dameUsuarios: dameUsuarios,
            guardarLista: guardarLista,
            getAll: getAll,
        };
        

        return exports;

        ////////////////

        
        function getAll(){
            return $http.get('http://localhost:3000/api/customers');        
        }
        
        
        
        function dameUsuarios() {
            if ("lista" in localStorage) {
                var lista = JSON.parse(localStorage.getItem("lista"));
                return lista;
            }else{
                return [];
            }
            
        }
        
        function guardarLista(listaClientes){
            localStorage.setItem("lista", JSON.stringify(listaClientes));

        }

    }
})();