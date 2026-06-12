'use client'

import { useState, useEffect } from 'react'
import { Star, BookOpen, Gamepad2, Monitor } from 'lucide-react'
import FadeIn from './FadeIn'

/* ── Tabs ── */
const tabs = [
  { id: 'anime',   label: 'Anime',   emoji: '📺' },
  { id: 'reading', label: 'Reading', emoji: '📚' },
  { id: 'games',   label: 'Games',   emoji: '🎮' },
]

/* ── Anime ── */
const animeData = [
  { title: 'One Piece',           jikanQ: 'One Piece',                       genre: ['Adventure', 'Action'],          desc: "Been watching since I was a kid and it never gets old. Luffy's crew, the world building, the emotional payoffs. Nothing comes close.",                        gradient: 'from-red-500 to-orange-500',    initial: 'OP'  },
  { title: 'Bleach',              jikanQ: 'Bleach',                           genre: ['Action', 'Supernatural'],       desc: "The sword fights, the soundtrack, the arcs. Ichigo's story as a Soul Reaper is genuinely what got me into anime seriously.",                               gradient: 'from-slate-600 to-slate-800',   initial: 'B'   },
  { title: 'Naruto',              jikanQ: 'Naruto',                           genre: ['Action', 'Ninja'],              desc: 'Grew up with this one. Every rewatch still gives the same feeling, especially the moments you already know are coming.',                                  gradient: 'from-orange-400 to-yellow-500', initial: 'N'   },
  { title: 'Nippon Sangoku',      jikanQ: '日本三國',                          genre: ['Historical', 'Drama'],          desc: "Japan's Three Kingdoms retold in a way I genuinely did not expect. Great production and the political drama actually keeps you thinking between episodes.", gradient: 'from-red-700 to-red-900',       initial: 'NS'  },
  { title: 'Vinland Saga',        jikanQ: 'Vinland Saga',                    genre: ['Historical', 'Drama'],          desc: "Started watching for the action, stayed for Thorfinn's arc. One of the best character journeys I've seen in any anime.",                                  gradient: 'from-sky-600 to-indigo-800',   initial: 'VS'  },
  { title: 'Fullmetal Alchemist', jikanQ: 'Fullmetal Alchemist Brotherhood', genre: ['Action', 'Drama', 'Adventure'], desc: "Two brothers lose everything chasing one stone. The story is tight, the payoff is real. Brotherhood is the kind of anime you recommend to everyone.",    gradient: 'from-yellow-600 to-amber-800',  initial: 'FMA' },
]

/* ── Reading ── */
type ReadingItem =
  | { type: 'manhwa'; title: string; kitsuQ: string; genre: string[]; desc: string; gradient: string; initial: string; status: string }
  | { type: 'book';   title: string; author: string; olQ: string;    genre: string[]; desc: string; gradient: string; initial: string }

const readingData: ReadingItem[] = [
  {
    type: 'manhwa', title: 'Nano Machine', kitsuQ: 'Nano Machine',
    genre: ['Action', 'Martial Arts', 'Sci-Fi'],
    desc: 'Future tech meets martial arts. The MC gets nano machines from a descendant and just starts climbing from the bottom up. Super satisfying read.',
    gradient: 'from-cyan-500 to-blue-700', initial: 'NM', status: 'Ongoing',
  },
  {
    type: 'manhwa', title: 'Solo Leveling', kitsuQ: 'Solo Leveling',
    genre: ['Action', 'Fantasy', 'RPG'],
    desc: "Sung Jinwoo starts out as literally the weakest hunter and somehow ends up at the top. The power progression is addictive and the art is clean.",
    gradient: 'from-violet-600 to-purple-900', initial: 'SL', status: 'Completed',
  },
  {
    type: 'manhwa', title: 'Study Group', kitsuQ: 'Study Group manhwa',
    genre: ['Action', 'School', 'Comedy'],
    desc: 'This one is actually funny. A bottom-ranked student just beats up delinquents and forces them into a study group. Somehow it works and somehow it gets hype.',
    gradient: 'from-emerald-500 to-teal-700', initial: 'SG', status: 'Ongoing',
  },
  {
    type: 'book', title: 'Thus Spoke Zarathustra', author: 'Friedrich Nietzsche',
    olQ: 'thus spoke zarathustra nietzsche',
    genre: ['Philosophy', 'Classic'],
    desc: "Nietzsche at his most poetic. Zarathustra comes down from the mountains with ideas on life, morality and what it really means to be human. Dense but worth every page.",
    gradient: 'from-stone-600 to-stone-900', initial: 'TSZ',
  },
  {
    type: 'book', title: 'Beyond Good and Evil', author: 'Friedrich Nietzsche',
    olQ: 'beyond good and evil nietzsche',
    genre: ['Philosophy', 'Ethics'],
    desc: "Nietzsche basically picks apart everything philosophers before him built and asks why we even accept it. Uncomfortable in a good way. Changes how you see a lot of things.",
    gradient: 'from-zinc-600 to-zinc-900', initial: 'BGE',
  },
]

