import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import khelwar from "../../assets/D.png"
import puspita from "../../assets/P.png"
import jebunnesa from "../../assets/S.png"
import showaib from "../../assets/N.png"
import showaibAsset from "../../assets/Asset 33.png"
import prantoAsset from "../../assets/Asset 22.png"
import samadAsset from "../../assets/Asset 11.png"
import delwarAsset from "../../assets/Asset 44.png"
import "./about.css"
import banner from "../../assets/showaibLinkedIn-01.jpg"
const About = () => {
    return (
        <>
            <div className="h-[50%] sm:flex lg:hidden justify-center items-center">
                <h1 className="text-xl">Please visit from desktop</h1>
            </div>
            <div className="mt-[70px] hidden lg:flex">
                <Parallax pages={5}>
                    <ParallaxLayer factor={0.5} speed={1} style={{
                        backgroundImage: `url(${banner})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}>
                    </ParallaxLayer>
                    <ParallaxLayer offset={0.5} speed={1} sticky={{ start: 0.5, end: 1.2 }}>
                        <div className=" absolute top-4 left-36">
                            <img className="w-[350px]" src={showaib} alt="" />
                        </div>
                    </ParallaxLayer>


                    <ParallaxLayer offset={1} speed={0.5}>

                        <div className="flex justify-center">
                            <img className="w-[660px]" src={showaibAsset} alt="" />
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={1} speed={0.5}>

                        <div className="flex flex-col items-center text-white mt-[25px]">
                            <div className="text-xl">Showaib bin Nasir</div>
                            <h1>Founder and CEO</h1>
                            <h1 className="w-[500px] text-justify mt-2">
                                At Dream Weave Stations, we're the architects of dreams and the engineers of creativity. Our mission is to transform ideas into digital masterpieces that not only catch the eye but also tell compelling stories. With a team of skilled artisans, we're dedicated to bringing imagination to life, weaving visuals into narratives and emotions.
                            </h1>
                            <div>

                            </div>
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={1.5} speed={1} sticky={{ start: 1.5, end: 2.2 }}>
                        <div className=" absolute top-4 right-36">
                            <img className="w-[350px]" src={puspita} alt="" />
                        </div>
                    </ParallaxLayer>


                    <ParallaxLayer offset={2} speed={0.5}>

                        <div className="flex justify-center">
                            <img className="w-[660px]" src={prantoAsset} alt="" />
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={2} speed={0.5}>

                        <div className="flex flex-col items-center text-white mt-[25px]">
                            <div className="text-xl">Showaib bin Nasir</div>
                            <h1>Founder and CEO</h1>
                            <h1 className="w-[500px] text-justify mt-2">
                                At Dream Weave Stations, we're the architects of dreams and the engineers of creativity. Our mission is to transform ideas into digital masterpieces that not only catch the eye but also tell compelling stories. With a team of skilled artisans, we're dedicated to bringing imagination to life, weaving visuals into narratives and emotions.
                            </h1>
                            <div>

                            </div>
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={2.5} speed={1} sticky={{ start: 2.5, end: 3.5 }}>
                        <div className=" absolute top-4 left-36">
                            <img className="w-[350px]" src={jebunnesa} alt="" />
                        </div>
                    </ParallaxLayer>


                    <ParallaxLayer offset={3} speed={0.5}>

                        <div className="flex justify-center">
                            <img className="w-[660px]" src={samadAsset} alt="" />
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={3} speed={0.5}>

                        <div className="flex flex-col items-center text-white mt-[25px]">
                            <div className="text-xl">Showaib bin Nasir</div>
                            <h1>Founder and CEO</h1>
                            <h1 className="w-[500px] text-justify mt-2">
                                At Dream Weave Stations, we're the architects of dreams and the engineers of creativity. Our mission is to transform ideas into digital masterpieces that not only catch the eye but also tell compelling stories. With a team of skilled artisans, we're dedicated to bringing imagination to life, weaving visuals into narratives and emotions.
                            </h1>
                            <div>

                            </div>
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={3.5} speed={1} sticky={{ start: 3.5, end: 4.2 }}>
                        <div className=" absolute top-4 right-36">
                            <img className="w-[350px]" src={khelwar} alt="" />
                        </div>
                    </ParallaxLayer>


                    <ParallaxLayer offset={4} speed={0.5}>

                        <div className="flex justify-center">
                            <img className="w-[660px]" src={delwarAsset} alt="" />
                        </div>

                    </ParallaxLayer>
                    <ParallaxLayer offset={4} speed={0.5}>

                        <div className="flex flex-col items-center text-white mt-[25px]">
                            <div className="text-xl">Showaib bin Nasir</div>
                            <h1>Founder and CEO</h1>
                            <h1 className="w-[500px] text-justify mt-2">
                                At Dream Weave Stations, we're the architects of dreams and the engineers of creativity. Our mission is to transform ideas into digital masterpieces that not only catch the eye but also tell compelling stories. With a team of skilled artisans, we're dedicated to bringing imagination to life, weaving visuals into narratives and emotions.
                            </h1>
                            <div>

                            </div>
                        </div>

                    </ParallaxLayer>
                </Parallax>
            </div>
        </>
    );
};

export default About;