'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { DotLottiePlayer } from '@dotlottie/react-player';

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  articleId: string | null;
}

export default function ArticleModal({ isOpen, onClose, articleId }: ArticleModalProps) {
  if (!isOpen) return null;

  const getArticleContent = (id: string) => {
    switch(id) {
      case 'software-architecture':
        return (
          <>
            <h1 className="text-3xl font-bold mb-6">Understanding Software Architecture Patterns</h1>
            
            <section className="article-section mb-8">
              <h2 className="text-2xl font-semibold mb-4">What is Software Architecture?</h2>
              <p className="text-gray-700 leading-relaxed">
                Software architecture refers to the fundamental structures of a software system and the discipline of creating such structures and systems. Each structure comprises software elements, relations among them, and properties of both elements and relations.
              </p>
            </section>

            <section className="article-section">
              <h2 className="text-2xl font-semibold mb-4">Common Architecture Patterns</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">1. Layered (N-tier) Architecture</h3>
                <DotLottiePlayer 
                  src="https://lottie.host/2a32e31f-5443-4cc7-8154-4a1e87d052cc/BlBFcHhweY.json"
                  autoplay
                  loop
                  style={{ width: '200px', height: '200px' }}
                />
                <p className="text-gray-700 mt-3">
                  The most common architecture pattern, known for its simplicity and separation of concerns. Components are organized in horizontal layers, each serving a specific role.
                </p>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-medium mb-3">2. Microservices Architecture</h3>
                <DotLottiePlayer 
                  src="https://lottie.host/c517fac7-4171-4ad0-81f8-01e1bbeb8859/UrdbSILFk8.lottie"
                  autoplay
                  loop
                  style={{ width: '200px', height: '200px' }}
                />
                <p className="text-gray-700 mt-3">
                  A collection of small, autonomous services where each service is self-contained and implements a single business capability.
                </p>
              </div>
            </section>
          </>
        );
      default:
        return <p>Article not found</p>;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content bg-white rounded-lg max-w-4xl mx-4 p-6 max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="close-modal absolute top-4 right-4 text-3xl text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="mt-4">
              {articleId && getArticleContent(articleId)}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 