/* ── Games ── */
const gameData = [
  {
    title: 'Dota 2',
    genre: ['MOBA', 'Strategy'],
    platform: 'PC',
    status: 'Playing',
    statusColor: 'bg-green-100 text-green-700',
    desc: "The kind of game that punishes you for every mistake and still pulls you back. 100+ heroes and no two games are ever the same.",
    gradient: 'from-red-800 to-slate-900',
    initial: 'D2',
    coverUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/570/header.jpg',
  },
  {
    title: 'Valorant',
    genre: ['FPS', 'Tactical'],
    platform: 'PC',
    status: 'Playing',
    statusColor: 'bg-green-100 text-green-700',
    desc: "Tight gunplay, agent abilities, and rounds that feel like chess matches. More fun when you have a good team but solo queue is still a ride.",
    gradient: 'from-red-500 to-pink-900',
    initial: 'VAL',
    coverUrl: null,
  },
  {
    title: 'EA FC',
    genre: ['Sports', 'Football'],
    platform: 'PC · Console',
    status: 'Playing',
    statusColor: 'bg-green-100 text-green-700',
    desc: "Football is football. Ultimate Team is the addictive part even though I know exactly what it is. Still boot it up every weekend.",
    gradient: 'from-blue-700 to-slate-900',
    initial: 'FC',
    coverUrl: null,
  },
  {
    title: "Baldur's Gate 3",
    genre: ['RPG', 'Fantasy', 'Turn-Based'],
    platform: 'PC',
    status: 'On Break',
    statusColor: 'bg-amber-100 text-amber-700',
    desc: "One of the most ambitious RPGs ever made. The writing, the choices, the consequences. I'm on a break but this game is not finished with me.",
    gradient: 'from-purple-900 to-slate-950',
    initial: 'BG3',
    coverUrl: 'https://cdn.akamai.steamstatic.com/steam/apps/1086940/header.jpg',
  },
]

/* ── API helpers ── */
async function fetchJikanImage(query: string): Promise<string | null> {
  try {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(query)}&limit=1`)
    const data = await res.json()
    return data.data?.[0]?.images?.jpg?.large_image_url ?? null
  } catch { return null }
}

async function fetchKitsuImage(query: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://kitsu.io/api/edge/manga?filter[text]=${encodeURIComponent(query)}&page[limit]=1`,
      { headers: { Accept: 'application/vnd.api+json' } }
    )
    const data = await res.json()
    return data.data?.[0]?.attributes?.posterImage?.medium ?? null
  } catch { return null }
}

async function fetchOpenLibraryCover(query: string): Promise<string | null> {
  try {
    const res = await fetch(`https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=1`)
    const data = await res.json()
    const coverId = data.docs?.[0]?.cover_i
    if (!coverId) return null
    return `https://covers.openlibrary.org/b/id/${coverId}-L.jpg`
  } catch { return null }
}

