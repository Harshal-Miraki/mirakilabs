import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface JobModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  requirements: string[];
  responsibilities: string[];
  benefits: string[];
  onApply?: () => void;
}

export default function JobModal({
  isOpen,
  onClose,
  title,
  description,
  requirements,
  responsibilities,
  benefits,
  onApply,
}: JobModalProps) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-background rounded-2xl border border-border/50 w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="p-6 md:p-8">
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-2xl font-bold">{title}</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                <ul className="space-y-2">
                  {responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                <ul className="space-y-2">
                  {requirements.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                <ul className="space-y-2">
                  {benefits.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-brand-green mr-2">•</span>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <button
                onClick={() => {
                  onApply?.();
                  onClose();
                }}
                className="inline-flex items-center justify-center w-full py-3 px-6 rounded-xl bg-linear-to-r from-brand-blue to-brand-green text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Apply for this Position
              </button>
              <p className="text-center text-sm text-muted-foreground mt-3">
                By applying, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}