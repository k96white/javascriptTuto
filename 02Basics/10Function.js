// functions in javascript

var getUserRole = function (name, role) {
  switch (role) {
    case "admin":
      return `${name} is admin with all access`;
      break;
    case "subadmin":
      return `${name} is subadmin with access to create & delete courses`;
      break;
    case "testprep":
      return `${name} is testprep with access to create & delete test`;
      break;
    case "user":
      return `${name} is user with view access`;
      break;
    default:
      return "is a trial user";
      break;
  }
};

console.log(getUserRole("Naveen", "user"));
