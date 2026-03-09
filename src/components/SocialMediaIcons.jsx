import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const SocialMediaIcons = () => {
    return (
        <div className='flex justify-center md:justify-start my-10 gap-7'>
            <a
                className='hover:opacity-50 transition duration-500'
                href='https://www.linkedin.com/in/sonia-adesuwa-obasuyi-4527b61a0/'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaLinkedin size={34} />
            </a>

            <a
                className='hover:opacity-50 transition duration-500'
                href='https://x.com/sonia_obasuyi'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaXTwitter size={34} />
            </a>

            <a
                className='hover:opacity-50 transition duration-500'
                href='https://github.com/soniaobasuyi'
                target='_blank'
                rel='noopener noreferrer'
            >
                <FaGithub size={34} />
            </a>
        </div>
    )
};
export default SocialMediaIcons
