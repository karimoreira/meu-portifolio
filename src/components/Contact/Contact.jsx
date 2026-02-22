import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [status, setStatus] = useState({ type: '', message: '' });
  const [titleRef, titleVisible] = useScrollReveal();
  const [formRef, formVisible] = useScrollReveal({ threshold: 0.1 });

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
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ ...data, 'g-recaptcha-response': token })
      });

      const result = await response.json();
      if (response.ok) {
        setStatus({ type: 'success', message: 'Em breve entrarei em contato.' });
        reset();
      } else {
        const msg = result.errors ? result.errors.map(e => e.message).join(', ') : 'Ocorreu um erro ao enviar a mensagem.';
        setStatus({ type: 'error', message: msg });
      }
    } catch (error) {
      console.error('Erro no envio:', error);
      setStatus({ type: 'error', message: 'Não foi possível enviar. Tente novamente mais tarde.' });
    }
  };

  if (status.type === 'success') {
    return (
      <section id="contact" className="contact">
        <div className="contact__container">
          <div className="contact__success">
            <CheckCircle size={48} />
            <h3>Mensagem enviada!</h3>
            <p>{status.message}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact">
      <div className="contact__container">
        <div
          ref={titleRef}
          className={`contact__header reveal ${titleVisible ? 'visible' : ''}`}
        >
          <h2 className="contact__title">
            Vamos conversar<span className="contact__title-dot">?</span>
          </h2>
          <p className="contact__subtitle">
            Se desejar entrar em contato profissionalmente, preencha o formulário abaixo e retornarei o mais breve possível.
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className={`contact__form reveal ${formVisible ? 'visible' : ''}`}
        >
          <div className="form-group">
            <input
              {...register("name", { required: "Nome é obrigatório" })}
              type="text"
              className="form-field"
              placeholder=" "
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
              id="contact-name"
            />
            <label htmlFor="contact-name" className="form-label-float">Nome</label>
            <div className="form-line" />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
          </div>

          <div className="form-group">
            <input
              {...register("email", {
                required: "Email é obrigatório",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email inválido"
                }
              })}
              type="email"
              className="form-field"
              placeholder=" "
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
              id="contact-email"
            />
            <label htmlFor="contact-email" className="form-label-float">E-mail</label>
            <div className="form-line" />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
          </div>

          <div className="form-group">
            <textarea
              {...register("message", { required: "Mensagem é obrigatória" })}
              rows="5"
              className="form-field form-field--textarea"
              placeholder=" "
              disabled={isSubmitting}
              onFocus={loadRecaptcha}
              id="contact-message"
            />
            <label htmlFor="contact-message" className="form-label-float">Mensagem</label>
            <div className="form-line" />
            {errors.message && <span className="form-error">{errors.message.message}</span>}
          </div>

          <button type="submit" className="form-submit" disabled={isSubmitting}>
            {status.type === 'loading' ? status.message : 'Enviar Mensagem'}
          </button>

          <p className="contact__recaptcha">
            Este formulário é protegido por reCAPTCHA. Consulte{' '}
            <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">Privacidade</a> e{' '}
            <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">Termos</a> do Google.
          </p>

          {status.type === 'error' && (
            <div className="contact__error">
              <AlertCircle size={18} />
              <span>{status.message}</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
