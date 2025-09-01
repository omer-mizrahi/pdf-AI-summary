import { BrainCircuit, FileOutput, FileText, MoveRight } from 'lucide-react';
import StepItem from './StepItem';
export type Step = {
    icon: React.ReactNode;
    label: string;
    description: string;
};

const steps: Step[] = [
    {
        icon: <FileText size={64} strokeWidth={1.5} />,
        label: 'Upload Your PDF',
        description: 'Easily upload your PDF document through our user-friendly interface.',
    },
    {
        icon: <BrainCircuit size={64} strokeWidth={1.5} />,
        label: 'AI Processing',
        description: 'Our advanced AI analyzes the content to extract key information.',
    },
    {
        icon: <FileOutput size={64} strokeWidth={1.5} />,
        label: 'Get Your Summary',
        description: 'Receive a concise and clear summary of your document in seconds.',
    }
]

export default function HowItWorksSection() {
    return (
        <div className="relative overflow-hidden bg-gray-50">
            <div className="py-12 lg:py-24 mx-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="font-bold text-lg uppercase text-rose-500 mb-4">How It Works</h2>
                    <h3 className="font-bold text-2xl max-w-2xl mx-auto">Transform any PDF into an
                        easy-to-digest
                        summary in three simple steps
                    </h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) =>
                    (<div key={index} className="relative">
                        <StepItem key={index} {...step} />
                        {index < steps.length - 1 && <div
                            className='absolute top-1/2 -right-4 transform -translate-y-1/2 md:block hidden z-10'>
                            <MoveRight className="text-rose-400" size={32} strokeWidth={1} />
                        </div>}
                    </div>

                    )
                    )}
                </div>
            </div>
        </div>
    )
}

