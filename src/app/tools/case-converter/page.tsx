'use client'

import { Textarea } from '@headlessui/react';
import { useState } from 'react';
import PageTitle from "../../../components/ui/PageTitle";
import { Select } from '@headlessui/react'
import convertCase from '../../../functions/case-convert/case-convert';
// Sample page data
const pageData = {
    title: "Convert Text Case",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, suscipit. Consectetur fuga debitis quam dolores itaque distinctio harum dolore asperiores quod dignissimos."
}

const caseOptions = [
    { key: "sentence_case", label: "Sentence Case" },
    { key: "lower_case", label: "Lower Case" },
    { key: "upper_case", label: "Upper Case" },
    { key: "capitalized_case", label: "Capitalized Case" },
    { key: "alternating_case", label: "aLtErNaTiNg cAsE" },
    { key: "title_case", label: "Title Case" },
    { key: "inverse_case", label: "InVeRsE CaSe" },
    { key: "snake_case", label: "snake_case" },
    { key: "kebab_case", label: "kebab-case" },
    { key: "pascal_case", label: "PascalCase" },
    { key: "camel_case", label: "camelCase" },
    { key: "constant_case", label: "CONSTANT_CASE" },
    { key: "dot_case", label: "dot.case" },
    { key: "path_case", label: "path/case" },
];


const CharacterCountPage = () => {
    const [text, setText] = useState("");
    const [result, setResult] = useState("");

    const convertTextCase = (caseType : string) => {
        const res = convertCase(text, caseType);
        setResult(res);
    }

    return (
        <>
            <PageTitle
                title={pageData.title}
                description={pageData.description}
            />
            <div className="w-full max-w-7xl min-h-80 lg:h-80 px-4 xl:p-0 mx-auto flex flex-col-reverse lg:flex-row drop-shadow-2xl">

                <div className="w-full lg:w-2/5 h-full m-0">
                    <Textarea
                        name="description"
                        placeholder="Enter your text"
                        onChange={(e) => setText(e.target.value)}
                        value={text}
                        className="bg-white outline-none w-full h-full min-h-80 resize-none overflow-y-auto p-4 text-base m-0"
                    />
                </div>
                {/* Sidebar displaying counts */}
                <div className="w-full lg:w-1/5 bg-primary text-black h-fit lg:h-full p-4 m-0">
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1 gap-4 items-center justify-center lg:justify-start m-0'>
                        <Select name="status" className="border-none outline-1 outline-white rounded-md text-primary bg-white p-2" aria-label="Project status" onChange={(e) => convertTextCase(e.target.value)}>
                            {caseOptions.map((item, index) => (
                                <option key={index} value={item.key}>{item.label} ({item.key})</option>
                            ))}
                        </Select>
                    </div>
                </div>

                {/* Textarea for input */}
                <div className="w-full lg:w-2/5 h-full m-0">
                    <Textarea
                        name="description"
                        placeholder="Enter your text"
                        value={result}
                        className="bg-white outline-none w-full h-full min-h-80 resize-none overflow-y-auto p-4 text-base m-0"
                        readOnly
                    />
                </div>
            </div>
        </>
    );
};

export default CharacterCountPage;
