import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

type props = {
    link: string,
    title: string,
    classList?: string
}

const ButtonTertiary = ({ link, title, classList = "" }: props) => {
    return (
        <Link href={link} className={classList}>
            <p className='text-sm font-bold flex items-center gap-1 tracking-wide hover:scale-101'>
                {title}
                <ArrowRightIcon aria-hidden="true" className="size-4 group-data-open:hidden text-black inline-block" />
            </p>
        </Link>
    )
}

export default ButtonTertiary;