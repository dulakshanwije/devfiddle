import { ArrowRightIcon } from "@heroicons/react/24/outline"
import ButtonTertiary from "./ButtonTertiary"

type SectionTitleProps = {
    title : string
}

const SectionTitle = ({ title }: SectionTitleProps) => {
    return (
        <div className="flex flex-col justify-center items-center w-full mt-2 relative my-8 mb-14 gap-4">
            <h2 className="text-center  font-bold text-3xl text-shadow-md/20 tracking-wide">{title}</h2>
            <ButtonTertiary title="View More" link="#" classList="block md:hidden"/>
            <ButtonTertiary title="View More" link="#" classList="hidden md:block absolute right-4 xl:right-0"/>
        </div>
    )
}

export default SectionTitle