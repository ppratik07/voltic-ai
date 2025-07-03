import React from 'react';
import { ProjectStep } from '../types/project';

interface StepsListProps {
  steps: ProjectStep[];
  currentStepIndex: number;
  getStatusIcon: (status: ProjectStep['status']) => React.ReactNode;
}

const StepsList: React.FC<StepsListProps> = ({ steps, currentStepIndex, getStatusIcon }) => {
  return (
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div
          key={step.id}
          className={`relative p-4 rounded-lg border-2 transition-all duration-300 ${
            index === currentStepIndex && step.status === 'in-progress'
              ? 'border-blue-500/50 bg-blue-600/10 shadow-md'
              : step.status === 'completed'
              ? 'border-green-500/50 bg-green-600/10'
              : step.status === 'error'
              ? 'border-red-500/50 bg-red-600/10'
              : 'border-gray-600 bg-gray-700/30'
          }`}
        >
          {/* Step Header */}
          <div className="flex items-start gap-3 mb-3">
            <div className="flex-shrink-0 mt-1">
              {getStatusIcon(step.status)}
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white mb-1">{step.title}</h3>
              <p className="text-sm text-gray-300">{step.description}</p>
              {step.duration && step.status === 'completed' && (
                <p className="text-xs text-gray-500 mt-1">
                  Completed in {step.duration}s
                </p>
              )}
            </div>
          </div>

          {/* Step Details */}
          {step.details && (step.status === 'completed' || step.status === 'in-progress') && (
            <div className="ml-8">
              <ul className="space-y-1">
                {step.details.map((detail, detailIndex) => (
                  <li
                    key={detailIndex}
                    className={`text-xs flex items-center gap-2 ${
                      step.status === 'completed' 
                        ? 'text-green-400' 
                        : step.status === 'in-progress' && detailIndex <= 1
                        ? 'text-blue-400'
                        : 'text-gray-500'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      step.status === 'completed' 
                        ? 'bg-green-400' 
                        : step.status === 'in-progress' && detailIndex <= 1
                        ? 'bg-blue-400'
                        : 'bg-gray-500'
                    }`} />
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Progress Animation */}
          {step.status === 'in-progress' && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700 rounded-b-lg overflow-hidden">
              <div className="h-full bg-blue-500 animate-pulse" style={{ width: '60%' }} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StepsList;