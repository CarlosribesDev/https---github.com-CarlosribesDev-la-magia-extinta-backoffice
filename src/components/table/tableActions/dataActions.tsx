import { useState } from 'react'
import { LuRefreshCcw } from 'react-icons/lu'

interface TableActionsProps {
    modelName?: string,
    onAdd?: () => void,
    onSearch?: (searchText: string) => void,
    onRefresh?: () => void
}

export default function DataActions({ modelName = '', onAdd = () => { }, onRefresh = () => { }, onSearch = () => { } }: TableActionsProps) {

    const [searchText, setSearchText] = useState('')

    const search = (event: any) => {
        const value = event.target.value;
        setSearchText(value)
        onSearch(value)
    }

    const refresh = () => {
        onRefresh()
        setSearchText('')
    }

    return (
        <div className="items-center justify-between block sm:flex mb-5">
            <section className="flex items-center mb-4 sm:mb-0">
                <form className="sm:pr-3">
                    <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                        <input className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5" value={searchText} placeholder={`Buscar ${modelName}`}
                            onChange={search} />
                    </div>
                </form>
            </section>
            <section className='flex items-center ml-auto space-x-2 sm:space-x-3'>
                <button className="button-1" onClick={onAdd}> + Añadir {modelName}</button>
                <button className="button-1" type="button" onClick={refresh}>
                    <LuRefreshCcw className="mr-2" />
                    Refresh
                </button>
            </section>
        </div>
    )
}
