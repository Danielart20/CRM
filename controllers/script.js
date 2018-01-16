var app = angular.module('MyApp',[]);

app.controller('MainCtrl', mainctrl);

function mainctrl($scope){
    $scope.frutas =[{
        name : '',
        price: '',
        quantity: '',
        
    },
    {
        name : '',
        price: '',
        quantity: '',
        
    },{
        name : '',
        price: '',
        quantity: '',
        
    },{
        name : '',
        price: '',
        quantity: '',
        
    },{
        name : '',
        price: '',
        quantity: '',
        
    }]
    $scope.finalCarro = finCarro;
    $scope.finCompra = finCompra;
    $scope.carroCompleto = carroCompleto;
    $scope.saltoLinea = saltoLinea;
    
    
    //////////////////
    
    function finCompra(){
    var p = document.getElementById('fin_compra');
    p.innerHTML = "Enhorabuena, has finalizado tu compra!";
        
    }
    function carroCompleto(){
       var quant = $scope.frutas[4].quantity;
        return quant;
    }
    function finalCarro(){
            frutas.quantity;
    }
    
    function saltoLinea(index){
        if($scope.frutas[0] || $scope.frutas[index].quantity){
            return true;
        }
}
    