import { Step } from "./HowItWorksSection";


export default function StepItem({ icon, label, description }: Step) {
    return (
        <div className="p-6 rounded-2xl text-center border hover:border-rose-300  border-white/20 ">
            <div className="mb-4 flex justify-center text-rose-500 
            bg-linear-to-br from-rose-100/70 to-0 w-20 h-20 text-center rounded items-center text-align-center mx-auto">
                {icon}
            </div>
            <h4 className="font-bold text-lg mb-2">{label}</h4>
            <p className="font-semibold text-gray-500 text-xs">{description}</p>
        </div>
    )
}