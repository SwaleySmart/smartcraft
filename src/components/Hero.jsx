import UnicornMan from '../assets/unicorn-man.png'

function Hero() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-6/12 flex justify-center lg:justify-start">
            <img className="w-full md:w-4/6 lg:w-5/6" src={UnicornMan} alt="Unicorn Man"/>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center pt-20 lg:pt-0 p-10 lg:p-0">
            <div className="w-full lg:w-5/6 inter text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-black">Does your project need a Unicorn Developer?</h1>
                <p className="text-xl lg:text-2xl font-black mt-5">Unicorn Developer</p>
                <p className="text-xl font-bold text-brand">/ˈjuːnɪkɔːn/ /dɪˈvɛləpə/</p>
                <p className="text-lg lg:text-xl font-semibold">Noun</p>
                <p className="text-lg lg:text-xl font-semibold mt-10">“A rare breed of person who can both design and engineer
                    web applications from UX/UI design, fullstack development and finally deploy using modern devops
                    methodology and infrastructure.”</p>
            </div>
        </div>
    </div>
  );
}

export default Hero;