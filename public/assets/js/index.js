function enableToggleIconMod() {

    document.querySelectorAll(".toggle-visibily").forEach( item => {
        item.classList.toggle("hidden")
    })

    const modeNightIsEnable = document.body.classList.toggle("night")
    localStorage.setItem("mode-night", modeNightIsEnable)

}

function setClickListenerOnIconMenu() {
    document.querySelector(".li_topo.icon_mode").addEventListener("click", enableToggleIconMod)
}

function checkModeNight() {
    const modeNight = localStorage.getItem("mode-night")
    console.log( modeNight )
    if( modeNight === "true" ) {
        document.body.classList.add("night")
        document.querySelectorAll(".toggle-visibily").forEach( item => {
            item.classList.toggle("hidden")
        })
    }
}

checkModeNight()
setClickListenerOnIconMenu()
