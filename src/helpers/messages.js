import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const messages = (message , color) => {

    Toastify({
        text: message,
        duration: 5000,
        close: true,
        gravity: "top", 
        position: "left", 
        stopOnFocus: true,
        style: {
            background: color,
        }
    }).showToast();
}
