'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { questions as questionsHyo } from './questions_hyo';
import { questions as questionsUra } from './questions_ura';
import calculateFinalType from '../../utils/calculateType';

const questions = [...questionsHyo, ...questionsUra];

export default function QuestionsPageMobile() {
  const [currentPage, setCurrentPage] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [showAd, setShowAd] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const questionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const questionsPerPage = 1;
  const totalQuestions = questions.length;
  const totalPages = Math.ceil(totalQuestions / questionsPerPage);
  const progressPercentage = Math.round((currentPage / totalPages) * 100);

  const currentQuestions = questions.slice(
    currentPage * questionsPerPage,
    (currentPage + 1) * questionsPerPage
  );

  const isLastPage = (currentPage + 1) * questionsPerPage >= questions.length;

  const handleAnswer = (id: number, value: number) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
    setError('');

    const answeredCount = Object.keys(answers).length + 1;
    const isLast = (currentPage + 1) * questionsPerPage >= questions.length;

    if (answeredCount % 10 === 0 && !isLast) {
      setShowAd(true);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const handleContinue = () => {
    setShowAd(false);
    if (isLastPage) {
      const userAnswers: number[] = questions.map(q => answers[q.id] ?? 0);
      const type = calculateFinalType(userAnswers);
      router.push(`/result/${type}`);
    } else {
      setCurrentPage(prev => prev + 1);
    }
  };

  const renderScale = (questionId: number) => {
    const scale = [-3, -2, -1, 0, 1, 2, 3];
    const sizeMap: { [key: number]: string } = {
      '-3': 'w-12 h-12',
      '-2': 'w-10 h-10',
      '-1': 'w-8 h-8',
      '0': 'w-6 h-6',
      '1': 'w-8 h-8',
      '2': 'w-10 h-10',
      '3': 'w-12 h-12',
    };

    return (
      <div className="flex items-center justify-between gap-2 w-full">
        <span className="text-sm text-green-600">そう思う</span>
        <div className="flex gap-2 justify-center flex-grow">
          {scale.map(value => (
            <button
              key={value}
              onClick={() => handleAnswer(questionId, value)}
              className={`rounded-full border-2 transition-all duration-200 ${sizeMap[value]} 
                ${answers[questionId] === value
                  ? value > 0
                    ? 'bg-purple-300 border-purple-600'
                    : value < 0
                    ? 'bg-green-300 border-green-600'
                    : 'bg-gray-400 border-gray-600'
                  : 'bg-white border-gray-300 hover:bg-gray-100'}`}
            />
          ))}
        </div>
        <span className="text-sm text-purple-600">そう思わない</span>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-start px-4 py-8 w-full">
      <div className="w-full mb-6">
        <div className="flex flex-col gap-2 text-sm text-gray-700 mb-4">
          <div className="bg-blue-50 p-3 rounded-lg shadow">🧠 嘘偽りなく、正直に答えてください。</div>
          <div className="bg-blue-50 p-3 rounded-lg shadow">🌍 性格タイプが生活にどう影響しているのか。</div>
          <div className="bg-blue-50 p-3 rounded-lg shadow">📈 精密診断も用意しています。</div>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="text-center mt-1 text-sm text-gray-600">{progressPercentage}% 完了</p>
      </div>

      {showAd ? (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md text-center w-full">
          <p className="mb-3 text-lg font-semibold">📢 スポンサー広告（仮）</p>
          <p className="text-sm text-gray-700 mb-4">ここに広告や案内テキストが入ります</p>
          <button
            onClick={handleContinue}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-base"
          >
            {isLastPage ? '診断結果を見る' : '次へ進む'}
          </button>
        </div>
      ) : (
        <div className="w-full">
          {currentQuestions.map((q) => (
            <div
              key={q.id}
              ref={(el) => {
                questionRefs.current[q.id] = el;
              }}
              className="bg-gray-50 p-6 rounded-xl shadow mb-10 w-full"
            >
              <p className="text-xl font-semibold mb-4 text-center">{q.question}</p>
              <p className="text-sm text-gray-500 mb-4 text-center">例：{q.example}</p>
              {renderScale(q.id)}
            </div>
          ))}

          {error && <p className="text-red-500 mb-4 font-medium text-center text-sm">{error}</p>}

          <div className="flex justify-center">
            <button
              onClick={() => setCurrentPage(prev => prev + 1)}
              className="mt-4 px-8 py-3 bg-blue-500 text-white text-lg rounded hover:bg-blue-600 disabled:opacity-50"
            >
              {isLastPage ? '診断を終了する' : '次へ'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
