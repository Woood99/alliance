const getHeightBlock = (selector, nameVariable, resize = false) => {
    const element = document.querySelector(selector);
    getHeight();
    if (resize) {
        window.addEventListener('resize', getHeight);
    }

    function getHeight() {
        if (element) {
            const elementHeight = element.offsetHeight;
            if (nameVariable) {
                document.querySelector(':root').style.setProperty(nameVariable, `${elementHeight}px`);
            }
            return elementHeight;
        }
    }
}
export default getHeightBlock;
