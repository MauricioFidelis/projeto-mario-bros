const botaoTrailer = document.querySelector(".botao-trailer");
const modal = document.querySelector(".modal");
const botaofecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const linkDoVideo = video.src;

function alternarModal(){
  modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
//  modal.classList.add("aberto");
 alternarModal();
 video.setAttribute("src", linkDoVideo);
} );

botaofecharModal.addEventListener("click", () => {
  // modal.classList.remove("aberto");
  alternarModal();
  video.setAttribute("src", "");

});

