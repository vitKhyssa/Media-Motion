const body = document.querySelector('body')
const html_divs = document.querySelector('.html_divs')
const css_divs = document.querySelector('.css_divs')
const js_divs = document.querySelector('.js_divs')
const react_divs = document.querySelector('.react_divs')
const btn_react = document.getElementById('btn_react')
const btn_html = document.getElementById('btn_html')
const btn_css = document.getElementById('btn_css')
const btn_js = document.getElementById('btn_js')
function plusClass(div, clas) {
    div.classList.add(clas)
}

function minusClass(div, clas) {
    div.classList.remove(clas)
}
const arr = [
    {
        element: btn_html,
        removeClass: [
            {element: html_divs, clas: 'translate_left_css'},
            {element: css_divs, clas: 'translate_left_css'},
            {element: js_divs, clas: 'translate_left_css'},

            {element: html_divs, clas: 'translate_left_html'},
            {element: css_divs, clas: 'translate_left_html'},
            {element: js_divs, clas: 'translate_left_html'},

            {element: html_divs, clas: 'translate_left_js'},
            {element: css_divs, clas:'translate_left_js' },
            {element: js_divs, clas:'translate_left_js' },
            {element: react_divs, clas:'translate_left_js'},

            {element: body, clas: 'body_blue'},
            {element: body, clas: 'body_yellow'},
            {element: body , clas: 'body_grey'},

            {element: btn_css , clas: 'img_max'},
            {element: btn_js , clas: 'img_max'},
            {element: btn_react , clas: 'img_max'},


        ],
        addClass: [
            {element: body, clas: 'body_coral'},
            {element: btn_html , clas: 'img_max'}
        ]
    },
    {
        element: btn_css,
        removeClass: [
            {element: html_divs, clas: 'translate_left_css'},
            {element: css_divs, clas: 'translate_left_css'},
            {element: js_divs, clas: 'translate_left_css'},
            {element: react_divs, clas: 'translate_left_css'},

            {element: react_divs , clas: 'translate_left_js'},
            {element: html_divs , clas:'translate_left_js' },
            {element: css_divs , clas: 'translate_left_js'},
            {element:  js_divs, clas:'translate_left_js' },

            {element: body, clas: 'body_yellow'},
            {element: body, clas: 'body_coral'},
            {element: body, clas: 'body_grey'},

            {element: btn_html , clas: 'img_max'},
            {element: btn_js , clas: 'img_max'},
            {element: btn_react , clas: 'img_max'},
        ],
        addClass: [
            {element: html_divs, clas: 'translate_left_html'},
            {element: css_divs, clas: 'translate_left_html'},
            {element: js_divs, clas: 'translate_left_html'},
            {element: react_divs, clas: 'translate_left_html'},

            {element: body, clas: 'body_blue'},

            {element: btn_css , clas: 'img_max'}
        ]
    },
    {
        element: btn_js,
        removeClass: [
            {element: html_divs, clas: 'translate_left_html'},
            {element: css_divs, clas: 'translate_left_html'},
            {element: js_divs, clas: 'translate_left_html'},
            {element: react_divs, clas: 'translate_left_html'},

            {element: react_divs , clas: 'translate_left_js'},
            {element: html_divs , clas:'translate_left_js' },
            {element: css_divs , clas: 'translate_left_js'},
            {element:  js_divs, clas:'translate_left_js' },

            {element: body, clas: 'body_blue'},
            {element: body, clas: 'body_coral'},
            {element: body , clas: 'body_grey'},

            {element: btn_html , clas: 'img_max'},
            {element: btn_css , clas: 'img_max'},
            {element: btn_react , clas: 'img_max'},
        ],
        addClass: [
            {element: html_divs, clas: 'translate_left_css'},
            {element: css_divs, clas: 'translate_left_css'},
            {element: js_divs, clas: 'translate_left_css'},
            {element: react_divs, clas: 'translate_left_css'},

            {element: body, clas: 'body_yellow'},

            {element: btn_js , clas: 'img_max'},
        ]
    },{
    element: btn_react,
        removeClass: [
            {element: html_divs, clas: 'translate_left_html'},
            {element: css_divs, clas: 'translate_left_html'},
            {element: js_divs, clas: 'translate_left_html'},
            {element: react_divs, clas: 'translate_left_html'},

            {element: html_divs, clas: 'translate_left_css'},
            {element: css_divs, clas: 'translate_left_css'},
            {element: js_divs, clas: 'translate_left_css'},
            {element: react_divs, clas: 'translate_left_css'},

            {element: body, clas: 'body_blue'},
            {element: body, clas: 'body_coral'},
            {element: body , clas: 'body_yellow'},

            {element: btn_html , clas: 'img_max'},
            {element: btn_css , clas: 'img_max'},
            {element: btn_js , clas: 'img_max'},
        ],
        addClass: [
            {element: react_divs , clas: 'translate_left_js'},
            {element: html_divs , clas:'translate_left_js' },
            {element: css_divs , clas: 'translate_left_js'},
            {element:  js_divs, clas:'translate_left_js' },

            {element: body , clas: 'body_grey'},

            {element: btn_react , clas: 'img_max'}
        ]
    }
]
arr.forEach(({element, addClass, removeClass})=>{
    element.addEventListener('click', () =>{
        addClass.forEach(({element, clas}) =>{
            plusClass(element , clas)
        })
        removeClass.forEach(({element,clas}) =>{
            minusClass(element , clas)
        })
    })
})

