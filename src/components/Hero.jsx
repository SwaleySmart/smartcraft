import UnicornMan from '../assets/unicorn-man.png'

function Hero() {
  return (
    <div className="w-full flex flex-col-reverse lg:flex-row">
        <div className="w-full lg:w-6/12">
            <img src={UnicornMan} alt="Unicorn Man"/>
        </div>
        <div className="w-full lg:w-6/12 flex flex-col justify-center p-10 lg:p-0">
            <div className="w-full lg:w-5/6 inter">
                <h1 className="text-5xl font-black">Does your project need a Unicorn Developer?</h1>
                <p className="text-2xl font-black mt-5">Unicorn Developer</p>
                <p className="text-xl font-bold text-brand">/ˈjuːnɪkɔːn/ /dɪˈvɛləpə/</p>
                <p className="text-xl font-semibold">Noun</p>
                <p className="text-xl font-semibold mt-10">“A rare breed of person who can both design and engineer
                    web applications from UX/UI design, fullstack development and finally deploy using modern devops
                    methodology and infrastructure.”</p>
            </div>
        </div>
    </div>
  );
}

export default Hero;