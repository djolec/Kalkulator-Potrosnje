let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

let form = document.getElementById("form");

let brojilo = document.getElementById("brojilo");

let jtPostrosnjaEl = document.getElementById("jtPostrosnja");
let nizaTarifaEl = document.getElementById("nizaTarifa")
let visaTarifaEl = document.getElementById("visaTarifa")

const inputField = document.getElementById('input-field');

document.getElementById("jtPotrosnja").addEventListener('input', function() {
    const inputValue = this.value;
    
    if (inputValue.startsWith('0')) {
      this.value = inputValue.slice(1);
    } else {
  const filteredValue = inputValue.replace(/[^0-9]/g, '');
  this.value = filteredValue;
}
});
nizaTarifaEl.addEventListener('input', function() {
  const inputValue = this.value;
    
  if (inputValue.startsWith('0')) {
    this.value = inputValue.slice(1);
  } else {
const filteredValue = inputValue.replace(/[^0-9]/g, '');
this.value = filteredValue;
}
});
visaTarifaEl.addEventListener('input', function() {
    const inputValue = this.value;
    
    if (inputValue.startsWith('0')) {
      this.value = inputValue.slice(1);
    } else {
  const filteredValue = inputValue.replace(/[^0-9]/g, '');
  this.value = filteredValue;
}
});

let nizaPotrosnja = document.getElementById("nizaPotrosnja");
let visaPotrosnja = document.getElementById("visaPotrosnja");
let potrosnja = document.getElementById("potrosnja");

let cenaOS = 54.258;

let cenaJtZelena = 7.294;
let cenaJtPlava = 10.941;
let cenaJtCrvena = 21.822;

let cenaNizaZelena = 2.084;
let cenaVisaZelena = 8.336;
let cenaNizaPlava = 3.126;
let cenaVisaPlava = 12.504;
let cenaNizaCrvena = 6.252;
let cenaVisaCrvena = 25.008;

let obracun = parseInt(document.getElementById("obracun").value);

let prikljucak = document.getElementById("prikljucak");

let taksaRTS = document.getElementById("taksaRTS");
let taksaRTSbroj;
let taksaZaRTS = document.getElementById("taksaZaRTS")

console.log(taksaRTSbroj)

let nizaTarifa = parseInt(document.getElementById("nizaTarifa").value);
if (isNaN(nizaTarifa)) {
  nizaTarifa = 0;
} else {
  nizaTarifa === nizaTarifa;
}

let visaTarifa = parseInt(document.getElementById("visaTarifa").value);
if (isNaN(visaTarifa)) {
  visaTarifa = 0;
} else {
  visaTarifa === visaTarifa;
}

let zjtu = document.getElementById("zjtu");
let zjti = document.getElementById("zjti");
let pjtu = document.getElementById("pjtu");
let pjti = document.getElementById("pjti");
let cjtu = document.getElementById("cjtu");
let cjti = document.getElementById("cjti");

let odobrenaSnagaCena = document.getElementById("calcOS");
let odobrenaSnagaUtrosak = document.getElementById("OSu");
let osPoJedinici = 54.258;
let osJedinica = document.getElementById("osPoJedinici");
osJedinica.textContent = osPoJedinici + " din.";

let troGarSna = document.getElementById("troGarSna");
let troGarSnaCena = 145.22;

let nakZaPovUnos = document.getElementById("nakZaPovUnos");
let nakZaPovJedinica = document.getElementById("nakZaPovJedinica");
let nakZaPovJedinicaCena = 0.801;
let nakZaPovIznos = document.getElementById("nakZaPovIznos");
nakZaPovJedinica.textContent = nakZaPovJedinicaCena + " din.";

let nakZaUnEfUnos = document.getElementById("nakZaUnEfUnos");
let nakZaUnEfJedinica = document.getElementById("nakZaUnEfJedinicaCena");
let nakZaUnEfJedinicaCena = 0.015;
let nakZaUnEfIznos = document.getElementById("nakZaUnEfIznos");

let osnovica = document.getElementById("osnovica");
let osnovicabroj;

let iznosAkcize = document.getElementById("iznosAkcize");

let osnovicaPDVbroj;
let osnovicaPDV = document.getElementById("osnovicaPDV");

let PDV = document.getElementById("PDV");
let PDVbroj;

let zaduzenje = document.getElementById("zaduzenje");
let zaduzenjeBroj;

let ukupnoZaduzenje = document.getElementById("ukupnoZaduzenje")
let ukupnoZaduzenjeBroj;


