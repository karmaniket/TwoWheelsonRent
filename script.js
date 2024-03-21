function showSideBar() {
    const mobileBar = document.querySelector('.mobile-sidebar');
    // allContent.style.display = 'none';
    mobileBar.style.display="flex"
}

function closeSideBar() {
    const mobileBar = document.querySelector('.mobile-sidebar');
    // allContent.style.display = 'block';
    mobileBar.style.display="none"
}


// redirect to login page if not logged in

const userInfo = sessionStorage.getItem("user-info");
const userName = localStorage.getItem("username");
// || !userName
// if (!userInfo) {
//     window.location.href = "./login.html";
// }

function postSignedOut(){
    var popup1 = document.querySelector('.loggedIn1');
    var popup2 = document.querySelector('.loggedIn2');
    const specialGreet = document.getElementById("specialGreet");
    const logout = document.getElementById("logout");
    logout.style.display="none";
    popup1.style.display = 'flex';
    popup2.style.display = 'flex';
    specialGreet.style.display = 'none';
}

function signOut() {
    // sessionStorage.removeItem('user-creds');
    // sessionStorage.removeItem('user-info');
    sessionStorage.clear();
    localStorage.clear();
    // closePopup();
    postSignedOut();
    console.log("session removed");
  }

  function checkIfloggedIn(){
    window.location.href = "login.html";
  }

