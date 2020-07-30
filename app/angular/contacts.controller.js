(function(){
    angular.module("contacts",[]);
    angular.module("contacts").controller("contactsController", function($scope, MyContacts){
        $scope.title = "System with angularJS";

        $scope.contacts = [];
        
        let loadContacts = function(){
            MyContacts.list().then(function(contacts){
                $scope.contacts = contacts;
            });
        }

        
        $scope.newContact = {};

        $scope.createContact = function() {
            let contact = {
                name: $scope.newContact.name,
                email: $scope.newContact.email,
                birthdate: $scope.newContact.date
            };
            
            MyContacts.insert(contact).then(loadContacts);

            $scope.newContact = {};
        }
        

        $scope.removeContact = function(id) {
            MyContacts.remove(id).then(loadContacts);
        }

        loadContacts();
    });

    
})();