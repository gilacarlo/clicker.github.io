






let box_question_in_out = 0;
function question_button(){
    const box_question = document.getElementById('box_question');

    if(box_question_in_out == 0){
        box_question.style.display = "flex";
        content_question_button();
        box_question_in_out = 1;
    }else{
        box_question.style.display = "none";

        box_question_in_out = 0;
    }
}

function content_question_button(){
   setTimeout(() => {
    document.getElementById('box_question').innerHTML = ``;
    document.getElementById('box_question').innerHTML += `<div class="content_box_question">${svg_0}Clickador: ${(10 * (clickador_de_coisas_passive_income * BUFF_clickador_de_coisas_passive_income)).toFixed(1)}/s (${(((10 * (clickador_de_coisas_passive_income * BUFF_clickador_de_coisas_passive_income))/(current_income * 10)) * 100).toFixed(1)}%)</div>`;
    document.getElementById('box_question').innerHTML += `<div class="content_box_question">${svg_1}Lambedor: ${(10 * (lambedor_de_coisas_passive_income * BUFF_lambedor_de_coisas_passive_income)).toFixed(1)}/s (${(((10 * (lambedor_de_coisas_passive_income * BUFF_lambedor_de_coisas_passive_income))/(current_income * 10)) * 100).toFixed(1)}%)</div>`;
    document.getElementById('box_question').innerHTML += `<div class="content_box_question">${svg_2}Trabalhista: ${(10 * (coisa_trabalhista_passive_income * BUFF_coisa_trabalhista_passive_income)).toFixed(1)}/s (${(((10 * (coisa_trabalhista_passive_income * BUFF_coisa_trabalhista_passive_income))/(current_income * 10)) * 100).toFixed(1)}%)</div>`;
    document.getElementById('box_question').innerHTML += `<div class="content_box_question">${svg_3}Fotosintese: ${(10 * (fotosintese_de_coisa_passive_income * BUFF_fotosintese_de_coisa_passive_income)).toFixed(1)}/s (${(((10 * (fotosintese_de_coisa_passive_income * BUFF_fotosintese_de_coisa_passive_income))/(current_income * 10)) * 100).toFixed(1)}%)</div>`;
 
    }, 10);
}





document.getElementById('main').innerHTML += '<div class="cursors_structure" id="cursors_structure"></div>';
document.getElementById('main').innerHTML += '<div class="cursors_structure2" id="cursors_structure2"></div>';
document.getElementById('main').innerHTML += '<div class="cursors_structure3" id="cursors_structure3"></div>';
document.getElementById('main').innerHTML += '<div class="cursors_structure4" id="cursors_structure4"></div>';

for(let i3 = 0; i3 < 24; i3++){
    document.getElementById('cursors_structure').innerHTML += `<div class="arrow_structure" id="arrow_structure${i3}">${svg_0}</div>`;
    const arrow_structure = document.getElementById(`arrow_structure${i3}`);

    arrow_structure.style.transform = `rotate(${(15 * i3) + 'deg'})`;
}
for(let i3 = 24; i3 < 60; i3++){
    document.getElementById('cursors_structure2').innerHTML += `<div class="arrow_structure2" id="arrow_structure2${i3}">${svg_0}</div>`;
    const arrow_structure = document.getElementById(`arrow_structure2${i3}`);

    arrow_structure.style.transform = `rotate(${(10 * i3) + 'deg'})`;
}
for(let i3 = 60; i3 < 110; i3++){
    document.getElementById('cursors_structure3').innerHTML += `<div class="arrow_structure3" id="arrow_structure3${i3}">${svg_0}</div>`;
    const arrow_structure = document.getElementById(`arrow_structure3${i3}`);

    arrow_structure.style.transform = `rotate(${(7.19 * i3) + 'deg'})`;
}
for(let i3 = 110; i3 < 170; i3++){
    document.getElementById('cursors_structure4').innerHTML += `<div class="arrow_structure4" id="arrow_structure4${i3}">${svg_0}</div>`;
    const arrow_structure = document.getElementById(`arrow_structure4${i3}`);

    arrow_structure.style.transform = `rotate(${(6 * i3) + 'deg'})`;
}

setInterval(animate_the_rotate, 10);

setInterval(animate_the_arrow, 600);
setInterval(animate_the_arrow, 933);

setInterval(animate_the_arrow2, 300);
setInterval(animate_the_arrow2, 633);

setInterval(animate_the_arrow3, 300);
setInterval(animate_the_arrow3, 633);
setInterval(animate_the_arrow3, 275);

setInterval(animate_the_arrow4, 300);
setInterval(animate_the_arrow4, 533);
setInterval(animate_the_arrow4, 175);


