import cipher from './cipher.js';

const limpiarVentanaDecodificada = () => {

    const upperWindow = document.getElementById('ingresar-texto-decodificado');
    const lowerWindow = document.getElementById('resultado-codificado');

    upperWindow.value='';
    lowerWindow.value='';
};

const changeToDecoded = () => {

   console.log('Estamos cambiando ventanas para Decodificar!!')

   let textsAreas = document.getElementsByTagName('textarea');
   textsAreas[0].id = 'ingresar-texto-codificado';
   textsAreas[1].id = 'resultado-decodificado';

   let upperSectionIdentifierButton = document.getElementById('upper-btn-identifier-section');
   upperSectionIdentifierButton.className = 'icon-chinese-letter-icon';

   let lowerSectionIdentifierButton = document.getElementById('lower-btn-identifier-section');
   lowerSectionIdentifierButton.className = 'icon-a-letter-icon';


   let tabDecoded = document.getElementById('tab-decoded');
   tabDecoded.innerHTML = 'Codificado';

   let tabEncoded = document.getElementById('tab-encoded');
   tabEncoded.innerHTML = 'Decodificado';

//    let encodedOffset = document.getElementById('encoded-offset');
//    encodedOffset.id = 'decoded-offset';

   let hideButtonsEncoded = document.getElementById('buttons-section-decoded-to-encoded');
   hideButtonsEncoded.classList.replace('shown','hidden');

   let showButtonsDecoded = document.getElementById('buttons-section-encoded-to-decoded');
   showButtonsDecoded.classList.replace('hidden','shown');

}

const encodedOffsetChanges = (text, offset) => {
    console.log('Estamos cambiando el offset');

    cipher.codificar(text,offset);

}

const functionalitiesEncodedToDecoded = {
    limpiarVentanaDecodificada,
    encodedOffsetChanges,
    changeToDecoded
};

// ---------------------- LAS OTRAS FUNCIONALIDADES!! -------------

const limpiarVentanaCodificada = () => {

    const upperWindow = document.getElementById('ingresar-texto-codificado');
    console.log(upperWindow.value);
    const lowerWindow = document.getElementById('resultado-decodificado');
    
    upperWindow.value='';
    lowerWindow.value='';
};

const changeToEncoded = () => {

   console.log('Estamos cambiando ventanas para Codificar!!')

   let textsAreas = document.getElementsByTagName('textarea');
   textsAreas[0].id = 'ingresar-texto-decodificado';
   textsAreas[1].id = 'resultado-codificado';

   let upperSectionIdentifierButton = document.getElementById('upper-btn-identifier-section');
   upperSectionIdentifierButton.className = 'icon-a-letter-icon';

   let lowerSectionIdentifierButton = document.getElementById('lower-btn-identifier-section');
   lowerSectionIdentifierButton.className = 'icon-chinese-letter-icon';


   let tabDecoded = document.getElementById('tab-decoded');
   tabDecoded.innerHTML = 'Decodificado';

   let tabEncoded = document.getElementById('tab-encoded');
   tabEncoded.innerHTML = 'Codificado';

    let hideButtonsDecoded = document.getElementById('buttons-section-encoded-to-decoded');
    hideButtonsDecoded.classList.replace('shown','hidden');

    let showButtonsEncoded = document.getElementById('buttons-section-decoded-to-encoded');
    showButtonsEncoded.classList.replace('hidden','shown');

}

const decodedOffsetChanges = (text, offset) => {
    console.log('Estamos cambiando el offset');

    cipher.decodificar(text,offset);

}

const functionalitiesDecodedToEncoded = {
    limpiarVentanaCodificada,
    decodedOffsetChanges,
    changeToEncoded
};



export {functionalitiesEncodedToDecoded , functionalitiesDecodedToEncoded};