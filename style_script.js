let state_aside_in_out = 0;

function aside_in_out(){
    const ASIDE_aside_in_out = document.getElementById('aside');
    const ASIDE_ASIDE_MAIN_aside_in_out = document.getElementById('aside_main');
    if (state_aside_in_out == 0){
        state_aside_in_out = 1;
        ASIDE_aside_in_out.style.right = "-130px";
        ASIDE_aside_in_out.style.backgroundColor = "transparent";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "none";
    } else {
        state_aside_in_out = 0;
        ASIDE_aside_in_out.style.right = "0px";
        ASIDE_aside_in_out.style.backgroundColor = "var(--background_color)";
        ASIDE_ASIDE_MAIN_aside_in_out.style.display = "flex";

    }
}

function warning_for_not_enough_money() {
    const warning = document.getElementById('warning')
}