'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { questions as questionsHyo } from './questions_hyo';
import { questions as questionsUra } from './questions_ura';
import calculateFinalType from '../../utils/calculateType';

const questions = [...questionsHyo, ...questionsUra];

export default function QuestionsPage() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [error, setError] = useState('');
  const router = useRouter();
  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const questionsPerPage = 5;
  const totalQuestions = questions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);
  const progressPercentage = Math.round((currentPage / totalPages) * 100);
  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );
  const isLastPage = (currentPage + 1) * questionsPerPage >= questions.length;

  const handleAnswer = (id: number, value: number, index: number) => {
    setAnswers(prev => {
      const newAnswers = { ...prev, [id]: value };
      const nextRef = questionRefs.current[index + 1];
      if (nextRef) {
        nextRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      return newAnswers;
    });
    setError('');
  };

  const handleNext = () => {
    const unanswered = currentQuestions.some(q => answers[q.id] === undefined);
    if (unanswered) {
      setError('全部答えてください');
      return;
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (isLastPage) {
      const userAnswers: number[] = questions.map(q => answers[q.id] ?? 0);
      const type = calculateFinalType(userAnswers);
      localStorage.setItem('finalType', type);
      router.push('/loading');
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-4 sm:px-6 sm:py-6 w-full">
      <div className="w-full max-w-md mb-4">
        <div className="flex flex-col gap-2 text-xs sm:text-sm font-medium text-gray-700 mb-3">
          <div className="bg-blue-50 p-2 rounded-md shadow text-left">🧠 嘘偽りなく答えて下さい</div>
          <div className="bg-blue-50 p-2 rounded-md shadow text-left">🌍 性格タイプがどのように生活に影響しているかが分かります</div>
          <div className="bg-blue-50 p-2 rounded-md shadow text-left">📈 プレミアムな精密診断結果もチェックしてみて！</div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-xs sm:text-sm text-center mt-1 text-gray-500">{progressPercentage}% 完了</p>
      </div>

      <div className="bg-yellow-100 text-yellow-900 text-xs sm:text-sm text-center font-medium p-2 rounded-md shadow mb-4 w-full max-w-md">
        ※診断結果に関わるので、直感で答えてください
      </div>

      <div className="w-full max-w-md">
        {currentQuestions.map((q, idx) => (
          <div
            key={q.id}
            ref={(el) => {
              questionRefs.current[idx] = el;
            }}
            className="bg-white py-8 border-b border-gray-200 w-full"
          >
            <p className="text-lg font-semibold mb-2 text-center text-gray-800 px-2 leading-relaxed">{q.question}</p>
            <p className="text-xs text-gray-400 mb-4 text-center">例：{q.example}</p>
            <div className="flex justify-between px-6 mb-2 text-sm font-medium">
              <span className="text-green-600">そう思う</span>
              <span className="text-purple-600">そう思わない</span>
            </div>
            <div className="flex flex-nowrap justify-center gap-2 sm:gap-3 overflow-x-auto px-2">
              {[-3, -2, -1, 0, 1, 2, 3].map(value => (
                <button
                  key={value}
                  onClick={() => handleAnswer(q.id, value, idx)}
                  className={`rounded-full border-2 transition-all duration-200 shrink-0
                    ${value === -3 || value === 3 ? 'w-16 h-16' :
                      value === -2 || value === 2 ? 'w-12 h-12' :
                      value === -1 || value === 1 ? 'w-10 h-10' : 'w-8 h-8'}
                    ${answers[q.id] === value
                      ? value > 0
                        ? 'bg-purple-300 border-purple-600'
                        : value < 0
                        ? 'bg-green-300 border-green-600'
                        : 'bg-gray-400 border-gray-600'
                      : 'bg-white border-gray-300 hover:bg-gray-100'}`}
                />
              ))}
            </div>
          </div>
        ))}

        {error && <p className="text-red-500 mb-4 font-medium text-center text-sm">{error}</p>}

        <div className="flex justify-center mt-6">
          <button
            onClick={handleNext}
            className="px-6 py-3 bg-blue-500 text-white rounded text-sm sm:text-base hover:bg-blue-600 disabled:opacity-50"
          >
            {isLastPage ? '診断を終了する' : '次へ'}
          </button>
        </div>
      </div>
    </div>
  );
}
