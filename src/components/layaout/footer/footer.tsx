

const footerLinks = [
    {
        tittle: 'Terms and conditions',
        url: '/1',
    },
    {
        tittle: 'Privacy Policy',
        url: '/2',
    },
    {
        tittle: 'Licensing',
        url: '/3',
    },
    {
        tittle: 'Cookie Policy',
        url: '/4',
    },
    {
        tittle: 'Contact',
        url: '/5',
    },
]

export default function Footer() {
    return (
        <>
            <footer className="p-4 my-6 mx-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 xl:p-8">
                <ul className="flex flex-wrap items-center mb-6 space-y-1 md:mb-0">
                    {footerLinks.map((item) => (
                        <li key={item.url}>
                            <a href="#" className="mr-4 text-sm font-normal text-gray-500 hover:underline md:mr-6">{item.tittle}</a>
                        </li>
                    ))}
                </ul>
                <p className="text-sm text-center text-gray-500">
                    © 2019 - 2023 —
                    <a href="https://random.com/" className="hover:underline" target="_blank">Random.com</a>. All rights reserved.
                </p>  
            </footer>      
        </>
    )
}
