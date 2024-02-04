function emailSend() {
  var userName = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var messageBody =
    "Name" + userName + "<br/> Phone" + phone + "<br/> Email" + email;
  emailSend
    .send({
      Host: "smrp.elasticemail.com",
      Username: "mustfahinur@gmail.com",
      Password: "77B69E6B9D5AC49BD8A9CAC68E6AAA2685C2",
      To: "linaisgoodgirl@gmail.com",
      From: "mustfahinur@gmail.com",
      Subject: "This is the subject",
      Body: messageBody,
    })
    .then((message) => {
      if (message == "Ok") {
        swal("Success!", "You clicked the button!", "success");
      } else {
        swal("Error", "You clicked the button!", "error");
      }
    });
}
// https://app.elasticemail.com/api/setting/create-smtp
// https://app.elasticemail.com/marketing
