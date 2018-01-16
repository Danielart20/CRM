(function () {
    'use strict';

    angular
        .module('crmApp')
        .controller('clienteController', clienteController);

    clienteController.$inject = ['$scope', 'UserLocalProvider', '$http'];

    /* @ngInject */
    function clienteController($scope, UserLocalProvider, $http) {
        $scope.listaClientes = [];
        $scope.Cliente = {};
        
        
        
        
        $scope.nuevoCliente = nuevoCliente;
        $scope.cancelar = cancelar;
        $scope.eliminarCliente = eliminarCliente;
        $scope.modificarCliente = modificarCliente;
        $scope.modificar = modificar;
        $scope.datos = datos;


        activate();

        ////////////////

        function activate() {
            $scope.listaClientes = UserLocalProvider.dameUsuarios();
            UserLocalProvider.getAll().then(datos)
        }
        function datos(response){
            $scope.listaClientes = response.data;
        }

        function nuevoCliente(nuevo) {
            $scope.Cliente.id = randId();
            $scope.listaClientes.push(nuevo);
            UserLocalProvider.guardarLista(nuevo);
            guardar_localstorage();
            $scope.Cliente = {};
        }

        function cancelar() {
            $scope.Cliente = {};
        }

        function eliminarCliente(id) {
            if (!confirm("¿Estas seguro de que quieres borrar?")) {
                return false;
            } else {
                for (var i = 0; i < $scope.listaClientes.length; i++) {
                    if ($scope.listaClientes[i].id === id) {

                        $scope.listaClientes.splice(i, 1);
                        guardar_localstorage();
                    }
                }
            }
        }


        function modificarCliente(id) {
            $scope.showme = true;
            for (var i = 0; i < $scope.listaClientes.length; i++) {
                if ($scope.listaClientes[i].id === id) {
                    $scope.Cliente = JSON.parse(JSON.stringify($scope.listaClientes[i]));
                }
            }
        }

        function modificar() {
            for (var i = 0; i < $scope.listaClientes.length; i++) {
                if ($scope.listaClientes[i].id === $scope.Cliente.id) {
                    $scope.listaClientes[i] = JSON.parse(JSON.stringify($scope.Cliente));
                    $scope.Cliente = {};
                    guardar_localstorage();
                }

            }
            $scope.showme = false;

        }


        function recoger_localstorage() {
            if ("listaForm" in localStorage) {
                $scope.Cliente = JSON.parse(localStorage.getItem("listaForm"));
            }
        }


        function guardar_localstorage() {
          UserLocalProvider.guardarLista($scope.listaClientes);
            
            localStorage.setItem("listaForm", JSON.stringify($scope.Cliente));
        }
        
                
        function randId() {
            return Math.random().toString(36).substr(2, 10);
        }
        
    }
})();