let i3 = 0;
function  appear_arrow_structure(){
    if(i3 < 24){
        const arrow_structure = document.getElementById(`arrow_structure${i3}`);
        arrow_structure.style.display = "flex";
    }else if(i3 < 60){
        const arrow_structure2 = document.getElementById(`arrow_structure2${i3}`);
        arrow_structure2.style.display = "flex";
    }else if(i3 < 110){
        const arrow_structure3 = document.getElementById(`arrow_structure3${i3}`);
        arrow_structure3.style.display = "flex";
    }else if(i3 < 170){
        const arrow_structure4 = document.getElementById(`arrow_structure4${i3}`);
        arrow_structure4.style.display = "flex";
    }
    i3++;
}


let i4 = 0;
function animate_the_rotate(){
    const cursors_structure = document.getElementById(`cursors_structure`);
    const cursors_structure2 = document.getElementById(`cursors_structure2`);
    const cursors_structure3 = document.getElementById(`cursors_structure3`);
    const cursors_structure4 = document.getElementById(`cursors_structure4`);


    cursors_structure.style.transform = `rotate(${(0.08 * i4) + 'deg'})`;

    cursors_structure2.style.transform = `rotate(${(-1 * (0.02 * i4)) + 'deg'})`;

    cursors_structure3.style.transform = `rotate(${((0.05 * i4)) + 'deg'})`;

    cursors_structure4.style.transform = `rotate(${((0.03 * i4)) + 'deg'})`;
    i4++;
}

function animate_the_arrow(){
    var index_arrow = num_aleatorio(0,23);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "0px";
    }, 1);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "5px";
    }, 15);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "10px";
    }, 30);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "15px";
    }, 45);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "10px";
    }, 60);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "5px";
    }, 75);
    setTimeout(() => {
        const svg_arrow_structure = document.getElementById(`arrow_structure${index_arrow}`);
        svg_arrow_structure.style.paddingBottom = "0px";
    }, 90);
}

function animate_the_arrow2(){
    var index_arrow = num_aleatorio(24,59);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "0px";
    }, 1);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "5px";
    }, 15);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "10px";
    }, 30);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "15px";
    }, 45);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "10px";
    }, 60);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "10px";
    }, 75);
    setTimeout(() => {
        const svg_arrow_structure2 = document.getElementById(`arrow_structure2${index_arrow}`);
        svg_arrow_structure2.style.paddingBottom = "0px";
    }, 90);
}

function animate_the_arrow3(){
    var index_arrow = num_aleatorio(60,109);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "0px";
    }, 1);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "5px";
    }, 15);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "10px";
    }, 30);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "15px";
    }, 45);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "10px";
    }, 60);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "5px";
    }, 75);
    setTimeout(() => {
        const svg_arrow_structure3 = document.getElementById(`arrow_structure3${index_arrow}`);
        svg_arrow_structure3.style.paddingBottom = "0px";
    }, 90);
}

function animate_the_arrow4(){
    var index_arrow = num_aleatorio(110,169);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "0px";
    }, 1);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "5px";
    }, 15);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "10px";
    }, 30);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "15px";
    }, 45);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "10px";
    }, 60);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "5px";
    }, 75);
    setTimeout(() => {
        const svg_arrow_structure4 = document.getElementById(`arrow_structure4${index_arrow}`);
        svg_arrow_structure4.style.paddingBottom = "0px";
    }, 90);
}

// for(gayzao = 0;gayzao < 170;gayzao++){
//     appear_arrow_structure();
// }




let state_aside_in_out = 0;

function aside_in_out(){
    const ASIDE_aside_in_out = document.getElementById('aside');
    const ASIDE_ASIDE_MAIN_aside_in_out = document.getElementById('aside_main');
    const ASIDE_ASIDE_UPGRADE_aside_in_out = document.getElementById('aside_upgrade');

    if (state_aside_in_out == 0){
        state_aside_in_out = 1;
        ASIDE_aside_in_out.style.right = "var(--ASIDE_aside_in_outstyleright)";
        ASIDE_aside_in_out.style.backgroundColor = "transparent";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "none";
        ASIDE_ASIDE_UPGRADE_aside_in_out.style.display = "none";

    } else {
        state_aside_in_out = 0;
        ASIDE_aside_in_out.style.right = "0px";
        ASIDE_aside_in_out.style.backgroundColor = "var(--background_color)";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "flex";
        ASIDE_ASIDE_UPGRADE_aside_in_out.style.display = "flex";


    }
}

let warning_waiting = 0;
function warning_for_not_enough_money() {
    const warnings = document.getElementById('warnings');
    warnings.style.display = "flex";
    
    if(warning_waiting == 0){
        warning_waiting = 1;
        body.appendChild(warnings);
        setTimeout(() => {
            warnings.style.display = "none";
            warning_waiting = 0;
        }, 1700);
    }
}

function excluir_botao_aside_upgrade(id) {
    const botao_aside_upgrade = document.getElementById(id);
    botao_aside_upgrade.style.display = "none";
}

