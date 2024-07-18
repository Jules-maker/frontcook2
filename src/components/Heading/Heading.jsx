
const Heading = ({ children, level, tag, className }) => {

    let Tag = tag ?? "h" + (level ?? 1)

    let style = "leading-[140%] font-semibold "

    switch (level) {
        case "1":
            style += "text-4xl"
            break
        case "2":
            style += "text-2xl"
            break
        case "3":
            style += "text-xl"
            break
        case "4":
            style += "text-lg"
            break
        case "5":
            style += "text-md"
            break
    }

    return <Tag className={`${style} ${className ?? ""}`}>{children}</Tag>

}

export default Heading