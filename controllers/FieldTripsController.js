studentRoster.controller('FieldTripsCtrl', function FieldTripsCtrl($scope) {
  $scope.addStudentWithPermissionSlip = function(student) {
    student.permissionSlip = true;
  };
});
