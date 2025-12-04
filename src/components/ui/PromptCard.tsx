import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Tag from './Tag';

type PromptCardProps = {
    title : string,
    description : string
    tags : string[]
};

const PromptCard = ({title, description, tags} : PromptCardProps) => {
    return <>
        <div className="border border-primary w-full h-auto min-h-60 bg-white rounded-2xl drop-shadow-md flex flex-col justify-start items-start hover:drop-shadow-lg hover:scale-101">
            <div className="px-4 py-2 w-full flex flex-col h-full justify-between">
                <div>
                    <div className="flex justify-between items-start w-full mb-4 mt-3">
                        <h3 className="text-base font-bold leading-5">{title}</h3>
                        <ArrowRightIcon aria-hidden="true" className="block size-6 group-data-open:hidden text-primary" />
                    </div>
                    <p className="text-xs leading-4.5 w-full my-4 text-justify text-mute">{description}</p>
                </div>
                <div className="flex flex-wrap gap-1 mt-3 mb-2">
                    {tags.map((tag,key) => (
                        <Tag key={key} title={tag}/>
                    ))}
                </div>
            </div>
        </div>
    </>
}

export default PromptCard;