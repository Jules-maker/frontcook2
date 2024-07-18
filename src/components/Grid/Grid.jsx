
import Heading from "../Heading/Heading"

const Grid = ({ children, title }) => {

    return <section className="responsive-container py-20">
        {title && <Heading level="1" className="text-center mb-16">{title}</Heading>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {children}
        </div>
    </section>
}

export default Grid