/* ── Component ── */
export default function Hobbies() {
  const [activeTab, setActiveTab]         = useState('anime')
  const [animeImages, setAnimeImages]     = useState<Record<string, string>>({})
  const [readingImages, setReadingImages] = useState<Record<string, string>>({})
  const [loadingAnime, setLoadingAnime]   = useState(true)
  const [loadingReading, setLoadingReading] = useState(true)

  useEffect(() => {
    const key = 'hb-anime-v2'
    const cached = sessionStorage.getItem(key)
    if (cached) { setAnimeImages(JSON.parse(cached)); setLoadingAnime(false); return }
    ;(async () => {
      const results: Record<string, string> = {}
      for (const a of animeData) {
        const url = await fetchJikanImage(a.jikanQ)
        if (url) results[a.title] = url
        await new Promise((r) => setTimeout(r, 400))
      }
      setAnimeImages(results)
      setLoadingAnime(false)
      try { sessionStorage.setItem(key, JSON.stringify(results)) } catch {}
    })()
  }, [])

  useEffect(() => {
    const key = 'hb-reading-v2'
    const cached = sessionStorage.getItem(key)
    if (cached) { setReadingImages(JSON.parse(cached)); setLoadingReading(false); return }
    ;(async () => {
      const results: Record<string, string> = {}
      for (const item of readingData) {
        let url: string | null = null
        if (item.type === 'manhwa') url = await fetchKitsuImage(item.kitsuQ)
        else                        url = await fetchOpenLibraryCover(item.olQ)
        if (url) results[item.title] = url
        await new Promise((r) => setTimeout(r, 300))
      }
      setReadingImages(results)
      setLoadingReading(false)
      try { sessionStorage.setItem(key, JSON.stringify(results)) } catch {}
    })()
  }, [])

  return (
    <section id="hobbies" className="py-28 bg-white">
      <div className="section-container">

        <FadeIn>
          <div className="text-center mb-10">
            <div className="text-xs font-extrabold text-blue-600 mb-3 uppercase tracking-[0.18em]">Personal</div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900">
              Life Beyond <span className="gradient-text">Data</span>
            </h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto leading-relaxed text-[15px]">
              When I&apos;m not building pipelines or writing SQL, you&apos;ll find me here.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex gap-6 md:gap-8 border-b border-slate-200 mb-10 overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`tab-btn flex items-center gap-2 ${activeTab === tab.id ? 'active' : ''}`}>
                <span>{tab.emoji}</span>{tab.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* ── ANIME ── */}
        {activeTab === 'anime' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {animeData.map((item, i) => {
              const imgUrl = animeImages[item.title]
              const shimmer = loadingAnime && !imgUrl
              return (
                <FadeIn key={item.title} delay={i * 80}>
                  <div className="card rounded-2xl overflow-hidden flex flex-col group h-full">
                    <div className="relative h-52 flex-shrink-0 overflow-hidden">
                      {shimmer ? (
                        <div className="shimmer-bg w-full h-full" />
                      ) : imgUrl ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imgUrl} alt={item.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                          <div className="absolute bottom-3 left-4 right-4">
                            <h3 className="font-extrabold text-white text-lg drop-shadow leading-tight">{item.title}</h3>
                          </div>
                        </>
                      ) : (
                        <div className={`bg-gradient-to-br ${item.gradient} w-full h-full flex items-center justify-center`}>
                          <span className="text-5xl font-black text-white/20 absolute select-none">{item.initial}</span>
                          <span className="text-4xl font-black text-white z-10">{item.initial}</span>
                        </div>
                      )}
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      {!imgUrl && !shimmer && <h3 className="font-extrabold text-slate-900 mb-2">{item.title}</h3>}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.genre.map((g) => (
                          <span key={g} className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{g}</span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed flex-1">{item.desc}</p>
                      <div className="flex items-center gap-0.5 mt-3">
                        {[1,2,3,4,5].map((s) => <Star key={s} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}

        {/* ── READING ── */}
        {activeTab === 'reading' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {readingData.map((item, i) => {
              const imgUrl = readingImages[item.title]
              const shimmer = loadingReading && !imgUrl
              const isBook = item.type === 'book'
              return (
                <FadeIn key={item.title} delay={i * 80}>
                  <div className="card rounded-2xl overflow-hidden flex flex-col group h-full">
                    <div className="relative flex-shrink-0 overflow-hidden" style={{ height: isBook ? '220px' : '200px' }}>
                      {shimmer ? (
                        <div className="shimmer-bg w-full h-full" />
                      ) : imgUrl ? (
                        <>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={imgUrl} alt={item.title}
                            className={`w-full h-full group-hover:scale-105 transition-transform duration-500 ${isBook ? 'object-contain bg-slate-100 p-2' : 'object-cover'}`} />
                          {!isBook && <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />}
                          {!isBook && (
                            <div className="absolute bottom-3 left-4 right-4">
                              <h3 className="font-extrabold text-white text-base drop-shadow leading-tight">{item.title}</h3>
                            </div>
                          )}
                        </>
                      ) : (
                        <div className={`bg-gradient-to-br ${item.gradient} w-full h-full flex items-center justify-center`}>
                          {isBook && <BookOpen className="w-10 h-10 text-white/50 absolute" />}
                          <span className="text-3xl font-black text-white z-10">{item.initial}</span>
                        </div>
                      )}
                      <div className="absolute top-3 right-3">
                        <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full ${
                          isBook ? 'bg-stone-800/80 text-amber-300' : 'bg-blue-600/80 text-white'
                        } backdrop-blur-sm`}>
                          {isBook ? '📖 Book' : '📕 Manhwa'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="font-extrabold text-slate-900 mb-0.5 leading-tight">{item.title}</h3>
                      {isBook && <p className="text-xs text-blue-600 font-bold mb-2">{item.author}</p>}
                      {'status' in item && (
                        <span className="inline-block mb-2 text-[10px] font-extrabold bg-green-100 text-green-700 px-2 py-0.5 rounded-full w-fit">
                          {item.status}
                        </span>
                      )}
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {item.genre.map((g) => (
                          <span key={g} className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{g}</span>
                        ))}
                      </div>
                      <p className="text-sm text-slate-500 leading-relaxed flex-1">{item.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        )}

        {/* ── GAMES ── */}
        {activeTab === 'games' && (
          <div className="grid sm:grid-cols-2 gap-5">
            {gameData.map((game, i) => (
              <FadeIn key={game.title} delay={i * 80}>
                <div className="card rounded-2xl overflow-hidden flex flex-col group h-full">
                  {/* Cover */}
                  <div className="relative h-44 flex-shrink-0 overflow-hidden">
                    {game.coverUrl ? (
                      <>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={game.coverUrl}
                          alt={game.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      </>
                    ) : (
                      <div className={`bg-gradient-to-br ${game.gradient} w-full h-full flex items-center justify-center`}>
                        <Gamepad2 className="w-10 h-10 text-white/20 absolute" />
                        <span className="text-4xl font-black text-white z-10">{game.initial}</span>
                      </div>
                    )}

                    {/* Title overlay */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                      <h3 className="font-extrabold text-white text-lg drop-shadow leading-tight">{game.title}</h3>
                      <span className={`text-[10px] font-extrabold px-2 py-1 rounded-full ${game.statusColor} backdrop-blur-sm flex-shrink-0`}>
                        {game.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex flex-wrap gap-1.5">
                        {game.genre.map((g) => (
                          <span key={g} className="text-[11px] font-bold bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">{g}</span>
                        ))}
                      </div>
                      <span className="flex items-center gap-1 text-[11px] text-slate-400 font-semibold flex-shrink-0 ml-2">
                        <Monitor className="w-3 h-3" />{game.platform}
                      </span>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed flex-1">{game.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        )}

      </div>
    </section>
  )
}
