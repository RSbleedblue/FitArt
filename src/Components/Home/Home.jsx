import mascot from '../../assets/hero.png';
import { ImQuotesLeft } from "react-icons/im";

const Home = () => {
    return (
        <div className='flex flex-col items-center '>
            <div className='flex w-[80%] rounded-lg p-4 mx-auto'>
                
                <div className='w-[50%] flex flex-col'>
                    <ImQuotesLeft className='text-[50px] text-white ' />
                    <div className='p-2'>
                        <p className='text-white text-[40px] font-semibold'>Transform</p>
                    </div>
                    <div className='w-full backdrop-blur-md  z-10 bg-white rounded-full'>
                        <h1 className="bg-gradient-to-r text-[30px] font-semibold ml-4 from-yellow-500 to-green-400 inline-block text-transparent bg-clip-text">Your Body</h1>
                    </div>
                    <div className='p-2'>
                        <p className='text-white text-[40px] font-semibold'>Transform</p>
                    </div>

                    <div className='w-full backdrop-blur-md   bg-white rounded-full'>
                        <h1 className="bg-gradient-to-r text-[30px] font-semibold ml-4 from-yellow-500 to-green-400 inline-block text-transparent bg-clip-text">Your Life</h1>
                    </div>
                    <div className='w-[80%] rounded-lg shadow-xl gap-4 justify-between flex mt-10'>
                        <div className='w-[49%] flex flex-col p-6 shadow-xl rounded-lg gap-10 bg-blue-600 bg-opacity-80 backdrop-blur-md'>
                            <p className='text-lg text-white font-sans'>
                                Your Journey to a Healthier You Starts here
                            </p>
                            <button className='rounded-full text-gray-700 text-sm bg-gray-100 p-4'>Search here</button>
                        </div>
                        <div className='w-[49%] flex flex-col p-6 shadow-xl rounded-lg justify-between bg-green-400 bg-opacity-80 backdrop-blur-md'>
                            <div className='flex flex-col justify-center'>
                                <p className='text-[60px] text-white font-sans'>
                                    14K
                                </p>
                                <p className='text-sm text-white font-sans -mt-2'>
                                    Members
                                </p>
                            </div>
                            <button className='rounded-full text-gray-700 text-sm bg-gray-100 p-4'>Join Now!</button>
                        </div>
                    </div>
                    
                </div>
                <div className='w-[60%] rounded-full z-0 -mt-6 bg-white -ml-20'>
                    <img src={mascot} className='w-full object-cover' alt="Mascot" />
                </div>
            </div>
        </div>
    );
};

export default Home;
