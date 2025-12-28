import { useForm } from 'react-hook-form';
import { Send } from 'lucide-react';

export default function Contact() {
  const { register, formState: { errors, isSubmitting } } = useForm();

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <p className="contact-text">
          Tem interesse em desenvolver um projeto ou solucionar demandas específicas? Preencha o formulário e retornarei com as informações necessárias.
        </p>

        <form 
          action="https://formspree.io/f/xnnvqqbl" 
          method="POST" 
          className="contact-form"
        >
          <div>
            <label className="form-label">Nome</label>
            <input 
              {...register("name", { required: true })}
              type="text" 
              name="name"
              className="form-input"
              placeholder="Seu nome"
            />
            {errors.name && <span className="form-error">Nome é obrigatório</span>}
          </div>
          
          <div>
            <label className="form-label">E-mail</label>
            <input 
              {...register("email", { required: true })}
              type="email" 
              name="email"
              className="form-input"
              placeholder="seu@email.com"
            />
            {errors.email && <span className="form-error">Email é obrigatório</span>}
          </div>

          <div>
            <label className="form-label">Mensagem</label>
            <textarea 
              {...register("message", { required: true })}
              name="message"
              rows="5"
              className="form-textarea"
              placeholder="Como posso te ajudar?"
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="form-button"
          >
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}