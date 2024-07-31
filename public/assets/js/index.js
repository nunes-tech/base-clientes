function enableToggleIconMod() {
    const iconMoon = document.querySelectorAll(".toggle-visibily")[0]
    const iconSun = document.querySelectorAll(".toggle-visibily")[1]

    if( iconMoon && iconSun){
        iconMoon.toggleAttribute("hidden")
        iconSun.toggleAttribute("hidden")
    }

}

document.querySelector(".li_topo.icon_mode").addEventListener("click", enableToggleIconMod)