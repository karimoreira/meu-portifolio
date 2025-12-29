import { useForm, ValidationError } from '@formspree/react';
import { useForm as useHookForm } from 'react-hook-form';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [state, handleSubmitSpree] = useForm("xnnvqqbl");
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useHookForm();

  const onSubmit = (data) => {
    handleSubmitSpree(data);
  };

  if (state.succeeded) {
    return (
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="p-6 bg-green-100 text-green-700 rounded-lg flex flex-col items-center gap-4 text-center">
            <CheckCircle size={48} />
            <h3 className="text-xl font-bold">Mensagem enviada!</h3>
            <p>Obrigado pelo contato. Retornarei em breve.</p>
            <button 
              onClick={() => window.location.reload()} 
              className="form-button mt-4"
            >
              Enviar nova mensagem
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
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
            />
            {errors.name && <span className="form-error">{errors.name.message}</span>}
            <ValidationError prefix="Name" field="name" errors={state.errors} className="form-error" />
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
            />
            {errors.email && <span className="form-error">{errors.email.message}</span>}
            <ValidationError prefix="Email" field="email" errors={state.errors} className="form-error" />
          </div>

          <div>
            <label className="form-label">Mensagem</label>
            <textarea 
              {...register("message", { required: "Mensagem é obrigatória" })}
              rows="5"
              className="form-textarea"
              placeholder="Como posso te ajudar?"
            ></textarea>
            {errors.message && <span className="form-error">{errors.message.message}</span>}
            <ValidationError prefix="Message" field="message" errors={state.errors} className="form-error" />
          </div>

          <button 
            type="submit" 
            disabled={state.submitting || isSubmitting}
            className="form-button"
          >
            {state.submitting ? 'Enviando...' : 'Enviar Mensagem'} <Send size={18} />
          </button>

          {state.errors && state.errors.length > 0 && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg flex items-center gap-2">
              <AlertCircle size={20} />
              <span>Erro ao enviar. Tente novamente.</span>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}