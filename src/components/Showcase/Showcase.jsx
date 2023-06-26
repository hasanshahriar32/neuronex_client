import { motion } from "framer-motion";
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import HomeShowCaseCard from './HomeShowCaseCard';

const Showcase = () => {
    const [mp, setMp] = useState({ x: 0, y: 0 })
    const canvasRef = useRef()
    const [isSafari, setIsSafari] = useState(false);

    const userAgent = navigator.userAgent;
    useEffect(() => {
        if (userAgent.match(/Chrome/i)) {
            // User is using Chrome
            setIsSafari(false)
        } else if (userAgent.match(/Safari/i)) {
            // User is using Safari
            setIsSafari(true)
        }
    }, [userAgent])
    const container = useRef(null);
    const quotes = [
        {
            "id": 1,
            "text": "Artificial intelligence will reach human levels by around 2029.",
            "author": "Ray Kurzweil"
        },
        {
            "id": 2,
            "text": "The question of whether a computer can think is no more interesting than the question of whether a submarine can swim.",
            "author": "Edsger Dijkstra"
        },
        {
            "id": 3,
            "text": "Artificial intelligence is the new electricity.",
            "author": "Andrew Ng"
        },
        {
            "id": 4,
            "text": "The development of full artificial intelligence could spell the end of the human race.",
            "author": "Stephen Hawking"
        },
        {
            "id": 5,
            "text": "Artificial intelligence is not a substitute for human intelligence; it's a tool to aid human intelligence.",
            "author": "Carver Mead"
        },
        {
            "id": 6,
            "text": "The real question is, when will we draft an artificial intelligence bill of rights?",
            "author": "Gray Scott"
        },
        {
            "id": 7,
            "text": "I visualize a time when we will be to robots what dogs are to humans, and I'm rooting for the machines.",
            "author": "Claude Shannon"
        },
        {
            "id": 8,
            "text": "The science of AI has been slow to take off because we're still grappling with how to make machines learn.",
            "author": "Fei-Fei Li"
        },
        {
            "id": 9,
            "text": "If you think AI is not going to affect you, either you're not paying attention, or you're too old to care.",
            "author": "Elon Musk"
        },
        {
            "id": 10,
            "text": "AI is like a black box with a lot of computational power but not much understanding.",
            "author": "Nick Bostrom"
        },
        {
            "id": 11,
            "text": "AI is the new electricity, and data is the new oil.",
            "author": "Andrew Ng"
        },
        {
            "id": 12,
            "text": "The best AI systems can already outperform humans in certain well-defined tasks.",
            "author": "Stuart Russell"
        },
        {
            "id": 13,
            "text": "AI will transform every industry, just as electricity did. It will create new ways of doing business and new jobs.",
            "author": "Ginni Rometty"
        },
        {
            "id": 14,
            "text": "The key to artificial intelligence has always been the representation.",
            "author": "Jeff Hawkins"
        },
        {
            "id": 15,
            "text": "Artificial intelligence is the science of making machines do things that would require intelligence if done by humans.",
            "author": "Marvin Minsky"
        },
        {
            "id": 16,
            "text": "We are not going to build AI that can reason like a human anytime soon, but we can build AI that can think much faster.",
            "author": "Gary Marcus"
        },
        {
            "id": 17,
            "text": "The real danger is not that computers will begin to think like humans, but that humans will begin to think like computers.",
            "author": "Nathan Myhrvold"
        },
        {
            "id": 18,
            "text": "The progress of AI is driven by the availability of data and the improvements in computing power and algorithms.",
            "author": "Yann LeCun"
        },
        {
            "id": 19,
            "text": "The goal of AI is not to replace humans, but to augment human capabilities.",
            "author": "Satya Nadella"
        },
        {
            "id": 20,
            "text": "AI is the most important technology of our era. It has the potential to solve the biggest challenges we face.",
            "author": "Demis Hassabis"
        },
        {
            "id": 21,
            "text": "The impact of AI will be profound, but we need to ensure it benefits all of humanity.",
            "author": "Eric Schmidt"
        },
        {
            "id": 22,
            "text": "The true sign of intelligence is not knowledge but imagination.",
            "author": "Albert Einstein"
        },
        {
            "id": 23,
            "text": "AI is not a magic wand that solves all problems; it requires careful consideration and ethical implementation.",
            "author": "Fei-Fei Li"
        },
        {
            "id": 24,
            "text": "The best AI is the AI that disappears, that becomes ambient and useful and meaningful to us.",
            "author": "Kevin Kelly"
        },
        {
            "id": 25,
            "text": "AI is the new electricity, and we have to figure out how to build the grid.",
            "author": "Andrew Ng"
        },
        {
            "id": 26,
            "text": "AI is not about replacing humans; it's about amplifying human potential.",
            "author": "Melinda Gates"
        },
        {
            "id": 27,
            "text": "We need to be more careful about how we design and deploy AI technologies to avoid unintended consequences.",
            "author": "Cynthia Breazeal"
        },
        {
            "id": 28,
            "text": "AI is a tool that can empower individuals and organizations to make better decisions and improve their lives.",
            "author": "Sundar Pichai"
        },
        {
            "id": 29,
            "text": "AI can be a powerful force for good, but we must ensure it is developed and used responsibly.",
            "author": "Tim Cook"
        },
        {
            "id": 30,
            "text": "AI is not inherently good or bad; it's how we choose to use it that will determine its impact on society.",
            "author": "Kate Crawford"
        }
    ]
    const handleMouseMove = e => {
        let x = e.clientX - (container.current?.getBoundingClientRect().left || 0);
        let y = e.clientY - (container.current?.getBoundingClientRect().top || 0);
        if (container.current) {
            let offsetX = x - (container.current.offsetWidth / 2);
            let offsetY = y - (container.current.offsetHeight / 2);
            setMp({ x: -((offsetX / 3)), y: -((offsetY * .9)) });
        }

        e.stopPropagation();
    };

    const handleMouseLeave = e => {
        setMp({ x: 0, y: 0 });
        e.stopPropagation();
    }
    const initial = {
        opacity: 0,
        x: 500,
        y: 500,
    }
    useEffect(() => {
        container.current.addEventListener('mousemove', handleMouseMove)
    }, [container])
    const nest = [...Array(3)].map((single, i) => quotes.slice(i * 4, (i * 4) + 5))
    return (
        <div className=" relative z-10 ">
            <div className='block md:hidden'>
                <div>
                    <div className='flex flex-col justify-between md:hidden'>
                        {
                            nest.map((single, i) => <div key={i}>
                                <Swiper
                                    loop={true}
                                    speed={3000}
                                    slidesPerView={1.1}
                                    loopedSlides={50}
                                    spaceBetween={50}
                                    freeMode={true}
                                    modules={[FreeMode, Autoplay]}
                                    autoplay={{
                                        delay: 300 + (i * 10),
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                        reverseDirection: i % 2 == 0,
                                    }}
                                    className="mySwiper pointer-events-auto cursor-pointer" >
                                    {
                                        single?.map((single, i) => <SwiperSlide key={i}>
                                            <HomeShowCaseCard mp={mp} {...single} key={i}></HomeShowCaseCard>
                                        </SwiperSlide>)
                                    }
                                </Swiper>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div onMouseLeave={handleMouseLeave} ref={container} className='overflow-hidden md:block hidden   relative h-screen w-full '>
                <motion.div className='' ref={canvasRef}
                    initial={initial}
                    exit={initial}
                    animate={!isSafari ?
                        {
                            opacity: 1,
                            x: mp.x,
                            scale: 1.2,
                            y: mp.y,
                            // x: 0,
                            // y: 0,
                            transition: { ease: 'easeOut', duration: .7 }
                        } :
                        {
                            opacity: 1,
                            transform: `translate(${mp.x}px, ${mp.y}px)`,
                            transition: { ease: "easeOut", duration: 0.7 },
                        }
                    } >
                    <div className="grid grid-cols-1 md:grid-cols-4">
                        <div className="col-span-1 ">
                            {quotes.slice(0, 6)?.map((single, i) => (
                                <HomeShowCaseCard mp={mp} {...single} key={single.id} />
                            ))}
                        </div>
                        <div className="col-span-1">
                            {quotes.slice(6, 12)?.map(single => (
                                <HomeShowCaseCard mp={mp} {...single} key={single.id} />
                            ))}
                        </div>
                        <div className="col-span-1 ">
                            {quotes.slice(12, 18)?.map(single => (
                                <HomeShowCaseCard mp={mp} {...single} key={single.id} />
                            ))}
                        </div>
                        <div className="col-span-1 ">
                            {quotes.slice(18, 24)?.map(single => (
                                <HomeShowCaseCard mp={mp} {...single} key={single.id} />
                            ))}
                        </div>
                    </div>
                </motion.div>

                <div className="flex justify-center items-center absolute pointer-events-none inset-0">
                    <div className='text-center w-1/2'>
                        <h1 className="text-6xl">Ai make life Easier</h1>
                        <p className="text-lg mt-5  leading-relaxed text-gray-300">
                            Artificial Intelligence (AI) has emerged as a transformative force, revolutionizing various aspects of our lives and making them easier to navigate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Showcase;