function validateForm() {
  const form = document.forms["myForm"];
  console.log(form["fname"].value);
  if (value == "") {
    alert("You must type name");
    return false;
  }
}
