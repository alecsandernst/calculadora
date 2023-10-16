const raio = document.querySelector("#raio");
const altura = document.querySelector("#altura");
const volume = document.querySelector("#volume");
const areaT = document.querySelector("#areaT");

const VoCilindro = () => {
    const r = raio.value;
    const a = altura.value;

    const v = 3.14 * (r*r)* a;
    volume.textContent = v.toFixed(2);

};

const Artotal = () => {
    const r = raio.value;
    const a = altura.value;

    const at = (2 * 3.14 * r * a) + 2 * 3.14 * (r*r)
    areaT.textContent = at.toFixed(2);
};


raio.addEventListener("input", VoCilindro);
altura.addEventListener("input", VoCilindro);

raio.addEventListener("input", Artotal);
altura.addEventListener("input", Artotal);

VoCilindro();
Artotal();
