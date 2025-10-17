function smoothlyScrollTo(sectionId){
    const section = document.getElementById(sectionId)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

async function getTranslations(){
    const response = await fetch("translations.json")
    const data = await response.json()
}

const langButton = document.getElementById("btn-lang")
langButton.addEventListener("click", () => {
    langButton.textContent = `${langButton.textContent == "PTBR" ? "EN" : "PTBR"}`
})