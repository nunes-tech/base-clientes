function enableToggleIconMod() {

    document.querySelectorAll(".toggle-visibily").forEach( item => {
        item.classList.toggle("hidden")
    })

    document.body.classList.toggle("night")

}

function setClickListenerOnIconMenu() {
    document.querySelector(".li_topo.icon_mode").addEventListener("click", enableToggleIconMod)
}

setClickListenerOnIconMenu()