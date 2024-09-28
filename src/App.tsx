import { useEffect, useState } from 'react';
import celulares from './assets/imgs/celulares.svg';
import logo from './assets/imgs/logo.svg';


function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const description = " Caracol log é um aplicativo inovador de crowdshipping que conecta viajantes com espaço ocioso em suas malas a consumidores que precisam enviar ou receber pequenas encomendas.";

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 800); 

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const typingTimer = setInterval(() => {
        if (index < description.length) {
          setText((prev) => prev + description.charAt(index));
          index++;
        } else {
          clearInterval(typingTimer);
        }
      }, 30); 

      return () => clearInterval(typingTimer);
    }
  }, [isVisible]);

  return (
    <>
      <div>
        <div className="bg-gradient-to-r from-[#03a9f4] to-[#ffd600] min-h-screen">
          <div className='w-full p-4 h-screen'>
            <img src={logo} alt="" className='w-44 md:p-1 p-5 mx-auto md:mx-0' />
            <div className="flex flex-col md:flex-row items-center gap-4">
              <img 
                src={celulares} 
                alt="" 
                className={`w-full ml-7 md:w-1/2 h-auto order-1 md:order-2 transition-opacity duration-700 ${isVisible ? 'animate-slideIn opacity-100' : 'opacity-0'}`} 
              />
              <div className="text-center md:text-left text-white w-auto md:w-7/12 order-2 md:order-1">
                <h1 className="text-xl font-bold md:text-3xl mb-2">Baixe Nosso App</h1>
                <p className="text-sm md:text-lg mb-4">{text}</p>
                <a href="/caracol.apk" download>
                <button className="bg-[#ffff] text-[rgb(3,169,244)] font-bold rounded-xl px-4 py-2 mb-4 shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                  Faça o Download
                </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
          .animate-slideIn {
            animation: slideIn 1s ease forwards;
          }
        `}
      </style>
    </>
  );
}

export default App;
