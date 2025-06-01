document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle')
    const navMenu = document.querySelector('.nav-menu')
    const body = document.body

    body.classList.add('no-transition')

    setTimeout(() => {
        body.classList.remove('no-transition')
    }, 100)

    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        navToggle.classList.toggle('open')
    })

    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active')
                navToggle.classList.remove('open')
            }
        })
    })


    let resizeTimer
    window.addEventListener('resize', () => {
        body.classList.add('no-transition')
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            body.classList.remove('no-transition')
        }, 250)
    })


    const contactForm = document.getElementById('contactForm')
    const formStatus = document.getElementById('formStatus')

    if (contactForm && formStatus) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault()

            formStatus.textContent = 'Verificando segurança...'
            formStatus.className = 'form-status';

            if (typeof grecaptcha !== 'undefined' && grecaptcha.ready) {
                try {
                    const token = await grecaptcha.execute('6Lfv7EgrAAAAAMJQJ5FGb7eTxnVBP4q4F6BnyvYT', {action: 'submit_form'})
                        // CHAVE PÚBLICA do Google reCAPTCHA v3
                    const formData = new FormData(contactForm)
                    formData.append('g-recaptcha-response', token)

                    formStatus.textContent = 'Enviando...'

                    const response = await fetch(contactForm.action, {
                        method: 'POST',
                        body: formData,
                        headers: {
                            'Accept': 'application/json'
                           
                        }
                    });

                    if (response.ok) {
                        formStatus.textContent = 'Mensagem enviada com sucesso! Em breve entrarei em contato.'
                        formStatus.classList.add('success')
                        contactForm.reset()
                    } else {
                        const data = await response.json()
                        if (data.errors) {
                            formStatus.textContent = data.errors.map(error => error.message).join(', ')
                        } else if (data.message) {
                             formStatus.textContent = 'Erro: ' + data.message
                        }
                         else {
                            formStatus.textContent = 'Ocorreu um erro ao enviar a mensagem.'
                        }
                        formStatus.classList.add('error')
                    }
                 } catch (error) {
                    formStatus.textContent = 'Não foi possível enviar. Tente novamente mais tarde.'
                    formStatus.classList.add('error')
                }

            } else {
                formStatus.textContent = 'Erro. Por favor, recarregue a página e tente novamente.'
                formStatus.classList.add('error')
            }
        })
    }
})