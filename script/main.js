// script/main.js
const cards = document.querySelectorAll('.card');const passwordModal = document.getElementById('passwordModal');const infoModal = document.getElementById('infoModal');const passwordInput = document.getElementById('passwordInput');const submitPassword = document.getElementById('submitPassword');const closePassword = document.getElementById('closePassword');const closeInfo = document.getElementById('closeInfo');const infoText = document.getElementById('infoText');const errorMsg = document.getElementById('errorMsg');let activeSecretCard = null;const correctPassword = "banda neira";const secretMessage = "aGFpIHNheWFuZ2t1LCBjaW50YWt1LCBkdW5pYWt1LCBydW1haGt1LiBlaCwgbWFudGFuIHlhPyBod2h3aHdody4gYXBhIGthYmFyPyBha3Uga2FuZ2VuLiBrYW11IHN1ZGFoIHB1bnlhIGNvd29rIGxhZ2kgeWE/IHN1ZGFoIGJhaGFnaWE/IHNlYmVuYXJueWEgYWt1IHRpZGFrIG1hdSBtZW5nZ2FuZ2d1LCBha3UgY3VtYSBtYXUgYmlsYW5nIGthbmdlbiBzYWphLiBlaCwga2FtdSBiZXJoYXNpbCBtYXN1ayBrZSBzaW5pIOKAlCBhcnRpbnlhIHRhaHUgeWEgcGFzc3dvcmRueWEga2VyZW4uIFRBVSBHQUE/IGFrdSBzZWxhbHUgbWVudW5nZ3Uga2FtdSBkaSBzaW5pLiBMT1ZFIFUgU0VLRUJPTi4=";
function decodeBase64(b64) {
  try {
    return atob(b64);
  } catch (e) {
    console.error('Dekode Base64 gagal:', e);
    return '[Isi tidak dapat ditampilkan]';
  }
}
cards.forEach(card => {
  card.addEventListener('click', () => {
    if (card.classList.contains('secret')) {
      activeSecretCard = card;
      passwordModal.style.display = 'flex';
      passwordInput.value = '';
      errorMsg.textContent = '';
      passwordInput.focus();
    } else {
      const info = card.getAttribute('data-info') || 'Tidak ada keterangan.';
      infoText.textContent = info;
      infoModal.style.display = 'flex';
    }
  });
});
submitPassword.addEventListener('click', () => {
  const value = passwordInput.value;
  if (value === correctPassword) {
    passwordModal.style.display = 'none';
    const decoded = decodeBase64(secretMessage);
    infoText.textContent = decoded;
    infoModal.style.display = 'flex';
  } else {
    errorMsg.textContent = 'Kata sandi salah...';
  }
});
closePassword.addEventListener('click', () => {
  passwordModal.style.display = 'none';
});
closeInfo.addEventListener('click', () => {
  infoModal.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === passwordModal) passwordModal.style.display = 'none';
  if (e.target === infoModal) infoModal.style.display = 'none';
});
passwordInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') submitPassword.click();
  if (e.key === 'Escape') passwordModal.style.display = 'none';
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') infoModal.style.display = 'none';
});
