const clearContents = (div) => {
    while (div.firstChild) {
        div.removeChild(div.lastChild);
    }
}

export { clearContents }