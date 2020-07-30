
angular.module("contacts").factory("MyContacts", function($q, $http){
    return {
        list: function() {
            let promessa = $q.defer();

            $http.get("http://localhost:3000/contacts").then(
                function(result){
                    let contacts = [];

                    angular.forEach(result.data, function(contact){
                        contacts.push(contact);
                    });

                    promessa.resolve(contacts);
                }
                );
                
                return promessa.promise
        },


        insert: function(contact) {
            return $http.put("http://localhost:3000/contacts/" + id + ".json", contact);
        },


        remove: function(id) {
            return $http.delete("http://localhost:3000/contacts/" + id + ".json");
        }

    };
});