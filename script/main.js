// script/main.js
const cards = document.querySelectorAll(".card");
const passwordModal = document.getElementById("passwordModal");
const infoModal = document.getElementById("infoModal");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const closePassword = document.getElementById("closePassword");
const closeInfo = document.getElementById("closeInfo");
const infoText = document.getElementById("infoText");
const errorMsg = document.getElementById("errorMsg");
let activeSecretCard = null;
const correctPassword = "banda neira";
const secretMessage =
  "aGFpaWkuLi4gYXBhIGthYmFyPy4uIHNlbW9nYSBrYWJhciBiYWlrIHlhYS4uIHNlYmVsdW1ueWEga2VyZW4gbG9oaCBiaXNhIHRhdSBwYXNzd29yZG55YSwgaGViYXQuLiB0ZXB1ayB0YW5nYW4gc2VtdWFueWEsIEJhbmRhIE5laXJhIGl0dSB0ZW1wYXQgeWFuZyBha3Uga2FndW1pLCBzZW1vZ2EgbmFudGkgYmlzYSBrZSBzYW5hLCBhYW1paW5uLi4uIGVoaCBpeWEga2FuIHVkYWggbWFzdWsgeWEgc2VrYXJhbmcuLiBqYWRpIGdpbmkuLi4gSFdIV0hXSFdILCBha3UgbWF1IG1pbnRhIG1hYWYgKGFuamF5IG1pbnRhIG1hYWYgbGFnaSBiZXJhcGEgYmFueWFrIG1hYWYgZHVsdSB5YWE/KSBsYW5qdXQuLiBsYW5qdXQuLCBpeWFhYSBha3UgbWF1IG1pbnRhIG1hYWYsIGdhYSBzZWhhdCBqdWdhIGthbG8ga2VwaWtpcmFuIHRpYXAgaGFyaSBrYW4sIG1hYWYgeWFhIGR1bHV1IGFrdSBzZXJpbmcgbnlha2l0aW4ga2FtdSwgYmlraW4ga2FtdSBuYW5naXMsIHNlYmVuZXJueWEgdWRhaCBzYW1hIGthbXUgYWt1IGdhIHBlcm5haCBwdW55YSBodWJ1bmdhbiBzcGVzaWFsIGl0dSBsYWdpIGRlbmdhbiBzaWFwYXB1bi4uIHNlbXVhIHlhbmcgYWt1IGxha3VpbiBjdW1hbiBidWF0IGJpa2luIGthbXUgbWlraXIgYWt1IGl0dSBqYWhhdCBkYW4gdWRhaCBsdXBhIHNlbXVhbnlhIGRhbiB1ZGFoIGluZ2thciBqYW5qaSwgdGFwaS4uLiBrYWxpIGluaSBiZW5lciBha3UgZ2Egc2FtYSBzZWthbGkgYmVuZXIgYmVuZXIuLi4gZ2EgYmlzYSB0dWggbHVwYWEgdGVudGFuZyBraXRhLiBnaXR1IGFqYSBzaSwgTUFBRiBZQUEuLiwgYWt1IGhhcmFwIGthbXUgYmFjYSBpbmkgZGFuIHNlZW5nZ2EgbnlhIHRhdXUuLiBha3UgaGFyYXAgZGkga2VoaWR1cGFuIGxhaW4gZGkgYW50YWggYmVyYW50YWggYXRhdSBkaSBrZXRpYWRhYW4geWFuZyBtdXN0YWhpbCBraXRhIGJpc2EgYmVyc2FtYSB5YWEuLiBzZW1vZ2EganVnYSBraXRhIGJlcnRlbXUgZGkgdGl0aWsgdGVyYmFpayBraXRhLCBlbnRhaCBrZWJldHVsYW4gYXRhdSBkaXNlbmdhamEsIHNlbW9nYSBqdWdhIGthbXUgc2VsYWx1IGJhaGFnaWEgbWltcGkgbWltbXBpbnlhIHRlcmNhcGFpaSwgYWFtaWlubi4uLiBvaCBpeWFhIGthbiBtYXUgamFkaSBwZXJhd2F0IHlhYS4uIGFrdSBoYXJhcCBrYW11dSBzZWxhbHUgYmFoYWdpYSBwb2tvbnlhLCBpdHUgYWphIHNpaS4uLiBha3Ugc2VsYWx1IHBlcmhhdGlpbiBrYW11IGRhcmkgamF1aCBrbywgc2VtYW5nYXR0IHlhYWEuLi4gYWt1IGJhaGFnaWEga2Fsb28ga2FtdSBiYWhhZ2lhYSwga2FyZW5hIHRlcm55YXRhIGJhaGFnaWFueWEgYWt1IG1hc2loIGRpIGthbXV1LiB1ZGFoIGFoIHlhcHBpbmdueWFhIEhXSFdISFcsIHNhbXBhaSBqdW1wYSB5YWEuLi4gcGVyaSBrZWNpbGwgbWVuZ2dlbWFza2FuLi4uLg==";
function decodeBase64(b64) {
  try {
    return atob(b64);
  } catch (e) {
    console.error("Dekode Base64 gagal:", e);
    return "[Isi tidak dapat ditampilkan]";
  }
}
cards.forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("secret")) {
      activeSecretCard = card;
      passwordModal.style.display = "flex";
      passwordInput.value = "";
      errorMsg.textContent = "";
      passwordInput.focus();
    } else {
      const info = card.getAttribute("data-info") || "Tidak ada keterangan.";
      infoText.textContent = info;
      infoModal.style.display = "flex";
    }
  });
});
submitPassword.addEventListener("click", () => {
  const value = passwordInput.value;
  if (value === correctPassword) {
    passwordModal.style.display = "none";
    const decoded = decodeBase64(secretMessage);
    infoText.textContent = decoded;
    infoModal.style.display = "flex";
  } else {
    errorMsg.textContent = "Kata sandi salah...";
  }
});
closePassword.addEventListener("click", () => {
  passwordModal.style.display = "none";
});
closeInfo.addEventListener("click", () => {
  infoModal.style.display = "none";
});
window.addEventListener("click", (e) => {
  if (e.target === passwordModal) passwordModal.style.display = "none";
  if (e.target === infoModal) infoModal.style.display = "none";
});
passwordInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") submitPassword.click();
  if (e.key === "Escape") passwordModal.style.display = "none";
});
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") infoModal.style.display = "none";
});
