import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import HeadingTitle from '../ui/header'
import { OneCrumb } from '../ui/onecrump'

const faqData = [
    {
        title: "Which payment methods do you accept?",
        description: "We accept major Esewa, Khalti.",
    },
    {
        title: "Where can I find the Hisi Cosmetics Stores?",
        description: "We have four stores located in Bhaktapur.",
    },
    {
        title: "How do I make a return?",
        description: "No return policy.",
    },
    {
        title: "My item arrived damaged, what should I do?",
        description: "Please contact us at hisicosmetics@gmail.com and provide a photo of the damaged or defective product along with a copy of the packing slip or order number. If the product is deemed defective we will replace the product at no additional charge.",
    },
    {
        title: "When will my order ship?",
        description: "It will take 24-48 hours to ship your product.",
    }

]

const FaqMain = () => {
    return (
        <div className="py-10">
            <OneCrumb page="faq" />
            <HeadingTitle title="Frequently Asked Questions" />
            <Accordion type="multiple" collapsible className="w-full" defaultValue={faqData?.map((_, index) => `items-${(index + 1) - 3}`)}>
                {
                    faqData?.map((currFaq, index) => {
                        return <AccordionItem value={`items-${index + 1}`} className="p-2 my-4">
                            <AccordionTrigger className="bg-[#d9e0f4] border p-3 text-gradient_last">{currFaq.title}</AccordionTrigger>
                            <AccordionContent className="bg-white rounded-lg shadow-lg px-3 py-6">
                                {currFaq.description}
                            </AccordionContent>
                        </AccordionItem>
                    })
                }


            </Accordion>


        </div>
    )
}

export default FaqMain