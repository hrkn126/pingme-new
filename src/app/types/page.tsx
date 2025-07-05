'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const categories = [
  {
    key: 'La',
    name: 'ラブ（La）',
    emoji: '💖',
    bgColor: 'bg-pink-100',
    types: [
      { code: 'LaCe', name: '愛されスター', image: '/ABC7F5DA-9F8E-4FDF-8761-13AF6BDD3C41.png' },
      { code: 'LaIn', name: '繊細キラキラ', image: '/ACB26CC0-6B64-461E-9093-1C5977299896.png' },
      { code: 'LaRo', name: '理論派アイドル', image: '/7AF7C090-BF4D-423F-9FC2-D627FE40011D.png' },
      { code: 'LaSh', name: '病みかわ芸人', image: '/A3835E41-7D09-4313-8A35-F60D4917AE93.png' },
    ],
  },
  {
    key: 'Cl',
    name: 'クール（Cl）',
    emoji: '🧊',
    bgColor: 'bg-blue-100',
    types: [
      { code: 'ClCe', name: '冷静エンパス', image: '/DE7C553F-6F3D-4409-A148-86CF22EF6953.png' },
      { code: 'ClIn', name: '分析シンパサイザー', image: '/5B0D03EF-4F71-4B4B-A629-668922F7BB81.png' },
      { code: 'ClRo', name: '論理戦士', image: '/2EFE668E-CD8C-4644-A54F-5D8A5C5D37A5.png' },
      { code: 'ClSh', name: 'クールシャドウ', image: '/1314FFFF-E086-4EBD-A212-B5506B966740.png' },
    ],
  },
  {
    key: 'St',
    name: 'ストロング（St）',
    emoji: '🔥',
    bgColor: 'bg-red-100',
    types: [
      { code: 'StCe', name: '真正直エンパス', image: '/E250C5DC-A483-488E-8CB5-B7A1073F6A70.png' },
      { code: 'StIn', name: '感情不器用さん', image: '/D557D541-ED0E-47B8-848B-3D6AFE91D89C.png' },
      { code: 'StRo', name: '頑固リアリスト', image: '/3ACE85A6-E225-49EC-81DF-29230FA4D0E0.png' },
      { code: 'StSh', name: '内に闇宿す職人肌', image: '/C00094FE-0A81-470D-A971-FF78A2CCC172.png' },
    ],
  },
  {
    key: 'Tf',
    name: 'テンダー（Tf）',
    emoji: '🌿',
    bgColor: 'bg-green-100',
    types: [
      { code: 'TfCe', name: 'お世話焼き妖精', image: '/6143A69D-7A84-42C1-9547-94FDC2D52F7B.png' },
      { code: 'TfIn', name: '他人軸共感型', image: '/B8F89B10-72B8-405F-ABC3-D6B1B540CD08.png' },
      { code: 'TfRo', name: '気づかい論理人', image: '/30AC6690-F9DB-4F86-B366-C9CDCC8DED76.png' },
      { code: 'TfSh', name: '闇抱える献身家', image: '/8A80EB75-04EE-4001-9A9F-3814CED59ABA.png' },
    ],
  },
  {
    key: 'Hu',
    name: 'ヒューマン（Hu）',
    emoji: '🌞',
    bgColor: 'bg-yellow-100',
    types: [
      { code: 'HuCe', name: '人間力おばけ', image: '/EF28701C-905B-485C-B634-A36526013D01.png' },
      { code: 'HuIn', name: '共感マスター', image: '/FD9104D5-1A63-46F9-A5F7-7F58A07471D1.png' },
      { code: 'HuRo', name: '哲学ヒューマン', image: '/184104BA-42FB-46C1-809A-CD3FFAF8B570.png' },
      { code: 'HuSh', name: '闇抱える癒し人', image: '/E61CA9C3-96AD-485E-ABCC-8269D19CD6B1.png' },
    ],
  },
  {
    key: 'Vi',
    name: 'ビジョン（Vi）',
    emoji: '💫',
    bgColor: 'bg-purple-100',
    types: [
      { code: 'ViCe', name: '理想共感派', image: '/0226197B-34EE-4491-8629-F4F663B41204.png' },
      { code: 'ViIn', name: '先読みエンパス', image: '/94EFCE5E-7DC3-4501-9E6E-8F8DD8DFF80A.png' },
      { code: 'ViRo', name: '未来型ロジック', image: '/7C51217D-E070-4A0D-924E-C26E93AD0222.png' },
      { code: 'ViSh', name: '幻想と影の人', image: '/C49F1DD2-9CE3-48EC-983A-5A83ED4F731F.png' },
    ],
  },
]

export default function TypeListPage() {
  return (
    <div className="p-0">
      {categories.map((cat) => (
        <section key={cat.key} className={`${cat.bgColor} overflow-hidden relative`}>
          {/* カテゴリ名（背景にデカく） */}
          <h2 className="absolute inset-0 hidden sm:flex items-center justify-center text-[10vw] md:text-[6vw] font-bold text-white/40 drop-shadow-lg z-0 pointer-events-none select-none">
            {cat.name}
          </h2>

          {/* カテゴリ名（スマホ用） */}
          <div className="sm:hidden px-6 pt-10">
            <h2 className="text-xl font-bold text-gray-700 flex items-center gap-2">
              <span>{cat.emoji}</span>
              {cat.name}
            </h2>
          </div>

          {/* ここで画像とコード名を縦並び＆特大表示 */}
          <div className="relative z-10 flex flex-col items-center gap-20 px-6 py-24 mt-12 sm:mt-32">
            {cat.types.map((type) => (
              <Link key={type.code} href={`/result/${type.code}`} className="group w-full max-w-md">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="flex flex-col items-center text-center cursor-pointer w-full"
                >
                  <div className="relative w-full aspect-[4/5]">
                    <Image
                      src={type.image}
                      alt={`${type.code}のキャラ画像`}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <p className="text-3xl font-extrabold mt-4 text-gray-800">{type.code}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}