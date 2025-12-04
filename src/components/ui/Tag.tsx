type TagProps = {
    title : string
}

const Tag = ({title} : TagProps) => {
    return <span className="text-xs text-mute px-1 py-0.5 rounded italic">#{title}</span>
}

export default Tag