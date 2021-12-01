
var imagens = ["img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.png", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg", "img1.jpeg", "img2.jpeg", "img3.jpeg", "img4.jpeg", "img5.jpeg", "img6.png", "img7.jpeg", "img8.jpeg", "img9.jpeg", "img10.jpeg"];
var contImg;
var aleatorioImg = ["cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza", "cinza"]
var inicial = true;
var novaJogo = false;
var idAnterior;
var clicar = 0;
var indice = [];
var acertoj1 = 0;
var acertoj2 = 0;
var rodada = 0;
function contadorImg(num) {
	contImg = 0;

	for (let j = 0; j < (imagens.length); j++) {
		if (aleatorioImg[num] == aleatorioImg[j]) {
			contImg++;

		}
	}
	return contImg;
}

function aleatorioDeImagens() {

	for (let i = 0; i < (imagens.length); i++) {
		var num = Math.round((Math.random() * 19));

		while ((aleatorioImg[num] != "cinza")) {
			contImg = contadorImg(num)
			num = Math.round((Math.random() * 19));

		}
		aleatorioImg[num] = imagens[i];
	}


}


function sair() {
	let esc = confirm("Você deseja sair do jogo?");
	if (esc == true) {

		window.location.assign("http://www.google.com");
	}
}

function novaPartida() {
	let esc1 = confirm("Você deseja um novo do jogo mesmo?");
	if (esc1 == true) {
		window.location.assign("telaprincipalmemoriajs.html");


	}
}
function habilitar() {
	document.getElementById("iniciar").setAttribute("disabled", "disabled");
	document.getElementById("iniciar").style.backgroundColor = "grey";
	document.getElementById("iniciar").style.color = "black";
	document.getElementById("cancelar").removeAttribute("disabled");
	document.getElementById("novapart").removeAttribute("disabled");
	document.getElementById("cancelar").style.color = "yellow";
	document.getElementById("novapart").style.color = "green";
	for (let u = 0; u < imagens.length; u++) {
		novaJogo = true;
		document.querySelectorAll(".escolha")[u].addEventListener("click", escolhas, false);

	}
	exibirInicial();



}
function exibirInicial() {
	if (inicial) {
		for (let z = 0; z < imagens.length; z++) {
			document.getElementById(z.toString()).setAttribute("src", aleatorioImg[z]);
			setTimeout(function () {
				document.getElementById(z.toString()).setAttribute("src", "cinza.png")
			}, 1100);
		}
	}
	inicial = false;

}
function placarJogo(validador, jogador) {
	if (validador == 1) {
		document.getElementById(jogador).value = acertoj1 + 1;
		acertoj1++;

	} else {
		document.getElementById(jogador).value = acertoj2 + 1;
		acertoj2++;
	}


}
function escolhas() {
	clicar++;

	if (clicar % 2 == 1) {
		idAnterior = this.id;

	}
	indice.push(this.id);
	document.getElementById((this.id)).setAttribute("src", aleatorioImg[this.id]);
	document.getElementById((this.id)).setAttribute("disabled", "disabled");
	if (clicar % 2 == 0) {
		if (document.getElementById(indice[0]).getAttribute("src") != document.getElementById(indice[1]).getAttribute("src")) {
			setTimeout(function () {
				document.getElementById(indice[0]).setAttribute("src", "cinza.png");
				document.getElementById(indice[1]).setAttribute("src", "cinza.png");
			}, 200);
			document.getElementById((this.id)).removeAttribute("disabled");

			document.getElementById((idAnterior)).removeAttribute("disabled");
		} else {
			if (rodada % 2 == 0) {
				placarJogo(1, "j1");

			} else {
				placarJogo(2, "j2");


			}

		}
		setTimeout(function () {
			rodada++;
			indice.splice(0, 2);
		}, 300);

	}
}
function carregar() {
	aleatorioDeImagens();
	document.getElementById("cancelar").addEventListener("click", sair, false);
	document.getElementById("novapart").addEventListener("click", novaPartida, false);
	document.getElementById("iniciar").addEventListener("click", habilitar, false);

}
window.addEventListener("load", carregar)