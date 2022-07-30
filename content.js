setTimeout( initListener, 1000);

function initListener() {
    hideTopItemMenuLive()
    hideItemsInDashbord()
}

function hideTopItemMenuLive() {
    document.querySelectorAll("[data-qa-side-nav-live='true']")[0].remove()
}

function hideItemsInDashbord() {
    document.querySelectorAll(".live-merch__cta")
        .forEach(button =>{
            const buttonParents = parents(button)
            buttonParents.forEach( parent => {
                if( parent.classList.contains('course-lesson__wrap') ){
                    parent.remove()
                }
            })
        })
}


function parents(node) {
    let current = node,
        list    = [];
    while(current.parentNode != null && current.parentNode != document.documentElement) {
        list.push(current.parentNode);
        current = current.parentNode;
    }
    return list
}
