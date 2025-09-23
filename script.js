function smoothlyScrollTo(sectionId){
    const section = document.getElementById(sectionId)
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}