function getDelete(listener){
    listener.addEventListener('dblclick' , ()=>{
        minusClass(btn_css , 'img_max')
        minusClass(btn_js , 'img_max')
        minusClass(btn_react , 'img_max')
        minusClass(btn_html , 'img_max')
    })
}
getDelete(btn_html)
getDelete(btn_css)
getDelete(btn_js)
getDelete(btn_react)
// btn_html.addEventListener('click', () => {
//     minusClass(html_divs, 'translate_left_css')
//     minusClass(css_divs, 'translate_left_css')
//     minusClass(js_divs, 'translate_left_css')
//     minusClass(react_divs, 'translate_left_css')
//
//     minusClass(html_divs, 'translate_left_html')
//     minusClass(css_divs, 'translate_left_html')
//     minusClass(js_divs, 'translate_left_html')
//     minusClass(react_divs, 'translate_left_html')
//
//     minusClass(html_divs , 'translate_left_js')
//     minusClass(css_divs , 'translate_left_js')
//     minusClass(js_divs , 'translate_left_js')
//     minusClass(react_divs , 'translate_left_js')
//
//     minusClass(body , 'body_blue')
//     minusClass(body , 'body_yellow')
//     minusClass(body , 'body_grey')
//     plusClass(body,'body_coral')
// })
// btn_css.addEventListener('click', () => {
//     plusClass(html_divs, 'translate_left_html')
//     plusClass(css_divs, 'translate_left_html')
//     plusClass(js_divs, 'translate_left_html')
//     plusClass(react_divs , 'translate_left_html')
//
//     minusClass(html_divs, 'translate_left_css')
//     minusClass(css_divs, 'translate_left_css')
//     minusClass(js_divs, 'translate_left_css')
//     minusClass(react_divs, 'translate_left_css')
//
//     minusClass(html_divs, 'translate_left_js')
//     minusClass(css_divs, 'translate_left_js')
//     minusClass(js_divs, 'translate_left_js')
//     minusClass(react_divs, 'translate_left_js')
//
//     minusClass(body , 'body_coral')
//     minusClass(body , 'body_yellow')
//     minusClass(body , 'body_grey')
//     plusClass(body, 'body_blue')
// })
// btn_js.addEventListener('click', () => {
//     plusClass(html_divs, 'translate_left_css')
//     plusClass(css_divs, 'translate_left_css')
//     plusClass(js_divs, 'translate_left_css')
//     plusClass(react_divs , 'translate_left_css')
//
//     minusClass(html_divs, 'translate_left_html')
//     minusClass(css_divs, 'translate_left_html')
//     minusClass(js_divs, 'translate_left_html')
//     minusClass(react_divs, 'translate_left_html')
//
//     minusClass(html_divs, 'translate_left_js')
//     minusClass(css_divs, 'translate_left_js')
//     minusClass(js_divs, 'translate_left_js')
//     minusClass(react_divs, 'translate_left_js')
//
//     minusClass(body,'body_blue')
//     minusClass(body,'body_coral')
//     minusClass(body,'body_grey')
//     plusClass(body,'body_yellow')
// })
// btn_react.addEventListener('click' , () =>{
//     minusClass(html_divs, 'translate_left_css')
//     minusClass(css_divs, 'translate_left_css')
//     minusClass(js_divs, 'translate_left_css')
//     minusClass(react_divs, 'translate_left_css')
//
//     minusClass(html_divs, 'translate_left_html')
//     minusClass(css_divs, 'translate_left_html')
//     minusClass(js_divs, 'translate_left_html')
//     minusClass(react_divs, 'translate_left_html')
//
//     plusClass(html_divs, 'translate_left_js')
//     plusClass(css_divs, 'translate_left_js')
//     plusClass(js_divs, 'translate_left_js')
//     plusClass(react_divs , 'translate_left_js')
//
//     minusClass(body,'body_blue')
//     minusClass(body,'body_coral')
//     minusClass(body,'body_yellow')
//     plusClass(body,'body_grey')
// })
