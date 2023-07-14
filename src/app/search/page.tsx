"use client"
import Link from "next/link";
import { useState } from "react";
import * as countries from './countries';
import { useRouter } from "next/navigation";


function Search() {

    const [openNA, setOpenNA] = useState(false);
    const [openEU, setOpenEU] = useState(false);
    const [openAS, setOpenAS] = useState(false);
    const [openSA, setOpenSA] = useState(false);
    const [openAF, setOpenAF] = useState(false);
    const [openOC, setOpenOC] = useState(false);
    const [openAN, setOpenAN] = useState(false);



    const North_America = countries.countries.filter(country => country.continent === 'North America');
    const listcountryNA = North_America.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const Europe = countries.countries.filter(country => country.continent === 'Europe');
    const listcountryEU = Europe.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const Asia = countries.countries.filter(country => country.continent === 'Asia');
    const listcountryAS = Asia.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const South_America = countries.countries.filter(country => country.continent === 'South America');
    const listcountrySA = South_America.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const Africa = countries.countries.filter(country => country.continent === 'Africa');
    const listcountryAF = Africa.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const Ocenia = countries.countries.filter(country => country.continent === 'Ocenia');
    const listcountryOC = Ocenia.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);

    const Antarctica = countries.countries.filter(country => country.continent === 'Antarctica');
    const listcountryAN = Antarctica.map(country => <li><Link href={`/post/${country.name}`}>{country.name}</Link></li>);


    return (
        <div className=" bg-black text-white">
            RateMyGov.com
            <form>
                <div id="dropdown" className="bg-blue-400">
                    <li>
                        <div onClick={() => setOpenNA(!openNA)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">North America</div>
                        {openNA && (
                            <div>
                                {listcountryNA}
                            </div>
                        )}

                        <div onClick={() => setOpenEU(!openEU)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Europe</div>
                        {openEU && (
                            <div>
                                {listcountryEU}
                            </div>
                        )}

                        <div onClick={() => setOpenAF(!openAF)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Africa</div>
                        {openAF && (
                            <div>
                                {listcountryAF}
                            </div>
                        )}

                        <div onClick={() => setOpenAS(!openAS)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Asia</div>
                        {openAS && (
                            <div>
                                {listcountryAS}
                            </div>
                        )}
                        <div onClick={() => setOpenOC(!openOC)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ocenia</div>
                        {openOC && (
                            <div>
                                {listcountryOC}
                            </div>
                        )}
                        <div onClick={() => setOpenSA(!openSA)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">South Africa</div>
                        {openSA && (
                            <div>
                                {listcountrySA}
                            </div>
                        )}
                        <div onClick={() => setOpenAN(!openAN)} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Antarctica</div>
                        {openAN && (
                            <div>
                                {listcountryAN}
                            </div>
                        )}


                    </li>
                </div>


            </form>

            <h2>
                <Link href="/">Back to Log in </Link>
            </h2>



        </div>
    );
}




export default Search;