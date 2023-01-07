import Swal from 'sweetalert2'

export function useFlash() {
     function showTrailerFlash(key) {
        Swal.fire({
            html:
                `<iframe width="100%" height="100%" src="https://www.youtube.com/embed/${key}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`,
            showCloseButton: false,
            showCancelButton: false,
            showConfirmButton:  false,
            focusConfirm: true,
            padding: '0em',
            customClass:"swal-august"
        })
     }
     return {showTrailerFlash}
}