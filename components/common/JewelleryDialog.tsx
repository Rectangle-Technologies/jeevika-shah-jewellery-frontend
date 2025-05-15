import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import JewelleryDialogCarousel from './JewelleryDialogCarousel'


interface JewelleryDialogProps {
    jewellery: Item
}

function JewelleryDialog({ jewellery }: JewelleryDialogProps) {
    return (
        <Dialog>
            <DialogTrigger className="absolute cursor-pointer px-2 py-1 rounded-md bg-gray-700 text-white">
                Explore Options
            </DialogTrigger>
            <DialogContent className='md:min-w-3xl flex flex-col md:flex-row'>
                <div className="mx-auto px-8">
                    <JewelleryDialogCarousel imageList={jewellery.images} />
                </div>
                <DialogHeader>
                    <DialogTitle>{jewellery.name}</DialogTitle>
                    <DialogDescription>
                        {jewellery.description}
                    </DialogDescription>
                </DialogHeader>

            </DialogContent>
        </Dialog>

    )
}

export default JewelleryDialog