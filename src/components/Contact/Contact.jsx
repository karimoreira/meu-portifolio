import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import './Contact.css';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState({ type: '', message: '' });

  const RECAPTCHA_SITE_KEY = '6Lfv7EgrAAAAAMJQJ5FGb7eTxnVBP4q4F6BnyvYT'; 
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

  const loadRecaptcha = () => {
    if (recaptchaLoaded || window.grecaptcha) return;

    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => setRecaptchaLoaded(true);
    document.head.appendChild(script);
    setRecaptchaLoaded(true);
  };

  const onSubmit = async (data) => {
    setStatus({ type: 'loading', message: 'Verificando segurança...' });

    try {
      if (!window.grecaptcha) {
        throw new Error('reCAPTCHA não carregado. Por favor, recarregue a página.');
      }

      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit' });

      setStatus({ type: 'loading', message: 'Enviando...' });

      const response = await fetch('https://formspree.io/f/mykynbqp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...data,
          'g-recaptcha-response': token
        })
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({ type: 'success', message: 'Mensagem enviada com sucesso! Em breve entrarei em contato.' });
        reset();
      } else {
        if (result.errors) {
          const errorMessages = result.errors.map(err => err.message).join(', ');
          setStatus({ type: 'error', message: errorMessages });
        } else {
          setStatus({ type: 'error', message: 'Ocorreu um erro ao enviar a mensagem.' });
        }
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setStatus({ type: 'error', message: 'Não foi possível enviar. Tente novamente mais tarde.' });
    }
  };

  if (status.type === 'success') {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="p-6 bg-green-100 text-green-700 rounded-lg flex flex-col items-center gap-4 text-center">
            <CheckCircle size={48} />
            <h3 className="text-xl font-bold">Mensagem enviada!</h3>
            <p>{status.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title" style={{justifyContent: 'center'}}>Contato</h2>
        <p className="contact-text">
          Tem interesse em desenvolver um projeto ou solucionar demandas específicas? Preencha o formulário e retornarei com as informações necessárias.
        </p>

        <form 
          onSubmit={handleSubmit(onSubmit)}
          className="contact-form"
        >
          <div>
            <label className="form-label">Nome</label>
            <input 
              {...register("name", { required: "Nome é obrigatório" })}
              type="text" 
              className="form-input"
              placeholder="Seu nome"
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>
          
          <div>
            <label className="form-label">E-mail</label>
            <input 
              {...register("email", { 
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              type="email" 
              className="form-input"
              placeholder="seu@email.com"
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div>
            <label className="form-label">Mensagem</label>
            <textarea 
              {...register("message", { required: "Mensagem é obrigatória" })}
              rows="5"
              className="form-textarea"
              placeholder="Como posso te ajudar?"
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
            ></textarea>
            {errors.message && <span className="form-error">{errors.message.message}</span>}
          </div>

          <button 
            type="submit" 
            className="form-button flex items-center justify-center gap-2"
            disabled={isSubmitting}
          >
            {status.type === 'loading' ? status.message : 'Enviar Mensagem'}
          </button>
          <p className="recaptcha-legal-text">
            Este portfólio é protegido por reCAPTCHA, a <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Política de Privacidade</a> e os <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Termos de Serviço</a> do Google se aplicam.
          </p>

          {status.type === 'error' && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded flex items-center gap-2">
              <AlertCircle size={20} />
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