function pokaziTarifu() {
  if (brojilo.value == "dt") {
    potrosnja.style.visibility = "hidden";
    nizaPotrosnja.style.visibility = "visible";
    visaPotrosnja.style.visibility = "visible";
    console.log(brojilo.value);
  } else {
    potrosnja.style.visibility = "visible";
    nizaPotrosnja.style.visibility = "hidden";
    visaPotrosnja.style.visibility = "hidden";
  }
}

function pokaziOS() {
  if (prikljucak.value == "tf") {
    document.getElementById("osMF").style.display = "none";
    document.getElementById("osTF").style.display = "block";
  } else {
    document.getElementById("osMF").style.display = "block";
    document.getElementById("osTF").style.display = "none";
  }
}
pokaziOS();

// RESETOVANJE UNOSA

btn1.addEventListener("click", function (event) {
  /*   document.getElementById("form").reset(); */

  function resetUnos() {
    document.getElementById("nizaTarifa").value = "";
    document.getElementById("visaTarifa").value = "";
    document.getElementById("jtPotrosnja").value = "";
    document.getElementById("obracun").value = 30;
  }
  resetUnos();

  zjtu.innerHTML = 0;
  zjti.innerHTML = "0.00 din.";
  pjtu.innerHTML = 0;
  pjti.innerHTML = "0.00 din.";
  cjtu.innerHTML = 0;
  cjti.innerHTML = "0.00 din.";

  znu.innerHTML = 0;
  zni.innerHTML = "0.00 din.";
  zvu.innerHTML = 0;
  zvi.innerHTML = "0.00 din.";
  pnu.innerHTML = 0;
  pni.innerHTML = "0.00 din.";
  pvu.innerHTML = 0;
  pvi.innerHTML = "0.00 din.";
  cnu.innerHTML = 0;
  cni.innerHTML = "0.00 din.";
  cvu.innerHTML = 0;
  cvi.innerHTML = "0.00 din.";
  document.getElementById("ukupnoKW").innerHTML = "0 kW/kWh";
  document.getElementById("ukupnoCena").innerHTML = "0.00 din";

  odobrenaSnagaCena.textContent = "0.00 din.";
  odobrenaSnagaUtrosak.textContent = 0;

  troGarSna.textContent = "0.00 din.";

  nakZaPovUnos.textContent = 0;
  nakZaPovIznos.textContent = "0.00 din";

  nakZaUnEfUnos.textContent = 0;
  nakZaUnEfIznos.textContent = "0.00 din.";

  osnovica.textContent = "0.00 din."

  iznosAkcize.textContent = "0.00 din."

  osnovicaPDV.textContent = "0.00 din."

  PDV.textContent = "0.00 din."

  zaduzenje.textContent = "0.00 din."

  taksaZaRTS.textContent = "0.00 din."

  ukupnoZaduzenje.textContent = "0.00 din."
});
// KRAJ RESETOVANJA UNOSA

