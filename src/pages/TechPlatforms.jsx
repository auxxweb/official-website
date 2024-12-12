
import { useEffect, useRef } from 'react'
import { motion, useAnimationControls } from 'framer-motion'

// Tech stack data organized in rows
const techRows = [
    // Row 1
    [
        { name: 'Swift', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Docker', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Kubernetes', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Python', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Ethereum', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Solana', image: '/placeholder.svg?height=50&width=50' },
        { name: 'GraphQL', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Rust', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Polygon', image: '/placeholder.svg?height=50&width=50' },
    ],
    // Row 2
    [
        { name: 'Django', image: '/placeholder.svg?height=50&width=50' },
        { name: 'TensorFlow', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Flutter', image: '/placeholder.svg?height=50&width=50' },
        { name: 'MongoDB', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Google Cloud', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Jenkins', image: '/placeholder.svg?height=50&width=50' },
        { name: 'PostgreSQL', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Redis', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Azure', image: '/placeholder.svg?height=50&width=50' },
    ],
    // Row 3
    [
        { name: 'JavaScript', image: '/placeholder.svg?height=50&width=50' },
        { name: 'React', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Angular', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Vue', image: '/placeholder.svg?height=50&width=50' },
        { name: 'TypeScript', image: '/placeholder.svg?height=50&width=50' },
        { name: 'HTML5', image: '/placeholder.svg?height=50&width=50' },
        { name: 'AWS', image: '/placeholder.svg?height=50&width=50' },
        { name: 'Node.js', image: '/placeholder.svg?height=50&width=50' },
        { name: 'CSS3', image: '/placeholder.svg?height=50&width=50' },
    ],
]

const ScrollingRow = ({ tech, direction = 1, speed = 25 }) => {
    const controls = useAnimationControls()
    const rowRef = useRef(null)

    useEffect(() => {
        const animate = async () => {
            await controls.start({
                x: direction > 0 ? '-100%' : '100%',
                transition: {
                    duration: speed,
                    ease: 'linear',
                    repeat: Infinity,
                },
            })
        }
        animate()
    }, [controls, direction, speed])

    return (
        <div className="flex overflow-hidden whitespace-nowrap">
            <motion.div
                ref={rowRef}
                className="flex gap-8 min-w-full"
                initial={{ x: direction > 0 ? '0%' : '-100%' }}
                animate={controls}
            >
                {[...tech, ...tech].map((item, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white rounded-xl p-4 shadow-lg hover:shadow-cyan-500/20 transition-shadow"
                    >
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-contain"
                        />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default function TechStack() {
    return (
        <div className="min-h-screen bg-[#111111] text-white py-20">
            <div className="max-w-7xl mx-auto px-4">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-16"
                >
                    Building digital brilliance with{' '}
                    <br />
                    <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        advanced tech
                    </span>
                </motion.h2>

                <div className="space-y-12">
                    {techRows.map((row, index) => (
                        <ScrollingRow
                            key={index}
                            tech={row}
                            direction={index % 2 ? 1 : -1}
                            speed={30 + index * 5}
                        />
                    ))}
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl text-center text-gray-400 mt-16 max-w-3xl mx-auto"
                >
                    Our team of developers have worked across multiple technologies. Let us
                    assist you in making informed technology decisions.
                </motion.p>
            </div>
        </div>
    )
}

