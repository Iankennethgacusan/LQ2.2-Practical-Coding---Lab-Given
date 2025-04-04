let var_password = "passwordianpogi"; //Assumed password

let user_password = prompt("Enter your password:");
let user_name = prompt("Enter your username:");

if (user_password === var_password) {
  alert(`Welcome ${user_name}`);
} else {
  alert("Maybe Username or Password is Invalid or Does not Match");
}