btn.addEventListener("click", function (event) {
  event.preventDefault();

  // LOGIKA JEDNOTARIFNE POTROSNJE

  let jtPotrosnja = parseInt(document.getElementById("jtPotrosnja").value);
  if (brojilo.value === "dt") {
    jtPotrosnja = 0;
  } else if (isNaN(jtPotrosnja)) {
    jtPotrosnja = 0;
  } else {
    jtPotrosnja === jtPotrosnja;
  }

  let jtZelena = (jednoTarifna) => {
    if ((brojilo.value = "jt")) {
      if (jednoTarifna < 351) {
        return jednoTarifna;
      } else if (jednoTarifna > 350) {
        return 350;
      }
    } else {
      return 0;
    }
  };

  let jtPlava = (jednoTarifna) => {
    if ((brojilo.value = "jt")) {
      if (jednoTarifna < 351) {
        return 0;
      } else if (jednoTarifna > 350 && jednoTarifna < 1601) {
        return jednoTarifna - 350;
      } else if (jednoTarifna > 1600) {
        return 1250;
      }
    } else {
      return 0;
    }
  };

  let jtCrvena = (jednoTarifna) => {
    if ((brojilo.value = "jt")) {
      if (jednoTarifna > 1600) {
        return jednoTarifna - 1600;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  // UNOS JEDNOTARIFNE POTROSNJE

  if (brojilo.value === "dt") {
    zjtu.innerHTML = 0;
    zjti.innerHTML = "0.00 din.";
    pjtu.innerHTML = 0;
    pjti.innerHTML = "0.00 din.";
    cjtu.innerHTML = 0;
    cjti.innerHTML = "0.00 din.";
  } else {
    zjtu.innerHTML = jtZelena(jtPotrosnja);
    zjti.innerHTML =
      (jtZelena(jtPotrosnja) * cenaJtZelena).toFixed(2) + " din.";
    pjtu.innerHTML = jtPlava(jtPotrosnja);
    pjti.innerHTML = (jtPlava(jtPotrosnja) * cenaJtPlava).toFixed(2) + " din.";
    cjtu.innerHTML = jtCrvena(jtPotrosnja);
    cjti.innerHTML =
      (jtCrvena(jtPotrosnja) * cenaJtCrvena).toFixed(2) + " din.";
  }

  // KRAJ LOGIKE JEDNOTARIFNE POTROSNJE

  // LOGIKA DVOTARIFNE POTROSNJE

  let nizaTarifa = parseInt(document.getElementById("nizaTarifa").value);
  if (brojilo.value === "jt") {
    nizaTarifa = 0;
  } else if (isNaN(nizaTarifa)) {
    nizaTarifa = 0;
  } else {
    nizaTarifa === nizaTarifa;
  }

  let visaTarifa = parseInt(document.getElementById("visaTarifa").value);
  if (brojilo.value === "jt") {
    nizaTarifa = 0;
  } else if (isNaN(visaTarifa)) {
    visaTarifa = 0;
  } else {
    visaTarifa === visaTarifa;
  }

  let odnos1;
  let odnos2;
  let odnosTarifa = (nT, vT) => {
    if (nT > vT) {
      if (vT === 0) {
        vT = 1;
      }
      odnos1 = nT / vT;
      return odnos1;
    } else if (vT > nT) {
      if (nT === 0) {
        nT = 1;
      }
      odnos2 = vT / nT;
      return odnos2;
    } else {
      return 1;
    }
  };
  odnosTarifa(nizaTarifa, visaTarifa);

  let nizaZelena = (nT, vT) => {
    if (brojilo.value === "dt") {
      if (nT + vT > 350 && vT === 0) {
        return 350;
      } else if (nT + vT > 350 && nT === 0) {
        return 0;
      } else if (nT + vT > 350) {
        if (nT > vT) {
          return (350 / (odnos1 + 1)) * odnos1;
        } else if (vT > nT) {
          return 350 / (odnos2 + 1);
        } else if (vT === nT) {
          return 175;
        }
      } else if (nT + vT <= 350) {
        return nizaTarifa;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  let visaZelena = (nT, vT) => {
    if (brojilo.value === "dt") {
      if (nT + vT > 350 && vT === 0) {
        return 0;
      } else if (nT + vT > 350 && nT === 0) {
        return 350;
      } else if (nT + vT > 350) {
        if (vT > nT) {
          return (350 / (odnos2 + 1)) * odnos2;
        } else if (nT > vT) {
          return 350 / (odnos1 + 1);
        } else if (vT === nT) {
          return 175;
        }
      } else if (nT + vT <= 350) {
        return visaTarifa;
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  let nizaPlava = (nT, vT) => {
    if (brojilo.value === "dt") {
      if (nT + vT > 350 && nT + vT < 1601 && vT === 0) {
        return nT - 350;
      } else if (nT + vT > 350 && nT + vT < 1601 && nT === 0) {
        return 0;
      } else if (nT + vT > 1600 && nT === 0) {
        return 0;
      } else if (nT + vT > 350 && nT + vT > 1600 && vT === 0) {
        return 1250;
      } else if (nT + vT > 350 && nT + vT < 1601) {
        let ukupanUtrosak = nT + vT;
        if (nT > vT) {
          return ((ukupanUtrosak - 350) / (odnos1 + 1)) * odnos1;
        } else if (vT > nT) {
          return (ukupanUtrosak - 350) / (odnos2 + 1);
        } else {
          return (ukupanUtrosak - 350) / 2;
        }
      } else if (nT + vT > 1600) {
        if (nT > vT) {
          return (1250 / (odnos1 + 1)) * odnos1;
        } else if (vT > nT) {
          return 1250 / (odnos2 + 1);
        } else {
          return 1250 / 2;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  let visaPlava = (nT, vT) => {
    if (brojilo.value === "dt") {
      if (nT + vT > 350 && nT + vT < 1601 && vT === 0) {
        return 0;
      } else if (nT + vT > 350 && nT + vT > 1600 && vT === 0) {
        return 0;
      } else if (nT === 0 && vT > 350 && vT < 1600) {
        return vT - 350;
      } else if (nT + vT >= 1600 && nT === 0) {
        return 1250;
      } else if (nT + vT > 350 && nT + vT < 1601) {
        let ukupanUtrosak = nT + vT;
        if (nT > vT) {
          return (ukupanUtrosak - 350) / (odnos1 + 1);
        } else if (vT > nT) {
          return ((ukupanUtrosak - 350) / (odnos2 + 1)) * odnos2;
        } else {
          return (ukupanUtrosak - 350) / 2;
        }
      } else if (nT + vT > 1600) {
        if (nT > vT) {
          return 1250 / (odnos1 + 1);
        } else if (vT > nT) {
          return (1250 / (odnos2 + 1)) * odnos2;
        } else {
          return 1250 / 2;
        }
      } else {
        return 0;
      }
    } else {
      return 0;
    }
  };

  let nizaCrvena = (nT, vT) => {
    if (brojilo.value === "dt") {
    } else {
      return 0;
    }
    let ukupanUtrosak = nT + vT;
    if (nT + vT > 1600 && vT === 0) {
      return nT - 1600;
    } else if (nT + vT > 1600 && nT === 0) {
      return 0;
    } else if (nT + vT < 1601) {
      return 0;
    } else if (nT > vT) {
      return ((ukupanUtrosak - 1600) / (odnos1 + 1)) * odnos1;
    } else if (vT > nT) {
      return (ukupanUtrosak - 1600) / (odnos2 + 1);
    } else {
      return (ukupanUtrosak - 1600) / 2;
    }
  };

  let visaCrvena = (nT, vT) => {
    if (brojilo.value === "dt") {
      let ukupanUtrosak = nT + vT;
      if (nT + vT > 1600 && vT === 0) {
        return 0;
      } else if (nT + vT > 1600 && nT === 0) {
        return nT + vT - 1600;
      } else if (nT + vT < 1601) {
        return 0;
      } else if (nT > vT) {
        return (ukupanUtrosak - 1600) / (odnos1 + 1);
      } else if (vT > nT) {
        return ((ukupanUtrosak - 1600) / (odnos2 + 1)) * odnos2;
      } else {
        return (ukupanUtrosak - 1600) / 2;
      }
    } else {
      return 0;
    }
  };

  // UNOS DVOTARIFNE POTROSNJE

  if (brojilo.value === "jt") {
    znu.innerHTML = 0;
    zni.innerHTML = "0.00 din.";
    zvu.innerHTML = 0;
    zvi.innerHTML = "0.00 din.";
    pnu.innerHTML = 0;
    pni.innerHTML = "0.00 din.";
    pvu.innerHTML = 0;
    pvi.innerHTML = "0.00 din.";
    cnu.innerHTML = 0;
    cni.innerHTML = "0.00 din.";
    cvu.innerHTML = 0;
    cvi.innerHTML = "0.00 din.";
  } else {
    znu.innerHTML = Math.round(nizaZelena(nizaTarifa, visaTarifa));
    zni.innerHTML =
      (Math.round(nizaZelena(nizaTarifa, visaTarifa)) * cenaNizaZelena).toFixed(
        2
      ) + " din.";
    zvu.innerHTML = Math.round(visaZelena(nizaTarifa, visaTarifa));
    zvi.innerHTML =
      (Math.round(visaZelena(nizaTarifa, visaTarifa)) * cenaVisaZelena).toFixed(
        2
      ) + " din.";
    pnu.innerHTML = Math.round(nizaPlava(nizaTarifa, visaTarifa));
    pni.innerHTML =
      (Math.round(nizaPlava(nizaTarifa, visaTarifa)) * cenaNizaPlava).toFixed(
        2
      ) + " din.";
    pvu.innerHTML = Math.round(visaPlava(nizaTarifa, visaTarifa));
    pvi.innerHTML =
      (Math.round(visaPlava(nizaTarifa, visaTarifa)) * cenaVisaPlava).toFixed(
        2
      ) + " din.";
    cnu.innerHTML = Math.round(nizaCrvena(nizaTarifa, visaTarifa));
    cni.innerHTML =
      (Math.round(nizaCrvena(nizaTarifa, visaTarifa)) * cenaNizaCrvena).toFixed(
        2
      ) + " din.";
    cvu.innerHTML = Math.round(visaCrvena(nizaTarifa, visaTarifa));
    cvi.innerHTML =
      (Math.round(visaCrvena(nizaTarifa, visaTarifa)) * cenaVisaCrvena).toFixed(
        2
      ) + " din.";
  }

  // KRAJ LOGIKE DVOTARIFNE POTROSNJE

  // RACUNANJE I UNOS UKUPNE CENE I POTROSNJE

  let ukupnoCena = () => {
    if (brojilo.value === "jt") {
      return (
        parseFloat(zjti.innerHTML) +
        parseFloat(pjti.innerHTML) +
        parseFloat(cjti.innerHTML)
      );
    } else {
      return (
        parseFloat(zni.innerHTML) +
        parseFloat(zvi.innerHTML) +
        parseFloat(pni.innerHTML) +
        parseFloat(pvi.innerHTML) +
        parseFloat(cni.innerHTML) +
        parseFloat(cvi.innerHTML)
      );
    }
  };
  document.getElementById("ukupnoCena").innerHTML =
    ukupnoCena().toFixed(2) + " din.";

  let ukupnoPotrosnja = () => {
    if (brojilo.value === "jt") {
      return jtPotrosnja;
    } else {
      return nizaTarifa + visaTarifa;
    }
  };
  document.getElementById("ukupnoKW").innerHTML = ukupnoPotrosnja() + " kW/kWh";

  /*   btn2.addEventListener("click", (event) => {
    function saveData() {
      let mesecnaPotrosnja = []
      let mesec = {
        Ukupna_potrosnja: document.getElementById("ukupnoKW").innerHTML = ukupnoPotrosnja() + " kW/kWh",
        Ukupna_cena: document.getElementById("ukupnoCena").innerHTML =
        ukupnoCena().toFixed(2) + " din."
      }
      mesecnaPotrosnja.push(mesec)
      localStorage.setItem("Postrosnja", JSON.stringify(mesecnaPotrosnja))
    }
    saveData();
  }) */
  function calcOS() {
    if (prikljucak.value == "tf") {
      return (document.getElementById("osTF").value * cenaOS).toFixed(2);
    } else {
      return (document.getElementById("osMF").value * cenaOS).toFixed(2);
    }
  }
  odobrenaSnagaCena.textContent = calcOS() + " din.";
  if (prikljucak.value == "tf") {
    odobrenaSnagaUtrosak.textContent = osTF.value;
  } else if (prikljucak.value == "mf") {
    odobrenaSnagaUtrosak.textContent = osMF.value;
  }

  troGarSna.textContent = troGarSnaCena + " din.";

  nakZaPovUnos.textContent = ukupnoPotrosnja();
  nakZaPovIznos.textContent =
    (ukupnoPotrosnja() * nakZaPovJedinicaCena).toFixed(2) + " din.";

  nakZaUnEfUnos.textContent = ukupnoPotrosnja();
  nakZaUnEfIznos.textContent =
    (ukupnoPotrosnja() * nakZaUnEfJedinicaCena).toFixed(2) + " din.";

  osnovicabroj =
    parseFloat(calcOS()) +
    troGarSnaCena +
    ukupnoCena() +
    ukupnoPotrosnja() * nakZaPovJedinicaCena +
    ukupnoPotrosnja() * nakZaUnEfJedinicaCena;

  osnovica.textContent = osnovicabroj.toFixed(2) + " din.";

  iznosAkcize.textContent = ((osnovicabroj / 100) * 7.5).toFixed(2) + " din.";

  osnovicaPDVbroj = (osnovicabroj / 100) * 7.5 + osnovicabroj;
  osnovicaPDV.textContent =
    ((osnovicabroj / 100) * 7.5 + osnovicabroj).toFixed(2) + " din.";

  PDVbroj = (osnovicaPDVbroj / 100) * 20;
  PDV.textContent = PDVbroj.toFixed(2) + " din.";

  zaduzenjeBroj = osnovicaPDVbroj + PDVbroj;
  zaduzenje.textContent = zaduzenjeBroj.toFixed(2) + " din.";

  if (taksaRTS.checked == true) {
    taksaRTSbroj = 299;
  } else {
    taksaRTSbroj = 0;
  }

  taksaZaRTS.textContent = taksaRTSbroj.toFixed(2) + " din."

  ukupnoZaduzenjeBroj = taksaRTSbroj + zaduzenjeBroj
  ukupnoZaduzenje.textContent = ukupnoZaduzenjeBroj.toFixed(2) + " din."
});




document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    console.log("Enter")
    btn.click();
  } else if (event.keyCode == 9 ) {
    console.log("Enter")
    btn.click();
  }
});
