function registerUser() {
  const username = document.getElementById('signupUsername').value;
  const password = document.getElementById('signupPassword').value;
  localStorage.setItem('user', username);
  localStorage.setItem('pass', password);
  alert('Account created!');
  window.location.href = 'login.html';
  return false;
}

function loginUser() {
  const user = document.getElementById('loginUsername').value;
  const pass = document.getElementById('loginPassword').value;
  if (localStorage.getItem('user') === user && localStorage.getItem('pass') === pass) {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'dashboard.html';
  } else {
    alert('Invalid login!');
  }
  return false;
}

function logout() {
  sessionStorage.removeItem('loggedIn');
  window.location.href = 'index.html';
}

function submitApplication() {
  const regiment = document.getElementById('regiment').value;
  const reason = document.getElementById('reason').value;
  alert('Application submitted for ' + regiment + '!');
  return false;
}

window.onload = () => {
  if (document.getElementById('userDisplay')) {
    document.getElementById('userDisplay').textContent = localStorage.getItem('user') || 'Guest';
  }
};