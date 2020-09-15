// allow purchase only if certain criteria is matched

var isLoggedIn = true;
var isEmailVerified = true;
var isCardInfo = false;

// if (isLoggedIn) {
//   console.log("Login sucess");
//   if (isEmailVerified) {
//     console.log("email verified success");
//     if (isCardInfo) {
//       console.log("You can make the payement");
//     }
//   }
// }

if (isLoggedIn && isEmailVerified && isCardInfo) {
  console.log("User allowed to make a purchase");
} else {
  console.log("not allowed mister");
}
