'use client'
import { useSearchParams } from "next/navigation"
import { useRef, useEffect } from "react"
import { ModalBaseProps } from "./types"


export default function Modal({ title, id, children, reset }: ModalBaseProps) {


    const searchParams = useSearchParams()
    const dialogRef = useRef<null | HTMLDialogElement>(null)
    const showDialog = searchParams.get(id)

    useEffect(() => {
        if (showDialog === 'y') {
            dialogRef.current?.showModal()
        } else {
            console.log('reset');
            console.log(id);


            dialogRef.current?.close()
            reset()
        }

    }, [showDialog])


    return showDialog === 'y'
        ? (
            <dialog ref={dialogRef} className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50">
                <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
                    <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
                        <h1 className="text-2xl">{title}</h1>
                    </div>
                    <div className="px-5 pb-6">
                        {children}
                    </div>
                </div>
            </dialog>
        ) : null
}
