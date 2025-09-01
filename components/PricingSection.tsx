import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";
import Link from "next/link";

export type Plan = {
    id: string;
    name: string;
    priceMonthly: number;
    description: string;
    features: string[];
    priceId: string;
    paymentLink: string;
};

const plans: Plan[] = [
    {
        id: 'basic',
        name: 'Basic',
        priceMonthly: 9,
        description: 'Free plan for personal use',
        features: [
            'Up to 5 PDF summaries per month',
            'Basic AI model',
            'Email support',
        ],
        priceId: '', // Replace with your actual Price ID from Stripe
        paymentLink: '/test', // Replace with your actual payment link
    },
    {
        id: 'pro',
        name: 'Pro',
        priceMonthly: 19,
        description: 'For professionals and teams',
        features: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown export',
        ],
        priceId: '', // Replace with your actual Price ID from Stripe
        paymentLink: '', // Replace with your actual payment link
    },
]


export default function PricingSection() {
    return (
        <section className="relative overflow-hidden flex flex-col justify-center" id="pricing">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center pb-8 text-lg text-rose-500 font-semibold">$Pricing</h2>
                <div className="relative flex justify-center flex-col lg:flex-row item-center lg:items-stretch gap-8">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} {...plan} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function PricingCard({ id, name, description, features, paymentLink, priceMonthly, priceId }: Plan) {
    return (
        <div className="relative w-full max-w-md hover:scale-105 hover:transition-all duration-300">
            <div key={id} className={cn("gap-4 lg:gap-8 z-10 p-8 border border-gray-200 rounded-lg",
                id === "pro" ? "border-rose-400 border-2" : "")}>
                <div>
                    <h3 className="text-lg lg:text-xl font-bold mb-2">{name}</h3>
                    <p className="mb-4 text-gray-700">{description}</p>
                </div>
                <div className="flex gap-2">
                    <p className="text-4xl font-extrabold mb-4 tracking-tight">${priceMonthly}</p>
                    <div className="flex flex-col justify-end mb-[1rem]">
                        <p className="text-xs uppercase font-semibold">USD</p>
                        <p className="text-xs">/month</p>
                    </div>
                </div>
                <ul className="mb-6 space-y-2 flex-1">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 ">
                            <CheckIcon size={16} className="text-green-500" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>

                <Link
                    href={paymentLink}
                    className={cn(`mt-auto text-white px-4 py-2 rounded-full text-center 
                    text-sm bg-linear-to-r from-rose-500 to-rose-900
                    hover:from-rose-900 hover:to-rose-500 transition-colors 
                    font-semibold block`, id === "pro" ? "" : "border-rose-200 from-rose-400 to-rose-600")}
                >
                    Buy Now {id === 'pro' && <ArrowRight className="inline-block ml-2 animate-pulse" size={16} />}
                </Link>

            </div>
        </div>
    )
}