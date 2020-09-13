// Localstorage handler

const setProgress = (progress) => {
    if(localStorage.getItem("progress") != null){
        localStorage.removeItem("progress");
        localStorage.setItem("progress", progress);
    } else {
        localStorage.setItem("progress", progress);
    }
}

const getProgress = () => {
    return localStorage.getItem("progress")
}

const setIdResponden = (idResponden) => {
    if(localStorage.getItem("idResponden") != null){
        localStorage.removeItem("idResponden");
        localStorage.setItem("idResponden", idResponden);
    } else {
        localStorage.setItem("idResponden", idResponden);
    }
}

const getIdResponden = () => {
    return localStorage.getItem("idResponden")
}

const clearAllLocalStorage = () => {
    localStorage.removeItem("idResponden");
    localStorage.removeItem("progress");
}

var loc = mode == 0 ? '' : '../'
