const nome = "Hiro Saito";
const xp = 5000;
const nivel = ['Ferro','Bronze','Prata','Ouro','platina','Ascendente','Imortal','Radiante'];

for (let i = 0; i < nivel.length; i++) {
    if (xp < 1.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[0]}!`);
        break;    
    } else if (xp >= 1.001 && xp <= 2.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[1]}1`);
        break; 
    } else if (xp >= 2.001 && xp <= 5.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[2]}`);
        break; 
    } else if (xp >= 5.001 && xp <= 7.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[3]}!`);
        break; 
    } else if (xp >= 7.001 && xp <= 8.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[4]}!`);
        break; 
    } else if (xp >= 8.001 && xp <= 9.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[5]}!`);
        break; 
    } else if (xp >= 9.001 && xp <= 10.000) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[6]}!`);
        break; 
    } else if (xp >= 10.001) {
        console.log(`O heroi ${nome} esta no nivel ${nivel[7]}!`);
        break; 
    } else {
        console.log('A experiencia é tanta que não consigo classificar UAU!');
    }
    
}