let index_circulo_little = 0;
function circuloclicada(){
    coisas_$ += 1 * BUFF_clickar_$;
    
    Circulo_effects_when_clicked();
    index_circulo_little++;

    animate_the_arrow();
    animate_the_arrow2();
    animate_the_arrow3();
    animate_the_arrow4();

}

function Circulo_effects_when_clicked(){
    document.getElementById(`main`).innerHTML += `<div class="circulo_little" id="circulo_little${index_circulo_little}"></div>`;
    document.getElementById(`main`).innerHTML += `<div class="mostrarclicadadequantoganhou" id="mostrarclicadadequantoganhou${index_circulo_little}">+${1 * BUFF_clickar_$}</div>`;

    const div = document.getElementById(`circulo_little${index_circulo_little}`);
    const mcdqg = document.getElementById(`mostrarclicadadequantoganhou${index_circulo_little}`); //mostrarclicadadequantoganhou = mcdqg

    eventoX = (parseInt(event.pageX) - 10);
    eventoY = (parseInt(event.pageY) - 10);
    X = eventoX + 'px';
    div.style.left = X;
    mcdqg.style.left = X;

    div.style.opacity = "1";
    mcdqg.style.opacity = "1";

    Y = eventoY + 'px';
    div.style.top = Y;
    mcdqg.style.top = Y;

    if (Math.random() < 0.5){
        directionX = -1;
    }else{
        directionX = 1;
    }
    min = 0;max = 4;
    if (Math.random() < 0.5){
        directionX = directionX + (0.1 * num_aleatorio(min,max));
    }else{
        directionX = directionX - (0.1 * num_aleatorio(min,max));
    }
    var directionY = 1;
    min = 0;max = 9;
    directionY = directionY - (0.1 * num_aleatorio(min,max));

    min = 1;max = 5;
    switch (num_aleatorio(min,max)) {
        case 1:
            delay_animation = 1;
            break;
        case 2:
            delay_animation = 1.2;
            break;
        case 3:
            delay_animation = 1.4;
            break;
        case 4:
            delay_animation = 1.6;
            break;
        case 5:
            delay_animation = 1.8;
            break;
        default:
            console.log("erro no switch delay_animation");
      }
    animação_do_circulo(index_circulo_little,eventoX,eventoY,directionX,directionY,delay_animation);

    animação_do_mcdqg(index_circulo_little,parseInt(eventoX),parseInt(eventoY));

    Remove_CirculoANDmcdqg_effects(index_circulo_little,delay_animation);
      
}

function Remove_CirculoANDmcdqg_effects(index_c_l,delay_animation){
    setTimeout(() => {
        const main = document.getElementById('main');
        const Circulo_effects = document.getElementById(`circulo_little${index_c_l}`);

        main.removeChild(Circulo_effects); 
    }, 120 * delay_animation);
    setTimeout(() => {
        const main = document.getElementById('main');
        const mcdqg2 = document.getElementById(`mostrarclicadadequantoganhou${index_c_l}`);

        main.removeChild(mcdqg2); 
    }, 400 * delay_animation);
    
}
function animação_do_mcdqg(index_circulo_little,eventoX,eventoY){
    
    for(let i2 = 1; i2 < 21; i2++){
        setTimeout(() => {
            const mcdqg3 = document.getElementById(`mostrarclicadadequantoganhou${index_circulo_little}`);
            mcdqg3.style.opacity = `${1.1 - (0.06 * i2)}`;    
            mcdqg3.style.top = ((eventoY - 8 * i2) - 10) + 'px';
        }, 20 * i2);
    }
}
function  animação_do_circulo(index_circulo_little,eventoX,eventoY,directionX,directionY,delay_animation){
    eventoX = parseInt(eventoX);
    eventoY = parseInt(eventoY);

    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 5 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.9";
        Y = (eventoY - 10 * directionY) + 'px';
        div.style.top = Y;
    }, 10 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 8 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.8";
        Y = (eventoY - 12) + 'px';
        div.style.top = Y;
    }, 20 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 11 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.7";
        Y = (eventoY - 14) + 'px';//maximo Y
        div.style.top = Y;
    }, 30 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 14 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.6";
        Y = (eventoY - 12 * directionY) + 'px';
        div.style.top = Y;
    }, 40 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 17 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.5";
        Y = (eventoY - 8 * directionY) + 'px';
        div.style.top = Y;
    }, 50 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 19 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.4";
        Y = (eventoY - 2 * directionY) + 'px';
        div.style.top = Y;
    }, 60 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 20 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.25";
        Y = (eventoY + 6 * directionY) + 'px';
        div.style.top = Y;
    }, 70 * delay_animation);
    setTimeout(() => {
        const div = document.getElementById(`circulo_little${index_circulo_little}`);
        X = (eventoX + 21 * directionX) + 'px';
        div.style.left = X;
        div.style.opacity = "0.1";
        Y = (eventoY + 12 * directionY) + 'px';
        div.style.top = Y;
    }, 80 * delay_animation);
}

document.getElementById('question').innerHTML += question;