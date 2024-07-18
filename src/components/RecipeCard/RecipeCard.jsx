import { Link } from 'react-router-dom';
import Heading from "../Heading/Heading"

const RecipeCard = ({ title, image, text, slug, price }) => {

    let limitText = text.length > 140 ? `${text.slice(0, 140)}...` : text

    return <Link to={slug ?? "#"} className='flex flex-col gap-6 group'>
        <div className='relative aspect-[16/14] overflow-hidden rounded-xl after:content-[""] after:absolute after:inset-0 after:duration-300 after:ease-out after:bg-green-700/0 group-hover:after:bg-green-700/40 flex items-center justify-center'>
        <span className='absolute z-20 text-white text-2xl opacity-0 group-hover:opacity-100 duration-300 ease-out'>Voir plus</span>
            <img src={image} className='absolute inset-0 h-full w-full object-cover group-hover:scale-110 duration-500 ease-out' />
        </div>
        <div className='flex flex-col gap-3'>
            {title && <Heading level="3">{title}</Heading>}
            {text && <p>{limitText}</p>}
        </div>
    </Link>
}

export default RecipeCard