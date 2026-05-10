import { useEffect, useRef, useState } from 'react'
import { toBlob, toPng } from 'html-to-image'
import {
  Download,
  ImagePlus,
  Languages,
  Palette,
  Share2,
  Sparkles,
  Upload,
  UserRound,
} from 'lucide-react'

const festivals = [
  {
    id: 'ganesh',
    name: 'Ganesh Chaturthi',
    accent: '#f97316',
    glow: '#fde68a',
    symbol: 'ॐ',
    bg: 'from-orange-500 via-amber-400 to-rose-500',
    preview: 'from-orange-400 via-yellow-300 to-pink-500',
    greetings: {
      English: 'Happy Ganesh Chaturthi',
      Hindi: 'गणेश चतुर्थी की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'independence',
    name: 'Independence Day',
    accent: '#22c55e',
    glow: '#ffedd5',
    symbol: '✦',
    bg: 'from-orange-500 via-white to-emerald-500',
    preview: 'from-orange-400 via-white to-green-500',
    greetings: {
      English: 'Happy Independence Day',
      Hindi: 'स्वतंत्रता दिवस की शुभकामनाएं',
    },
  },
  {
    id: 'ram-navami',
    name: 'Ram Navami',
    accent: '#eab308',
    glow: '#fed7aa',
    symbol: 'श्री',
    bg: 'from-yellow-500 via-orange-400 to-red-500',
    preview: 'from-yellow-300 via-orange-400 to-red-500',
    greetings: {
      English: 'Happy Ram Navami',
      Hindi: 'राम नवमी की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'guru-nanak',
    name: 'Guru Nanak Jayanti',
    accent: '#38bdf8',
    glow: '#bfdbfe',
    symbol: 'ੴ',
    bg: 'from-sky-500 via-indigo-500 to-amber-300',
    preview: 'from-sky-400 via-indigo-400 to-yellow-300',
    greetings: {
      English: 'Happy Guru Nanak Jayanti',
      Hindi: 'गुरु नानक जयंती की शुभकामनाएं',
    },
  },
  {
    id: 'diwali',
    name: 'Diwali',
    accent: '#d946ef',
    glow: '#fef3c7',
    symbol: '✺',
    bg: 'from-fuchsia-600 via-purple-600 to-amber-400',
    preview: 'from-fuchsia-500 via-violet-500 to-amber-300',
    greetings: {
      English: 'Happy Diwali',
      Hindi: 'दीपावली की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'holi',
    name: 'Holi',
    accent: '#ec4899',
    glow: '#fbcfe8',
    symbol: '✽',
    bg: 'from-pink-500 via-yellow-300 to-cyan-400',
    preview: 'from-pink-400 via-yellow-300 to-sky-400',
    greetings: {
      English: 'Happy Holi',
      Hindi: 'होली की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'raksha-bandhan',
    name: 'Raksha Bandhan',
    accent: '#ef4444',
    glow: '#fecaca',
    symbol: '❋',
    bg: 'from-rose-500 via-red-400 to-yellow-300',
    preview: 'from-rose-400 via-red-400 to-amber-300',
    greetings: {
      English: 'Happy Raksha Bandhan',
      Hindi: 'रक्षाबंधन की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'janmashtami',
    name: 'Janmashtami',
    accent: '#2563eb',
    glow: '#bfdbfe',
    symbol: '♬',
    bg: 'from-blue-700 via-cyan-500 to-yellow-300',
    preview: 'from-blue-600 via-cyan-400 to-yellow-300',
    greetings: {
      English: 'Happy Janmashtami',
      Hindi: 'जन्माष्टमी की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'navratri',
    name: 'Navratri',
    accent: '#a855f7',
    glow: '#e9d5ff',
    symbol: '✧',
    bg: 'from-violet-600 via-fuchsia-500 to-orange-400',
    preview: 'from-violet-500 via-fuchsia-400 to-orange-300',
    greetings: {
      English: 'Happy Navratri',
      Hindi: 'नवरात्रि की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'eid',
    name: 'Eid',
    accent: '#14b8a6',
    glow: '#ccfbf1',
    symbol: '☾',
    bg: 'from-emerald-700 via-teal-500 to-amber-200',
    preview: 'from-emerald-600 via-teal-400 to-yellow-200',
    greetings: {
      English: 'Eid Mubarak',
      Hindi: 'ईद मुबारक',
    },
  },
  {
    id: 'christmas',
    name: 'Christmas',
    accent: '#dc2626',
    glow: '#dcfce7',
    symbol: '✶',
    bg: 'from-red-700 via-emerald-600 to-white',
    preview: 'from-red-600 via-green-500 to-white',
    greetings: {
      English: 'Merry Christmas',
      Hindi: 'क्रिसमस की शुभकामनाएं',
    },
  },
  {
    id: 'new-year',
    name: 'New Year',
    accent: '#f59e0b',
    glow: '#fef3c7',
    symbol: '✦',
    bg: 'from-slate-950 via-indigo-700 to-amber-400',
    preview: 'from-slate-800 via-indigo-600 to-amber-300',
    greetings: {
      English: 'Happy New Year',
      Hindi: 'नव वर्ष की हार्दिक शुभकामनाएं',
    },
  },
  {
    id: 'makar-sankranti',
    name: 'Makar Sankranti',
    accent: '#0ea5e9',
    glow: '#bae6fd',
    symbol: '⬁',
    bg: 'from-sky-500 via-cyan-300 to-orange-300',
    preview: 'from-sky-400 via-cyan-300 to-orange-300',
    greetings: {
      English: 'Happy Makar Sankranti',
      Hindi: 'मकर संक्रांति की शुभकामनाएं',
    },
  },
]

const languages = ['English', 'Hindi']

const posterFormats = [
  { id: 'story', label: 'Story', size: '1080 x 1920', width: 360, height: 640, exportWidth: 1080 },
  { id: 'post', label: 'Portrait', size: '1080 x 1350', width: 360, height: 450, exportWidth: 1080 },
  { id: 'square', label: 'Square', size: '1080 x 1080', width: 390, height: 390, exportWidth: 1080 },
]

const nameStyles = [
  { id: 'classic', label: 'Classic', className: 'font-black' },
  { id: 'royal', label: 'Royal', className: 'font-serif font-black' },
  { id: 'clean', label: 'Clean', className: 'font-sans font-extrabold' },
]

const avatarPositions = [
  { id: '50% 35%', label: 'Top' },
  { id: '50% 50%', label: 'Center' },
  { id: '50% 65%', label: 'Low' },
]

export default function DynamicPosters() {
  const posterRef = useRef(null)
  const [selectedFestivalId, setSelectedFestivalId] = useState(festivals[0].id)
  const [language, setLanguage] = useState('English')
  const [fullName, setFullName] = useState('')
  const [greeting, setGreeting] = useState(festivals[0].greetings.English)
  const [profileImage, setProfileImage] = useState('')
  const [isExporting, setIsExporting] = useState(false)
  const [avatarZoom, setAvatarZoom] = useState(1.08)
  const [avatarPosition, setAvatarPosition] = useState('50% 50%')
  const [formatId, setFormatId] = useState('story')
  const [nameStyleId, setNameStyleId] = useState('classic')
  const [showSparkles, setShowSparkles] = useState(true)

  const selectedFestival = festivals.find((festival) => festival.id === selectedFestivalId) || festivals[0]
  const selectedFormat = posterFormats.find((format) => format.id === formatId) || posterFormats[0]
  const selectedNameStyle = nameStyles.find((style) => style.id === nameStyleId) || nameStyles[0]
  const exportHeight = Math.round((selectedFormat.exportWidth / selectedFormat.width) * selectedFormat.height)
  const exportScale = selectedFormat.exportWidth / selectedFormat.width

  useEffect(() => {
    setGreeting(selectedFestival.greetings[language])
  }, [selectedFestival, language])

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    const reader = new FileReader()
    reader.onload = () => {
      setProfileImage(reader.result)
      setAvatarZoom(1.08)
      setAvatarPosition('50% 50%')
    }
    reader.readAsDataURL(file)
  }

  const posterOptions = {
    cacheBust: true,
    width: selectedFormat.width,
    height: selectedFormat.height,
    canvasWidth: selectedFormat.exportWidth,
    canvasHeight: exportHeight,
    pixelRatio: exportScale,
    backgroundColor: '#111827',
  }

  const getPosterBlob = async () => {
    if (!posterRef.current) return null

    return toBlob(posterRef.current, posterOptions)
  }

  const handleDownload = async () => {
    if (!posterRef.current || isExporting) return

    setIsExporting(true)

    try {
      const dataUrl = await toPng(posterRef.current, posterOptions)
      const link = document.createElement('a')
      link.download = `${selectedFestival.name.toLowerCase().replaceAll(' ', '-')}-${selectedFormat.label.toLowerCase()}-${selectedFormat.exportWidth}x${exportHeight}.png`
      link.href = dataUrl
      link.click()
    } finally {
      setIsExporting(false)
    }
  }

  const handleShare = async () => {
    if (isExporting) return

    if (!navigator.share) {
      alert('Sharing is not supported on this device. Please download the poster instead.')
      return
    }

    setIsExporting(true)

    try {
      const blob = await getPosterBlob()

      if (!blob) return

      const file = new File([blob], `${selectedFestival.name}-poster.png`, { type: 'image/png' })
      const shareData = {
        title: `${selectedFestival.name} Poster`,
        text: greeting,
        files: [file],
      }

      if (navigator.canShare?.(shareData)) {
        await navigator.share(shareData)
      } else {
        await navigator.share({
          title: `${selectedFestival.name} Poster`,
          text: greeting,
        })
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        alert('Unable to share this poster. Please download it instead.')
      }
    } finally {
      setIsExporting(false)
    }
  }

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-6 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(360px,460px)] xl:grid-cols-[minmax(0,1.08fr)_minmax(420px,500px)]">
        <div className="space-y-5">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl sm:p-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Personalized Festival Poster Generator
                </div>
                <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
                  Create a premium festival story poster
                </h1>
              </div>

              <div className="flex rounded-2xl border border-white/10 bg-slate-900/80 p-1 shadow-lg">
                {languages.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setLanguage(item)}
                    className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition ${
                      language === item
                        ? 'bg-white text-slate-950 shadow-md'
                        : 'text-white/70 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Languages className="h-4 w-4" />
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl sm:p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Festival Template</h2>
              <span className="text-sm text-white/60">{selectedFestival.name}</span>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {festivals.map((festival) => {
                const isActive = selectedFestival.id === festival.id

                return (
                  <button
                    key={festival.id}
                    type="button"
                    onClick={() => setSelectedFestivalId(festival.id)}
                    className={`group relative overflow-hidden rounded-2xl border p-4 text-left shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-[1.02] ${
                      isActive ? 'border-white bg-white/20 ring-2 ring-white/60' : 'border-white/10 bg-white/10'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${festival.preview} opacity-90`} />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.9),transparent_30%),linear-gradient(180deg,transparent,rgba(15,23,42,0.65))]" />
                    <div className="relative min-h-28">
                      <div className="mb-10 flex justify-end">
                        <span className="grid h-12 w-12 place-items-center rounded-full border border-white/40 bg-white/25 text-xl font-bold shadow-lg backdrop-blur">
                          {festival.symbol}
                        </span>
                      </div>
                      <p className="text-lg font-bold text-white drop-shadow">{festival.name}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
              <h2 className="mb-4 text-xl font-semibold">Profile Image</h2>
              <div className="flex flex-col items-center gap-4">
                <div className="relative grid h-32 w-32 place-items-center rounded-full bg-gradient-to-br from-white via-amber-100 to-white p-1 shadow-xl">
                  <div className="h-full w-full overflow-hidden rounded-full bg-slate-900">
                    {profileImage ? (
                      <img
                        src={profileImage}
                        alt="Profile preview"
                        className="h-full w-full object-cover"
                        style={{
                          objectPosition: avatarPosition,
                          transform: `scale(${avatarZoom})`,
                          transformOrigin: 'center',
                        }}
                      />
                    ) : (
                      <div className="grid h-full w-full place-items-center">
                        <UserRound className="h-14 w-14 text-white/55" />
                      </div>
                    )}
                  </div>
                </div>

                <label className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:scale-[1.02] hover:bg-amber-100">
                  <Upload className="h-4 w-4" />
                  Upload Image
                  <input type="file" accept="image/*" onChange={handleImageUpload} className="sr-only" />
                </label>

                <div className="w-full space-y-3 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
                  <label className="block">
                    <span className="mb-2 flex items-center justify-between text-sm font-medium text-white/75">
                      Image zoom
                      <span>{Math.round(avatarZoom * 100)}%</span>
                    </span>
                    <input
                      type="range"
                      min="1"
                      max="1.8"
                      step="0.01"
                      value={avatarZoom}
                      onChange={(event) => setAvatarZoom(Number(event.target.value))}
                      className="w-full accent-amber-300"
                    />
                  </label>

                  <div className="grid grid-cols-3 gap-2">
                    {avatarPositions.map((position) => (
                      <button
                        key={position.id}
                        type="button"
                        onClick={() => setAvatarPosition(position.id)}
                        className={`rounded-xl px-3 py-2 text-xs font-bold transition ${
                          avatarPosition === position.id
                            ? 'bg-white text-slate-950'
                            : 'bg-white/10 text-white/70 hover:bg-white/15 hover:text-white'
                        }`}
                      >
                        {position.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
              <h2 className="mb-4 text-xl font-semibold">Poster Details</h2>
              <div className="space-y-4">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white/75">Full Name</span>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(event) => setFullName(event.target.value)}
                    placeholder="Enter your name"
                    className="w-full rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/15"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-white/75">Greeting Message</span>
                  <textarea
                    value={greeting}
                    onChange={(event) => setGreeting(event.target.value)}
                    rows="3"
                    className="w-full resize-none rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-white outline-none transition placeholder:text-white/35 focus:border-amber-300 focus:ring-4 focus:ring-amber-300/15"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/10 p-5 shadow-xl backdrop-blur-xl">
            <div className="mb-4 flex items-center gap-2">
              <Palette className="h-5 w-5 text-amber-300" />
              <h2 className="text-xl font-semibold">Advanced Poster Options</h2>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <span className="mb-2 block text-sm font-medium text-white/75">Poster size</span>
                <div className="grid gap-2">
                  {posterFormats.map((format) => (
                    <button
                      key={format.id}
                      type="button"
                      onClick={() => setFormatId(format.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        formatId === format.id
                          ? 'border-white bg-white text-slate-950'
                          : 'border-white/10 bg-slate-950/45 text-white/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className="block text-sm font-bold">{format.label}</span>
                      <span className="text-xs opacity-70">{format.size}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-white/75">Name style</span>
                <div className="grid gap-2">
                  {nameStyles.map((style) => (
                    <button
                      key={style.id}
                      type="button"
                      onClick={() => setNameStyleId(style.id)}
                      className={`rounded-2xl border px-4 py-3 text-left transition ${
                        nameStyleId === style.id
                          ? 'border-white bg-white text-slate-950'
                          : 'border-white/10 bg-slate-950/45 text-white/75 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span className={`text-sm ${style.className}`}>{style.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <span className="mb-2 block text-sm font-medium text-white/75">Decorations</span>
                <button
                  type="button"
                  onClick={() => setShowSparkles((value) => !value)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                    showSparkles
                      ? 'border-white bg-white text-slate-950'
                      : 'border-white/10 bg-slate-950/45 text-white/75 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-sm font-bold">Festive sparkles</span>
                  <span className="text-xs font-bold">{showSparkles ? 'ON' : 'OFF'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <aside className="lg:sticky lg:top-6 lg:self-start">
          <div className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-xl backdrop-blur-xl sm:p-5">
            <div className="mb-4 flex items-center justify-between gap-3">
              <h2 className="text-xl font-semibold">Live Preview</h2>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
                {selectedFormat.size}
              </span>
            </div>

            <div className="overflow-x-auto pb-1">
              <div
                ref={posterRef}
                className={`relative mx-auto overflow-hidden rounded-2xl bg-gradient-to-br ${selectedFestival.bg} shadow-2xl transition duration-500`}
                style={{
                  width: selectedFormat.width,
                  height: selectedFormat.height,
                }}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(255,255,255,0.9),transparent_22%),radial-gradient(circle_at_85%_18%,rgba(255,255,255,0.45),transparent_18%),linear-gradient(180deg,rgba(15,23,42,0.05),rgba(15,23,42,0.78))]" />
                <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/35 to-transparent" />
                <div className="absolute -left-14 top-24 h-40 w-40 rounded-full bg-white/20 blur-2xl" />
                <div className="absolute -right-16 bottom-40 h-52 w-52 rounded-full bg-amber-200/25 blur-3xl" />
                {showSparkles && (
                  <>
                    <span className="absolute left-9 top-36 text-2xl text-white/70">✦</span>
                    <span className="absolute right-12 top-52 text-lg text-white/70">✧</span>
                    <span className="absolute bottom-52 left-12 text-xl text-white/60">✺</span>
                  </>
                )}

                <div className="absolute left-5 right-5 top-5 flex items-center justify-between">
                  <div className="rounded-full border border-white/35 bg-white/20 px-4 py-2 text-xs font-bold uppercase text-white shadow-lg backdrop-blur">
                    {selectedFestival.name}
                  </div>
                  <div
                    className="grid h-14 w-14 place-items-center rounded-full border border-white/40 bg-white/25 text-2xl font-black text-white shadow-xl backdrop-blur"
                    style={{ color: selectedFestival.glow }}
                  >
                    {selectedFestival.symbol}
                  </div>
                </div>

                <div className="absolute inset-x-7 top-[19%] text-center">
                  <div className="mx-auto mb-5 grid h-28 w-28 place-items-center rounded-full bg-gradient-to-br from-white via-amber-100 to-white p-1.5 shadow-2xl">
                    <div className="h-full w-full overflow-hidden rounded-full bg-slate-900/80">
                      {profileImage ? (
                        <img
                          src={profileImage}
                          alt="Poster profile"
                          className="h-full w-full object-cover"
                          style={{
                            objectPosition: avatarPosition,
                            transform: `scale(${avatarZoom})`,
                            transformOrigin: 'center',
                          }}
                        />
                      ) : (
                        <div className="grid h-full w-full place-items-center">
                          <ImagePlus className="h-11 w-11 text-white/70" />
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm font-semibold uppercase text-white/80">Best wishes from</p>
                  <h3 className={`mt-2 break-words text-3xl leading-tight text-white drop-shadow-lg sm:text-4xl ${selectedNameStyle.className}`}>
                    {fullName.trim() || 'Your Name'}
                  </h3>
                </div>

                <div className="absolute inset-x-6 bottom-24 rounded-2xl border border-white/20 bg-slate-950/25 p-5 text-center shadow-2xl backdrop-blur-md">
                  <p className="break-words text-3xl font-black leading-tight text-white drop-shadow-lg">
                    {greeting}
                  </p>
                  <div
                    className="mx-auto mt-4 h-1.5 w-24 rounded-full"
                    style={{ backgroundColor: selectedFestival.accent }}
                  />
                </div>

                <div className="absolute inset-x-6 bottom-6 flex items-center justify-center gap-3 text-white/90">
                  <span className="h-px flex-1 bg-white/35" />
                  <span className="text-sm font-semibold">Celebrate with joy</span>
                  <span className="h-px flex-1 bg-white/35" />
                </div>
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={handleDownload}
                disabled={isExporting}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-slate-950 shadow-xl transition hover:scale-[1.02] hover:bg-amber-100 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Download className="h-5 w-5" />
                Download
              </button>
              <button
                type="button"
                onClick={handleShare}
                disabled={isExporting}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/15 px-4 py-3 text-sm font-bold text-white shadow-xl transition hover:scale-[1.02] hover:bg-white/25 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}
