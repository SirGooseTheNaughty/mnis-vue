export function loadCookies(context) {
    const cookieData = getCookie('mnic');
    if (cookieData) {
        try {
            const cookieRes = JSON.parse(cookieData);
            context.results = cookieRes;
            context.phase = 'results';
            context.questionNumber = context.questions.length;
        } catch(e) {
            console.log(e);
        }
    }
}

export function saveCookies(results) {
    const data = JSON.stringify(results);
    setCookie('mnic', data, {'max-age': 30000000});
}
  
export function unloadListener(event) {
    event.preventDefault();
    event.returnValue = 'Не забудьте сохранить рехультаты!';
}

export function saveToFile() {
    const container = document.querySelector('.container');
    html2canvas(container, {
        y: $(container).offset().top,
        height: $(container).height() - $('.buttonBlock').height(),
        width: $(container).width()*1.1
    })
        .then(canvas => {
            canvas.toBlob(function(blob) {
                saveAs(blob, "MNIC_results.png");
            });
        });
}

export function showResults() {
    if (window.location.toString().includes('mnis')) {
        try {
            $(resPageBlockSelectors).css('display', 'block');
        } catch(e) {
            console.log(e);
        }
    }
}