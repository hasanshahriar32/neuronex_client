import { RampLogo } from "../../assets/logos/ramp";

export const Clients = () => (
    <>
        <p className="mb-12 text-center text-lg text-white md:text-xl">
            <span className="text-primary-text">
                Powering the world’s best product teams.
            </span>
            <br className="hidden md:block" /> From next-gen startups to established
            enterprises.
        </p>

        <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
            <RampLogo />
        </div>
    </>
);