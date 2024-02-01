function encriptar(textoValor) {
    // let textoValor = document.getElementById('caja-texto').value;
    // let textoMod = document.getElementById('texto-resultado');
    let cifrado = textoValor
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    // document.getElementById('caja-texto').value = "";
    // textoMod.innerHTML = cifrado;
    return cifrado;
}

function desencriptar() {
    let textoMod = document.getElementById('texto-resultado').value;
    let cifrado = textoMod
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById('texto-resultado').innerHTML = cifrado;
    return
}

function copiar() {
    let textoCopiar = document.getElementById("texto-resultado");
    let copiarAlPortaPapel = async str => {
        try {
            await navigator.clipboard.writeText(str);
            alert("copiado");
        } catch (error) {
            alert(error);
        }
    };
    copiarAlPortaPapel(textoCopiar.textContent);

    textoCopiar.value = "";

}