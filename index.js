const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container =document.querySelector(".container");

sign_up_btn.addEventListener('click',()=>{
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click',()=>{
  container.classList.remove("sign-up-mode");
});

  
function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  window.location = 'test.html';
     $("g.signin2").css("display","none");
  $("container").css("display","none");
    $(".data").css("display","block");
    $("#pic").attr('src',profile.getImageUrl());
    $("#email").text(profile.getEmail());
//     create();
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  }
// function signout() {
//   alert("signing out");
//   $("data").css("display","none");
//   $("container").css("display","block");
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

// function signOut() {
//   alert("signing out");
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//       console.log('User signed out.');
//     });
//   }

function signOut() {
    if(confirm("Are you sure to signout?")){
        var auth2 = gapi.auth2.getAuthInstance();
        auth2.signOut().then(function () {
          
            $("data").css("display","none");
//             $("#loaderIcon").hide('fast');
            $("#g-signin2").show('fast');
        });
        auth2.disconnect();
    }
}

function create() // Create function on 1st page
{
  window.location = 'test.html';
}
