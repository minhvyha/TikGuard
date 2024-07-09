import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';
import { useStore } from '@/app/context/context';


const Contact = () => {
  const {  setLoading, setError, setSeverity } = useStore();
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
   console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? '',
        {
          from_name: form.name,
          to_name: 'Minh Vy Ha',
          from_email: form.email,
          to_email: 'minhvy.ha@outlook.com',
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''
      )
      .then(
        () => {
          setLoading(false);
          setError('Thank you. I will get back to you as soon as possible.');
          setSeverity('success');
          setForm({
            name: '',
            email: '',
            message: '',
          });
        },
        (error: any) => {
          setLoading(false);
          console.error(error);

          setError('Ahh, something went wrong. Please try again.');
          setSeverity('error');
        }
      );
  };

  return (
    <section  id='contact' className="pb-20 " >
  <div className=" bg-background-100 rounded dark:bg-background-800  py-8 lg:py-16 px-4 mx-auto max-w-screen-md" >
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our technologies? Let us know.</p>
      <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input name='email' onChange={handleChange} value={form.email } type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-background-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
          </div>
          <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
              <input type="text" id="name" onChange={handleChange} value={form.name} name='name' className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-background-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="What is your name?" required />
          </div>
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" name='message' value={form.message} onChange={handleChange} rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-background-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
  )
}

export default Contact