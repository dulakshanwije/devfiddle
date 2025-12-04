'use client'

import { Textarea } from '@headlessui/react';
import { useEffect, useState } from 'react';
import PageTitle from "../../../components/ui/PageTitle";
import getTextData from '../../../functions/character-count/character-count';
// Sample page data
const pageData = {
    title: "Character Count",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit. Consectetur fuga debitis quam dolores itaque distinctio harum dolore asperiores quod dignissimos."
}

const CharacterCountPage = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState({
        characters: 0,
        words: 0,
        spaces: 0,
        sentences: 0,
        paragraphs: 0
    });

    useEffect(() => {
        const res = getTextData(text);
        setResult(res);
    }, [text]);

    return (
        <>
            <PageTitle
                title={pageData.title}
                description={pageData.description}
            />
            <div className="w-full max-w-7xl min-h-80 lg:h-80 px-4 xl:p-0 mx-auto flex flex-col-reverse lg:flex-row drop-shadow-2xl">
                {/* Sidebar displaying counts */}
                <div className="w-full lg:w-1/5 bg-primary text-black h-fit lg:h-full p-4 m-0">
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-4 items-center justify-center lg:justify-start m-0'>
                        <div className='p-2 py-1 flex justify-between bg-primary rounded-md gap-3'>
                            <span>Characters</span>
                            <span>{result.characters}</span>
                        </div>
                        <div className='p-2 py-1 flex justify-between bg-primary rounded-md gap-3'>
                            <span>Words</span>
                            <span>{result.words}</span>
                        </div>
                        <div className='p-2 py-1 flex justify-between bg-primary rounded-md gap-3'>
                            <span>Spaces</span>
                            <span>{result.spaces}</span>
                        </div>
                        <div className='p-2 py-1 flex justify-between bg-primary rounded-md gap-3'>
                            <span>Sentences</span>
                            <span>{result.sentences}</span>
                        </div>
                        <div className='p-2 py-1 flex justify-between bg-primary rounded-md gap-3'>
                            <span>Paragraphs</span>
                            <span>{result.paragraphs}</span>
                        </div>
                    </div>
                </div>

                {/* Textarea for input */}
                <div className="w-full lg:w-4/5 h-full m-0">
                    <Textarea
                        name="description"
                        placeholder="Enter your text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className="bg-white outline-none w-full h-full min-h-80 resize-none overflow-y-auto p-4 text-base m-0"
                    />
                </div>
            </div>
        </>
    );
};

export default CharacterCountPage;
